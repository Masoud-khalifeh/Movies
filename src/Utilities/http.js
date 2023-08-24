import axios from "axios";
import bcrypt from "bcryptjs";

const url = "https://uiux-expert.de/movies/php/";


export async function addUser(name, email, password) {
    const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync());
    try {
        let fData = new FormData();
        fData.append('name', name);
        fData.append('email', email);
        fData.append('password', hashedPassword);

        const result = await axios.post(`${url}add_user.php`, fData)
            .then(response => response.data);
        return result;
    } catch (error) {
        return error.toString();
    }
}

