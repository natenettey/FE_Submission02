export class userAuthentication{
    constructor(){
        const token = localStorage.getItem("token");
        this.validateToken(token);
    }
    validateToken(token){
        if(!token){
            window.location.replace("/")
        }else{
            window.location="dashboard.html"
        }
    }
}