

import axios from 'axios';

var baseUrl ="https://gebhalybe.herokuapp.com/"


export function getAllItems() {
    return new Promise((resolve, reject) => {
        axios.get(baseUrl)
            .then(res => {
                resolve(res.data)
            })
            .catch(error => {
                reject(console.log(error))
            })
    })
    
}


