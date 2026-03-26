---
title: "Flask gegen Robyn: Warum der Wechsel sich nicht gelohnt hat"
description: "Michael Kennedy tauschte Flask gegen das Rust-basierte Robyn aus – doch der erhoffte Geschwindigkeitsvorteil blieb aus. Was Anfänger daraus lernen können."
summary: "Michael Kennedy hat sein Python-Webprojekt von Flask auf das Rust-basierte Framework Robyn umgestellt und mit einem Lasttesttool namens Locust gemessen – mit überraschendem Ergebnis: kein nennenswerter Geschwindigkeitsvorteil, und Robyn verbrauchte sogar mehr Arbeitsspeicher. Für Anfänger ist das eine wichtige Lektion: Benchmarks aus dem Internet spiegeln nicht immer die Realität des eig"
url: "https://mkennedy.codes/posts/replacing-flask-with-robyn-wasnt-worth-it/"
source: "Michael Kennedy's Thoughts on Technology"
category: Python
tags: [
  "python",
  "flask",
  "webentwicklung",
  "framework",
  "benchmark"
]
date: 2026-03-26
og_image: "https://raw.githubusercontent.com/Psysin/philsdevquest-website/main/public/images/news/2026-03-26-flask-gegen-robyn-warum-der-wechsel-sich-nicht-gelohnt-hat.jpg"
---

## Was ist überhaupt passiert?

Michael Kennedy, bekannt als Moderator des Python-Podcasts "Talk Python To Me", hat ein interessantes Experiment durchgeführt: Er hat sein bestehendes Python-Webprojekt von Flask auf ein neueres Framework namens Robyn umgestellt – und dabei sorgfältig gemessen, ob sich der Aufwand lohnt. Das Ergebnis war überraschend, und die Lektion dahinter ist besonders für Anfänger wertvoll.

## Flask und Robyn – zwei sehr unterschiedliche Ansätze

Flask ist eines der bekanntesten Python-Webframeworks überhaupt. Es gibt es seit 2010, es ist ausgereift, gut dokumentiert und hat eine riesige Community. Kurz gesagt: Wenn man in Python eine Webanwendung bauen will, ist Flask eine der ersten Empfehlungen, die man bekommt – und das aus gutem Grund.

Robyn ist dagegen ein vergleichsweise junges Framework. Der besondere Clou: Robyn ist in Rust geschrieben, einer Programmiersprache, die für ihre hohe Geschwindigkeit und Speichereffizienz bekannt ist. Die Idee dahinter klingt verlockend – Python als Sprache nutzen, aber unter der Haube die Geschwindigkeit von Rust. In Benchmark-Tests, also künstlich erzeugten Leistungsmessungen, schneidet Robyn oft beeindruckend ab.

## Das Experiment: Lasttests mit Locust

Kennedy hat den Wechsel nicht einfach so vorgenommen und dann auf sein Bauchgefühl vertraut. Er hat ein Werkzeug namens Locust eingesetzt, um seine Anwendung unter realistischer Last zu testen. Locust ist ein Open-Source-Tool, mit dem man simulieren kann, wie viele Nutzer gleichzeitig eine Webseite aufrufen – und wie die Anwendung damit umgeht.

Das ist der richtige Ansatz: nicht irgendwelchen Zahlen aus dem Internet vertrauen, sondern selbst messen. Und genau hier wurde es interessant.

## Das ernüchternde Ergebnis

Trotz aller Versprechen zeigte Robyn in Kennedys konkretem Projekt keinen nennenswerten Geschwindigkeitsvorteil gegenüber Flask. Noch überraschender: Robyn verbrauchte sogar mehr Arbeitsspeicher als Flask. Das ist das Gegenteil von dem, was man sich erhofft hatte.

Wie kann das sein? Dafür gibt es mehrere mögliche Erklärungen:

- Benchmark-Tests messen oft sehr vereinfachte Szenarien, die mit echten Anwendungen wenig gemein haben.
- Reale Projekte haben Datenbankabfragen, Dateioperationen und andere Faktoren, die das Bild komplett verändern.
- Ein Framework kann in isolierten Tests glänzen, aber in einem komplexen Gesamtsystem ganz anders abschneiden.

Kurz gesagt: Zahlen aus dem Internet sind kein Versprechen für die eigene Anwendung.

## Was bedeutet das für Anfänger?

Diese Geschichte enthält eine wichtige Botschaft, die man sich früh merken sollte: Neue Technologie ist nicht automatisch bessere Technologie. Gerade als Anfänger ist man oft versucht, dem neuesten und vermeintlich schnellsten Tool hinterherzulaufen. Das ist verständlich, aber meistens nicht sinnvoll.

Reife Frameworks wie Flask bringen entscheidende Vorteile mit:

- Ausführliche Dokumentation, die echte Fragen beantwortet
- Eine große Community, bei der man Hilfe findet
- Jahrelang erprobte Lösungen für häufige Probleme
- Viele Erweiterungen und Bibliotheken, die gut zusammenspielen

Ein neues Framework wie Robyn kann durchaus spannend sein – zum Ausprobieren, zum Lernen, zum Verstehen neuer Konzepte. Aber für ein ernsthaftes Projekt, das stabil laufen soll, ist Reife oft wichtiger als rohe Geschwindigkeit.

## Die eigentliche Lektion: Selbst messen statt glauben

Was Kennedy vorgemacht hat, ist eigentlich das Wichtigste an der ganzen Geschichte: Er hat nicht einfach einem Trend gefolgt, sondern selbst gemessen. Das ist eine Denkweise, die man als Entwickler verinnerlichen sollte – egal ob Anfänger oder Profi. Bevor man eine Entscheidung auf Basis von Benchmarks trifft, lohnt es sich zu fragen: Wurden diese Tests unter Bedingungen durchgeführt, die meinem Projekt ähneln? Wenn nicht, sind die Zahlen wenig aussagekräftig.

Locust ist dabei ein hervorragendes Werkzeug, das auch für Einsteiger zugänglich ist. Es ist in Python geschrieben, gut dokumentiert und erlaubt es, realistische Nutzungsszenarien zu simulieren.

## Quelle

Der Originalartikel stammt von Michael Kennedy und ist auf seinem Blog "Michael Kennedy's Thoughts on Technology" erschienen. Dort beschreibt er den Prozess und die Ergebnisse im Detail: [Replacing Flask with Robyn wasn't worth it](https://mkennedy.codes/posts/replacing-flask-with-robyn-wasnt-worth-it/)
