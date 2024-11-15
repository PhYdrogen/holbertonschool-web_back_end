export default function getStudentsByLocation(students, location) {
  return students.filter((students) => students.location === location);
}
