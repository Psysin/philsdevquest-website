---
title: "Python Basics 2 – Operatoren & Eingaben"
description: "Rechnen in Python, Benutzereingaben mit input() und Text sauber formatieren mit f-Strings."
category: python
difficulty: einsteiger
date: 2026-03-02
readTime: "14 min"
draft: false
---

In Teil 1 hast du gelernt, wie man Variablen anlegt und Werte ausgibt. Jetzt wird's interaktiver: Du lernst, wie Python rechnet, wie dein Programm auf Benutzereingaben reagiert und wie du Text sauber formatierst.

## 1. Rechenoperatoren

Python kann wie ein Taschenrechner genutzt werden. Die wichtigsten Operatoren:

```python
a = 10
b = 3

print(a + b)   # 13  — Addition
print(a - b)   # 7   — Subtraktion
print(a * b)   # 30  — Multiplikation
print(a / b)   # 3.3333... — Division (immer float!)
print(a // b)  # 3   — Ganzzahldivision (ohne Rest)
print(a % b)   # 1   — Modulo (nur der Rest)
print(a ** b)  # 1000 — Potenz (10 hoch 3)
```

**Modulo ist besonders nützlich** — damit kannst du prüfen ob eine Zahl gerade oder ungerade ist:

```python
print(10 % 2)  # 0 → gerade
print(7 % 2)   # 1 → ungerade
```

### Kurzschreibweisen

Statt `punkte = punkte + 10` kannst du schreiben:

```python
punkte = 0
punkte += 10   # punkte = punkte + 10  → 10
punkte -= 3    # punkte = punkte - 3   → 7
punkte *= 2    # punkte = punkte * 2   → 14
punkte //= 3   # punkte = punkte // 3  → 4
```

---

## 2. Vergleichsoperatoren

Vergleichsoperatoren geben immer `True` oder `False` zurück:

```python
x = 10
y = 5

print(x == y)   # False — ist gleich?
print(x != y)   # True  — ist ungleich?
print(x > y)    # True  — größer?
print(x < y)    # False — kleiner?
print(x >= 10)  # True  — größer oder gleich?
print(x <= 9)   # False — kleiner oder gleich?
```

**Wichtig:** `==` vergleicht (zwei Gleichheitszeichen), `=` weist zu (ein Gleichheitszeichen). Das ist ein sehr häufiger Anfängerfehler.

```python
x = 5       # x bekommt den Wert 5
x == 5      # Fragt: Ist x gleich 5? → True
```

---

## 3. input() — Benutzereingaben

Mit `input()` kann dein Programm den Nutzer nach einer Eingabe fragen:

```python
name = input("Wie heißt du? ")
print("Hallo,", name)
```

**Wichtig:** `input()` gibt **immer einen String** zurück — auch wenn der Nutzer eine Zahl eingibt!

```python
eingabe = input("Gib eine Zahl ein: ")
print(type(eingabe))  # <class 'str'>
```

---

## 4. Typumwandlung

Um mit Eingaben rechnen zu können, musst du sie in den richtigen Datentyp umwandeln:

```python
# str → int (ganze Zahl)
alter_text = input("Wie alt bist du? ")
alter = int(alter_text)
print("In 10 Jahren bist du", alter + 10, "Jahre alt.")

# str → float (Kommazahl)
groesse_text = input("Wie groß bist du (in Metern)? ")
groesse = float(groesse_text)
print("Deine Größe:", groesse, "m")
```

Kurzform — alles in einer Zeile:

```python
alter = int(input("Wie alt bist du? "))
groesse = float(input("Wie groß bist du? "))
```

Weitere Umwandlungen:

```python
zahl = 42
text = str(zahl)     # int → str: "42"
komma = float(zahl)  # int → float: 42.0
wieder = int(3.9)    # float → int: 3 (keine Rundung, einfach abschneiden!)
```

---

## 5. f-Strings — Text elegant formatieren

f-Strings sind der modernste und einfachste Weg, Variablen in Text einzubauen. Einfach ein `f` vor die Anführungszeichen schreiben und Variablen in `{}` setzen:

```python
name = "Philipp"
alter = 25
stadt = "Hamburg"

print(f"Hallo, ich bin {name}, {alter} Jahre alt und komme aus {stadt}.")
# Ausgabe: Hallo, ich bin Philipp, 25 Jahre alt und komme aus Hamburg.
```

Du kannst in den `{}` auch direkt rechnen:

```python
preis = 19.99
menge = 3

print(f"Gesamtpreis: {preis * menge:.2f} €")
# Ausgabe: Gesamtpreis: 59.97 €
# Das :.2f rundet auf 2 Nachkommastellen
```

Vergleich der Methoden:

```python
name = "Philipp"
alter = 25

# Alt (umständlich):
print("Hallo " + name + ", du bist " + str(alter) + " Jahre alt.")

# Neu (f-String — viel besser!):
print(f"Hallo {name}, du bist {alter} Jahre alt.")
```

---

## Alles zusammen — ein kleines Programm

```python
# Einfacher Altersrechner
name = input("Wie heißt du? ")
alter = int(input("Wie alt bist du? "))
ziel_alter = int(input("Wie alt möchtest du werden? "))

jahre_noch = ziel_alter - alter

print(f"\nHallo {name}!")
print(f"Du bist {alter} Jahre alt.")
print(f"Bis du {ziel_alter} bist, sind es noch {jahre_noch} Jahre.")
```

Das `\n` erzeugt eine leere Zeile in der Ausgabe.

---

## Übungen

### Übung 1 — Taschenrechner

Schreibe ein Programm, das zwei Zahlen vom Nutzer abfragt und dann Summe, Differenz, Produkt und Quotienten ausgibt.

**Beispiel-Ausgabe:**
```
Erste Zahl: 10
Zweite Zahl: 4

10 + 4 = 14
10 - 4 = 6
10 * 4 = 40
10 / 4 = 2.5
```

<details>
<summary>💡 Lösung anzeigen</summary>

```python
a = float(input("Erste Zahl: "))
b = float(input("Zweite Zahl: "))

print(f"\n{a} + {b} = {a + b}")
print(f"{a} - {b} = {a - b}")
print(f"{a} * {b} = {a * b}")
print(f"{a} / {b} = {a / b}")
```

</details>

---

### Übung 2 — Sekunden umrechnen

Frage den Nutzer nach einer Anzahl von Sekunden und rechne sie in Stunden, Minuten und Sekunden um.

**Beispiel:** 3725 Sekunden → 1 Stunde, 2 Minuten, 5 Sekunden

**Tipp:** Nutze `//` und `%`.

<details>
<summary>💡 Lösung anzeigen</summary>

```python
sekunden_gesamt = int(input("Sekunden eingeben: "))

stunden = sekunden_gesamt // 3600
rest = sekunden_gesamt % 3600
minuten = rest // 60
sekunden = rest % 60

print(f"{sekunden_gesamt} Sekunden = {stunden} Stunde(n), {minuten} Minute(n), {sekunden} Sekunde(n)")
```

</details>

---

### Übung 3 — Body-Mass-Index

Schreibe ein Programm, das Größe (in Metern) und Gewicht (in kg) abfragt und den BMI berechnet und ausgibt.

**Formel:** BMI = Gewicht / (Größe × Größe)

**Beispiel-Ausgabe:**
```
Dein BMI beträgt: 21.60
```

<details>
<summary>💡 Lösung anzeigen</summary>

```python
gewicht = float(input("Gewicht in kg: "))
groesse = float(input("Größe in Metern (z.B. 1.75): "))

bmi = gewicht / (groesse ** 2)

print(f"Dein BMI beträgt: {bmi:.2f}")
```

</details>

---

Im nächsten Teil lernst du Bedingungen — damit dein Programm unterschiedlich reagieren kann, je nachdem was der Nutzer eingibt oder welchen Wert eine Variable hat.

➡️ **Weiter zu: Python Basics 3 – Bedingungen**
