# Tätigkeitsbericht (Stand: 29. Juni 2025)

## Erledigte Aufgaben:

1. Vollständige Ausführung der Frontend-Tests (Vitest) und Überprüfung der Projektausführung.
2. Durchführung von Linting und Prettier im gesamten Frontend-Projekt und Behebung aller Fehler und Warnungen.
3. Ergänzung der npm-Skripte für Prettier (format und format:check).
4. Manuelle Entfernung der letzten ESLint-Warnung.
5. Ausführung der Backend-Tests (JUnit) und Behebung des Kompilierungsfehlers durch Hinzufügen von JpaSpecificationExecutor zu HouseRepository.
6. Sicherstellung des erfolgreichen Builds und aller Backend-Tests.
7. **Hinweis:** Bei Projekten mit mehreren Teilprojekten (z.B. Backend und Frontend) müssen alle Befehle wie `npm run dev` oder `npm install` immer im jeweiligen Unterordner (z.B. `immoinsight_frontend`) ausgeführt werden, da sich die `package.json` nur dort befindet. Gleiches gilt für Backend-Befehle im Ordner `immoinsight_backend`.
8. **Schritte zur Aktivierung der React Developer Tools (laut offizieller Dokumentation):**
   - Für Google Chrome: React Developer Tools Erweiterung aus dem Chrome Web Store installieren.
   - Für andere Browser (z.B. Safari):
     1. Installation des Tools mit folgendem Befehl:
        ```
        npm install -g react-devtools
        # oder
        yarn global add react-devtools
        ```
     2. Starten Sie das Tool im Terminal:
        ```
        react-devtools
        ```
     3. Fügen Sie folgendes Skript am Anfang des <head> Ihrer Website ein:
        ```html
        <script src="http://localhost:8097"></script>
        ```
   - Dieses Skript sollte nur in der Entwicklungsumgebung verwendet und für Produktion entfernt werden.
9. **Erneute Ausführung von Lint und Prettier:**
   - Mit `npm run lint` und `npm run format:check` im Ordner `immoinsight_frontend` wurde sichergestellt, dass keine Fehler oder Warnungen im Code vorhanden sind und alle Dateien dem Styleguide entsprechen.
10. **Hinzufügen des Vitest-Testskripts:**
    - Folgendes Skript wurde zu den scripts in package.json hinzugefügt:
      ```json
      "test": "vitest run"
      ```
    - Anschließend wurden mit `npm test` die Unit-Tests im Frontend ausgeführt und der Haupttest (renders main dashboard heading) erfolgreich bestanden.
    - Es erschien eine Warnung bezüglich der fehlenden Implementierung von HTMLCanvasElement.prototype.getContext in jsdom, die das Testergebnis jedoch nicht beeinflusste.
11. **Ausführung der JUnit-Tests im Backend:**
    - Mit `./gradlew test` im Ordner `immoinsight_backend` wurden die JUnit-Tests ausgeführt und das Build erfolgreich abgeschlossen.
12. **Beispiel für Fehler bei falschem Pfad:**
    - Werden npm- oder gradle-Befehle im falschen Verzeichnis ausgeführt (z.B. im Projekt-Root), erscheinen Fehler wie "Could not read package.json". Immer vor dem Ausführen der Befehle ins richtige Verzeichnis wechseln!

---

Diese Datei wird nach jedem wichtigen Schritt aktualisiert, um den Entwicklungsfortschritt transparent und nachvollziehbar zu dokumentieren.
