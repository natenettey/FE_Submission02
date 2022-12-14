import { authorizedGetRequest } from "../utilities/apiCalls.js"
import { getCurrentStats } from "../components/statisticsComponents.js"
import { drawWeekChart } from "../components/chartComponent.js"
import { drawMonthChart } from "../components/chartComponent.js"
import { renderTable } from "../components/tableComponent.js"
import { userAuthentication } from "../utilities/authentication.js"

const token = JSON.parse(localStorage.getItem('token'))
let retrievedData = {}
const toggler = document.getElementById('switch')
const url = "https://freddy.codesubmit.io/dashboard"
const weekChart = document.getElementById('week_chart')
const monthChart = document.getElementById('month_chart')
const tableHeaders = ['Product Name', "Units Sold", "Revenue"]
const chartTitle = document.getElementById('revenueText')

const initializeDashboard = (url,token) => {
  
  if(token){
    authorizedGetRequest(url,token).then(
        (response)=>response.json()).then(
            (data)=>{
        if(data.msg){
            alert(data.msg)
            if (localStorage.getItem("token")) {
              // If the key exists, remove the item from local storage
              localStorage.removeItem("token");
              window.location.replace("index.html");
            }
        }else{
            retrievedData = data
            
             getCurrentStats(data.dashboard.sales_over_time_week[1]['total'],data.dashboard.sales_over_time_week[1]['orders'])
             drawWeekChart(data.dashboard.sales_over_time_week)
             drawMonthChart(data.dashboard.sales_over_time_year)
             renderTable(tableHeaders,"best_seller_table__container",data.dashboard.bestsellers)
        }
    })
  }
  console.log(retrievedData)
}

toggler.onclick = () => {
  
      weekChart.classList.toggle('display');
      monthChart.classList.toggle('display')

      if(monthChart.classList.contains('display')){
        chartTitle.innerText = "Revenue (last 7 days)"
      }
       if(weekChart.classList.contains('display')){
        chartTitle.innerText = "Revenue (last 12 months)"
      }
   
}

logout.onclick = () => {
  const userLogout = new userAuthentication
  userLogout.logOut()
};

((link, access_token)=> {
  initializeDashboard(link, access_token)
})(url, token)