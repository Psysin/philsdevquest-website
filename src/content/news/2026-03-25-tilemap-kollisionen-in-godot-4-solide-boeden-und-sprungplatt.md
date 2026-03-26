---
title: "TileMap-Kollisionen in Godot 4: Solide Böden und Sprungplattformen mit GDScript"
description: "Lerne, wie du in Godot 4 TileMap-Kollisionen einrichtest – von soliden Böden bis zu Sprungplattformen, die man von unten durchqueren kann."
summary: "Dieser Artikel erklärt Schritt für Schritt, wie man in Godot 4 Kollisionsformen für TileMap-Kacheln einrichtet – von soliden Böden und Wänden bis hin zu klassischen Sprungplattformen, durch die man von unten hindurchspringen kann. Anfänger lernen dabei sowohl den visuellen Weg über den TileSet-Editor als auch die programmatische Variante per GDScript kennen. Besonders hilfreich sind die "
url: "https://dev.to/alairjt/mastering-tilemap-physics-in-godot-4-building-solid-and-one-way-platforms-with-gdscript-b5l"
source: "Alair Joao Tavares (dev.to)"
category: Godot
tags: [
  "godot",
  "tilemap",
  "gdscript",
  "kollision",
  "platformer"
]
date: 2026-03-25
og_image: "https://raw.githubusercontent.com/Psysin/philsdevquest-website/main/public/images/news/2026-03-25-tilemap-kollisionen-in-godot-4-solide-boeden-und-sprungplatt.jpg"
---

## Warum Kollisionen bei TileMaps so wichtig sind

Wer in Godot 4 ein 2D-Spiel baut, kommt an TileMaps kaum vorbei. Sie sind das Herzstück vieler Plattformer und Rollenspiele – mit ihnen baut man Welten aus kleinen, wiederverwendbaren Kacheln zusammen. Doch eine schön aussehende Karte allein reicht nicht: Ohne richtig eingerichtete Kollisionsformen fällt die Spielfigur einfach durch den Boden. Genau hier fangen viele Anfänger an zu kämpfen.

Dieser Artikel zeigt dir, wie du Kollisionen für deine TileMap-Kacheln einrichtest – sowohl über den grafischen Editor als auch direkt per GDScript.

## Der TileSet-Editor: Der visuelle Weg

Godot 4 bietet einen komfortablen TileSet-Editor, mit dem du Kollisionsformen direkt auf einzelne Kacheln zeichnen kannst. Das Prinzip ist einfach:

1. Wähle deine TileMap-Node aus.
2. Öffne den TileSet-Tab am unteren Bildschirmrand.
3. Klicke auf eine Kachel und wechsle in den Reiter "Physics".
4. Zeichne dort ein Kollisionspolygon, das die Form deiner Kachel abdeckt.

Für einen normalen, soliden Boden reicht meist ein einfaches Rechteck, das die gesamte Kachel ausfüllt. Godot erkennt dieses Polygon dann als undurchdringliche Fläche – dein Charakter bleibt darauf stehen, statt hindurchzufallen.

## Sprungplattformen: Von unten durch, von oben drauf

Ein klassisches Element in Plattformspielen sind sogenannte One-Way-Plattformen. Du kennst sie: Man kann von unten hindurchspringen, landet aber oben drauf. In Godot 4 lässt sich das über eine einfache Einstellung im Physics-Reiter des TileSet-Editors aktivieren.

Sobald du ein Kollisionspolygon für eine Kachel erstellt hast, erscheint die Option "One Way Collision". Aktivierst du sie, behandelt Godot diese Fläche nur aus einer Richtung als Hindernis – von oben. Von unten passiert der Charakter sie einfach. Das klingt simpel, macht aber spielerisch einen riesigen Unterschied.

## Kollisionen per GDScript setzen

Wer mehr Kontrolle möchte oder Kacheln dynamisch zur Laufzeit anpassen will, kann Kollisionsformen auch direkt per Code definieren. Dabei gibt es in Godot 4 eine Besonderheit, über die Anfänger gerne stolpern: Polygone werden als `PackedVector2Array` übergeben, nicht als einfaches Array.

Ein Beispiel für eine solide Kachel per GDScript könnte so aussehen:

gdscript
var polygon = PackedVector2Array([
    Vector2(0, 0),
    Vector2(16, 0),
    Vector2(16, 16),
    Vector2(0, 16)
])


Dieses Polygon beschreibt ein einfaches Quadrat – perfekt für eine 16x16-Pixel-Kachel. Den Rest übernimmt Godot, wenn du das Polygon korrekt der TileData zuweist. Der programmatische Weg ist besonders nützlich, wenn du Kacheln prozedural generierst oder Kollisionen abhängig von Spielzuständen verändern möchtest.

## Häufige Fehler und wie du sie vermeidest

Ein Problem, das viele Anfänger frustriert: unsichtbare Lücken zwischen Kacheln. Der Charakter bleibt an scheinbar glatten Übergängen hängen oder fällt durch Stellen, die eigentlich solide sein sollten. Das liegt oft daran, dass Kollisionspolygone nicht exakt an den Kachelrändern ausgerichtet sind.

Einige Tipps dazu:

- Nutze immer ganzzahlige Koordinaten für deine Polygonpunkte.
- Stelle sicher, dass deine Kachelgröße in den Projekteinstellungen mit der tatsächlichen Bildgröße übereinstimmt.
- Überprüfe im Debug-Modus ("Visible Collision Shapes" aktivieren) ob die Formen wirklich dort sitzen, wo du sie erwartest.

Der Debug-Modus ist dabei dein bester Freund. Er zeigt alle Kollisionsformen farblich markiert an und macht Fehler sofort sichtbar.

## Zwei Wege, ein Ziel

Ob du den visuellen Editor bevorzugst oder lieber per Code arbeitest – beide Ansätze führen zum gleichen Ergebnis. Für den Einstieg empfiehlt sich der TileSet-Editor, weil du sofort siehst, was du tust. Wer später komplexere Spielmechaniken umsetzen möchte, wird früher oder später auch den GDScript-Weg kennenlernen wollen. Es lohnt sich, beide zu verstehen.

TileMap-Physik ist eines jener Themen, bei denen ein bisschen Geduld am Anfang später viel Ärger spart. Wer die Grundlagen einmal verstanden hat, baut stabile Spielwelten deutlich schneller.

## Quelle

Dieser Artikel basiert auf dem englischsprachigen Originalbeitrag von Alair Joao Tavares auf dev.to: [Mastering TileMap Physics in Godot 4](https://dev.to/alairjt/mastering-tilemap-physics-in-godot-4-building-solid-and-one-way-platforms-with-gdscript-b5l)
