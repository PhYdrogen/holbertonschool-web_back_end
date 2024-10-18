import signUpUser from "./4-user-promise.js";
import uploadPhoto from "./5-photo-reject.js";

export default function handleProfileSignup(firstName, lastName, filename) {
    return Promise.all([signUpUser(firstName, lastName), uploadPhoto(filename)]).then((value) => {
        // console.log(value);
    }).catch((error) => {
        // console.error(error);
    });
}