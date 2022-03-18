import axios from 'axios';
import LocalStorage from './LocalStorage';

class ApiClient{
    constructor(){
        this.api = axios.create({
            baseURL: 'https://vsserver.ccml.it',
            responseType: 'json'
        });
        this.storage = new LocalStorage();
        this.storage.getToken().then(token =>{
            axios.defaults.headers.get['Authorization']=`Bearer ${token}`;
        })
    }

    async getCameras(){
        return (await this.api.get('/cameras')).data;
    }
    
    async getRecordedVideos(){
        let result =(await this.api.get('/video')).data;
        result = result.sort(this.sortVideo);
        return result;
    }

    async login(username, password){
        return (await this.api.post('/login',{username: username, password: password})).data;
    }

    sortVideo(a, b){
        if(a == null || b== null) return 0;
        let dateA = new Date(a.date);
        let dateB = new Date(b.date);
        dateA.setHours(a.time.split('-').shift().trim().split(':').shift());
        dateB.setHours(b.time.split('-').shift().trim().split(':').shift());
        if(dateA.getTime() > dateB.getTime()) return -1;
        else if(dateA.getTime() < dateB.getTime()) return 1;
        return 0;
    }
}

const apiClient = new ApiClient();
export default apiClient;

