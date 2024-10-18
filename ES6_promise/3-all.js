import { uploadPhoto } from "./utils.js";
import { createUser } from "./utils.js";

export default function handleProfileSignup() {
    Promise.all([uploadPhoto(), createUser()]).then((values) => {
        console.log(values[0].body, values[1].firstName, values[1].lastName);
    }).catch((error) => {
        console.log("Signup system offline");
    });
};