# ImmoInsight

## Projektübersicht

ImmoInsight ist eine Full-Stack-Anwendung zur Immobilienanalyse, bestehend aus einem Java Spring Boot Backend und einem React/TypeScript Frontend (Vite).

---

## Projektstruktur

```
immoinsight_backend/   # Java Spring Boot Backend
immoinsight_frontend/  # React + TypeScript Frontend (Vite)
immoinsight_ai_service/ # Python AI/ML Microservice (FastAPI)
reports/              # Projektberichte und Dokumentation
```

### Backend (immoinsight_backend)

- **Technologien:** Java, Spring Boot, Gradle
- **Wichtige Dateien:**
  - `ImmoinsightBackendApplication.java`: Haupteinstiegspunkt der Anwendung
  - `application.properties`: Zentrale Konfigurationsdatei
  - `build.gradle`, `settings.gradle`: Build- und Abhängigkeitsmanagement

### Frontend (immoinsight_frontend)

- **Technologien:** React, TypeScript, Vite
- **Wichtige Dateien:**
  - `App.tsx`, `main.tsx`: Einstiegspunkte der Anwendung
  - `package.json`: Abhängigkeitsmanagement
  - `vite.config.ts`: Vite-Konfiguration

### AI Service (immoinsight_ai_service)

- **Technologien:** Python, FastAPI, Pydantic
- **Wichtige Dateien:**
  - `main.py`: FastAPI Application Entry Point
  - `app/service.py`: AI/ML Logic
  - `app/schemas.py`: Data Models
  - `requirements.txt`: Python Dependencies
  - `Dockerfile`: Container Configuration

---

## Voraussetzungen

- **Backend:**

  - Java 17 oder höher
  - Gradle (Wrapper im Projekt enthalten)

- **Frontend:**

  - Node.js (empfohlen: v18 oder höher)
  - npm (wird mit Node.js installiert)

- **AI Service:**
  - Python 3.11 oder höher
  - pip (Python Package Manager)

---

## Installation & Setup

### 1. Frontend installieren

Wechseln Sie in das Frontend-Verzeichnis und installieren Sie die Abhängigkeiten:

```powershell
cd immoinsight_frontend
npm install
```

### 2. Backend installieren

Wechseln Sie in das Backend-Verzeichnis und bauen Sie das Projekt (Abhängigkeiten werden automatisch geladen):

```powershell
cd immoinsight_backend
./gradlew build --refresh-dependencies
```

### 3. AI Service installieren

Wechseln Sie in das AI Service-Verzeichnis und installieren Sie die Python-Abhängigkeiten:

```powershell
cd immoinsight_ai_service
pip install -r requirements.txt
```

---

## Anwendung starten

### Backend starten

Im Verzeichnis `immoinsight_backend`:

```powershell
./gradlew bootRun
```

oder unter Windows:

```powershell
gradlew.bat bootRun
```

Der Backend-Server läuft standardmäßig auf Port 8080.

### Frontend starten

Im Verzeichnis `immoinsight_frontend`:

```powershell
npm run dev
```

Die Anwendung ist dann unter [http://localhost:5173](http://localhost:5173) erreichbar.

### AI Service starten

Im Verzeichnis `immoinsight_ai_service`:

```powershell
python main.py
```

Der AI Service läuft standardmäßig auf Port 8001 und ist unter [http://localhost:8001](http://localhost:8001) erreichbar.

### Mit Docker Compose (empfohlen)

Für die einfache Ausführung aller Services:

```powershell
docker-compose up
```

Dies startet automatisch alle Services (Backend, Frontend, AI Service) mit der korrekten Konfiguration.

---

## 📊 Projektberichte

Alle wichtigen Berichte und Dokumentationen befinden sich im `reports/` Verzeichnis:

### **Aktuelle Berichte**

- `SPRINT3_VORBEREITUNGSBERICHT.md` - Detaillierte Vorbereitung für Sprint 3
- `REPORT_de.md` - Allgemeiner Tätigkeitsbericht
- `SPRINT1_ABSCHLUSSBERICHT.md` - Sprint 1 Abschlussbericht
- `SPRINT2_ABSCHLUSSBERICHT.md` - Sprint 2 Abschlussbericht

### **Berichtstypen**

- **Sprint-Abschlussberichte:** Dokumentation abgeschlossener Sprint-Arbeiten
- **Vorbereitungsberichte:** Infrastruktur-Setup und Testing
- **Tätigkeitsberichte:** Laufende Projektaktivitäten

Weitere Details finden Sie in `reports/README.md`.

---

## Hinweise

- Beide Teile (Frontend & Backend) müssen für die volle Funktionalität parallel laufen.
- Die Konfiguration des Backends (z.B. Datenbankzugang) erfolgt über die Datei `application.properties`.
- Bei Fragen zu einzelnen Komponenten oder zur Erweiterung der Anwendung bitte die jeweiligen Quellcodedateien und Kommentare beachten.

---

## Projektbericht & Vision

🎯 **ImmoInsight – Intelligente Immobilienanalyse**

### Einleitung & Zielsetzung

ImmoInsight wurde mit dem Ziel entwickelt, eine intelligente Plattform zur Analyse von Immobiliendaten zu schaffen. Ursprünglich als studentisches Kooperationsprojekt gestartet, entwickelte sich ImmoInsight zu einem eigenständigen Vorzeigeprojekt für praktische Erfahrung und professionelle Präsentation.

Die Bedeutung datengetriebener Analysen im Immobilienmarkt und der Einsatz moderner Technologien – insbesondere Künstlicher Intelligenz (z.B. Large Language Models, LLM) – stehen im Mittelpunkt dieses Projekts.

**Hauptziele:**

- Entwicklung eines umfassenden Systems zur Sammlung, Verarbeitung und Analyse von Immobiliendaten
- Full-Stack-Architektur für vollständige Kontrolle über Client- und Server-Entwicklung
- Implementierung von statistischer Analyse, visueller Datenaufbereitung und intelligenter Berichterstellung
- Nutzung von LLM-APIs zur Dateninterpretation und für interaktive Nutzerkommunikation

### Technische Grundlagen & Projektstruktur

**Backend:**

- Java & Spring Boot
- Modulare Struktur für Datenverarbeitung, Speicherung und API-Bereitstellung
- Nachhaltige Entwicklung mit Gradle und Basistests

**Frontend:**

- React, TypeScript & Vite
- Komponentenbasierte UI-Entwicklung
- Interaktive und performante Darstellung analytischer Daten

### Entwicklungsphasen

- **Phase 1:** Analyse von bereitgestellten oder lokalen Immobiliendaten
- **Phase 2:** Anbindung an Live-Datenquellen (z.B. Immobilienportale via API)
- **Phase 3:** Einsatz von LLMs (z.B. GPT) für:
  - Automatische Dateninterpretation (z.B. Preisanalysen über Zeit & Regionen)
  - Intelligente Nutzeranfragen zum Marktgeschehen
  - Automatisierte, natürlichsprachliche Berichte
  - Interaktiver Chatbot für Fragen zu Immobilien & Preisen

### Zukunftsideen & Erweiterungsvorschläge

- Intelligentes Empfehlungssystem für Immobilien basierend auf Nutzerpräferenzen
- Administratives Dashboard für Monitoring, Fehleranalyse und Preisentwicklung
- Mehrsprachigkeit (z.B. Deutsch & Englisch)
- Vergleich von Regionen mit interaktiven Grafiken
- Automatisiertes Data Crawling von Immobilienseiten
- Anbindung an BI-Tools wie Metabase oder Superset

### Bedeutung für Karriere & Bewerbung

ImmoInsight ist nicht nur ein Full-Stack- und Datenanalyse-Trainingsprojekt, sondern auch ein überzeugendes Portfolio-Element für Bewerbungen. Es demonstriert:

- Souveränen Umgang mit modernen Webtechnologien
- End-to-End-Projektkompetenz
- Tiefes Verständnis für Datenanalyse
- Erfahrung mit KI-APIs
- Dokumentations- und Präsentationsfähigkeit

### Fazit

ImmoInsight ist eine ideale Plattform für Skill-Building und Karrierevorbereitung – und bietet Raum für innovative Weiterentwicklung im Bereich datengetriebener Immobilienanalyse. Kontinuierliche Entwicklung, saubere Dokumentation und der Einsatz von KI machen dieses Projekt zu einem einzigartigen und herausragenden Beispiel moderner Softwareentwicklung.

---

## Autor

Dieses Projekt wurde im Rahmen eines Full-Stack-Entwicklungsprojekts erstellt.

---

## Testing & Code Quality

### Frontend

- **Linting & Format:**
  - Führe im Ordner `immoinsight_frontend` folgende Befehle aus, um Codequalität und Style zu prüfen:
    ```powershell
    npm run lint
    npm run format:check
    ```
- **Unit-Tests:**
  - Teste die React-Komponenten mit:
    ```powershell
    npm test
    ```
  - Hinweis: Bei Fehlern wie `HTMLCanvasElement.prototype.getContext not implemented` handelt es sich um eine Einschränkung von jsdom und betrifft nur Canvas-Rendering in Tests, nicht die Funktionalität der App.

### Backend

- **Unit-Tests:**
  - Führe im Ordner `immoinsight_backend` aus:
    ```powershell
    ./gradlew test
    ```

---

## Troubleshooting (Fehlerbehebung)

- **npm/gradle Fehler wegen falschem Pfad:**

  - Immer vor dem Ausführen von Befehlen wie `npm run dev` oder `./gradlew bootRun` in den jeweiligen Unterordner (`immoinsight_frontend` oder `immoinsight_backend`) wechseln.
  - Beispiel-Fehler: `Could not read package.json` oder ähnliche Meldungen.

- **CORS-Probleme:**

  - Wenn das Frontend keine Verbindung zum Backend herstellen kann (Fehler wie `No 'Access-Control-Allow-Origin' header`), stelle sicher, dass CORS im Backend korrekt konfiguriert ist (siehe `WebConfig.java`).

- **React Developer Tools:**
  - Für Chrome: Erweiterung aus dem Chrome Web Store installieren.
  - Für andere Browser:
    1. Installiere das Tool global:
       ```
       npm install -g react-devtools
       # oder
       yarn global add react-devtools
       ```
    2. Starte es im Terminal:
       ```
       react-devtools
       ```
    3. Füge im Entwicklungsmodus folgendes Skript in den `<head>` deiner `index.html` ein:
       ```html
       <script src="http://localhost:8097"></script>
       ```
  - Entferne das Skript vor dem Deployment in Produktion!

---

## Weitere Ressourcen

- [REPORT_fa.md](./REPORT_fa.md) – Detaillierter Entwicklungsbericht (Persisch)
- [REPORT_de.md](./REPORT_de.md) – Detaillierter Entwicklungsbericht (Deutsch)
