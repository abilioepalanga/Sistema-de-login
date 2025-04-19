import axios from 'axios';


export default class UserService {
    constructor() {
        this.api = axios.create({
            baseURL: process.env.REACT_APP_API_LOGIN        });
    }