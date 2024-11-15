export default function getStudentIdsSum(students) {
  return students.map((e) => e.id).reduce((acc, cur) => acc + cur);
}
