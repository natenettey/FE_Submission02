export const drawWeekChart = (obj) => {
//     const xValues = ["Today", "Yesterday", "Day 3", "Day 4", "Day 5"];
// const yValues = [270240, 74121, 180284, 115600, 333325];
const barColors = ["red", "green","blue","orange","brown","purple","black"];
const xValues = ["Today", "Yesterday", "Day 3", "Day 4", "Day 5","Day 6","Day 7"]
const yValues =Object.values(obj).map(item=>item.total)
console.log(xValues,yValues)
new Chart("weekChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display:false},
    title: {
      display: true,
      
    }
  }
});
}

export const drawMonthChart = (obj) => {

const barColors = ["red", "green","blue","orange","brown","purple","black","red", "green","blue","orange","brown"];
const xValues = ["this month", "last month", "month 3", "month 4", "month 5","month 6","month 7","month 8","month 9","month 10","month 11","month 12"]
const yValues =Object.values(obj).map(item=>item.total)
console.log(xValues,yValues)
new Chart("monthChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display:false},
    title: {
      display: true,
      
    }
  }
});
}