import { authorizedGetRequest } from "../utilities/apiCalls.js"
import { getCurrentStats } from "./statisticsComponents.js"
import { drawWeekChart } from "./chartComponent.js"
import { drawMonthChart } from "./chartComponent.js"

const token = JSON.parse(localStorage.getItem('token'))
let retrievedData = {}

const url = "https://freddy.codesubmit.io/dashboard"

const initializeDashboard = (url,token) => {
  
  if(token){
    authorizedGetRequest(url,token).then(
        (response)=>response.json()).then(
            (data)=>{
        if(data.msg){
            alert(data.msg)
        }else{
            retrievedData = data
            console.log(data)
             getCurrentStats(data.dashboard.sales_over_time_week[1]['total'],data.dashboard.sales_over_time_week[1]['orders'])
             drawWeekChart(data.dashboard.sales_over_time_week)
             drawMonthChart(data.dashboard.sales_over_time_year)
        }
    })
  }
  console.log(retrievedData)
  
//get the token
//make get request
//extract necessary data
//populate elements 
}

((link, access_token)=> {
  initializeDashboard(url, access_token)
})(url, token)