import Chart from 'chart.js/auto'

const chartInstances: Record<string, Chart> = {}

interface Theme {
  primary?: string
  warning?: string
  danger?: string
}

export function initPieChart(canvasId: string) {
  const canvas = document.getElementById(canvasId) as HTMLCanvasElement
  if (!canvas) return

  if (chartInstances[canvasId]) {
    chartInstances[canvasId].destroy()
  }

  const rawTheme = window.theme
  let primary = '#0d6efd',
    warning = '#ffc107',
    danger = '#dc3545'

  if (rawTheme && typeof rawTheme === 'object') {
    const t = rawTheme as Theme
    if ('primary' in t && t.primary) primary = t.primary
    if ('warning' in t && t.warning) warning = t.warning
    if ('danger' in t && t.danger) danger = t.danger
  }

  const chart = new Chart(canvas, {
    type: 'pie',
    data: {
      labels: ['Chrome', 'Firefox', 'IE'],
      datasets: [
        {
          data: [4306, 3801, 1689],
          backgroundColor: [primary, warning, danger],
          borderWidth: 5,
        },
      ],
    },
    options: {
      responsive: !(window as Window).MSInputMethodContext,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
      },
      cutout: '75%',
    },
  })

  chartInstances[canvasId] = chart
}
