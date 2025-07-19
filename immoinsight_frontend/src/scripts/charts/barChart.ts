import Chart from 'chart.js/auto'

declare global {
  interface Window {
    theme?: {
      warning: string
      primary?: string
    }
  }
}

// Extend HTMLCanvasElement to store chart instance
interface ChartCanvas extends HTMLCanvasElement {
  _chartInstance?: Chart
}

export function initBarChart(canvasId: string) {
  const canvas = document.getElementById(canvasId) as ChartCanvas
  if (!canvas) return

  // Destroy previous chart instance if exists
  if (canvas._chartInstance) {
    canvas._chartInstance.destroy()
  }

  const chart = new Chart(canvas, {
    type: 'bar',
    data: {
      labels: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      datasets: [
        {
          label: 'This year',
          backgroundColor: window.theme?.primary || '#0d6efd',
          borderColor: window.theme?.primary || '#0d6efd',
          hoverBackgroundColor: window.theme?.primary || '#0d6efd',
          hoverBorderColor: window.theme?.primary || '#0d6efd',
          data: [54, 67, 41, 55, 62, 45, 55, 73, 60, 76, 48, 79],
          barPercentage: 0.75,
          categoryPercentage: 0.5,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          grid: {
            display: false,
          },
          ticks: {
            stepSize: 20,
          },
          stacked: false,
        },
        x: {
          grid: {
            color: 'transparent',
          },
          stacked: false,
        },
      },
    },
  })

  // Store chart instance on canvas
  canvas._chartInstance = chart
}
