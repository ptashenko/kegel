import axios from 'axios';

const AUTH_TOKEN = 'Bearer test'
axios.defaults.baseURL = 'https://int2.kegel.men/api';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

const applePay = axios.create({
    baseURL: 'http://192.168.88.187:8000/api/',
    headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer test",
    }
})


export const initPayment = (payload) => {
    return axios.post('/web-payment/init/card-payment/', payload)
}

export const acceptPayment = (payload) => {
    return axios.post('/web-payment/accept/card-payment/', payload)
}

export const appleInitPayment = (payload) => {
    return applePay.post('/web-payment/init/card-payment/', payload)
}

export const appleAcceptPayment = (payload) => {
    return applePay.post('/web-payment/init/card-payment/', payload)
}

export const payPalInitPayemnt = (payload) => {
    return axios.post('/web-payment/init/pay-pal-payment/', payload)
}

export const payPalAcceptPayment = (payload) => {
    return axios.post('/web-payment/accept/pay-pal-payment', payload)
}

export const addonFetch = (payload) => {
    return axios.post('/web-payment/addons/', payload)
}
