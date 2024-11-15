export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((student) => student.location === city).map((student) => {
    const k = newGrades.filter((grade) => grade.studentId === student.id);
    if (k.length > 0) {
      return { ...student, grade: k[0].grade };
    }
    return { ...student, grade: 'N/A' };
  });
}
