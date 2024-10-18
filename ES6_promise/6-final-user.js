import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, filename) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(filename)])
    .then((listRes) => listRes.map((e) => (e.reason != null
      ? { status: e.status, value: e.reason.toString() }
      : e)));
}
