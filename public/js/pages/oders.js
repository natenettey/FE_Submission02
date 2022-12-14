import { authorizedGetRequest } from "../utilities/apiCalls.js"
import {renderOrderTable, renderSearchTable} from "../components/tableComponent.js"
import { userAuthentication } from "../utilities/authentication.js"


const token = JSON.parse(localStorage.getItem('token'))
let retrievedData = {}
const url = "https://freddy.codesubmit.io/orders"
const tableHeaders = ['Product Name', "Date", "Price","Status"]
const searchInput = document.getElementById("search");
const logout = document.getElementById('logout')

let current = 1



const initializeDashboard = (url,token) => {
  
  if(token){
    authorizedGetRequest(url,token).then(
        (response)=>response.json()).then(
            (data)=>{
              console.log(data)
        if(data.msg){
           if (localStorage.getItem("token")) {
             // If the key exists, remove the item from local storage
             localStorage.removeItem("token");
             window.location.replace("index.html");
           }
            alert(data.msg)
            
        }else{
            retrievedData = data
             renderOrderTable(tableHeaders,"order_table__container",data.orders,current)
        }
    })
  }
}


searchInput.oninput = (event) => {
  const tableContainer = document.getElementById("order_table__container");
  tableContainer.innerHTML = ""
  renderSearchTable(
    tableHeaders,
    "order_table__container",
    retrievedData.orders,
    event.target.value
  );
}

logout.onclick = () => {
  localStorage.removeItem("token");
  window.location.replace("index.html");
}

((link, access_token)=> {
  initializeDashboard(link, access_token)
})(url, token)