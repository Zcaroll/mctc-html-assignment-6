let canvas = document.querySelector('#soda-chart')
let context = canvas.getContext('2d')

let chart = new Chart(context, {
    type: 'bar',
    data: {
        labels: ['Coke', 'Pepsi', 'Sprite', 'Either', 'Neither'],
        datasets: [ {
            label: 'Number of votes',
            data: [18, 14, 12, 7, 10],
            backgroundColor: ['red', 'blue', 'yellowgreen', 'green', 'grey']
        }]
    },
    options: {
        scales: {
            yAxes: [ {
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
})
