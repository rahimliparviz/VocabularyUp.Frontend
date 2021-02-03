import axios from "axios";
import router from '../router/index'
import Notification from '../helpers/Notification'
import camelcaseKeys from 'camelcase-keys'


// axios.defaults.baseURL ='/api';
axios.defaults.baseURL ='http://localhost:5000/api';

// axios.interceptors.request.use((config) => {
//     const token = window.localStorage.getItem('token');
//     if (token) config.headers.Authorization = `Bearer ${token}`;
//     return config;
// }, error => {
//     return Promise.reject(error);
// })


axios.interceptors.response.use(undefined, error => {

    if (error.message === 'Network Error' && !error.response) {
        Notification.error('Network error - make sure API is running!',2000)
    }
    const {status, data, config,headers} = error.response;
    
   
    if (status === 400) {
        data.errors = camelcaseKeys(data.errors)
    }
    if (status === 404) {
        router.push('/notfound')
    }
    if (status === 401) {
        Notification.warning('Password or mail is invalid',2000)
    }
    if (status === 401 && headers['www-authenticate'] === 'Bearer error="invalid_token", error_description="The token is expired"') {
        window.localStorage.removeItem('jwt');
        router.push('/')
        Notification.warning('Your session has expired, please login again',2000)
      }
    // if (status === 400 && config.method === 'get' && data.errors.hasOwnProperty('id')) {
        if (status === 400 && config.method === 'get' && data.errors) {
        router.push('/notfound')
    }
    if (status === 500) {
        Notification.warning('Server error - check the terminal for more info!',2000)
    }
    throw error.response;
})

const responseBody = (response)=>response.data;


const requests = {
    get: (url)=> axios.get(url).then(responseBody),
    getWithParams: (url,body)=> axios.get(url, {params:body}).then(responseBody),
    post: (url,body)=> axios.post(url,body).then(responseBody),
    put: (url,body)=> axios.put(url,body).then(responseBody),
    del: (url)=> axios.delete(url).then(responseBody),
    postForm: (url, file) => {
        let formData = new FormData();
        formData.append('File', file);
        return axios.post(url, formData, {
            headers: {'Content-type': 'multipart/form-data'}
        }).then(responseBody)
    }
}

const Language = {
    list: () => requests.get(`/language`),
    // details: (id) => requests.get(`/employees/${id}`),
    create: (language) => requests.post('/language', language),
    update: (language) => requests.put(`/language/${language.id}`, language),
    delete: (id) => requests.del(`/language/${id}`),
};

const Phrase = {
    // list: () => requests.get(`/language`),
    // details: (id) => requests.get(`/employees/${id}`),
    createWithTranslations: (phrase) => requests.post('/phrase/phrase-with-translation', phrase),
    upload: (formData) => requests.post('/phrase/upload', formData, {
        headers: { 'Content-type': 'multipart/form-data' }
    }),
    // update: (language) => requests.put(`/language/${language.id}`, language),
    // delete: (id) => requests.del(`/language/${id}`),
};


// const Employee = {
//     list: () => requests.get(`/employees`),
//     details: (id) => requests.get(`/employees/${id}`),
//     create: (employee) => requests.post('/employees', employee),
//     update: (formData) =>requests.put(`/employees/${formData.get('id')}`, formData),
//     delete: (id) => requests.del(`/employees/${id}`),
//   };




export default {
    Language,
    Phrase
}
