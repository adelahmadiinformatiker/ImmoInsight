interface Marker {
  coords: [number, number]
  name: string
}

interface Theme {
  primary?: string
}

const markers: Marker[] = [
  { coords: [31.230391, 121.473701], name: 'Shanghai' },
  { coords: [28.70406, 77.102493], name: 'Delhi' },
  { coords: [6.524379, 3.379206], name: 'Lagos' },
  { coords: [35.689487, 139.691711], name: 'Tokyo' },
  { coords: [23.12911, 113.264381], name: 'Guangzhou' },
  { coords: [40.7127837, -74.0059413], name: 'New York' },
  { coords: [34.052235, -118.243683], name: 'Los Angeles' },
  { coords: [41.878113, -87.629799], name: 'Chicago' },
  { coords: [51.507351, -0.127758], name: 'London' },
  { coords: [40.416775, -3.70379], name: 'Madrid' },
]

export function initWorldMap(selector: string) {
  // Remove # if present for the selector
  const cleanSelector = selector.startsWith('#') ? selector.slice(1) : selector
  const target = document.getElementById(cleanSelector)
  if (!target) {
    console.warn(
      `[initWorldMap] Element with id '${cleanSelector}' not found in DOM.`,
    )
    return
  }

  const theme = window.theme || ({} as Theme)
  const fillColor = theme.primary || '#0d6efd'

  // @ts-expect-error jsVectorMap is not defined in the global scope
  if (!window.jsVectorMap) return

  // @ts-expect-error jsVectorMap is not defined in the global scope
  const map = new window.jsVectorMap({
    map: 'world',
    selector,
    zoomButtons: true,
    markers: markers,
    markerStyle: {
      initial: {
        r: 9,
        strokeWidth: 7,
        strokeOpacity: 0.4,
        fill: fillColor,
      },
      hover: {
        fill: fillColor,
        stroke: fillColor,
      },
    },
    zoomOnScroll: false,
  })

  window.addEventListener('resize', () => {
    map.updateSize()
  })
}
