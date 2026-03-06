---
title: "Python Basics 3 – Bedingungen"
description: "Mit if, elif und else reagiert dein Programm unterschiedlich auf verschiedene Situationen — das Herzstück jeder Programmlogik."
category: python
difficulty: grundlagen
date: 2026-03-03
readTime: "13 min"
draft: false
---

Bisher haben deine Programme immer das Gleiche gemacht — Schritt für Schritt von oben nach unten. Jetzt lernst du, wie ein Programm entscheiden kann: _Wenn das zutrifft, mache dies — sonst mache das._ Das ist die Grundlage für jede Spiellogik, jede App, jedes sinnvolle Programm.

## 1. if — die einfache Bedingung

```python
alter = 18

if alter >= 18:
    print("Du darfst rein!")
```

**Syntax:**

- Nach `if` kommt die Bedingung (ein Vergleich)
- Die Zeile endet mit einem Doppelpunkt `:`
- Der Code darunter wird **eingerückt** (4 Leerzeichen oder Tab) — das ist Pflicht in Python!

```python
punkte = 85

if punkte >= 90:
    print("Ausgezeichnet!")
    print("Du hast einen Bonus verdient.")  # Auch diese Zeile gehört zum if-Block
```

---

## 2. else — der Alternativfall

```python
alter = 15

if alter >= 18:
    print("Du darfst rein!")
else:
    print("Leider noch nicht alt genug.")
```

`else` wird ausgeführt, wenn die Bedingung `False` ist. Es braucht keine eigene Bedingung.

---

## 3. elif — mehrere Fälle

Wenn es mehr als zwei Möglichkeiten gibt, nutzt du `elif` (kurz für "else if"):

```python
punkte = 72

if punkte >= 90:
    print("Note: Sehr gut")
elif punkte >= 75:
    print("Note: Gut")
elif punkte >= 60:
    print("Note: Befriedigend")
elif punkte >= 50:
    print("Note: Ausreichend")
else:
    print("Note: Nicht bestanden")
```

Python prüft die Bedingungen von oben nach unten und führt den **ersten** zutreffenden Block aus. Der Rest wird übersprungen.

---

## 4. Vergleichsoperatoren (Wiederholung)

```python
x = 10

print(x == 10)   # True  — gleich
print(x != 5)    # True  — ungleich
print(x > 5)     # True  — größer
print(x < 20)    # True  — kleiner
print(x >= 10)   # True  — größer oder gleich
print(x <= 9)    # False — kleiner oder gleich
```

---

## 5. Logische Operatoren

Mit `and`, `or` und `not` kannst du Bedingungen kombinieren:

### and — beide müssen zutreffen

```python
alter = 20
hat_ticket = True

if alter >= 18 and hat_ticket:
    print("Willkommen!")
else:
    print("Kein Einlass.")
```

### or — mindestens eine muss zutreffen

```python
ist_mitglied = False
hat_gutschein = True

if ist_mitglied or hat_gutschein:
    print("Du bekommst 20% Rabatt!")
```

### not — kehrt den Wahrheitswert um

```python
spiel_laeuft = False

if not spiel_laeuft:
    print("Spiel starten...")
```

### Kombinationen

```python
alter = 25
punkte = 150
ist_gesperrt = False

if alter >= 18 and punkte >= 100 and not ist_gesperrt:
    print("Zugang zu Level 2 freigeschaltet!")
```

---

## 6. Bedingungen mit Strings

```python
passwort = input("Passwort: ")

if passwort == "geheim123":
    print("Eingeloggt!")
else:
    print("Falsches Passwort.")
```

Mit `in` prüfst du, ob ein Text in einem anderen vorkommt:

```python
antwort = input("Magst du Python? (ja/nein) ")

if "ja" in antwort.lower():
    print("Super, dann bist du hier richtig!")
```

`.lower()` wandelt den Text in Kleinbuchstaben um — damit funktioniert die Prüfung auch bei "Ja", "JA" oder "jA".

---

## 7. Verschachtelte Bedingungen

Du kannst `if`-Blöcke ineinander verschachteln:

```python
alter = 20
hat_ausweis = True

if alter >= 18:
    if hat_ausweis:
        print("Einlass gewährt.")
    else:
        print("Bitte Ausweis vorzeigen.")
else:
    print("Mindestalter nicht erreicht.")
```

Tipp: Wenn du zu viele Verschachtelungen hast, überlege ob du sie mit `and` vereinfachen kannst.

---

## Alles zusammen — ein kleines Programm

```python
# Einfacher Login-Checker
print("=== Login ===")
benutzername = input("Benutzername: ")
passwort = input("Passwort: ")

if benutzername == "philipp" and passwort == "python123":
    print(f"\nWillkommen, {benutzername}! Du bist eingeloggt.")
elif benutzername == "philipp":
    print("\nBenutzername korrekt, aber falsches Passwort.")
else:
    print("\nBenutzername nicht gefunden.")
```

---

## Übungen

### Übung 1 — Ampel

Schreibe ein Programm, das eine Farbe abfragt ("rot", "gelb" oder "grün") und die passende Bedeutung ausgibt.

**Beispiel-Ausgabe:**

```
Farbe: grün
→ Fahren!
```

<details>
<summary>💡 Lösung anzeigen</summary>

```python
farbe = input("Farbe: ").lower()

if farbe == "grün" or farbe == "gruen":
    print("→ Fahren!")
elif farbe == "gelb":
    print("→ Vorsicht, gleich rot!")
elif farbe == "rot":
    print("→ Stopp!")
else:
    print("→ Unbekannte Farbe.")
```

</details>

---

### Übung 2 — Schaltjahr

Ein Jahr ist ein Schaltjahr, wenn es durch 4 teilbar ist — außer es ist durch 100 teilbar, es sei denn, es ist auch durch 400 teilbar.

Frage eine Jahreszahl ab und gib aus, ob es ein Schaltjahr ist.

**Beispiele:** 2024 → Schaltjahr | 1900 → kein Schaltjahr | 2000 → Schaltjahr

<details>
<summary>💡 Lösung anzeigen</summary>

```python
jahr = int(input("Jahreszahl: "))

if (jahr % 4 == 0 and jahr % 100 != 0) or (jahr % 400 == 0):
    print(f"{jahr} ist ein Schaltjahr.")
else:
    print(f"{jahr} ist kein Schaltjahr.")
```

</details>

---

### Übung 3 — Notenrechner

Frage eine Punktzahl ab (0–100) und gib die entsprechende Note aus:

- 90–100: Sehr gut (1)
- 75–89: Gut (2)
- 60–74: Befriedigend (3)
- 50–59: Ausreichend (4)
- 0–49: Nicht bestanden (5)

Gib zusätzlich aus, ob die Prüfung bestanden wurde oder nicht.

<details>
<summary>💡 Lösung anzeigen</summary>

```python
punkte = int(input("Punkte (0-100): "))

if punkte < 0 or punkte > 100:
    print("Ungültige Punktzahl!")
elif punkte >= 90:
    note = 1
    bezeichnung = "Sehr gut"
elif punkte >= 75:
    note = 2
    bezeichnung = "Gut"
elif punkte >= 60:
    note = 3
    bezeichnung = "Befriedigend"
elif punkte >= 50:
    note = 4
    bezeichnung = "Ausreichend"
else:
    note = 5
    bezeichnung = "Nicht bestanden"

if punkte >= 0 and punkte <= 100:
    print(f"Note: {note} — {bezeichnung}")
    if note <= 4:
        print("Bestanden!")
    else:
        print("Leider nicht bestanden.")
```

</details>

---

Im nächsten Teil lernst du Schleifen — damit dein Programm Aufgaben automatisch wiederholen kann, ohne dass du denselben Code 100 Mal schreiben musst.
