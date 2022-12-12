import { userAuthentication } from "../utilities/authentication.js"
import { postRequest } from "../utilities/apiCalls.js"

const loginForm = document.getElementById('loginForm')
const userCredentials = {username:'', password:''}
const usertoken = localStorage.getItem('token')
const userValidation = new userAuthentication()
const url = 'https://freddy.codesubmit.io/login'
const loginUser = (url,userData) =>{
    
    postRequest(url,userData).then(
        (response)=>response.json()).then(
            (data)=>{
        if(data.msg){
            alert(data.msg)
        }else{
            localStorage.setItem('token', JSON.stringify(data.access_token))
            window.location='Dashboard.html'
        }
    })
}


loginForm.onsubmit = (event) => {
    event.preventDefault()
    if(loginForm.username.value.trim() == "" || loginForm.password.value == "") {
        alert("Provide all credentials")
    }else{
        //execute the api request
        userCredentials.username = loginForm.username.value
        userCredentials.password = loginForm.password.value
        loginUser(url,userCredentials) 
    }
}

((token)=>{userValidation.validateToken(token)})(usertoken)