---
title: "Externen Editor in Godot 4 nutzen – so sparst du dir lästige Klicks"
description: "Externen Editor in Godot 4 verwenden ohne nervige Dialoge? Mit einer Einstellung im Editor geht das ganz einfach. Hier erfährst du wie."
summary: "Wer in Godot 4 einen externen Editor wie JetBrains Rider verwendet, kennt das Problem: Bei jedem Wechsel zurück in den Godot-Editor erscheint ein Bestätigungsdialog für geänderte Dateien. Mit der Einstellung 'Auto Reload Scripts on External Change' in den Editor-Einstellungen lässt sich dieses Verhalten für Skript-Dateien deaktivieren. Für Anfänger, die ihren bevorzugten Code-Editor nutz"
url: "https://dev.to/datadeer/using-godot-with-external-editors-694"
source: "Lucca Sanwald"
category: Godot
tags: [
  "godot",
  "godot 4",
  "editor",
  "workflow",
  "skripte"
]
date: 2026-03-15
og_image: "https://raw.githubusercontent.com/Psysin/philsdevquest-website/main/public/images/news/2026-03-25-externen-editor-in-godot-4-nutzen-so-sparst-du-dir-laestige-.jpg"
---

## Warum überhaupt ein externer Editor?

Godot bringt einen eigenen Skript-Editor mit, der für den Einstieg völlig ausreicht. Aber viele Entwicklerinnen und Entwickler haben ihren bevorzugten Code-Editor bereits eingerichtet, kennen alle Shortcuts auswendig und schätzen Funktionen wie erweiterte Autovervollständigung oder integrierte Debugging-Werkzeuge. JetBrains Rider, Visual Studio Code oder auch andere Editoren bieten hier oft mehr Komfort als der eingebaute Godot-Editor.

Das ist kein Zeichen von Ungeduld oder Ungratitude gegenüber Godot, sondern schlicht eine Frage des persönlichen Workflows. Und Godot unterstützt externe Editoren ausdrücklich.

## Das nervige Problem beim Wechsel zwischen den Fenstern

Wer einmal mit einem externen Editor und Godot gleichzeitig gearbeitet hat, kennt das Szenario: Du schreibst deinen Code in Rider oder VS Code, wechselst dann zurück ins Godot-Fenster, um die Szene zu testen, und wirst sofort mit einem Bestätigungsdialog begrüßt. Godot hat bemerkt, dass sich eine Datei extern verändert hat, und fragt nun artig nach, ob es die Änderungen laden soll.

Beim ersten Mal ist das noch verständlich. Beim zwanzigsten Mal am selben Nachmittag wird es schlicht lästig. Der Dialog unterbricht den Gedankenfluss und kostet unnötig Zeit.

## Die Lösung steckt in den Editor-Einstellungen

Glücklicherweise hat Godot 4 genau für diesen Fall eine passende Einstellung. Du findest sie unter:

**Editor > Editor-Einstellungen > Text Editor > Behavior**

Dort gibt es die Option **Auto Reload Scripts on External Change**. Wenn du diese aktivierst, lädt Godot geänderte Skript-Dateien automatisch neu, ohne dich jedes Mal um Erlaubnis zu fragen. Der Dialog verschwindet, der Workflow bleibt flüssig.

Die Einstellung bezieht sich ausschließlich auf Skript-Dateien, also zum Beispiel `.gd`-Dateien. Für andere Ressourcen wie Szenen oder Grafiken gilt sie nicht, was durchaus sinnvoll ist.

## Schritt für Schritt zur Einstellung

Falls du die Einstellung noch nicht kennst, hier der direkte Weg:

1. Öffne Godot und gehe oben in der Menüleiste auf **Editor**.
2. Wähle **Editor-Einstellungen** aus dem Dropdown.
3. Navigiere links zu **Text Editor** und dann zu **Behavior**.
4. Suche nach **Auto Reload Scripts on External Change** und setze den Haken.

Das war es schon. Ab sofort werden Skriptänderungen aus deinem externen Editor automatisch übernommen.

## Einen externen Editor in Godot einrichten

Falls du noch gar keinen externen Editor eingerichtet hast, ist das ebenfalls schnell erledigt. Unter **Editor > Editor-Einstellungen > Text Editor > External** kannst du den Pfad zu deinem bevorzugten Editor angeben. Godot öffnet dann beim Doppelklick auf eine Skriptdatei automatisch den richtigen Editor.

Für JetBrains Rider gibt es außerdem ein offizielles Godot-Plugin, das die Integration noch weiter verbessert und zum Beispiel Autovervollständigung für Godot-spezifische Klassen und Methoden ermöglicht. Für VS Code existiert ebenfalls eine gut gepflegte Erweiterung namens **godot-tools**.

## Kleine Einstellung, große Wirkung

Solche kleinen Konfigurationsdetails werden in Tutorials oft übergangen, weil sie auf den ersten Blick unwichtig wirken. Dabei können sie den Unterschied ausmachen zwischen einem Workflow, der sich zäh anfühlt, und einem, bei dem man einfach im Fluss bleibt. Gerade als Anfänger ist es wichtig, Frustrationspunkte früh zu erkennen und zu beseitigen, damit man sich auf das Wesentliche konzentrieren kann: das eigentliche Entwickeln.

Wenn du also merkst, dass dich ein bestimmter Dialog oder eine Unterbrechung regelmäßig aus dem Konzept bringt, lohnt sich ein kurzer Blick in die Einstellungen. Oft gibt es bereits eine Lösung, die nur darauf wartet, aktiviert zu werden.

## Quelle

Dieser Artikel basiert auf einem Beitrag von Lucca Sanwald auf dev.to. Den Originalartikel auf Englisch findest du hier: [Using Godot with External Editors – dev.to](https://dev.to/datadeer/using-godot-with-external-editors-694)
