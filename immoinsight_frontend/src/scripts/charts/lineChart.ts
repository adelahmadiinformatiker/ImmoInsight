import Chart from 'chart.js/auto'

const chartInstances: Record<string, Chart> = {}

export function initLineChart(canvasId: string) {
  const canvas = document.getElementById(canvasId) as HTMLCanvasElement
  if (!canvas) return

  if (chartInstances[canvasId]) {
    chartInstances[canvasId].destroy()
  }

  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const gradient = ctx.createLinearGradient(0, 0, 0, 225)
  gradient.addColorStop(0, 'rgba(215, 227, 244, 1)')
  gradient.addColorStop(1, 'rgba(215, 227, 244, 0)')

  const chart = new Chart(canvas, {
    type: 'line',
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
          label: 'Sales ($)',
          fill: true,
          backgroundColor: gradient,
          borderColor: (window as Window).theme?.primary || '#0d6efd',
          data: [
            2115, 1562, 1584, 1892, 1587, 1923, 2566, 2448, 2805, 3438, 2917,
            3327,
          ],
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
        tooltip: {
          intersect: false,
        },
        filler: {
          propagate: false,
        },
      },
      hover: {
        intersect: true,
      },
      scales: {
        x: {
          reverse: true,
          grid: {
            color: 'rgba(0,0,0,0.0)',
          },
        },
        y: {
          ticks: {
            stepSize: 1000,
          },
          grid: {
            color: 'rgba(0,0,0,0.0)',
          },
          border: {
            dash: [3, 3],
          },
        },
      },
    },
  })

  chartInstances[canvasId] = chart
}
