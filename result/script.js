var data1 = {
  labels: ["Luminar", "Canva", "Sanpseed", "Picasa"],
  
  datasets: [{
    label: "Total Point",
    backgroundColor: ["#f20c14", "#0080ff", "#09eda0", "#f5b507"],
    borderColor: "rgba(255,99,132,1)",
    borderWidth: 1,
    barThickness: 1,
    data: [136, 168, 156, 176],
    borderWidth: 1,
    borderRadius: 3,

  }]
};

var options1 = {
  maintainAspectRatio: false,
  responsive: true,
  scales: {
    yAxes: [{
      stacked: true,
      barThickness: 1,
      maxBarThickness: 1,
      gridLines: {
        display: true,
        color: "rgba(255,99,132,0.2)"
      }
    }],
    xAxes: [{
      barThickness: 60,
      maxBarThickness: 1000,
      gridLines: {
        display: false,
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
