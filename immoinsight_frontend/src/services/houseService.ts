// Service für Haus-API-Operationen
export interface House {
  id: number
  name: string
  description?: string
  // ...weitere Felder nach Bedarf...
}

export async function getHouses(): Promise<House[]> {
  const response = await fetch('http://localhost:8080/api/houses')
  if (!response.ok) throw new Error('Fehler beim Laden der Häuser')
  return response.json()
}

export async function updateHouse(house: House): Promise<House> {
  const response = await fetch(`http://localhost:8080/api/houses/${house.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(house),
  })
  if (!response.ok) throw new Error('Fehler beim Aktualisieren des Hauses')
  return response.json()
}
