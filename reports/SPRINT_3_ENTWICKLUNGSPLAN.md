## ✅ Detaillierter Entwicklungsplan – Sprint 3 (ImmoInsight)

### 🎯 Zielsetzung

Sprint 3 konzentriert sich auf die **statistische Analyse des Immobilienmarkts**, die Erweiterung des Dashboards sowie die Darstellung von **KPI-Widgets (Key Performance Indicators)** zur besseren Nutzerinformation und Entscheidungsunterstützung.

---

## 🔢 Sprint-Phasen und Aufgaben

### 🟡 Phase 1 – Implementierung der Statistiklogik im Backend (1–2 Tage)

**Aufgaben:**
- Neue Service-Klasse `StatisticsService.java` erstellen
- Neuen REST-Endpoint implementieren: `GET /api/statistics/summary`
- Berechnung folgender Kennzahlen:
  - Durchschnittlicher Preis aller Immobilien
  - Medianpreis
  - Min- und Max-Preis
  - Anzahl der Immobilien nach Region (GroupBy)
  - Preisverteilung nach Baujahr (`yearBuilt`)

**Technologien:**
- Spring Boot
- Java Stream API für Aggregationen
- DTOs für strukturierte JSON-Antworten

---

### 🟡 Phase 2 – TypeScript Interface und API-Anbindung im Frontend (0,5 Tage)

**Aufgaben:**
- Neue Datei `statisticsService.ts` im Frontend-Projekt erstellen
- Type `PriceStatistics` gemäß Backend-Antwort definieren
- Verwendung von `axios` oder `react-query` zur Datenabfrage

---

### 🟡 Phase 3 – KPI-Widgets im Dashboard (1 Tag)

**Aufgaben:**
- Visuelle Darstellung der folgenden Kennzahlen im Dashboard:
  - Durchschnittspreis
  - Medianpreis
  - Min- und Max-Preis
  - Gesamtanzahl der Immobilien
- Verwendung von Bootstrap 5 Cards oder bestehendem Admin-Theme

---

### 🟡 Phase 4 – Erweiterte Visualisierung (2–3 Tage)

**Aufgaben:**
- Preisverteilung nach Region (Bar Chart oder Pie Chart)
- Entwicklung eines Liniendiagramms zur Darstellung der Preisentwicklung nach Baujahr
- Integration einer Heatmap zur geografischen Preisverteilung (z. B. mit jsVectorMap oder Mapbox)

**Hinweis:** Vorhandene Dummy-Charts **nicht löschen**, sondern durch reale Daten ersetzen.

---

### 🟡 Phase 5 – Interaktive Filter & Export-Funktion (1,5 Tage)

**Aufgaben:**
- Implementierung von Filter-Komponenten (Dropdown, Slider) zur Auswahl von Preisspannen oder Regionen
- Dynamisches Update der Visualisierungen basierend auf ausgewählten Filtern
- Export-Funktion als PDF mit `html2pdf.js` oder `jsPDF`

---

### 🟡 Phase 6 – Testing & Cleanup (0,5–1 Tag)

**Aufgaben:**
- Unit- und Integrationstests für `StatisticsService`
- UI-Tests mit `Vitest` für neue Komponenten
- Überprüfung und Korrektur von ESLint-, Prettier- und Git Hook-Konfigurationen
- Finaler Funktionstest aller Komponenten und APIs

---

## 📊 Zeitplanübersicht (Sprint 3)

| Tag | Aufgabe |
|-----|---------|
| 1   | Backend-Statistiken (`StatisticsService.java`) |
| 2   | API-Anbindung + KPI-Widgets |
| 3   | Charts: Regionen & Baujahre |
| 4   | Heatmap + Interaktive Filter |
| 5   | Exportfunktion + Testing |
| 6   | Cleanup + Sprint 3 Abschlussbericht |

---

**Letzte Aktualisierung:** 19. Juli 2025

**Erstellt durch:** Projektleitung ImmoInsight

