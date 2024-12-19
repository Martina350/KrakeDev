import { View, StyleSheet, Text } from 'react-native'
import { Input, Button, Icon } from '@rneui/base'
import { useState } from 'react'
import { saveGrade } from '../services/GradeServices'

export const GradeForm = () => {
    const [subject, setSubject] = useState();
    const [grade, setGrade] = useState();
    const save = () => {
        saveGrade({ subject: subject, grade: grade });
    }

    return <View style={styles.container}>
        <Input
            value={subject}
            onChange={setSubject}
            placeholder='Ejemplo Matemaricas'
            label="Materia"
        />
        <Input
            value={grade}
            onChange={setGrade}
            placeholder='0-10'
            label="Nota"
        />
        <Button
            title="Guardar"
            icon={{
                name: 'save',
                type: "entypo",
                color: 'white'
            }}
            buttonStyle={styles.saveButton}
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
    saveButton: {
        backgroundColor: 'green'
    }
});
