# ToDo-Liste für die Weiterentwicklung des ImmoInsight-Projekts

> Überprüfen und aktualisieren Sie diese Checkliste vor jeder Entwicklungssitzung.

## Wichtigste Aufgabe nach dem Öffnen des Projekts

- [ ] **WICHTIG: Vor dem Starten der Entwicklung, immer folgende Schritte beachten:**

  - Für das Frontend: Im Terminal in den Ordner `immoinsight_frontend` wechseln und dann z.B. `npm run dev` ausführen.
  - Für das Backend: Im Terminal in den Ordner `immoinsight_backend` wechseln und dann z.B. `./gradlew bootRun` ausführen.
  - Bei Nutzung von React Developer Tools in anderen Browsern (z.B. Safari):
    1. `npm install -g react-devtools` oder `yarn global add react-devtools`
    2. `react-devtools` im Terminal starten
    3. Folgendes Skript temporär in den `<head>` der `index.html` einfügen:
       `<script src="http://localhost:8097"></script>`
  - Nach Abschluss der Entwicklung das Skript für React DevTools aus dem Code entfernen!

- [ ] **Bootstrap 5 Admin Theme als Basis einrichten:**

  - Ein passendes, modernes Admin-Theme (z.B. von https://themes.getbootstrap.com oder https://github.com/ColorlibHQ/AdminLTE) auswählen
  - Theme-Assets (CSS, JS, Icons) in das Projekt integrieren (am besten in `src/assets`)
  - Layout-Komponenten (Sidebar, Header, Footer, MainContent) an das Theme anpassen
  - Sicherstellen, dass alle neuen Seiten und Komponenten auf diesem Theme basieren

- [ ] Vollständiger und sorgfältiger Test von Sprint 1 (Frontend: Tests, Linting, Prettier, Git Hooks, Projektausführung)
- [ ] Vollständiger und sorgfältiger Test von Sprint 2 (Backend: Modell, API, Validierung, Paging/Sorting, Suche/Filter, Projektausführung)

## Weitere Aufgaben zu Sprint 1 & 2

- [ ] Sicherstellen, dass alle Unit-Tests (Vitest, Testing Library, JUnit) erfolgreich laufen
- [ ] Überprüfung und Behebung aller ESLint- und Prettier-Warnungen im gesamten Projekt
- [ ] Überprüfung der Funktionalität des Haus-Formulars und der API-Anbindung
- [ ] Vollständiger Test aller CRUD-Operationen (Erstellen, Lesen, Bearbeiten, Löschen) im UI
- [ ] Testen der Such- und Filterfunktion in der Hausliste
- [ ] Überprüfung der OpenAPI-Dokumentation und deren Anzeige
- [ ] Überprüfung der Testabdeckung (Coverage) mit JaCoCo
- [ ] Überprüfung der Validierung im Backend
- [ ] Überprüfung des Hot Reloads (DevTools) im Backend

## Vorgeschlagene Aufgaben für die nächsten Sprints (laut Project_Development_Plan_de.md)

### ✅ Sprint 3 - Stage 1: Backend Statistics Service (ABGESCHLOSSEN)

- [x] StatisticsService.java implementiert
- [x] PriceStatistics DTO erstellt
- [x] StatisticsController hinzugefügt
- [x] API-Endpoints getestet
- [x] Error Handling implementiert

### ✅ Sprint 3 - Stage 2: Frontend Statistics Dashboard (ABGESCHLOSSEN)

- [x] Statistics Dashboard Komponente erstellen
- [x] KPI Widget Integration
- [x] Real-time Data Updates
- [x] Error Handling & Loading States

### 🔄 Sprint 3 - Stage 3: Advanced Analytics & Charts (NÄCHSTE PHASE)

- [ ] Charts & Graphs Integration (Chart.js)
- [ ] Interactive Filtering
- [ ] Data Visualization
- [ ] Export Functionality

### 📋 Weitere Sprints

- [ ] Anbindung an LLM und Generierung intelligenter Textanalysen (Sprint 4)
- [ ] Anbindung an Echtzeitdaten und Live-Analyse (Sprint 5)
- [ ] Vervollständigung der Dokumentation und Vorbereitung für den Release (Sprint 6)

---

> Halten Sie diese Datei immer aktuell, um die Entwicklung transparent und professionell zu gestalten.
