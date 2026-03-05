---
title: "Mini-Projekt – Zahlen-Ratespiel mit Highscore"
description: "Baue dein erstes Python-Programm von Grund auf: ein Zahlen-Ratespiel mit Hinweisen, Versuchszähler und einer Highscore-Liste. Alle Basics 1–5 in einem echten Projekt vereint."
category: python
difficulty: grundlagen
date: 2026-03-06
readTime: "30 min"
draft: false
---

# Mini-Projekt – Zahlen-Ratespiel mit Highscore

Du hast in den Python Basics 1–5 gelernt: Variablen, Datentypen, Operatoren, Eingaben, Bedingungen, Schleifen und Funktionen. Jetzt kommt alles zusammen – in deinem ersten echten Python-Programm.

Das Ziel: Ein Zahlen-Ratespiel, bei dem der Computer eine Zufallszahl wählt und du so wenig Versuche wie möglich brauchst, um sie zu erraten. Die besten Ergebnisse werden in einer Highscore-Liste gespeichert.

Am Ende dieses Tutorials kannst du:
- ein komplettes Python-Programm mit Funktionen strukturieren
- Zufallszahlen mit `import random` generieren
- Benutzereingaben validieren (fehlertolerante Eingabe!)
- eine Highscore-Liste mit Sortierung verwalten
- dein Programm mit einer Hauptmenü-Schleife steuern

> **Voraussetzungen:** Python Basics 1–5 (oder gleichwertiges Wissen). Du brauchst Python 3.x und einen Texteditor – VS Code empfohlen.

---

## So wird das Programm am Ende aussehen

```
===========================
   ZAHLEN-RATESPIEL 🎮
===========================

Was möchtest du tun?
1 - Neues Spiel starten
2 - Highscores anzeigen
3 - Beenden
→ 1

Ich denke an eine Zahl zwischen 1 und 100.
Du hast 10 Versuche. Viel Erfolg!

Versuch 1/10: 50
→ Zu hoch! Versuch es kleiner.

Versuch 2/10: 25
→ Zu niedrig! Versuch es größer.

Versuch 3/10: 37
→ 🎉 Richtig! Du hast die Zahl in 3 Versuchen erraten!

Dein Name für die Highscore-Liste: Philipp
Highscore gespeichert!
```

---

## Schritt 1 – Projektstruktur planen

Bevor wir Code schreiben, denken wir kurz nach: Was soll das Programm können? Und wie teilen wir es sinnvoll in Funktionen auf?

```
zahlenraten.py
│
├── zufallszahl_generieren()    → gibt eine Zufallszahl zurück
├── eingabe_holen()             → fragt nach einer Zahl, validiert die Eingabe
├── runde_spielen()             → eine komplette Spielrunde
├── highscores_anzeigen()       → gibt die Highscore-Liste aus
├── highscore_speichern()       → fügt einen neuen Eintrag hinzu und sortiert
└── hauptmenue()                → das Hauptmenü mit der Spielschleife
```

Diese Aufteilung ist ein wichtiges Prinzip: **Eine Funktion, eine Aufgabe.** So bleibt der Code übersichtlich und du kannst jede Funktion einzeln testen.

---

## Schritt 2 – Zufallszahlen mit `random`

Erstelle eine neue Datei `zahlenraten.py` und fange mit dem Import an:

```python
import random

def zufallszahl_generieren(minimum=1, maximum=100):
    """Gibt eine zufällige ganze Zahl zwischen minimum und maximum zurück."""
    return random.randint(minimum, maximum)

# Test:
zahl = zufallszahl_generieren()
print(f"Zufallszahl: {zahl}")
```

`random.randint(a, b)` gibt eine zufällige ganze Zahl zurück – inklusive `a` und `b`. Die Parameter `minimum=1` und `maximum=100` sind **Standardwerte**: Rufst du `zufallszahl_generieren()` ohne Argumente auf, wird automatisch zwischen 1 und 100 gewählt. Du kannst aber auch `zufallszahl_generieren(1, 50)` aufrufen.

Führe die Datei ein paarmal aus – du siehst jedes Mal eine andere Zahl.

---

## Schritt 3 – Fehlertolerante Eingabe

Wenn der Benutzer `"abc"` statt einer Zahl eingibt, würde `int(input(...))` mit einem Fehler abstürzen. Das verhindern wir mit einer eigenen Eingabe-Funktion:

```python
def eingabe_holen(minimum, maximum):
    """
    Fragt so lange nach einer Zahl, bis eine gültige Eingabe kommt.
    Gibt die eingegebene Zahl als Integer zurück.
    """
    while True:
        eingabe = input(f"Versuch ({minimum}–{maximum}): ")

        # Ist die Eingabe überhaupt eine Zahl?
        if not eingabe.isdigit():
            print("⚠️  Bitte gib eine ganze Zahl ein.")
            continue

        zahl = int(eingabe)

        # Liegt die Zahl im gültigen Bereich?
        if zahl < minimum or zahl > maximum:
            print(f"⚠️  Die Zahl muss zwischen {minimum} und {maximum} liegen.")
            continue

        return zahl
```

Die `while True`-Schleife läuft endlos weiter, bis `return` erreicht wird. `continue` springt direkt zum nächsten Schleifendurchlauf, ohne den restlichen Code auszuführen.

> **Warum `.isdigit()`?** Es prüft, ob alle Zeichen des Strings Ziffern sind. Es funktioniert für positive ganze Zahlen – für negative Zahlen bräuchten wir eine andere Prüfung. Da unser Spielbereich 1–100 ist, reicht das hier perfekt.

---

## Schritt 4 – Eine Spielrunde

Jetzt kommt das Herzstück: die eigentliche Spielrunde.

```python
def runde_spielen(maximum_versuche=10):
    """
    Führt eine komplette Spielrunde durch.
    Gibt die Anzahl der Versuche zurück, oder None wenn der Spieler verloren hat.
    """
    geheimzahl = zufallszahl_generieren()
    print(f"\nIch denke an eine Zahl zwischen 1 und 100.")
    print(f"Du hast {maximum_versuche} Versuche. Viel Erfolg!\n")

    for versuch in range(1, maximum_versuche + 1):
        print(f"Versuch {versuch}/{maximum_versuche}:", end=" ")
        tipp = eingabe_holen(1, 100)

        if tipp < geheimzahl:
            print("→ Zu niedrig! Versuch es größer.\n")
        elif tipp > geheimzahl:
            print("→ Zu hoch! Versuch es kleiner.\n")
        else:
            print(f"→ 🎉 Richtig! Du hast die Zahl in {versuch} Versuchen erraten!\n")
            return versuch  # Anzahl der Versuche zurückgeben

    # Schleife komplett durchgelaufen → verloren
    print(f"→ 😔 Leider verloren! Die gesuchte Zahl war {geheimzahl}.\n")
    return None  # None = kein gültiges Ergebnis für den Highscore
```

Zwei wichtige Details hier:

`range(1, maximum_versuche + 1)` erzeugt die Zahlen 1, 2, 3, ..., 10 – damit `versuch` als menschenlesbare Nummer angezeigt werden kann, nicht als 0, 1, 2, ...

`return None` signalisiert: der Spieler hat verloren. `None` ist Pythons Wert für „nichts" – wir nutzen ihn als klares Signal, dass kein Highscore gespeichert werden soll.

---

## Schritt 5 – Highscore-Liste

Die Highscore-Liste ist einfach eine Python-Liste mit Dictionaries. Kein Speichern in Dateien – alles läuft im Arbeitsspeicher, solange das Programm offen ist.

```python
# Globale Highscore-Liste (außerhalb aller Funktionen!)
highscores = []

def highscore_speichern(name, versuche):
    """Fügt einen neuen Highscore-Eintrag hinzu und sortiert die Liste."""
    eintrag = {
        "name": name,
        "versuche": versuche
    }
    highscores.append(eintrag)

    # Aufsteigend sortieren: weniger Versuche = besser
    highscores.sort(key=lambda x: x["versuche"])

def highscores_anzeigen():
    """Gibt die aktuelle Highscore-Liste formatiert aus."""
    print("\n🏆 HIGHSCORES")
    print("-" * 30)

    if len(highscores) == 0:
        print("Noch keine Einträge. Spiel eine Runde!")
    else:
        for platz, eintrag in enumerate(highscores, start=1):
            print(f"{platz:2}. {eintrag['name']:<15} {eintrag['versuche']} Versuche")

    print("-" * 30 + "\n")
```

Drei neue Dinge auf einmal – kurz erklärt:

**`lambda x: x["versuche"]`** ist eine anonyme Mini-Funktion. Sie sagt `sort()`: "Sortiere nach dem Wert des Schlüssels `versuche`." Weniger Versuche stehen weiter oben.

**`f"{platz:2}"`** formatiert `platz` auf mindestens 2 Zeichen Breite – Platz 1 und 2 sind bündig mit Platz 10.

**`f"{eintrag['name']:<15}`** richtet den Namen linksbündig auf 15 Zeichen aus – so stehen alle Versuchszahlen sauber untereinander.

---

## Schritt 6 – Das Hauptmenü

Jetzt verbinden wir alles mit einem Hauptmenü:

```python
def hauptmenue():
    """Zeigt das Hauptmenü an und steuert den Programmablauf."""
    print("===========================")
    print("   ZAHLEN-RATESPIEL 🎮")
    print("===========================\n")

    while True:
        print("Was möchtest du tun?")
        print("1 - Neues Spiel starten")
        print("2 - Highscores anzeigen")
        print("3 - Beenden")

        auswahl = input("→ ").strip()

        if auswahl == "1":
            ergebnis = runde_spielen()

            if ergebnis is not None:
                name = input("Dein Name für die Highscore-Liste: ").strip()
                if name == "":
                    name = "Anonym"
                highscore_speichern(name, ergebnis)
                print("Highscore gespeichert! ✅\n")

        elif auswahl == "2":
            highscores_anzeigen()

        elif auswahl == "3":
            print("Tschüss! Bis zum nächsten Mal 👋")
            break

        else:
            print("⚠️  Bitte gib 1, 2 oder 3 ein.\n")
```

`ergebnis is not None` prüft sauber, ob der Spieler gewonnen hat. Beachte: Wir schreiben `is not None`, nicht `!= None` – das ist Pythons bevorzugte Schreibweise für den Vergleich mit `None`.

`.strip()` entfernt versehentliche Leerzeichen vor und nach der Eingabe.

---

## Schritt 7 – Alles zusammenbauen

Jetzt fügen wir alles zusammen und starten das Programm. Die fertige `zahlenraten.py`:

```python
import random

# --- Globale Daten ---
highscores = []

# --- Funktionen ---

def zufallszahl_generieren(minimum=1, maximum=100):
    """Gibt eine zufällige ganze Zahl zwischen minimum und maximum zurück."""
    return random.randint(minimum, maximum)


def eingabe_holen(minimum, maximum):
    """Fragt so lange nach einer Zahl, bis eine gültige Eingabe kommt."""
    while True:
        eingabe = input(f"Versuch ({minimum}–{maximum}): ")

        if not eingabe.isdigit():
            print("⚠️  Bitte gib eine ganze Zahl ein.")
            continue

        zahl = int(eingabe)

        if zahl < minimum or zahl > maximum:
            print(f"⚠️  Die Zahl muss zwischen {minimum} und {maximum} liegen.")
            continue

        return zahl


def runde_spielen(maximum_versuche=10):
    """Führt eine komplette Spielrunde durch. Gibt Versuche zurück oder None."""
    geheimzahl = zufallszahl_generieren()
    print(f"\nIch denke an eine Zahl zwischen 1 und 100.")
    print(f"Du hast {maximum_versuche} Versuche. Viel Erfolg!\n")

    for versuch in range(1, maximum_versuche + 1):
        print(f"Versuch {versuch}/{maximum_versuche}:", end=" ")
        tipp = eingabe_holen(1, 100)

        if tipp < geheimzahl:
            print("→ Zu niedrig! Versuch es größer.\n")
        elif tipp > geheimzahl:
            print("→ Zu hoch! Versuch es kleiner.\n")
        else:
            print(f"→ 🎉 Richtig! Du hast die Zahl in {versuch} Versuchen erraten!\n")
            return versuch

    print(f"→ 😔 Leider verloren! Die gesuchte Zahl war {geheimzahl}.\n")
    return None


def highscore_speichern(name, versuche):
    """Fügt einen neuen Highscore-Eintrag hinzu und sortiert die Liste."""
    eintrag = {"name": name, "versuche": versuche}
    highscores.append(eintrag)
    highscores.sort(key=lambda x: x["versuche"])


def highscores_anzeigen():
    """Gibt die aktuelle Highscore-Liste formatiert aus."""
    print("\n🏆 HIGHSCORES")
    print("-" * 30)

    if len(highscores) == 0:
        print("Noch keine Einträge. Spiel eine Runde!")
    else:
        for platz, eintrag in enumerate(highscores, start=1):
            print(f"{platz:2}. {eintrag['name']:<15} {eintrag['versuche']} Versuche")

    print("-" * 30 + "\n")


def hauptmenue():
    """Zeigt das Hauptmenü und steuert den Programmablauf."""
    print("===========================")
    print("   ZAHLEN-RATESPIEL 🎮")
    print("===========================\n")

    while True:
        print("Was möchtest du tun?")
        print("1 - Neues Spiel starten")
        print("2 - Highscores anzeigen")
        print("3 - Beenden")

        auswahl = input("→ ").strip()

        if auswahl == "1":
            ergebnis = runde_spielen()

            if ergebnis is not None:
                name = input("Dein Name für die Highscore-Liste: ").strip()
                if name == "":
                    name = "Anonym"
                highscore_speichern(name, ergebnis)
                print("Highscore gespeichert! ✅\n")

        elif auswahl == "2":
            highscores_anzeigen()

        elif auswahl == "3":
            print("Tschüss! Bis zum nächsten Mal 👋")
            break

        else:
            print("⚠️  Bitte gib 1, 2 oder 3 ein.\n")


# --- Programm starten ---
if __name__ == "__main__":
    hauptmenue()
```

> **Was bedeutet `if __name__ == "__main__"`?** Das ist ein Python-Standard. Dieser Block wird nur ausgeführt, wenn du die Datei direkt startest (`python zahlenraten.py`). Wenn eine andere Datei deine Funktionen importiert, wird `hauptmenue()` nicht automatisch aufgerufen. Eine gute Gewohnheit von Anfang an!

Starte das Programm im Terminal:

```bash
python zahlenraten.py
```

---

## Was du gebaut hast – und welche Konzepte du genutzt hast

| Konzept | Wo im Projekt |
|---|---|
| `print()`, f-Strings | Überall – Ausgabe und Formatierung |
| Variablen, Datentypen | `geheimzahl`, `versuche`, `eintrag` |
| `input()` | `eingabe_holen()`, Namenseingabe |
| `if / elif / else` | Vergleiche im Spielablauf, Menüsteuerung |
| `while`-Schleife | Eingabe-Validierung, Hauptmenü |
| `for`-Schleife + `range()` | Versuchszähler in `runde_spielen()` |
| `break`, `continue`, `return` | Schleifensteuerung in mehreren Funktionen |
| Funktionen mit Parametern | Alle 5 Hauptfunktionen |
| Listen & Dictionaries | `highscores`-Liste mit Dictionary-Einträgen |
| `import random` | `zufallszahl_generieren()` |
| `sort()` mit `lambda` | Highscore-Sortierung |

---

## Zusammenfassung

Du hast dein erstes vollständiges Python-Programm geschrieben – mit sauberer Struktur, Fehlerbehandlung und einer Highscore-Liste. Das sind keine Spielzeug-Konzepte: genau so werden echte Programme aufgebaut.

Was du mitgenommen hast: **Teile ein großes Problem in kleine Funktionen auf. Eine Funktion, eine Aufgabe.** Mit dieser Denkweise kannst du jedes Programm angehen.

---

## Übungen

Teste dein Verständnis mit diesen drei Erweiterungen des Projekts. Schau erst in die Lösung, nachdem du es selbst probiert hast!

---

### Übung 1 – Schwierigkeitsgrad wählen

Erweitere das Hauptmenü um einen Schwierigkeitsgrad. Bevor eine Runde startet, soll der Spieler wählen können:
- **Leicht:** 15 Versuche, Zahlen 1–50
- **Normal:** 10 Versuche, Zahlen 1–100 (wie bisher)
- **Schwer:** 7 Versuche, Zahlen 1–200

**Hinweis:** `runde_spielen()` nimmt schon `maximum_versuche` als Parameter entgegen – du musst also auch `maximum` für den Zahlenbereich ergänzen und an `eingabe_holen()` und `zufallszahl_generieren()` weitergeben.

<details>
<summary>💡 Lösung anzeigen</summary>

```python
def schwierigkeit_waehlen():
    """Fragt nach dem Schwierigkeitsgrad und gibt (versuche, maximum) zurück."""
    print("\nWähle deinen Schwierigkeitsgrad:")
    print("1 - Leicht  (15 Versuche, 1–50)")
    print("2 - Normal  (10 Versuche, 1–100)")
    print("3 - Schwer  ( 7 Versuche, 1–200)")

    while True:
        auswahl = input("→ ").strip()
        if auswahl == "1":
            return 15, 50
        elif auswahl == "2":
            return 10, 100
        elif auswahl == "3":
            return 7, 200
        else:
            print("⚠️  Bitte 1, 2 oder 3 eingeben.")


def runde_spielen(maximum_versuche=10, maximum=100):
    geheimzahl = zufallszahl_generieren(1, maximum)
    print(f"\nIch denke an eine Zahl zwischen 1 und {maximum}.")
    print(f"Du hast {maximum_versuche} Versuche. Viel Erfolg!\n")

    for versuch in range(1, maximum_versuche + 1):
        print(f"Versuch {versuch}/{maximum_versuche}:", end=" ")
        tipp = eingabe_holen(1, maximum)

        if tipp < geheimzahl:
            print("→ Zu niedrig! Versuch es größer.\n")
        elif tipp > geheimzahl:
            print("→ Zu hoch! Versuch es kleiner.\n")
        else:
            print(f"→ 🎉 Richtig! Du hast die Zahl in {versuch} Versuchen erraten!\n")
            return versuch

    print(f"→ 😔 Leider verloren! Die gesuchte Zahl war {geheimzahl}.\n")
    return None


# Im Hauptmenü, bei Auswahl "1":
# versuche, maximum = schwierigkeit_waehlen()
# ergebnis = runde_spielen(versuche, maximum)
```

</details>

---

### Übung 2 – Top 3 hervorheben

Passe `highscores_anzeigen()` so an, dass die ersten drei Plätze mit einem Medaillen-Emoji hervorgehoben werden: 🥇 für Platz 1, 🥈 für Platz 2, 🥉 für Platz 3. Ab Platz 4 steht nur die Nummer.

**Hinweis:** Du kannst eine Liste mit den Emojis anlegen und per Index darauf zugreifen.

<details>
<summary>💡 Lösung anzeigen</summary>

```python
def highscores_anzeigen():
    print("\n🏆 HIGHSCORES")
    print("-" * 30)

    if len(highscores) == 0:
        print("Noch keine Einträge. Spiel eine Runde!")
    else:
        medaillen = ["🥇", "🥈", "🥉"]

        for platz, eintrag in enumerate(highscores, start=1):
            if platz <= 3:
                symbol = medaillen[platz - 1]  # Index 0, 1, 2
            else:
                symbol = f"{platz:2}."

            print(f"{symbol} {eintrag['name']:<15} {eintrag['versuche']} Versuche")

    print("-" * 30 + "\n")
```

</details>

---

### Übung 3 – Statistik anzeigen

Füge eine neue Menü-Option „Statistik" hinzu (Option 3, Beenden wird zu Option 4). Die Statistik soll anzeigen:
- Wie viele Runden insgesamt gespielt wurden
- Wie viele davon gewonnen wurden
- Die durchschnittliche Versuchsanzahl aller gewonnenen Runden

**Hinweis:** Speichere `gespielte_runden` und `gewonnene_runden` als globale Variablen. Aktualisiere sie in `hauptmenue()` nach jeder Runde.

<details>
<summary>💡 Lösung anzeigen</summary>

```python
# Globale Variablen (ganz oben, neben highscores)
highscores = []
gespielte_runden = 0
gewonnene_runden = 0


def statistik_anzeigen():
    print("\n📊 STATISTIK")
    print("-" * 30)
    print(f"Gespielte Runden:  {gespielte_runden}")
    print(f"Gewonnene Runden:  {gewonnene_runden}")

    if gewonnene_runden > 0:
        gesamt_versuche = sum(e["versuche"] for e in highscores)
        durchschnitt = gesamt_versuche / gewonnene_runden
        print(f"Ø Versuche (Siege): {durchschnitt:.1f}")

    print("-" * 30 + "\n")


# In hauptmenue(), bei Auswahl "1":
# gespielte_runden += 1
# ergebnis = runde_spielen()
# if ergebnis is not None:
#     gewonnene_runden += 1
#     ...
```

Das `:.1f` im f-String formatiert die Zahl auf eine Nachkommastelle. `sum(e["versuche"] for e in highscores)` ist ein **Generator-Ausdruck** – eine kompakte Art, über eine Liste zu summieren.

</details>

---

Glückwunsch – du hast dein erstes vollständiges Python-Projekt abgeschlossen! 🐍🎉

Wenn du weitermachen möchtest: Versuche, den Highscore in eine Textdatei zu speichern (`open()`, `write()`, `read()`), damit er auch nach dem Beenden des Programms erhalten bleibt. Das wäre ein perfekter nächster Schritt.
