import { useState, useEffect } from 'react'
import React from 'react'

let data =
{

    "name": "Ivan Ivanov",
    "username": "Iva",
    "email": "testUser@gmail.com",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    }
}



function Post() {
    const [answer, setAnswer] = useState('');

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            body: data
        }).then(function (response) {
            setAnswer(response.status);
        }).catch(function (error) {
            console.log(error)
        });
    })


    return (
        <>
            <h1>Статус отправки данных: {answer}</h1>
        </>
    )
}


export default Post;