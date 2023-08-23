import axios from "axios";
import bcrypt from "bcryptjs";

const url = "https://uiux-expert.de/movies/php/";


export async function addUser(name, email, password) {
    const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync());
    console.log(hashedPassword);
    try {
        let fData = new FormData();
        fData.append('name', name);
        fData.append('email', email);
        fData.append('password', hashedPassword);

        const result = await axios.post(`${url}add_user.php`, fData)
            .then(response => JSON.parse(response.data));

        console.log("res", result)
        return result;
    } catch (error) {
        return error.toString();
    }
}

