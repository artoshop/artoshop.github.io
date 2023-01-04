var data1 = {
  labels: ["Luminar", "Canva", "Sanpseed", "Picasa"],
  
  datasets: [{
    label: "Total Point",
    backgroundColor: "rgba(255,99,132,0.2)",
    borderColor: "rgba(255,99,132,1)",
    borderWidth: 2,
    hoverBackgroundColor: "rgba(255,99,132,0.4)",
    hoverBorderColor: "rgba(255,99,132,1)",
    data: [136, 168, 156, 176],
  }]
};

var options1 = {
  maintainAspectRatio: false,
  responsive: true,
  scales: {
    yAxes: [{
      stacked: true,
      gridLines: {
        display: true,
        color: "rgba(255,99,132,0.2)"
      }
    }],
    xAxes: [{
      gridLines: {
        display: false
      }
    }]
  }
};

Chart.Bar('chart-1', {
  options: options1,
  data: data1
});


setTimeout(
   function() { 
     Chart.Bar('chart-3', {
        options: options3,
        data: data3
      }
     )
   }, 6000
);