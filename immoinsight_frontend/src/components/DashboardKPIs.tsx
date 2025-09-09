import { useEffect, useState } from 'react'
import {
  fetchPriceStatistics,
  PriceStatistics,
  formatCurrency,
} from '../services/statisticsService'

export const DashboardKPIs = () => {
  const [stats, setStats] = useState<PriceStatistics | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadStatistics = async () => {
      try {
        setLoading(true)
        const data = await fetchPriceStatistics()
        setStats(data)
        setError(null)
      } catch (err) {
        setError('Fehler beim Laden der Statistiken')
        console.error('Statistics loading error:', err)
      } finally {
        setLoading(false)
      }
    }

    loadStatistics()
  }, [])

  if (loading) {
    return (
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body text-center">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-2">Lade Statistiken...</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="row">
        <div className="col-12">
          <div className="alert alert-danger" role="alert">
            <i className="fas fa-exclamation-triangle me-2"></i>
            {error}
          </div>
        </div>
      </div>
    )
  }

  if (!stats) {
    return (
      <div className="row">
        <div className="col-12">
          <div className="alert alert-warning" role="alert">
            <i className="fas fa-info-circle me-2"></i>
            Keine Statistiken verfügbar
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="row">
      <div className="col-xl-3 col-md-6 mb-4">
        <div className="card border-left-primary shadow h-100 py-2">
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                  Durchschnittspreis
                </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">
                  {formatCurrency(stats.averagePrice)}
                </div>
              </div>
              <div className="col-auto">
                <i className="fas fa-euro-sign fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-xl-3 col-md-6 mb-4">
        <div className="card border-left-success shadow h-100 py-2">
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                  Medianpreis
                </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">
                  {formatCurrency(stats.medianPrice)}
                </div>
              </div>
              <div className="col-auto">
                <i className="fas fa-chart-line fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-xl-3 col-md-6 mb-4">
        <div className="card border-left-info shadow h-100 py-2">
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                  Minimalpreis
                </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">
                  {formatCurrency(stats.minPrice)}
                </div>
              </div>
              <div className="col-auto">
                <i className="fas fa-arrow-down fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-xl-3 col-md-6 mb-4">
        <div className="card border-left-warning shadow h-100 py-2">
          <div className="card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                  Maximalpreis
                </div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">
                  {formatCurrency(stats.maxPrice)}
                </div>
              </div>
              <div className="col-auto">
                <i className="fas fa-arrow-up fa-2x text-gray-300"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
