import { View, Text, StyleSheet, Alert } from "react-native"
import { Input, Button } from '@rneui/base'
import { useState } from "react"
import { saveGrade, updateGrade } from '../services/GradesServices'

export const GradeForms = ({ navigation, route }) => {
  let isNew = true;
  let subjectR;
  let gradeR;
  
  if (route.params.notita != null) {
    isNew = false;
  }

  if (!isNew) {
    subjectR=route.params.notita.subject;
    gradeR=route.params.notita.calificacion;
  }

  const [subject, setSubject] = useState(subjectR);
  const [grade, setGrade] = useState(gradeR==null?null:gradeR+"");
  const [errorSubject, setErrorsubject] = useState();
  const [errorGrade, setErrorgrade] = useState();
  const hasError = false;

  const save = () => {
    setErrorgrade(null);
    setErrorsubject(null);
    validate();
    if (!hasError) {
      if(isNew){
        saveGrade({ subject: subject, calificacion: grade });
      }else{
        updateGrade({ subject: subject, calificacion: grade });
      }
      navigation.goBack('ListGradesNav');
      route.params.fnrefrescar();
    }
  }

  const validate = () => {
    if (subject == null || subject == "") {
      setErrorsubject('Debe ingresar una materia');
      hasError = true
    }

    let gradeFloat = parseFloat(grade);
    if (gradeFloat == null || isNaN(gradeFloat) || gradeFloat < 0 || gradeFloat > 10) {
      setErrorgrade('Debe ingresar una nota entre 0 y 10');
      hasError = true
    }
  }

  return <View style={styles.container}>
    <Input
      value={subject}
      onChangeText={setSubject}
      placeholder="Ejemplo: Matematica"
      label="Materia"
      errorMessage={errorSubject}
      disabled={!isNew}
    />
    <Input
      value={grade}
      onChangeText={setGrade}
      placeholder="0-10"
      label="Nota"
      errorMessage={errorGrade}
    />
    <Button
      title='GUARDAR'
      icon={{
        name: 'save',
        type: "entypo",
        color: 'white'
      }}
      buttonStyle={{
        backgroundColor: 'green'
      }}
      onPress={save}
    />
  </View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
