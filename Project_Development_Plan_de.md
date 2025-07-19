# 🏗️ ImmoInsight Projektentwicklungsplan

Dieses Dokument beschreibt den Entwicklungsfahrplan für das Projekt ImmoInsight Schritt für Schritt nach der Scrum-Methodik. Ziel ist es, dieses Projekt zu einem professionellen Portfolio-Stück für Bewerbungen zu machen.

---

## 🎯 Hauptziele des Projekts

- Entwicklung einer vollständigen Plattform zur Analyse von Immobiliendaten
- Einsatz moderner Technologien im Backend und Frontend
- Integration von Sprachmodellen (LLM) für intelligente Analysen und Berichtserstellung
- Nutzung von Echtzeitdaten in der finalen Version

---

## 📅 Entwicklungsphasen nach Scrum

### 🟩 Sprint 1: Technische Basis und Grundstruktur

#### 🎯 Ziele:

- Sicherstellung der vollständigen Ausführung von Frontend und Backend
- Einrichtung der Entwicklungsumgebung und automatisierter Tests

#### ✅ Arbeitspakete:

- Setup und vollständiger Test von `immoinsight_backend`
- Ausführung von `immoinsight_frontend` und Test der Verbindung zum Backend (ggf. als Mock)
- Einrichtung erster Tests (Jest und JUnit)
- Aktivierung von ESLint, Prettier und Git Hook zur Codequalität

---

### 🟩 Sprint 2: Datenmodellierung und erste API-Anbindung

#### 🎯 Ziele:

- Modellierung der Immobiliendaten
- Implementierung von APIs zur Datenverwaltung

#### ✅ Arbeitspakete:

- Erstellung von Entitätsklassen wie `House`, `Region`, `PriceRecord`
- Design von CRUD-APIs mit Spring Boot
- Einfaches Formular im Frontend zur Dateneingabe
- Anbindung der APIs im Frontend mit Axios oder fetch

---

### 🟨 Sprint 3: Offline-Datenanalyse und Graphenanzeige

#### 🎯 Ziele:

- Statistische Analyse der Daten
- Visualisierung der Daten als Graph

#### ✅ Arbeitspakete:

- Analyse des durchschnittlichen Preises nach Zeit und Region
- Einsatz von Recharts oder Chart.js im Frontend
- Anzeige von Diagrammen und Datentabellen

---

### 🟦 Sprint 4: Integration mit LLM-API

#### 🎯 Ziele:

- Automatische sprachliche Analyse der Daten
- Intelligente Nutzerinteraktion mit Sprachmodellen

#### ✅ Arbeitspakete:

- Anbindung an OpenAI API oder HuggingFace
- Generierung von Analyse-Zusammenfassungen in natürlicher Sprache
- Entwicklung eines Chatbots für Marktfragen
- Hinzufügen eines Bereichs „Intelligente Analyse“ zur Benutzeroberfläche

---

### 🟧 Sprint 5: Echtzeit-Datenintegration

#### 🎯 Ziele:

- Anbindung an reale Datenquellen
- Echtzeitanalyse der Informationen

#### ✅ Arbeitspakete:

- Entwicklung eines Scrapers oder Nutzung von Immobilien-APIs wie ImmobilienScout24
- Validierte Speicherung neuer Daten
- Anzeige von Preisänderungen und Marktschwankungen im UI
- Implementierung eines Schedulers im Backend

---

### 🟪 Sprint 6: Finalisierung und öffentlicher Release

#### 🎯 Ziele:

- Vollständige und professionelle Dokumentation
- Vorbereitung für Demo und Bewerbung

#### ✅ Arbeitspakete:

- Vervollständigung des README mit ausführlichen Erklärungen und Bildern
- Erstellung eines Demo-Videos oder GIFs
- Deployment des Frontends auf GitHub Pages und des Backends auf Render/Heroku
- Abschließende Tests und Überprüfung der Testabdeckung

---

## ⏱️ Vorgeschlagener Zeitplan

| Sprint | Dauer (Tage) | Schlüssel-Output             |
| ------ | ------------ | ---------------------------- |
| 1      | 3-5 Tage     | Projekt-Setup & Basistests   |
| 2      | 4-6 Tage     | Datenmodell & Basis-API      |
| 3      | 4-6 Tage     | Analyse & Graphenanzeige     |
| 4      | 5-7 Tage     | LLM-Integration & Chatbot    |
| 5      | 5-8 Tage     | Live-Daten & Echtzeitanalyse |
| 6      | 3-4 Tage     | Dokumentation & Demo         |

---

## ✅ Fazit

Mit diesem Entwicklungsplan wird ImmoInsight zu einem leistungsstarken, praxisnahen und wertvollen Portfolio-Projekt – sowohl technisch als auch hinsichtlich Innovation in der Immobilienmarktanalyse.
