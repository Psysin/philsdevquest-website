---
title: "Python Dictionaries: Der ultimative Guide für Anfänger"
description: "Lerne Python Dictionaries von Grund auf: Erstellen, Werte abrufen, ändern und warum sie für Datenverarbeitung unverzichtbar sind."
summary: "Dieser Artikel erklärt Python Dictionaries (Wörterbücher), eine der wichtigsten Datenstrukturen in Python. Du lernst, wie du Dictionaries erstellst, Werte über Schlüssel abrufst und änderst, und warum sie für Datenverarbeitung, Konfigurationsverwaltung und die Arbeit mit JSON/CSV-Dateien unverzichtbar sind. Besonders für Anfänger wichtig: Dictionaries sind veränderbar, schnell und..."
url: "https://realpython.com/python-dicts/"
source: "Real Python"
category: Python
tags: [
  "python",
  "dictionaries",
  "datenstrukturen",
  "anfänger",
  "grundlagen"
]
date: 2026-04-09
og_image: "https://raw.githubusercontent.com/Psysin/philsdevquest-website/main/public/images/news/2026-04-09-python-dictionaries-der-ultimative-guide-fuer-anfaenger.jpg"
---

## Was sind Dictionaries in Python?

Dictionaries gehören zu den mächtigsten Werkzeugen in Python. Stell dir ein echtes Wörterbuch vor: Du schlägst ein Wort nach und findest die passende Definition. Genau so funktionieren Python Dictionaries – nur dass du statt Wörtern beliebige Schlüssel verwendest, um auf zugehörige Werte zuzugreifen. Ein Dictionary speichert Daten in Schlüssel-Wert-Paaren, was sie unglaublich flexibel macht.

Im Gegensatz zu Listen, die über numerische Indizes arbeiten, kannst du bei Dictionaries aussagekräftige Schlüssel verwenden. Das macht deinen Code lesbarer und intuitiver. Wenn du beispielsweise Benutzerdaten speicherst, ist `benutzer['name']` deutlich verständlicher als `benutzer[0]`.

## Dictionaries erstellen und verwenden

Ein Dictionary erstellst du mit geschweiften Klammern. Jedes Schlüssel-Wert-Paar wird durch einen Doppelpunkt getrennt:

python
person = {
    'name': 'Anna',
    'alter': 28,
    'beruf': 'Entwicklerin'
}


Den Zugriff auf Werte erhältst du über die eckigen Klammern: `person['name']` gibt dir `'Anna'` zurück. Du kannst Werte auch ändern oder neue hinzufügen: `person['stadt'] = 'Berlin'` erweitert das Dictionary um ein neues Paar. Das Schöne daran: Dictionaries sind veränderbar (mutable), du kannst sie jederzeit anpassen, ohne ein komplett neues Dictionary erstellen zu müssen.

## Warum Dictionaries so wichtig sind

Dictionaries sind aus der modernen Python-Entwicklung nicht wegzudenken. Wenn du mit JSON-Daten arbeitest – und das wirst du früher oder später garantiert – dann arbeitest du automatisch mit Dictionaries, denn JSON wird in Python direkt als Dictionary dargestellt. Auch bei CSV-Dateien, API-Antworten oder Konfigurationsdateien kommst du um Dictionaries nicht herum.

Die Performance ist ein weiterer Pluspunkt. Dictionaries nutzen intern Hash-Tabellen, was bedeutet, dass der Zugriff auf einen Wert extrem schnell ist – egal ob dein Dictionary 10 oder 10.000 Einträge hat. Diese konstante Zugriffszeit macht sie ideal für große Datenmengen.

## Wichtige Eigenschaften und Methoden

Seit Python 3.7 behalten Dictionaries die Reihenfolge bei, in der du Elemente hinzufügst. Das war früher nicht garantiert und ist besonders praktisch, wenn die Reihenfolge deiner Daten wichtig ist. Du kannst dich also darauf verlassen, dass deine Einträge in der erwarteten Reihenfolge bleiben.

Python bietet dir zahlreiche nützliche Methoden für die Arbeit mit Dictionaries:

- `keys()` gibt alle Schlüssel zurück
- `values()` liefert alle Werte
- `items()` gibt Schlüssel-Wert-Paare zurück
- `get()` holt einen Wert, ohne einen Fehler zu werfen, falls der Schlüssel nicht existiert
- `pop()` entfernt ein Element und gibt dessen Wert zurück

Besonders `get()` ist für Anfänger wertvoll, weil es dir einen Standardwert zurückgeben kann, wenn ein Schlüssel fehlt: `person.get('email', 'keine Email')` gibt `'keine Email'` zurück, falls der Schlüssel nicht existiert.

## Dictionaries in der Praxis

Ein typisches Anwendungsbeispiel ist die Konfigurationsverwaltung. Statt dutzende einzelne Variablen zu definieren, packst du alle Einstellungen in ein Dictionary. Das macht deinen Code übersichtlicher und leichter wartbar. Auch beim Zählen von Elementen sind Dictionaries perfekt: Du kannst beispielsweise die Häufigkeit von Wörtern in einem Text zählen, indem du das Wort als Schlüssel und die Anzahl als Wert speicherst.

Beim Durchlaufen von Dictionaries mit Schleifen hast du mehrere Optionen. Am elegantesten ist oft die Verwendung von `items()`, die dir gleichzeitig Zugriff auf Schlüssel und Wert gibt:

python
for schluessel, wert in person.items():
    print(f'{schluessel}: {wert}')


## Häufige Anfängerfehler vermeiden

Ein klassischer Fehler ist der Versuch, auf einen nicht existierenden Schlüssel zuzugreifen. `person['email']` wirft einen KeyError, wenn dieser Schlüssel nicht existiert. Nutze stattdessen `get()` oder prüfe vorher mit `if 'email' in person:`, ob der Schlüssel vorhanden ist.

Achte auch darauf, dass Schlüssel unveränderbar sein müssen. Strings, Zahlen und Tupel funktionieren, Listen aber nicht. Der Grund liegt in der Hash-Funktion, die Python intern verwendet – nur unveränderbare Objekte können gehashed werden.

## Quelle

Dieser Artikel basiert auf dem ausführlichen Tutorial von Real Python über Python Dictionaries: [https://realpython.com/python-dicts/](https://realpython.com/python-dicts/)
