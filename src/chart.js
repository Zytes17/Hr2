const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Trainee Completed',

                data: [20,0,0,0, 0, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: '#FF8500', 
                borderRadius: 3,

                order: 0

            },
            {
                label: 'Evaluation lowest average',

                data: [20, 0, 0, 0,0, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: '#ddb70e', 
                borderRadius: 3,

                order: 1

            },
            {
                label: 'Evaluation highest average',
                color: '#ffffff',
                data: [20, 0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0],
                backgroundColor: '#212121', 
                borderRadius: 3,
                order: 2
            }
        ]
    };
    

    const config = {
        type: 'bar',
        data: data,
        options: {
            plugins: {
                legend: {
                    labels: {
                        color: "black",
                        font: {
                            size: 14
                        }
                    },
                    display: true // Display the legend
                }
            },

            scales: {
                y: {

                    min: 10, // Set minimum y-axis value
                    max: 100, // Set maximum y-axis value
                    grid: {
                        color: 'rgba(200, 200, 200, 0.1)' // Light grid color
                    },
                    ticks: {
                        color: "black",
                        callback: function (value) {
                            // Custom labels for y-axis
                            if (value % 10 === 0) {
                                return value; // Show labels for 5, 10, 20, 30,40,50,60,70,80,90, 100
                            }
                        }
                    }
                },
                x: {
                    ticks: {
                        color: "black",
                    },
                    grid: {
                        display: false // Remove vertical grid lines
                    }
                }
            }
        }
    };

    // Attendance chart
    const myChart = new Chart(
        document.getElementById('myChart'),
        config
    );


    const ctx = document.getElementById('myDoughnutChart').getContext('2d');
    const myDoughnutChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Half day', 'Time-In', 'Late'],
            datasets: [{
                label: 'Attendance',
                data: [1, 1, 1], // corresponding data values
                backgroundColor: [
                    '#f8a10e', // Half day
                    '#f5d10d', // Time-In
                    '#ffc057', // Late 
                ],
                borderWidth: 0
            }]
        },
        options: {
            plugins: {
                legend: {
                    labels: {
                        color: "black",
                        font: {
                            size: 14
                        }
                    },
                    display: true 
                },
                datalabels: {
                    formatter: (value, context) => {
                        let total = context.chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
                        let percentage = (value / total * 100).toFixed(2) + '%';
                        return percentage;
                    },
                    color: 'black', // Text color 
                    font: {
                        weight: 'bold',
                        size: 10
                    }
                }
            }
        },
        plugins: [ChartDataLabels] 
    });