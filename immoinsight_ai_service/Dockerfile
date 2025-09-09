# ImmoInsight AI Service Dockerfile

# Python 3.11 slim image als Basis
FROM python:3.11-slim

# Arbeitsverzeichnis setzen
WORKDIR /app

# System-Abhängigkeiten installieren
RUN apt-get update && apt-get install -y \
    gcc \
    && rm -rf /var/lib/apt/lists/*

# Python-Abhängigkeiten kopieren und installieren
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Anwendungscode kopieren
COPY . .

# Port exponieren
EXPOSE 8001

# Health-Check
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:8001/health || exit 1

# Anwendung starten
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8001", "--reload"] 