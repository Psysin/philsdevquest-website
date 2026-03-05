---
title: "Python Basics 4 – Schleifen"
description: "Mit while und for lässt du Python Aufgaben automatisch wiederholen — von einfachen Zählern bis zu nützlichen Programmen."
category: python
difficulty: grundlagen
date: 2026-03-04
readTime: "15 min"
draft: false
---

Stell dir vor, du willst "Hallo!" 100 Mal ausgeben. Du könntest 100 `print()`-Zeilen schreiben — oder eine Schleife benutzen. Schleifen sind eines der mächtigsten Konzepte in der Programmierung: sie lassen Code automatisch wiederholen.

## 1. while — solange eine Bedingung gilt

Die `while`-Schleife läuft so lange, bis ihre Bedingung `False` wird:

```python
zähler = 1

while zähler <= 5:
    print(f"Durchgang {zähler}")
    zähler += 1

print("Fertig!")
```

**Ausgabe:**
```
Durchgang 1
Durchgang 2
Durchgang 3
Durchgang 4
Durchgang 5
Fertig!
```

**Achtung — Endlosschleife!** Wenn die Bedingung nie `False` wird, läuft die Schleife ewig. Stelle immer sicher, dass sich die Bedingung irgendwann ändert:

```python
# GEFÄHRLICH — läuft ewig!
x = 1
while x > 0:
    print(x)
    # x wird nie kleiner → Endlosschleife!
```

Mit `Strg + C` kannst du ein laufendes Python-Programm abbrechen.

### while für Benutzereingaben

`while` ist ideal, um Eingaben so lange zu wiederholen, bis sie gültig sind:

```python
passwort = ""

while passwort != "geheim":
    passwort = input("Passwort: ")

print("Zugang gewährt!")
```

---

## 2. for — über eine Sequenz iterieren

Die `for`-Schleife geht eine Sequenz (z.B. eine Zahlenreihe oder einen Text) Schritt für Schritt durch:

```python
for i in range(5):
    print(i)
```

**Ausgabe:** `0 1 2 3 4` (range startet bei 0!)

### range() im Detail

```python
range(5)       # 0, 1, 2, 3, 4
range(1, 6)    # 1, 2, 3, 4, 5
range(0, 10, 2)  # 0, 2, 4, 6, 8 (Schrittweite 2)
range(10, 0, -1) # 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 (rückwärts)
```

### Über einen String iterieren

```python
wort = "Python"

for buchstabe in wort:
    print(buchstabe)
```

**Ausgabe:** `P y t h o n` (jeder Buchstabe einzeln)

---

## 3. break — Schleife vorzeitig beenden

Mit `break` kannst du eine Schleife sofort abbrechen, auch wenn die Bedingung noch gilt:

```python
for zahl in range(1, 11):
    if zahl == 6:
        print("Stopp bei 6!")
        break
    print(zahl)
```

**Ausgabe:** `1 2 3 4 5 Stopp bei 6!`

Praktisches Beispiel:

```python
# Suche nach einem Wert
gesucht = 7
zahlen = [3, 1, 7, 5, 9, 2]

for zahl in zahlen:
    if zahl == gesucht:
        print(f"{gesucht} gefunden!")
        break
```

---

## 4. continue — Durchgang überspringen

Mit `continue` überspringst du den aktuellen Durchgang und machst mit dem nächsten weiter:

```python
for i in range(1, 11):
    if i % 2 == 0:  # Gerade Zahlen überspringen
        continue
    print(i)
```

**Ausgabe:** `1 3 5 7 9` (nur ungerade Zahlen)

---

## 5. Verschachtelte Schleifen

Eine Schleife innerhalb einer Schleife — klassisch für Tabellen oder Raster:

```python
for zeile in range(1, 4):
    for spalte in range(1, 4):
        print(f"{zeile}x{spalte}={zeile*spalte}", end="  ")
    print()  # Zeilenumbruch nach jeder Zeile
```

**Ausgabe:**
```
1x1=1  1x2=2  1x3=3
2x1=2  2x2=4  2x3=6
3x1=3  3x2=6  3x3=9
```

---

## 6. while vs. for — wann was?

| | `while` | `for` |
|---|---|---|
| **Wann?** | Wenn unbekannt ist, wie oft die Schleife läuft | Wenn bekannt ist, wie oft (oder über was iteriert wird) |
| **Typisch für** | Benutzereingaben, Spielschleifen, Warten auf Ereignisse | Zahlenreihen, Listen durchgehen, Texte verarbeiten |

```python
# for: ich weiß, ich will 10 Mal zählen
for i in range(10):
    print(i)

# while: ich weiß nicht, wie viele Versuche der Nutzer braucht
versuche = 0
while eingabe != "richtig":
    eingabe = input("Antwort: ")
    versuche += 1
```

---

## Alles zusammen — Einmaleins-Generator

```python
print("=== Einmaleins-Generator ===")
zahl = int(input("Welche Einmaleins-Reihe? "))

print(f"\nDie {zahl}er-Reihe:")
for i in range(1, 11):
    print(f"  {zahl} × {i:2} = {zahl * i:3}")
```

Das `:2` und `:3` in den f-Strings sorgt für rechtsbündige Ausrichtung mit Mindestbreite.

---

## Übungen

### Übung 1 — Countdown

Schreibe ein Programm, das eine Zahl abfragt und dann von dieser Zahl bis 1 runterzählt, und am Ende "Start!" ausgibt.

**Beispiel:**
```
Zahl: 5
5
4
3
2
1
Start! 🚀
```

<details>
<summary>💡 Lösung anzeigen</summary>

```python
start = int(input("Zahl: "))

for i in range(start, 0, -1):
    print(i)

print("Start! 🚀")

# Alternative mit while:
# zahl = start
# while zahl > 0:
#     print(zahl)
#     zahl -= 1
# print("Start! 🚀")
```

</details>

---

### Übung 2 — Zahlen-Ratespiel

Schreibe ein Programm, das den Nutzer eine Zahl zwischen 1 und 10 raten lässt. Die gesuchte Zahl ist 7. Das Programm soll so lange fragen, bis die richtige Zahl eingegeben wird, und danach zählen, wie viele Versuche es gebraucht hat.

<details>
<summary>💡 Lösung anzeigen</summary>

```python
gesucht = 7
versuche = 0
geraten = False

while not geraten:
    eingabe = int(input("Rate eine Zahl (1-10): "))
    versuche += 1

    if eingabe == gesucht:
        geraten = True
        print(f"Richtig! Du hast {versuche} Versuch(e) gebraucht.")
    elif eingabe < gesucht:
        print("Zu niedrig!")
    else:
        print("Zu hoch!")
```

</details>

---

### Übung 3 — FizzBuzz

Klassisches Programmierübung: Gib alle Zahlen von 1 bis 30 aus — aber:
- Wenn die Zahl durch 3 teilbar ist, gib "Fizz" aus
- Wenn sie durch 5 teilbar ist, gib "Buzz" aus
- Wenn sie durch beides teilbar ist, gib "FizzBuzz" aus

**Beispiel:** `1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz 13 14 FizzBuzz ...`

<details>
<summary>💡 Lösung anzeigen</summary>

```python
for i in range(1, 31):
    if i % 3 == 0 and i % 5 == 0:
        print("FizzBuzz")
    elif i % 3 == 0:
        print("Fizz")
    elif i % 5 == 0:
        print("Buzz")
    else:
        print(i)
```

**Tipp:** Die Reihenfolge ist wichtig — FizzBuzz muss vor Fizz und Buzz geprüft werden!

</details>

---

Fast geschafft mit den Basics! Im letzten Teil lernst du Funktionen und Listen — damit kannst du deinen Code strukturieren und Daten speichern, was die Tür zu echten kleinen Projekten öffnet.

➡️ **Weiter zu: Python Basics 5 – Funktionen & Listen**
