import { Controller } from "@hotwired/stimulus"

 
// app/javascript/controllers/index.js
 
// app/javascript/controllers/dashboard_controller.js 
import { Chart, registerables } from 'chart.js'

// Register Chart.js components
Chart.register(...registerables)

// Connects to data-controller="dashboard"
export default class extends Controller {

  initialize() {
    const data = [10, 20, 30, 40, 50,60, 70]
    const labels = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"]
    const ctx = document.getElementById('revenueChart')

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: labels,
        datasets: [{
          label: 'Revenue $',
          data: data,
          borderWidth: 3,
          fill: true
        }]
      },
      options: {
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            grid: {
              display: false
            }
          },
          y: {
            border: {
              dash: [5, 5]
            },
            grid: {
              color: "#d4f3ef"
            },
            beginAtZero: true
          }
        }
      }
    })
  }

}
