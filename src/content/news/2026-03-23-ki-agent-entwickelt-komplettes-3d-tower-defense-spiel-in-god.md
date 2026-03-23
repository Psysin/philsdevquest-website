---
title: "KI-Agent entwickelt komplettes 3D Tower-Defense-Spiel in Godot – so funktioniert das"
description: "Ein KI-Agent hat mit GodotIQ ein vollständiges 3D Tower-Defense-Spiel in Godot 4 gebaut – was das für Anfänger in der Spieleentwicklung bedeutet."
summary: "Ein KI-Agent hat mithilfe von GodotIQ – einem MCP-Server mit 36 Werkzeugen – ohne menschliches Eingreifen ein vollständiges 3D Tower-Defense-Spiel in Godot 4 entwickelt. GodotIQ gibt KI-Agenten räumliches Verständnis innerhalb des Godot-Editors, sodass sie Szenen aufbauen, testen und Fehler selbstständig beheben können. Für Anfänger ist das interessant, weil es zeigt, wie KI-Tools den Ei"
url: "https://dev.to/salvo10f/an-ai-agent-built-a-complete-3d-tower-defense-in-godot-heres-how-lpd"
source: "salvo10f"
category: Godot
tags: [
  "godot",
  "künstliche intelligenz",
  "spieleentwicklung",
  "godot 4",
  "ki-tools"
]
date: 2026-03-23
og_image: "https://raw.githubusercontent.com/Psysin/philsdevquest-website/main/public/images/news/2026-03-23-ki-agent-entwickelt-komplettes-3d-tower-defense-spiel-in-god.jpg"
---

## Ein KI-Agent als Spieleentwickler – ist das wirklich möglich?

Stell dir vor, du öffnest deinen Computer, startest Godot und lässt dann einfach eine künstliche Intelligenz die gesamte Arbeit erledigen. Klingt nach Science-Fiction? Genau das hat der Entwickler salvo10f kürzlich demonstriert. Ein KI-Agent hat ohne menschliches Eingreifen ein vollständiges 3D Tower-Defense-Spiel in Godot 4 entwickelt – von der ersten Szene bis zum fertigen, spielbaren Ergebnis. Möglich gemacht hat das ein Werkzeug namens GodotIQ.

## Was ist GodotIQ und was hat es mit MCP-Servern zu tun?

GodotIQ ist ein sogenannter MCP-Server. MCP steht für "Model Context Protocol" – ein offener Standard, der es KI-Modellen erlaubt, mit externen Programmen und Werkzeugen zu kommunizieren. Einfach gesagt: Normalerweise kann eine KI wie Claude oder GPT nur Text lesen und schreiben. Mit einem MCP-Server bekommt sie zusätzliche Fähigkeiten, zum Beispiel das Steuern von Software.

GodotIQ stellt der KI dabei genau 36 solcher Werkzeuge zur Verfügung. Damit kann der Agent direkt im Godot-Editor arbeiten: Szenen erstellen, Objekte platzieren, Skripte schreiben, das Spiel testen und sogar auftretende Fehler selbstständig erkennen und beheben. Besonders wichtig ist dabei das sogenannte räumliche Verständnis – die KI kann also nicht nur Code schreiben, sondern auch verstehen, wie Objekte im 3D-Raum angeordnet sind und wie sie miteinander interagieren.

## Wie hat der KI-Agent das Tower-Defense-Spiel gebaut?

Der Ablauf war bemerkenswert strukturiert. Der KI-Agent hat zunächst die grundlegende Spielwelt aufgebaut: ein Terrain, Wege für die Gegner und Plätze für die Türme. Anschließend hat er die Spiellogik programmiert – also wie Gegner sich bewegen, wie Türme schießen und wie Punkte gezählt werden. Dabei hat er immer wieder das Spiel gestartet, Fehler analysiert und den Code entsprechend angepasst.

Dieser Prozess des selbstständigen Testens und Verbesserns ist in der Softwareentwicklung als "iteratives Vorgehen" bekannt. Normalerweise macht das ein Mensch: Code schreiben, ausprobieren, Fehler finden, korrigieren, wieder ausprobieren. Der KI-Agent hat genau diesen Kreislauf eigenständig durchlaufen – ohne dass jemand eingreifen musste.

## Was bedeutet das für Anfänger in der Spieleentwicklung?

Für Einsteiger ist diese Entwicklung aus mehreren Gründen spannend. Erstens zeigt sie, dass KI-Tools inzwischen weit mehr können als nur einfache Codefragmente vorzuschlagen. Sie können als aktive Helfer beim Lernen dienen: Du kannst einen KI-Agenten bitten, dir zu zeigen, wie eine bestimmte Spielmechanik funktioniert, und das Ergebnis direkt in Godot sehen.

Zweitens bedeutet das aber nicht, dass Programmieren lernen überflüssig wird. Im Gegenteil: Um die Ergebnisse eines KI-Agenten zu verstehen, zu bewerten und weiterzuentwickeln, brauchst du ein solides Grundverständnis von Godot und GDScript. Wer die Grundlagen kennt, kann KI-Tools viel gezielter einsetzen und weiß auch, wann ein Vorschlag der KI fehlerhaft oder unpassend ist.

## Godot 4 als Plattform für KI-gestützte Entwicklung

Dass dieses Experiment mit Godot 4 funktioniert hat, ist kein Zufall. Godot ist eine Open-Source-Spiele-Engine, die in den letzten Jahren enorm gewachsen ist. Die Engine ist kostenlos, gut dokumentiert und hat eine aktive Community – ideale Voraussetzungen, damit Entwickler wie salvo10f neue Werkzeuge wie GodotIQ bauen und teilen können.

Godot 4 bringt außerdem eine deutlich verbesserte 3D-Unterstützung mit sich, was komplexere Projekte wie ein Tower-Defense-Spiel erst richtig ermöglicht. Für Anfänger ist Godot nach wie vor eine der empfehlenswertesten Einstiegsplattformen – und mit KI-Unterstützung wird der Einstieg potenziell noch zugänglicher.

## Fazit: KI als Werkzeug, nicht als Ersatz

Das Experiment von salvo10f zeigt eindrucksvoll, wohin die Reise in der Spieleentwicklung gehen könnte. KI-Agenten werden immer leistungsfähiger und können bereits heute komplexe Aufgaben in Godot übernehmen. Für Anfänger ist das eine Einladung, sich mit diesen Werkzeugen vertraut zu machen – aber gleichzeitig auch eine Erinnerung daran, die Grundlagen nicht zu vernachlässigen. Wer versteht, was hinter dem Code steckt, wird KI-Tools langfristig viel effektiver nutzen können.

## Quelle

Dieser Artikel basiert auf dem Originalbeitrag von salvo10f: [An AI Agent Built a Complete 3D Tower Defense in Godot — Here's How](https://dev.to/salvo10f/an-ai-agent-built-a-complete-3d-tower-defense-in-godot-heres-how-lpd) auf dev.to.
