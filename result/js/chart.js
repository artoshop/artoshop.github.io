var data1 = {
  labels: ["Luminar", "Canva", "Sanpseed", "Picasa"],
  
  datasets: [{
    label: "Total Point",
    backgroundColor: ["#f20c14", "#0080ff", "#09eda0", "#f5b507"],
    borderColor: "rgba(255,99,132,1)",
    borderWidth: 1,
    barThickness: 1,
    data: [519, 521, 563, 526],
    borderWidth: 1,
    borderRadius: 3,

  }]
};

var options1 = {
  maintainAspectRatio: false,
  responsive: false,
  scales: {
    yAxes: [{
      stacked: true,
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

var data2 = {
  labels: ["Luminar", "Canva", "Sanpseed", "Picasa"],
  
  datasets: [{
    label: "Total Point",
    backgroundColor: ["#f20c14", "#0080ff", "#09eda0", "#f5b507"],
    borderColor: "rgba(255,99,132,1)",
    borderWidth: 1,
    barThickness: 1,
    data: [130, 108, 135, 196],
    borderWidth: 1,
    borderRadius: 3,

  }]
};

var options2 = {
  maintainAspectRatio: false,
  responsive: false,
  scales: {
    yAxes: [{
      stacked: true,
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

var data3 = {
  labels: ["Shaheen Mates", "Adab Friends", "Al-Mifthah", "Swafwa Mates", "Step Mates", "Iqra' Kalavedi", "Alif Kalvedi", "Alwan Chats", "Mahasin Mates",],
  
  datasets: [{
    label: "Total Point",
    backgroundColor: "#0080ff",
    borderColor: "rgba(255,99,132,1)",
    borderWidth: 1,
    barThickness: 1,
    data: [41.32, 158.7, 77.09, 122.9, 95.38, 104.6, 67.4, 101.4, 131.2],
    borderWidth: 1,
    borderRadius: 3,

  }]
};

var options3 = {
  maintainAspectRatio: false,
  responsive: false,
  scales: {
    yAxes: [{
      stacked: true,
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
Chart.Bar('chart-2', {
  options: options2,
  data: data2
});
Chart.Bar('chart-3', {
  options: options3,
  data: data3
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
