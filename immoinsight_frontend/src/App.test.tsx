import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { vi } from 'vitest'
import App from './App'

// Mock Chart.js to avoid canvas issues in test environment
vi.mock('chart.js', () => ({
  Chart: vi.fn(),
  registerables: [],
}))

// Mock Bootstrap to avoid undefined errors
Object.defineProperty(window, 'bootstrap', {
  value: {
    Dropdown: vi.fn(),
  },
  writable: true,
})

// Mock ResizeObserver
global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}))

test('renders app without crashing', () => {
  render(<App />)
  // Just check if the app renders without throwing errors
  expect(document.body).toBeInTheDocument()
})
