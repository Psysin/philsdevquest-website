---
title: "Python Basics 5 – Funktionen & Listen"
description: "Funktionen halten deinen Code sauber und wiederverwendbar. Listen speichern mehrere Werte auf einmal. Zusammen öffnen sie die Tür zu echten Projekten."
category: python
difficulty: grundlagen
date: 2026-03-05
readTime: "16 min"
draft: false
---

Du hast jetzt die Grundbausteine von Python — Variablen, Bedingungen, Schleifen. In diesem letzten Basics-Teil lernst du zwei Konzepte, die deine Programme auf das nächste Level heben: **Listen** zum Speichern mehrerer Werte und **Funktionen** zum Strukturieren deines Codes.

## 1. Listen

Bisher konntest du in einer Variable nur einen Wert speichern. Eine Liste speichert mehrere Werte auf einmal:

```python
# Eine Variable pro Wert — umständlich:
spieler1 = "Alice"
spieler2 = "Bob"
spieler3 = "Charlie"

# Eine Liste — viel besser:
spieler = ["Alice", "Bob", "Charlie"]
```

### Liste erstellen

```python
zahlen = [1, 2, 3, 4, 5]
namen = ["Python", "Godot", "VS Code"]
gemischt = [42, "Hallo", True, 3.14]  # Verschiedene Typen erlaubt
leer = []                              # Leere Liste
```

### Auf Elemente zugreifen

Listen sind **nullindexiert** — das erste Element hat den Index 0:

```python
farben = ["rot", "grün", "blau"]

print(farben[0])   # rot
print(farben[1])   # grün
print(farben[2])   # blau
print(farben[-1])  # blau (letztes Element)
print(farben[-2])  # grün (vorletztes Element)
```

### Elemente ändern

```python
punkte = [10, 20, 30]
punkte[1] = 99
print(punkte)  # [10, 99, 30]
```

### Elemente hinzufügen

```python
einkauf = ["Milch", "Brot"]
einkauf.append("Butter")    # Am Ende hinzufügen
print(einkauf)              # ['Milch', 'Brot', 'Butter']

einkauf.insert(1, "Käse")   # An Position 1 einfügen
print(einkauf)              # ['Milch', 'Käse', 'Brot', 'Butter']
```

### Elemente entfernen

```python
farben = ["rot", "grün", "blau", "grün"]

farben.remove("grün")   # Erstes "grün" entfernen
print(farben)           # ['rot', 'blau', 'grün']

entfernt = farben.pop() # Letztes Element entfernen und zurückgeben
print(entfernt)         # grün
print(farben)           # ['rot', 'blau']
```

### Nützliche Listen-Methoden

```python
zahlen = [3, 1, 4, 1, 5, 9, 2, 6]

print(len(zahlen))     # 8 — Anzahl der Elemente
print(min(zahlen))     # 1 — kleinster Wert
print(max(zahlen))     # 9 — größter Wert
print(sum(zahlen))     # 31 — Summe aller Werte
print(zahlen.count(1)) # 2 — wie oft kommt 1 vor?

zahlen.sort()
print(zahlen)          # [1, 1, 2, 3, 4, 5, 6, 9] — sortiert
```

### Über Listen iterieren

```python
namen = ["Alice", "Bob", "Charlie"]

for name in namen:
    print(f"Hallo, {name}!")
```

---

## 2. Funktionen

Eine Funktion ist ein benannter Code-Block, den du immer wieder aufrufen kannst. Statt denselben Code mehrfach zu schreiben, schreibst du ihn einmal und rufst ihn auf.

### Funktion definieren und aufrufen

```python
def begrüsse():
    print("Hallo!")
    print("Willkommen bei Python.")

# Funktion aufrufen:
begrüsse()
begrüsse()  # Beliebig oft aufrufbar
```

Das Schlüsselwort `def` definiert eine Funktion, gefolgt vom Namen und `():`.

### Parameter — Eingaben für die Funktion

```python
def begrüsse(name):
    print(f"Hallo, {name}!")

begrüsse("Philipp")  # Hallo, Philipp!
begrüsse("Alice")    # Hallo, Alice!
```

Mehrere Parameter:

```python
def addiere(a, b):
    print(f"{a} + {b} = {a + b}")

addiere(10, 5)   # 10 + 5 = 15
addiere(3, 7)    # 3 + 7 = 10
```

### return — Wert zurückgeben

Oft soll eine Funktion nicht nur etwas ausgeben, sondern einen Wert zurückliefern:

```python
def addiere(a, b):
    return a + b

ergebnis = addiere(10, 5)
print(ergebnis)  # 15

# Du kannst das Ergebnis direkt weiternutzen:
print(addiere(3, 7) * 2)  # 20
```

```python
def berechne_bmi(gewicht, groesse):
    bmi = gewicht / (groesse ** 2)
    return round(bmi, 2)

mein_bmi = berechne_bmi(75, 1.80)
print(f"Dein BMI: {mein_bmi}")  # Dein BMI: 23.15
```

### Standardwerte für Parameter

```python
def begrüsse(name, sprache="de"):
    if sprache == "de":
        print(f"Hallo, {name}!")
    elif sprache == "en":
        print(f"Hello, {name}!")

begrüsse("Philipp")        # Hallo, Philipp! (Standard: de)
begrüsse("Alice", "en")    # Hello, Alice!
```

---

## 3. Funktionen + Listen = 🔥

Zusammen sind Funktionen und Listen sehr mächtig:

```python
def durchschnitt(zahlen):
    if len(zahlen) == 0:
        return 0
    return sum(zahlen) / len(zahlen)

noten = [85, 92, 78, 90, 88]
print(f"Durchschnitt: {durchschnitt(noten):.1f}")  # Durchschnitt: 86.6
```

```python
def filtern(zahlen, minimum):
    ergebnis = []
    for zahl in zahlen:
        if zahl >= minimum:
            ergebnis.append(zahl)
    return ergebnis

werte = [3, 17, 5, 42, 8, 23, 1]
grosse_werte = filtern(werte, 10)
print(grosse_werte)  # [17, 42, 23]
```

---

## Alles zusammen — Highscore-Liste

```python
def zeige_highscores(scores):
    print("\n=== Highscores ===")
    scores.sort(reverse=True)  # Größte zuerst
    for i, score in enumerate(scores, 1):
        print(f"  {i}. Platz: {score} Punkte")

def füge_score_hinzu(scores, neuer_score):
    scores.append(neuer_score)
    print(f"Score {neuer_score} hinzugefügt!")

# Programm
highscores = [1200, 850, 2100, 970]

while True:
    print("\n1 = Score hinzufügen | 2 = Highscores anzeigen | 3 = Beenden")
    wahl = input("Wahl: ")

    if wahl == "1":
        score = int(input("Score: "))
        füge_score_hinzu(highscores, score)
    elif wahl == "2":
        zeige_highscores(highscores)
    elif wahl == "3":
        print("Tschüss!")
        break
    else:
        print("Ungültige Eingabe.")
```

---

## Übungen

### Übung 1 — Einkaufsliste

Schreibe ein Programm mit einer Einkaufsliste. Der Nutzer kann:
- `hinzufügen` — ein Produkt zur Liste hinzufügen
- `anzeigen` — alle Produkte anzeigen
- `fertig` — Programm beenden

Nutze eine Funktion für jede Aktion.

<details>
<summary>💡 Lösung anzeigen</summary>

```python
def hinzufügen(liste, produkt):
    liste.append(produkt)
    print(f"'{produkt}' hinzugefügt.")

def anzeigen(liste):
    if len(liste) == 0:
        print("Die Liste ist leer.")
    else:
        print("\nEinkaufsliste:")
        for i, produkt in enumerate(liste, 1):
            print(f"  {i}. {produkt}")

einkaufsliste = []

while True:
    aktion = input("\n[hinzufügen / anzeigen / fertig]: ").lower()

    if aktion == "hinzufügen":
        produkt = input("Produkt: ")
        hinzufügen(einkaufsliste, produkt)
    elif aktion == "anzeigen":
        anzeigen(einkaufsliste)
    elif aktion == "fertig":
        print("Viel Spaß beim Einkaufen!")
        break
    else:
        print("Unbekannte Eingabe.")
```

</details>

---

### Übung 2 — Notendurchschnitt

Schreibe eine Funktion `notenrechner(noten)`, die eine Liste von Noten (1–6) entgegennimmt und folgendes zurückgibt und ausgibt:
- Den Durchschnitt (auf 2 Stellen gerundet)
- Die beste Note
- Die schlechteste Note
- Ob der Schüler bestanden hat (Durchschnitt ≤ 4.0)

<details>
<summary>💡 Lösung anzeigen</summary>

```python
def notenrechner(noten):
    durchschnitt = round(sum(noten) / len(noten), 2)
    beste = min(noten)
    schlechteste = max(noten)
    bestanden = durchschnitt <= 4.0

    print(f"Durchschnitt:  {durchschnitt}")
    print(f"Beste Note:    {beste}")
    print(f"Schlechteste:  {schlechteste}")
    print(f"Bestanden:     {'Ja' if bestanden else 'Nein'}")

    return durchschnitt

meine_noten = [2, 3, 1, 4, 2, 3]
notenrechner(meine_noten)
```

</details>

---

### Übung 3 — Wörter zählen

Schreibe eine Funktion `analysiere(text)`, die einen Text entgegennimmt und folgendes ausgibt:
- Anzahl der Zeichen
- Anzahl der Wörter
- Das längste Wort

**Tipp:** `text.split()` zerlegt einen String in eine Liste von Wörtern.

<details>
<summary>💡 Lösung anzeigen</summary>

```python
def analysiere(text):
    zeichen = len(text)
    wörter = text.split()
    anzahl_wörter = len(wörter)

    längstes = ""
    for wort in wörter:
        if len(wort) > len(längstes):
            längstes = wort

    print(f"Zeichen:       {zeichen}")
    print(f"Wörter:        {anzahl_wörter}")
    print(f"Längstes Wort: {längstes}")

mein_text = input("Text eingeben: ")
analysiere(mein_text)
```

</details>

---

## 🎉 Python Basics abgeschlossen!

Du hast jetzt alle Grundlagen:

- ✅ Variablen & Datentypen
- ✅ Operatoren & Eingaben
- ✅ Bedingungen
- ✅ Schleifen
- ✅ Funktionen & Listen

Das reicht für ein erstes echtes Mini-Projekt. Als nächstes bauen wir damit ein kleines, vollständiges Python-Programm — Schritt für Schritt.
