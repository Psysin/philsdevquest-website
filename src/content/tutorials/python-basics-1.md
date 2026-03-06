---
title: "Python Basics 1 – Erste Schritte"
description: "Dein Einstieg in Python: print(), Kommentare, Variablen und die wichtigsten Datentypen — mit Beispielen und Übungen."
category: python
difficulty: einsteiger
date: 2026-03-01
readTime: "12 min"
draft: false
---

Willkommen bei Python Basics! In diesem ersten Teil lernst du die absoluten Grundlagen — die Dinge, die du in jedem Python-Programm brauchen wirst. Kein Vorwissen nötig.

## Was ist Python?

Python ist eine Programmiersprache, die sich durch eine sehr lesbare Syntax auszeichnet. Code sieht fast aus wie normales Englisch. Das macht Python ideal für Einsteiger — und trotzdem so mächtig, dass es in der KI-Forschung, bei großen Unternehmen und für Spieleentwicklung eingesetzt wird.

Ein erstes Programm sieht so aus:

```python
print("Hallo, Welt!")
```

Das war's. Führst du das aus, erscheint `Hallo, Welt!` auf dem Bildschirm.

---

## 1. print() — Ausgaben erzeugen

`print()` ist die Funktion zum Anzeigen von Text und Werten. Du wirst sie in fast jedem Programm benutzen.

```python
print("Hallo!")
print("Ich lerne Python.")
print(42)
print(3.14)
```

Du kannst auch mehrere Werte in einem `print()` ausgeben:

```python
print("Ich bin", 25, "Jahre alt.")
# Ausgabe: Ich bin 25 Jahre alt.
```

---

## 2. Kommentare

Kommentare sind Notizen im Code — Python ignoriert sie komplett. Sie helfen dir (und anderen), den Code zu verstehen.

```python
# Das ist ein Kommentar
print("Dieser Code wird ausgeführt")  # Kommentar am Ende einer Zeile

# Kommentare nutze ich um zu erklären, was der Code macht:
# Gibt den Begrüßungstext aus
print("Willkommen!")
```

Gewöhne dir an, Kommentare zu schreiben — du wirst dir selbst danken, wenn du alten Code wieder liest.

---

## 3. Variablen

Eine Variable ist ein benannter Speicherplatz für einen Wert. Du kannst dir eine Variable wie eine beschriftete Box vorstellen.

```python
name = "Philipp"
alter = 25
groesse = 1.82

print(name)    # Philipp
print(alter)   # 25
print(groesse) # 1.82
```

**Regeln für Variablennamen:**

- Nur Buchstaben, Zahlen und Unterstriche
- Darf nicht mit einer Zahl beginnen
- Groß- und Kleinschreibung wird unterschieden (`name` ≠ `Name`)
- Keine Python-Schlüsselwörter wie `print`, `if`, `for`

```python
# Gut:
spieler_name = "Alex"
punkte_gesamt = 100

# Schlecht:
1name = "Alex"      # Fehler!
print = "test"      # Überschreibt die eingebaute Funktion!
```

Variablen können jederzeit überschrieben werden:

```python
punkte = 0
print(punkte)  # 0

punkte = 10
print(punkte)  # 10

punkte = punkte + 5
print(punkte)  # 15
```

---

## 4. Datentypen

Python unterscheidet verschiedene Arten von Werten — sogenannte Datentypen.

### int — Ganze Zahlen

```python
leben = 3
level = 42
temperatur = -5
```

### float — Kommazahlen

```python
geschwindigkeit = 9.8
preis = 19.99
pi = 3.14159
```

**Wichtig:** Python nutzt einen Punkt als Dezimaltrennzeichen, kein Komma.

### str — Text (Strings)

```python
name = "Python"
begruessung = 'Hallo!'  # Einfache oder doppelte Anführungszeichen — beides geht
leer = ""               # Leerer String
```

### bool — Wahrheitswerte

```python
ist_eingeloggt = True
spiel_laeuft = False
```

`True` und `False` werden immer großgeschrieben. Du wirst bool-Werte später bei Bedingungen intensiv nutzen.

### Den Datentyp prüfen

Mit `type()` kannst du herausfinden, welchen Datentyp eine Variable hat:

```python
x = 42
print(type(x))  # <class 'int'>

y = "Hallo"
print(type(y))  # <class 'str'>

z = 3.14
print(type(z))  # <class 'float'>
```

---

## 5. Variablen kombinieren

Du kannst Strings mit `+` zusammenfügen (das nennt man _konkatenieren_):

```python
vorname = "Phil"
nachname = "Dev"
vollname = vorname + " " + nachname
print(vollname)  # Phil Dev
```

Zahlen lassen sich natürlich auch verrechnen:

```python
a = 10
b = 3
print(a + b)  # 13
print(a - b)  # 7
print(a * b)  # 30
```

---

## Übungen

### Übung 1 — Visitenkarte

Erstelle drei Variablen: `name`, `beruf` und `hobby`. Gib dann einen Text aus, der alle drei Variablen verwendet.

**Beispiel-Ausgabe:**

```
Name: Philipp
Beruf: Projektmanager
Hobby: Game Development
```

<details>
<summary>💡 Lösung anzeigen</summary>

```python
name = "Philipp"
beruf = "Projektmanager"
hobby = "Game Development"

print("Name:", name)
print("Beruf:", beruf)
print("Hobby:", hobby)
```

</details>

---

### Übung 2 — Datentypen erraten

Was gibt dieser Code aus? Versuche es zuerst selbst, bevor du ihn ausführst.

```python
x = 5
y = 2
z = x + y
print(z)
print(type(z))

a = "5"
b = "2"
c = a + b
print(c)
print(type(c))
```

<details>
<summary>💡 Lösung anzeigen</summary>

```
7
<class 'int'>
52
<class 'str'>
```

`x + y` addiert zwei Zahlen → 7.
`a + b` verbindet zwei Strings → "52" (nicht 7!).
Das ist ein klassischer Anfängerfehler — Zahlen in Anführungszeichen sind Strings, keine Zahlen.

</details>

---

### Übung 3 — Tausch

Du hast zwei Variablen `a = 10` und `b = 20`. Schreibe Code, der die Werte tauscht, sodass am Ende `a = 20` und `b = 10` ist.

**Tipp:** Du brauchst eine dritte Hilfsvariable.

<details>
<summary>💡 Lösung anzeigen</summary>

```python
a = 10
b = 20

# Hilfsvariable zum Tauschen
temp = a
a = b
b = temp

print(a)  # 20
print(b)  # 10

# Python-Profi-Trick (geht auch in einer Zeile):
# a, b = b, a
```

</details>

---

Gut gemacht! Im nächsten Teil lernst du Operatoren, Benutzereingaben mit `input()` und wie du Text mit f-Strings formatierst — damit deine Programme interaktiv werden.
