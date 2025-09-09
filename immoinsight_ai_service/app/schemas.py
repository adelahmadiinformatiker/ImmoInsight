"""
Pydantic Schemas für ImmoInsight AI Service
"""

from pydantic import BaseModel, Field
from typing import List, Dict, Any, Optional
from datetime import datetime

class TextRequest(BaseModel):
    """Request-Modell für Text-Analyse"""
    text: str = Field(..., description="Zu analysierender Text", min_length=1, max_length=10000)

class TextResponse(BaseModel):
    """Response-Modell für Text-Analyse"""
    summary: str = Field(..., description="Zusammenfassung der AI-Analyse")
    timestamp: datetime = Field(default_factory=datetime.now, description="Zeitstempel der Analyse")

class PricePrediction(BaseModel):
    """Modell für Preisprognosen"""
    current_price: float = Field(..., description="Aktueller Preis")
    predicted_price_6_months: float = Field(..., description="Prognose für 6 Monate")
    predicted_price_12_months: float = Field(..., description="Prognose für 12 Monate")
    confidence: float = Field(..., ge=0.0, le=1.0, description="Konfidenz der Prognose")

class HouseDataRequest(BaseModel):
    """Request-Modell für Immobilienanalyse"""
    title: str = Field(..., description="Titel der Immobilie")
    price: float = Field(..., gt=0, description="Preis der Immobilie")
    region: str = Field(..., description="Region/Lage")
    area: Optional[float] = Field(None, gt=0, description="Fläche in Quadratmetern")
    rooms: Optional[int] = Field(None, gt=0, description="Anzahl der Zimmer")
    type: Optional[str] = Field(None, description="Typ der Immobilie")
    year_built: Optional[int] = Field(None, description="Baujahr")
    description: Optional[str] = Field(None, description="Beschreibung")
    
    class Config:
        schema_extra = {
            "example": {
                "title": "Moderne 3-Zimmer-Wohnung in Berlin-Mitte",
                "price": 450000.0,
                "region": "Berlin-Mitte",
                "area": 85.5,
                "rooms": 3,
                "type": "Wohnung",
                "year_built": 2015,
                "description": "Helle, moderne Wohnung mit Balkon und Tiefgarage"
            }
        }

class HouseAnalysisResponse(BaseModel):
    """Response-Modell für Immobilienanalyse"""
    market_analysis: str = Field(..., description="Marktanalyse der Immobilie")
    price_prediction: PricePrediction = Field(..., description="Preisprognose")
    recommendations: List[str] = Field(..., description="Empfehlungen")
    analysis_timestamp: datetime = Field(default_factory=datetime.now, description="Zeitstempel der Analyse")
    
    class Config:
        schema_extra = {
            "example": {
                "market_analysis": "Marktanalyse für Berlin-Mitte: Premium-Segment mit hoher Nachfrage.",
                "price_prediction": {
                    "current_price": 450000.0,
                    "predicted_price_6_months": 472500.0,
                    "predicted_price_12_months": 504000.0,
                    "confidence": 0.85
                },
                "recommendations": [
                    "Immobilie ist gut positioniert für langfristige Investitionen",
                    "Empfehlung: Frühzeitige Vermarktung für optimale Preise"
                ]
            }
        }

class HealthResponse(BaseModel):
    """Response-Modell für Health-Check"""
    status: str = Field(..., description="Status des Services")
    service: str = Field(..., description="Name des Services")
    timestamp: datetime = Field(default_factory=datetime.now, description="Zeitstempel")
    version: str = Field(default="1.0.0", description="Service-Version")

class ErrorResponse(BaseModel):
    """Response-Modell für Fehler"""
    error: str = Field(..., description="Fehlermeldung")
    detail: Optional[str] = Field(None, description="Detaillierte Fehlerbeschreibung")
    timestamp: datetime = Field(default_factory=datetime.now, description="Zeitstempel des Fehlers") 