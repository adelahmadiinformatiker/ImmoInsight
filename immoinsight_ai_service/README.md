# 🤖 ImmoInsight AI Service

AI/ML Microservice für Immobilienanalyse - Python FastAPI Service

## 🎯 Übersicht

Der ImmoInsight AI Service ist ein Python-basierter Microservice, der KI-Funktionen für die Immobilienanalyse bereitstellt. Er arbeitet unabhängig vom Spring Boot Backend und kommuniziert über HTTP REST APIs.

## 🏗️ Architektur

```
┌─────────────────┐    HTTP/REST    ┌─────────────────┐
│   Frontend      │ ◄──────────────► │  Spring Boot    │
│   (React)       │                 │   Backend       │
└─────────────────┘                 └─────────────────┘
                                              │
                                              │ HTTP/REST
                                              ▼
                                    ┌─────────────────┐
                                    │   AI Service    │
                                    │   (Python)      │
                                    └─────────────────┘
```

## 📁 Projektstruktur

```
immoinsight_ai_service/
├── app/
│   ├── __init__.py          # Package-Initialisierung
│   ├── main.py              # FastAPI Application
│   ├── service.py           # AI/ML Logik
│   └── schemas.py           # Pydantic Models
├── requirements.txt         # Python Dependencies
├── Dockerfile              # Container-Konfiguration
└── README.md               # Diese Datei
```

## 🚀 Schnellstart

### Voraussetzungen

- Python 3.11+
- pip (Python Package Manager)

### Lokale Installation

1. **Dependencies installieren:**

```bash
cd immoinsight_ai_service
pip install -r requirements.txt
```

2. **Service starten:**

```bash
python main.py
```

3. **Service testen:**

```bash
curl http://localhost:8001/health
```

### Mit Docker

```bash
# Container bauen und starten
docker build -t immoinsight-ai-service .
docker run -p 8001:8001 immoinsight-ai-service
```

### Mit Docker Compose (empfohlen)

```bash
# Alle Services starten
docker-compose up

# Nur AI Service starten
docker-compose up immoinsight-ai-service
```

## 📡 API Endpoints

### Health Check

```http
GET /health
```

**Response:**

```json
{
  "status": "healthy",
  "service": "ai",
  "timestamp": "2025-07-20T10:30:00",
  "version": "1.0.0"
}
```

### Text-Analyse

```http
POST /analyze
Content-Type: application/json

{
  "text": "Moderne 3-Zimmer-Wohnung in Berlin-Mitte mit Balkon"
}
```

**Response:**

```json
{
  "summary": "Simulierte AI-Analyse von: Moderne 3-Zimmer-Wohnung in Berlin-Mitte mit Balkon... Analyse durchgeführt am: 2025-07-20 10:30:00",
  "timestamp": "2025-07-20T10:30:00"
}
```

### Immobilienanalyse

```http
POST /analyze/house
Content-Type: application/json

{
  "title": "Moderne 3-Zimmer-Wohnung in Berlin-Mitte",
  "price": 450000.0,
  "region": "Berlin-Mitte",
  "area": 85.5,
  "rooms": 3,
  "type": "Wohnung",
  "year_built": 2015,
  "description": "Helle, moderne Wohnung mit Balkon und Tiefgarage"
}
```

**Response:**

```json
{
  "market_analysis": "Marktanalyse für Berlin-Mitte: Premium-Segment mit hoher Nachfrage.",
  "price_prediction": {
    "current_price": 450000.0,
    "predicted_price_6_months": 472500.0,
    "predicted_price_12_months": 504000.0,
    "confidence": 0.85
  },
  "recommendations": [
    "Immobilie ist gut positioniert für langfristige Investitionen",
    "Empfehlung: Frühzeitige Vermarktung für optimale Preise",
    "Marktentwicklung in der Region ist positiv"
  ],
  "analysis_timestamp": "2025-07-20T10:30:00"
}
```

## 🔧 Konfiguration

### Umgebungsvariablen

| Variable    | Standard  | Beschreibung  |
| ----------- | --------- | ------------- |
| `PORT`      | `8001`    | Service-Port  |
| `HOST`      | `0.0.0.0` | Service-Host  |
| `LOG_LEVEL` | `INFO`    | Logging-Level |

### Beispiel .env Datei

```env
PORT=8001
HOST=0.0.0.0
LOG_LEVEL=INFO
```

## 🧪 Testing

### Unit Tests ausführen

```bash
pytest
```

### API Tests

```bash
# Health Check
curl http://localhost:8001/health

# Text-Analyse
curl -X POST http://localhost:8001/analyze \
  -H "Content-Type: application/json" \
  -d '{"text": "Test Immobilie"}'

# Immobilienanalyse
curl -X POST http://localhost:8001/analyze/house \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Test Wohnung",
    "price": 300000,
    "region": "Berlin"
  }'
```

## 🔮 Zukünftige Features

### Phase 1: Grundfunktionen ✅

- [x] FastAPI Service Setup
- [x] Basic Text Analysis
- [x] House Data Analysis
- [x] Health Checks
- [x] Docker Support

### Phase 2: AI/ML Integration (Sprint 4)

- [ ] Transformer Models Integration
- [ ] Price Prediction Models
- [ ] Market Analysis Models
- [ ] Natural Language Processing

### Phase 3: Advanced Features

- [ ] Real-time Data Processing
- [ ] Model Training Pipeline
- [ ] A/B Testing Framework
- [ ] Performance Monitoring

## 🛠️ Entwicklung

### Code Style

```bash
# Code formatieren
black .

# Linting
flake8 .
```

### Neue Features hinzufügen

1. **Schema definieren** in `app/schemas.py`
2. **Service-Logik** in `app/service.py`
3. **API-Endpoint** in `main.py`
4. **Tests schreiben**
5. **Dokumentation aktualisieren**

### Debugging

```bash
# Mit Debug-Logging starten
LOG_LEVEL=DEBUG python main.py

# Mit Hot-Reload
uvicorn main:app --reload --host 0.0.0.0 --port 8001
```

## 📊 Monitoring

### Health Checks

Der Service bietet automatische Health Checks:

```bash
curl http://localhost:8001/health
```

### Logging

Strukturiertes Logging mit JSON-Format:

```json
{
  "timestamp": "2025-07-20T10:30:00",
  "level": "INFO",
  "message": "Analysiere Text: Moderne 3-Zimmer-Wohnung...",
  "service": "ai"
}
```

## 🔒 Sicherheit

### CORS Configuration

Der Service ist für Frontend-Integration konfiguriert:

```python
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

### Input Validation

Alle Eingaben werden mit Pydantic validiert:

```python
class TextRequest(BaseModel):
    text: str = Field(..., min_length=1, max_length=10000)
```

## 🚀 Deployment

### Docker Deployment

```bash
# Image bauen
docker build -t immoinsight-ai-service .

# Container starten
docker run -d -p 8001:8001 --name ai-service immoinsight-ai-service
```

### Kubernetes (zukünftig)

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: immoinsight-ai-service
spec:
  replicas: 3
  selector:
    matchLabels:
      app: immoinsight-ai-service
  template:
    metadata:
      labels:
        app: immoinsight-ai-service
    spec:
      containers:
        - name: ai-service
          image: immoinsight-ai-service:latest
          ports:
            - containerPort: 8001
```

## 📞 Support

### Troubleshooting

**Service startet nicht:**

```bash
# Port prüfen
netstat -an | grep 8001

# Dependencies prüfen
pip list | grep fastapi
```

**API-Calls schlagen fehl:**

```bash
# Service-Status prüfen
curl http://localhost:8001/health

# Logs prüfen
docker logs immoinsight-ai-service
```

### Kontakt

- **Entwicklungsteam:** ImmoInsight Development
- **Dokumentation:** [API Docs](http://localhost:8001/docs)
- **Issues:** GitHub Repository

---

**Version:** 1.0.0  
**Letzte Aktualisierung:** Juli 2025  
**Status:** ✅ Produktionsbereit
