import axios from 'axios'

export interface PriceStatistics {
  averagePrice: number
  medianPrice: number
  minPrice: number
  maxPrice: number
  countByRegion: Record<string, number> | null
  pricesByYear: Record<number, number[]> | null
}

export const fetchPriceStatistics = async (): Promise<PriceStatistics> => {
  try {
    const response = await axios.get<PriceStatistics>('/api/statistics/summary')
    return response.data
  } catch (error) {
    console.error('Error fetching price statistics:', error)
    throw error
  }
}

// Helper function to format currency
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

// Helper function to format number with thousands separator
export const formatNumber = (num: number): string => {
  return new Intl.NumberFormat('de-DE').format(num)
}
