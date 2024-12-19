let grades = [
    { subject: 'Matematicas', calificacion: 9.5 },
    { subject: 'Fisica', calificacion: 9.2 },
];

export const saveGrade = (grader) => {
    grades.push(grader);
    // console.log('Arreglo', grades);
}

export const getGrades = () => {
    return grades;
}

export const updateGrade = (nota) => {
    let gradeRetrieved = find(nota.subject);
    if (gradeRetrieved != null) {
        gradeRetrieved.calificacion = nota.calificacion;
    }
    console.log('arreglo editado', grades);
}

const find = (subject) => {
    for (let i = 0; i < grades.length; i++) {
        if (grades[i].subject == subject) {
            return grades[i];
        }
    }
    return null;
}