const loginForm = document.getElementById('loginForm')
const userCredentials = {username:'', password:''}

const loginUser = (userData) =>{
    const url = 'https://freddy.codesubmit.io/login'
    fetch(url,{
        method:'POST',
        body: JSON.stringify(userData),
        headers:{"Content-type":"application/json"}
    }).then((response)=>response.json()).then((data)=>{
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
        loginUser(userCredentials) 
    }
}