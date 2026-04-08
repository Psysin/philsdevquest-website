---
title: "Fire and Forget: Warum deine asyncio-Tasks einfach verschwinden können"
description: "Ein häufiger asyncio-Fehler in Python: Tasks ohne gespeicherte Referenz werden still beendet. So vermeidest du das Fire-and-Forget-Problem."
summary: "Der Artikel warnt vor einem häufigen Fehler beim asynchronen Programmieren in Python: Tasks, die mit `asyncio.create_task()` gestartet werden, können vorzeitig beendet werden, wenn keine Referenz auf sie gespeichert wird. Dieses 'Fire-and-Forget'-Problem betrifft über 500.000 Code-Dateien auf GitHub und kann zu schwer nachvollziehbaren Bugs führen. Für Anfänger wichtig: Beim Starten von "
url: "https://mkennedy.codes/posts/fire-and-forget-at-textual/"
source: "Michael Kennedy's Thoughts on Technology"
category: Python
tags: [
  "python",
  "asyncio",
  "async",
  "anfänger",
  "debugging"
]
date: 2026-03-29
og_image: "https://raw.githubusercontent.com/Psysin/philsdevquest-website/main/public/images/news/2026-03-29-fire-and-forget-warum-deine-asyncio-tasks-einfach-verschwind.jpg"
---

## Was bedeutet eigentlich "Fire and Forget"?

Stell dir vor, du schickst jemanden los, um eine wichtige Aufgabe zu erledigen, und vergisst dann sofort, dass du das getan hast. Genau das passiert in Python, wenn du asynchrone Tasks mit `asyncio.create_task()` startest, aber keine Referenz auf sie speicherst. Der Task wird gestartet, läuft vielleicht kurz, und verschwindet dann einfach, ohne dass du es merkst.

Dieses Muster nennt sich "Fire and Forget", und es klingt zunächst harmlos. In der Praxis kann es jedoch zu Bugs führen, die extrem schwer zu finden sind, weil Python keine Fehlermeldung wirft, sondern einfach stillschweigend weitermacht.

## Wie asyncio Tasks intern verwaltet

Um das Problem zu verstehen, hilft ein kurzer Blick hinter die Kulissen. Python's `asyncio`-Modul verwaltet laufende Tasks über einen sogenannten Event Loop. Wenn du einen Task mit `asyncio.create_task()` erstellst, wird er in diesem Loop registriert und soll dort laufen, bis er fertig ist.

Das Problem: Der Event Loop hält nur eine schwache Referenz auf den Task. Das bedeutet, sobald keine andere Stelle im Code mehr auf diesen Task zeigt, kann Pythons Garbage Collector ihn jederzeit entfernen, auch mitten in der Ausführung. Das Ergebnis ist ein Task, der einfach aufhört zu existieren, ohne seinen Job beendet zu haben.

## Ein konkretes Beispiel

Hier ein vereinfachtes Beispiel, das das Problem zeigt:

python
import asyncio

async def wichtige_aufgabe():
    await asyncio.sleep(1)
    print("Aufgabe abgeschlossen!")

async def main():
    asyncio.create_task(wichtige_aufgabe())  # Keine Referenz gespeichert!
    await asyncio.sleep(2)

asyncio.run(main())


In vielen Fällen funktioniert das zufällig, weil der Garbage Collector nicht genau dann aufräumt. Aber verlassen kann man sich darauf nicht. Manchmal läuft der Code, manchmal nicht, und genau das macht solche Bugs so tückisch.

## Die Lösung: Referenzen in einem Set speichern

Die empfohlene Lösung ist einfach und effektiv. Du speicherst alle laufenden Tasks in einem Set und sorgst dafür, dass sie sich nach Abschluss selbst daraus entfernen:

python
import asyncio

laufende_tasks = set()

async def wichtige_aufgabe():
    await asyncio.sleep(1)
    print("Aufgabe abgeschlossen!")

async def main():
    task = asyncio.create_task(wichtige_aufgabe())
    laufende_tasks.add(task)
    task.add_done_callback(laufende_tasks.discard)
    await asyncio.sleep(2)

asyncio.run(main())


Durch `add_done_callback` wird der Task automatisch aus dem Set entfernt, sobald er fertig ist. Das Set hält eine starke Referenz auf den Task, solange er läuft, und der Garbage Collector lässt ihn in Ruhe.

## Warum das so viele betrifft

Michael Kennedy hat in seinem Artikel recherchiert, dass dieses Muster in über 500.000 Code-Dateien auf GitHub vorkommt. Das ist keine kleine Randnotiz, sondern ein weit verbreitetes Problem in der Python-Community. Selbst erfahrene Entwickler tappen in diese Falle, weil `asyncio.create_task()` auf den ersten Blick vollkommen korrekt aussieht.

Besonders in Frameworks wie Textual, das stark auf asynchrone Programmierung setzt, kann dieses Problem schnell auftauchen. Wer dort eigene Background-Tasks startet, sollte die Referenz-Regel unbedingt im Hinterkopf behalten.

## Was du als Anfänger mitnehmen solltest

Asynchrone Programmierung ist eines der Themen in Python, bei denen kleine Unachtsamkeiten große Auswirkungen haben können. Die gute Nachricht: Wenn du dir von Anfang an angewöhnst, Tasks immer in einem Set zu speichern, wirst du diesen Fehler gar nicht erst machen.

Eine einfache Faustregel lautet:

- Niemals `asyncio.create_task()` aufrufen, ohne das Ergebnis einer Variable zuzuweisen.
- Tasks, die im Hintergrund laufen sollen, immer in einem Set oder einer Liste verwalten.
- `add_done_callback` nutzen, um das Set automatisch sauber zu halten.

Diese drei Punkte kosten dich beim Schreiben kaum Zeit, können aber stundenlange Debugging-Sessions ersparen.

## Quelle

Dieser Artikel basiert auf dem Blogpost von Michael Kennedy: [Fire and Forget at Textual](https://mkennedy.codes/posts/fire-and-forget-at-textual/). Kennedy ist bekannt als Host des Talk Python To Me Podcasts und teilt auf seinem Blog regelmäßig praxisnahe Einblicke in die Python-Entwicklung.
