function dark_mode() {
   var check = document.body;
   var card_1 = document.getElementById("card_1");
   var card_2 = document.getElementById("card_2");
   var card_3 = document.getElementById("card_3");

// set dark mode
   check.classList.toggle("dark_mode");
   card_1.classList.toggle("card-dark");
   card_2.classList.toggle("card-dark");
   card_3.classList.toggle("card-dark");

}

// bar data example
var data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [{
      label: "Dataset #1",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 2,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [65, 59, 20, 81, 56, 55, 40],
    }]
  };

  var options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        stacked: true,
        grid: {
          display: true,
          color: "rgba(255,99,132,0.2)"
        }
      },
      x: {
        grid: {
          display: false
        }
      }
    }
  };

  new Chart('chart_bar', {
    type: 'bar',
    options: options,
    data: data
});

// line graph example
var ctx = document.getElementById('myChart').getContext('2d');
var chart_a = new Chart(ctx, {
	type: 'line', 

	data: {
		labels: ["Jan ", "Feb ", "Mar ", "Apr ", "May ", "June ", "July ", "Aug ", "Sept ", "Oct ", "Nov ", "Dec "],
	
    datasets: [{
			label: "Revenue",
			backgroundColor: 'lightblue',
			borderColor: 'royalblue',
			data: [26.4, 39.8, 66.8, 66.4, 40.6, 55.2, 77.4, 69.8, 57.8, 76, 110.8, 142.6],
		}]
	},

	options: {
    layout: {
      padding: 10,
    },
		legend: {
			position: 'bottom',
		},
		title: {
			display: true,
			text: 'Marketing Trend'
		},
		scales: {
			yAxes: [{
				scaleLabel: {
					display: true,
					labelString: 'Precipitation in mm'
				}
			}],
			xAxes: [{
				scaleLabel: {
					display: true,
					labelString: 'Month of the Year'
				}
			}]
		}
	}
});

  let dataOne = ["A", 1.0, "rgba(0, 95, 150, 0.7)"],
    dataTwo = ["B", 5.4, "rgba(255, 174, 0, 0.7)"],
    dataThree = ["C", 2.8, "rgba(0, 127, 63, 0.7)"],
    dataFour = ["D", 5.2, "rgba(219, 28, 28, 0.7)"];

    const colorGrey = "#334466", // Set the color for the chart text
      animationTime = "1400"; // Set speed/duration of the animation

    const chartCanvas = document.getElementById("js_polar_chart"); // Canvas element ID

    // Create a new Chart object
  const polarAreaChart = new Chart(chartCanvas, {
      type: "polarArea", // Set the chart to be a polar area chart
      data: {
        labels: [dataOne[0], dataTwo[0], dataThree[0], dataFour[0]], // Set label names for the dataset of the chart
        datasets: [
          {
            data: [dataOne[1], dataTwo[1], dataThree[1], dataFour[1]], // Set vales for the dataset of the chart
            backgroundColor: [dataOne[2], dataTwo[2], dataThree[2], dataFour[2]] // Set colors for the dataset of the chart
          }
        ]
      },
      options: {
        title: {
          display: false, 
          text: "Chartjs Polar Chart" 
        },
        responsive: false, 
        startAngle: -1.2, 
        tooltips: {
          enabled: false 
        },
        legend: {
          display: true,
          position: "right",
          labels: {
            fontColor: colorGrey
          }
        },
        scale: {
          ticks: {
            suggestedMin: 0, 
            suggestedMax: 4, 
            stepSize: 1, 
            fontFamily: "sans-serif", 
            fontSize: 22, 
            padding: 1 
          },
          gridLines: {
            color: "rgba(0, 0, 0, 0.2)", 
            lineWidth: 1, 
            borderDash: [10, 10] 
          }
        },
        layout: {
          padding: {
            top: 10, 
            bottom: 5 
          }
        }
      }
    });

  Chart.defaults.global.animation.duration = animationTime; 
