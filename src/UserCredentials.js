import axios from 'axios';

class UserCredentials {
    constructor(url = 'https://socialapp-api.herokuapp.com/docs/#/Users/createUser', client = axios.create()){
        this.url = url;
        this.client = client;
    }
    getCredentials(){
        return this.client.get(this.url);
    }
}

export default UserCredentials