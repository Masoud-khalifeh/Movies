import axios from "axios";

const url="https://uiux-expert.de/movies/php/"


export async function addUser(name, email, password) {
    try {
        let fData = new FormData();
        fData.append('name', name);
        fData.append('email', email);
        fData.append('password', password);

        const result = await axios.post(`${url}add_user.php`, fData)
        .then(response => JSON.parse(response.data));
        
        console.log("res",result)
        return result;
    } catch (error) {
        return error.toString();
    }
}

