# ImmoInsight

## Projektübersicht

ImmoInsight ist eine Full-Stack-Anwendung zur Immobilienanalyse, bestehend aus einem Java Spring Boot Backend und einem React/TypeScript Frontend (Vite).

---

## Projektstruktur

```
immoinsight_backend/   # Java Spring Boot Backend
immoinsight_frontend/  # React + TypeScript Frontend (Vite)
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

---

## Voraussetzungen

- **Backend:**

  - Java 17 oder höher
  - Gradle (Wrapper im Projekt enthalten)

- **Frontend:**
  - Node.js (empfohlen: v18 oder höher)
  - npm (wird mit Node.js installiert)

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

---

## Hinweise

- Beide Teile (Frontend & Backend) müssen für die volle Funktionalität parallel laufen.
- Die Konfiguration des Backends (z.B. Datenbankzugang) erfolgt über die Datei `application.properties`.
- Bei Fragen zu einzelnen Komponenten oder zur Erweiterung der Anwendung bitte die jeweiligen Quellcodedateien und Kommentare beachten.

---

## Autor

Dieses Projekt wurde im Rahmen eines Full-Stack-Entwicklungsprojekts erstellt.
