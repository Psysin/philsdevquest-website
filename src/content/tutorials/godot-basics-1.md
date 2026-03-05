---
title: "Godot Basics 1 – Nodes, Scenes & dein erstes Skript"
description: "Lerne die Godot-Oberfläche kennen, verstehe Nodes & Scenes, schreibe dein erstes GDScript und bring einen Spieler zum Laufen – Schritt für Schritt erklärt."
category: godot
difficulty: einsteiger
date: 2026-03-06
readTime: "25 min"
draft: false
---

# Godot Basics 1 – Nodes, Scenes & dein erstes Skript

Herzlich willkommen bei Godot! Wenn du noch nie eine Game Engine benutzt hast, wirkst du beim ersten Start vielleicht etwas überwältigt. Keine Sorge – in diesem Tutorial lernst du die wichtigsten Konzepte Schritt für Schritt kennen.

Am Ende dieses Tutorials kannst du:

- die Godot-Oberfläche sicher bedienen
- Nodes und Scenes erstellen und verstehen
- einfache GDScript-Skripte schreiben
- einen Spieler mit der Tastatur bewegen

> **Godot-Version:** Dieses Tutorial bezieht sich auf **Godot 4.x** (empfohlen: 4.5 oder neuer).

---

## 1. Die Godot-Oberfläche

Beim ersten Start von Godot siehst du den **Projektmanager**. Klicke auf „Neues Projekt", wähle einen Ordner aus und starte.

Sobald dein Projekt geöffnet ist, siehst du den Editor mit seinen wichtigsten Bereichen:

![Der Godot-Editor mit seinen vier Hauptbereichen: Scene-Panel, Viewport, Inspector und FileSystem](/images/tutorials/godot-basics-1-editor-uebersicht.png)

Die vier wichtigsten Bereiche auf einen Blick:

**Scene-Panel (links oben):** Hier siehst du den Szenenbaum – alle Nodes deiner aktuellen Szene in einer Baumstruktur.

**Viewport (Mitte):** Die Spielvorschau. Hier siehst du, wie dein Spiel aussehen wird. Mit der mittleren Maustaste kannst du die Ansicht verschieben, mit dem Mausrad zoomen.

**Inspector (rechts):** Wenn du einen Node auswählst, zeigt der Inspector alle seine Eigenschaften – Position, Größe, Farbe und vieles mehr. Hier änderst du Werte direkt, ohne Code zu schreiben.

**FileSystem (links unten):** Alle Dateien deines Projekts – Szenen, Skripte, Bilder, Sounds.

> **Tipp:** Über **Projekt → Projekteinstellungen** kannst du wichtige Dinge einstellen, zum Beispiel die Fenstergröße deines Spiels.

---

## 2. Nodes – die Bausteine von Godot

In Godot ist **alles ein Node**. Nodes sind die kleinsten Bausteine deines Spiels. Jeder Node hat einen bestimmten Typ und erfüllt eine ganz bestimmte Aufgabe:

| Node-Typ            | Aufgabe                         |
| ------------------- | ------------------------------- |
| `Node2D`            | Basisklasse für alle 2D-Objekte |
| `Sprite2D`          | Zeigt ein Bild an               |
| `CollisionShape2D`  | Definiert die Kollisionsform    |
| `CharacterBody2D`   | Spieler oder Gegner mit Physik  |
| `Label`             | Zeigt Text an                   |
| `Camera2D`          | Die Spielkamera                 |
| `AudioStreamPlayer` | Spielt einen Sound ab           |

Nodes kannst du ineinander verschachteln. Ein Node der einem anderen untergeordnet ist, nennt sich **Child-Node** (Kind). Der übergeordnete Node ist der **Parent** (Elternteil).

```
Player (CharacterBody2D)   ← Parent
├── Sprite2D               ← Child (das Aussehen)
└── CollisionShape2D       ← Child (die Hitbox)
```

Child-Nodes folgen ihrem Parent automatisch. Wenn du den `Player`-Node bewegst, bewegen sich `Sprite2D` und `CollisionShape2D` automatisch mit.

---

## 3. Scenes – Nodes zusammenfassen

Eine **Scene** ist eine Gruppe von Nodes, die du als eine Einheit speicherst. Scenes sind das, was du in Godot als Dateien (`.tscn`) auf der Festplatte siehst.

Das Geniale: Eine Scene kann selbst wieder als Node in einer anderen Scene verwendet werden. Das nennt sich **Instanzierung**.

```
Main-Scene (Node2D)
├── Player-Scene (CharacterBody2D)  ← instanziert aus Player.tscn
├── Enemy-Scene  (CharacterBody2D)  ← instanziert aus Enemy.tscn
└── TileMap                         ← die Spielwelt
```

So bleibt dein Projekt übersichtlich: Du baust deinen Spieler einmal, speicherst ihn als Scene, und kannst ihn beliebig oft in dein Level einfügen – sogar mehrfach.

### Deine erste Scene erstellen

1. Klicke im Scene-Panel auf das **+**-Symbol oder drücke `Strg + N`
2. Wähle als Root-Node `Node2D` aus
3. Klicke oben auf das **+**-Symbol, um einen Child-Node hinzuzufügen
4. Suche nach `Label` und klicke „Erstellen"
5. Wähle den `Label`-Node aus und schreibe im Inspector unter `Text`: `Hallo Godot!`
6. Speichere die Scene mit `Strg + S` → Name: `Main.tscn`

![Scene-Panel mit Node2D als Root und einem Label als Child-Node](/images/tutorials/godot-basics-1-erste-scene.png)

Klicke oben auf **▶ Spielen** (oder drücke `F5`) – Godot fragt nach der Hauptszene, wähle `Main.tscn`. Du siehst deinen ersten Text im Spielfenster!

---

## 4. GDScript – Godots Programmiersprache

GDScript ist Godots eigene Programmiersprache. Sie ist Python sehr ähnlich – wenn du schon Python kannst, wirst du dich sofort zurechtfinden.

### Ein Skript an einen Node anhängen

1. Wähle den `Node2D` (Root-Node) deiner Szene aus
2. Klicke im Inspector oben auf das **Skript-Symbol** (📄) oder rechtsklicke im Scene-Panel und wähle „Skript anhängen"
3. Bestätige mit „Erstellen" → die Datei `Main.gd` wird erstellt
4. Der Skript-Editor öffnet sich automatisch

![Dialog „Skript anhängen" mit Dateinamen Main.gd und Standardeinstellungen](/images/tutorials/godot-basics-1-skript-anhaengen.png)

### Grundstruktur eines GDScript

```gdscript
extends Node2D   # Welchen Node-Typ dieses Skript erweitert

# Diese Funktion wird einmal ausgeführt, wenn die Scene startet
func _ready():
    print("Hallo aus GDScript!")

# Diese Funktion wird jeden Frame ausgeführt (60x pro Sekunde)
func _process(delta):
    pass  # Hier passiert (noch) nichts
```

Wenn du jetzt spielst, siehst du in der **Ausgabe-Konsole** (unten im Editor) den Text `Hallo aus GDScript!`.

### Variablen und Datentypen

```gdscript
extends Node2D

# Variablen in GDScript
var spieler_name = "Philipp"       # String
var leben = 3                      # Integer
var geschwindigkeit = 200.0        # Float
var ist_am_springen = false        # Boolean

# Typisierte Variablen (empfohlen!)
var punkte: int = 0
var name_des_spielers: String = "Held"

func _ready():
    print("Spieler: ", spieler_name)
    print("Leben: ", leben)
```

> **Tipp:** Typisierte Variablen (mit `: int`, `: String` usw.) helfen Godot, Fehler früher zu erkennen. Gewöhne dir das am besten gleich an.

### Funktionen

```gdscript
extends Node2D

func _ready():
    var ergebnis = addiere(10, 5)
    print("10 + 5 = ", ergebnis)   # Ausgabe: 10 + 5 = 15

func addiere(a: int, b: int) -> int:
    return a + b
```

Funktionen in GDScript beginnen immer mit `func`. Mit `-> int` sagst du, welchen Typ die Funktion zurückgibt.

---

## 5. Signale – Godots Event-System

Signale sind Godots Weg, wie Nodes miteinander kommunizieren, ohne sich direkt kennen zu müssen. Stell dir Signale wie Klingeln vor: Ein Node klingelt (sendet ein Signal), ein anderer Node hört das Klingeln und reagiert darauf.

### Eingebaute Signale nutzen

Viele Nodes haben bereits eingebaute Signale. Zum Beispiel hat ein `Button`-Node das Signal `pressed` – es wird gesendet, wenn der Knopf gedrückt wird.

1. Füge deiner Scene einen `Button`-Node hinzu
2. Wähle den `Button` aus und klicke rechts im Inspector auf den Reiter **Signale** (das Zahnrad-Symbol)
3. Doppelklicke auf `pressed()`
4. Verbinde das Signal mit deinem Skript → eine Funktion wird automatisch erstellt

![Inspector-Reiter „Signale" mit der pressed()-Verbindung zum Skript](/images/tutorials/godot-basics-1-signal-verbinden.png)

```gdscript
extends Node2D

func _ready():
    pass

# Diese Funktion wird automatisch aufgerufen, wenn der Button gedrückt wird
func _on_button_pressed():
    print("Knopf wurde gedrückt!")
    $Label.text = "Du hast gedrückt!"  # Ändert den Text des Labels
```

Mit `$Label` greifst du direkt auf einen Child-Node namens `Label` zu. Das `$`-Zeichen ist eine Kurzform für `get_node("Label")`.

### Eigene Signale erstellen

```gdscript
extends Node2D

# Eigenes Signal definieren
signal spieler_gestorben

var leben: int = 3

func _ready():
    pass

func schaden_nehmen(menge: int):
    leben -= menge
    if leben <= 0:
        emit_signal("spieler_gestorben")  # Signal senden
        print("Spieler ist gestorben!")
```

---

## 6. Erste Bewegung – der Spieler läuft!

Jetzt kommt der spannendste Teil: Wir bauen einen Spieler, der sich mit den Pfeiltasten bewegen lässt.

### Schritt 1: Spieler-Scene aufbauen

Erstelle eine neue Scene (`Strg + N`) und wähle als Root-Node `CharacterBody2D`. Benenne den Node in `Player` um (Doppelklick auf den Namen im Scene-Panel).

Füge folgende Child-Nodes hinzu:

- `Sprite2D` (das Aussehen des Spielers)
- `CollisionShape2D` (die Hitbox)

Wähle `CollisionShape2D` aus und klicke im Inspector auf „Neue RectangleShape2D" (oder CapsuleShape2D). Passe die Größe an.

![Scene-Panel mit Player (CharacterBody2D) als Root, darunter Sprite2D und CollisionShape2D](/images/tutorials/godot-basics-1-player-scene.png)

Speichere die Scene als `Player.tscn`.

### Schritt 2: Bewegungs-Skript schreiben

Klicke auf den `Player`-Node und hänge ein Skript an (`Player.gd`):

```gdscript
extends CharacterBody2D

# Geschwindigkeit in Pixeln pro Sekunde
const GESCHWINDIGKEIT = 200.0

func _physics_process(delta):
    # Eingabe-Vektor aus den Pfeiltasten berechnen
    var richtung = Vector2.ZERO

    if Input.is_action_pressed("ui_right"):
        richtung.x += 1
    if Input.is_action_pressed("ui_left"):
        richtung.x -= 1
    if Input.is_action_pressed("ui_down"):
        richtung.y += 1
    if Input.is_action_pressed("ui_up"):
        richtung.y -= 1

    # Geschwindigkeit setzen
    velocity = richtung * GESCHWINDIGKEIT

    # Bewegung ausführen (move_and_slide kümmert sich um Kollisionen)
    move_and_slide()
```

> **`_physics_process` statt `_process`:** Für Bewegung mit Physik (Kollisionen) immer `_physics_process` verwenden. Es läuft synchron mit der Physik-Engine.

### Schritt 3: Spieler in die Hauptszene einfügen

1. Öffne `Main.tscn`
2. Klicke auf „Verknüpfte Scene instanzieren" (Ketten-Symbol im Scene-Panel, oder `Strg + Shift + A`)
3. Wähle `Player.tscn` aus

Drücke `F5` und steuere deinen Spieler mit den Pfeiltasten. 🎮

![Spielfenster mit dem laufenden Spieler-Sprite auf leerem Hintergrund](/images/tutorials/godot-basics-1-spieler-laeuft.png)

### Schritt 4: Bewegung verbessern (mit Normalisierung)

Ein kleines Problem: Wenn du diagonal läufst (z. B. rechts + hoch), bewegst du dich schneller als bei gerader Bewegung. Das lässt sich einfach beheben:

```gdscript
extends CharacterBody2D

const GESCHWINDIGKEIT = 200.0

func _physics_process(delta):
    var richtung = Vector2(
        Input.get_axis("ui_left", "ui_right"),
        Input.get_axis("ui_up", "ui_down")
    )

    # Normalisieren: Länge auf 1 setzen, damit Diagonale nicht schneller ist
    if richtung != Vector2.ZERO:
        richtung = richtung.normalized()

    velocity = richtung * GESCHWINDIGKEIT
    move_and_slide()
```

`Input.get_axis()` ist eine praktische Kurzform – es gibt `-1.0`, `0.0` oder `1.0` zurück, je nachdem welche Taste gedrückt wird. `normalized()` stellt sicher, dass die Länge des Vektors immer maximal 1 ist.

---

## Zusammenfassung

Du hast heute gelernt:

- **Godot-Oberfläche:** Scene-Panel, Viewport, Inspector und FileSystem bedienen
- **Nodes:** Bausteine des Spiels – jeder Node hat eine bestimmte Aufgabe
- **Scenes:** Nodes als wiederverwendbare Einheiten zusammenfassen (`.tscn`-Dateien)
- **GDScript:** Variablen, Funktionen und die wichtigsten Built-in-Funktionen (`_ready`, `_process`, `_physics_process`)
- **Signale:** Nodes kommunizieren miteinander, ohne sich direkt zu kennen
- **Bewegung:** Tastatureingaben abfragen, Vektoren berechnen, `move_and_slide()` nutzen

Im nächsten Tutorial schauen wir uns **Kollisionen, Tilemap-Levels und die Kamera** an.

---

## Übungen

Teste dein Wissen mit diesen drei Aufgaben. Versuche sie zuerst selbst zu lösen, bevor du dir die Lösung anschaust!

---

### Übung 1 – Lebensanzeige mit Label

Erstelle eine Scene mit einem `Label`-Node und einem angehängten Skript. Beim Start der Scene soll das Label den Text `"Leben: 3"` anzeigen. Füge eine Funktion `schaden_nehmen()` hinzu, die die Leben um 1 reduziert und den Label-Text aktualisiert. Rufe `schaden_nehmen()` in `_ready()` zweimal auf – das Label soll am Ende `"Leben: 1"` anzeigen.

**Hinweis:** Greife mit `$Label.text = "..."` auf den Label-Node zu.

<details>
<summary>💡 Lösung anzeigen</summary>

```gdscript
extends Node2D

var leben: int = 3

func _ready():
    $Label.text = "Leben: " + str(leben)
    schaden_nehmen()
    schaden_nehmen()

func schaden_nehmen():
    leben -= 1
    $Label.text = "Leben: " + str(leben)
    print("Leben übrig: ", leben)
```

**Aufbau der Scene:**

```
Node2D          ← Root, Skript anhängen
└── Label       ← Text wird per Skript gesetzt
```

</details>

---

### Übung 2 – Eigenes Signal bauen

Erweitere Übung 1 um ein eigenes Signal `spieler_gestorben`. Das Signal soll gesendet werden, sobald die Leben auf 0 oder weniger fallen. Verbinde das Signal in `_ready()` mit einer Funktion `_on_spieler_gestorben()`, die `"Game Over!"` in die Konsole ausgibt.

**Hinweis:** Verbinde Signale im Code mit `signal_name.connect(funktion)`.

<details>
<summary>💡 Lösung anzeigen</summary>

```gdscript
extends Node2D

signal spieler_gestorben

var leben: int = 3

func _ready():
    # Signal mit der Funktion verbinden
    spieler_gestorben.connect(_on_spieler_gestorben)

    $Label.text = "Leben: " + str(leben)
    schaden_nehmen()
    schaden_nehmen()
    schaden_nehmen()  # Leben fällt auf 0 → Signal wird gesendet

func schaden_nehmen():
    leben -= 1
    $Label.text = "Leben: " + str(leben)

    if leben <= 0:
        spieler_gestorben.emit()

func _on_spieler_gestorben():
    print("Game Over!")
    $Label.text = "Game Over!"
```

</details>

---

### Übung 3 – Sprung hinzufügen

Erweitere das Spieler-Skript aus Kapitel 6 um einen Sprung. Wenn der Spieler `ui_accept` drückt (Leertaste), soll er nach oben springen. Füge außerdem Schwerkraft hinzu, damit der Spieler wieder nach unten fällt.

**Hinweise:**

- Schwerkraft wirkt als positive `y`-Kraft (in Godot zeigt `y+` nach unten)
- Die Schwerkraft-Konstante lautet in Godot: `ProjectSettings.get_setting("physics/2d/default_gravity")`
- Mit `is_on_floor()` prüfst du, ob der Spieler auf dem Boden steht

<details>
<summary>💡 Lösung anzeigen</summary>

```gdscript
extends CharacterBody2D

const GESCHWINDIGKEIT = 200.0
const SPRUNGKRAFT = -400.0

# Schwerkraft aus den Projekteinstellungen holen
var schwerkraft = ProjectSettings.get_setting("physics/2d/default_gravity")

func _physics_process(delta):
    # Schwerkraft anwenden (nur wenn nicht auf dem Boden)
    if not is_on_floor():
        velocity.y += schwerkraft * delta

    # Sprung (nur möglich wenn auf dem Boden)
    if Input.is_action_just_pressed("ui_accept") and is_on_floor():
        velocity.y = SPRUNGKRAFT

    # Horizontale Bewegung
    var richtung_x = Input.get_axis("ui_left", "ui_right")
    velocity.x = richtung_x * GESCHWINDIGKEIT

    move_and_slide()
```

**Wichtig:** Damit `is_on_floor()` funktioniert, braucht deine Scene einen Boden – zum Beispiel einen `StaticBody2D` mit `CollisionShape2D`. Platziere den Spieler oberhalb davon.

</details>

---

Viel Spaß beim Ausprobieren! Wenn du Fragen hast oder etwas nicht funktioniert, wirf einen Blick in die [offizielle Godot-Dokumentation](https://docs.godotengine.org) – sie ist sehr gut und auf Englisch verfügbar.

---

<!--
📸 SCREENSHOT-CHECKLISTE (alle Bilder nach → public/images/tutorials/)

[ ] godot-basics-1-editor-uebersicht.png
    → Godot-Editor geöffnet, alle 4 Bereiche sichtbar (Scene, Viewport, Inspector, FileSystem)
    → Tipp: Breites Fenster, kein Projekt geöffnet nötig – leerer Viewport reicht

[ ] godot-basics-1-erste-scene.png
    → Scene-Panel zeigt: Node2D (Root) mit Label als Child
    → Label im Inspector selektiert, Text "Hallo Godot!" eingetragen

[ ] godot-basics-1-skript-anhaengen.png
    → Dialog "Neues Skript" / "Skript anhängen" offen
    → Dateiname: Main.gd, Sprache: GDScript, alles Standard

[ ] godot-basics-1-signal-verbinden.png
    → Button-Node selektiert, Inspector-Reiter "Signale" aktiv
    → pressed()-Signal sichtbar, idealerweise der Verbindungs-Dialog offen

[ ] godot-basics-1-player-scene.png
    → Scene-Panel: Player (CharacterBody2D) als Root
    → Darunter: Sprite2D + CollisionShape2D als Children
    → CollisionShape2D selektiert, Form im Viewport sichtbar

[ ] godot-basics-1-spieler-laeuft.png
    → Spielfenster aktiv (F5 gedrückt)
    → Spieler-Sprite irgendwo im Bild positioniert
    → Optional: kleiner Pfeil oder Text "Pfeiltasten zum Steuern"
-->
