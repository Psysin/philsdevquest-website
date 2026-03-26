---
title: "Fünf Python-Versionen auf einmal: Wichtige Sicherheitsupdates erschienen"
description: "Am 3. Juni 2025 wurden fünf Python-Versionen mit Sicherheitsupdates veröffentlicht. Warum du deine Python-Installation jetzt aktualisieren solltest."
summary: "Am 3. Juni 2025 wurden gleich fünf Python-Versionen auf einmal aktualisiert: 3.13.4, 3.12.11, 3.11.13, 3.10.18 und 3.9.23. Der Hauptgrund für die gleichzeitige Veröffentlichung waren Sicherheitslücken (CVEs) im tarfile-Modul, die in allen unterstützten Versionen behoben wurden. Für Anfänger ist das ein guter Anlass, die eigene Python-Installation zu aktualisieren und zu verstehen, warum "
url: "https://blog.python.org/2025/06/python-3134-31211-31113-31018-and-3923/"
source: "Python Blog (Thomas Wouters)"
category: Python
tags: [
  "python",
  "sicherheit",
  "update",
  "cve",
  "anfänger"
]
date: 2026-03-26
og_image: "https://raw.githubusercontent.com/Psysin/philsdevquest-website/main/public/images/news/2026-03-26-fuenf-python-versionen-auf-einmal-wichtige-sicherheitsupdate.jpg"
---

## Fünf Updates auf einen Schlag

Am 3. Juni 2025 hat das Python-Entwicklerteam gleich fünf Versionen auf einmal veröffentlicht: Python 3.13.4, 3.12.11, 3.11.13, 3.10.18 und 3.9.23. Das ist ungewöhnlich, denn normalerweise erscheinen neue Versionen versetzt. Dass hier alle auf einmal kamen, hat einen konkreten Grund: Es wurden Sicherheitslücken entdeckt, die alle noch unterstützten Python-Versionen betreffen, und die sollten so schnell wie möglich geschlossen werden.

## Was ist eigentlich eine CVE?

Der Begriff CVE taucht in der Softwarewelt regelmäßig auf und klingt zunächst technisch und abstrakt. CVE steht für "Common Vulnerabilities and Exposures" und ist im Grunde eine öffentliche Datenbank, in der bekannte Sicherheitslücken katalogisiert werden. Jede Lücke bekommt eine eindeutige Nummer, zum Beispiel CVE-2025-XXXXX, damit Entwickler und Nutzer weltweit über dieselbe Schwachstelle sprechen können, ohne Missverständnisse.

Wenn eine CVE für eine Programmiersprache wie Python veröffentlicht wird, bedeutet das: Es gibt eine bekannte Schwachstelle, die theoretisch von Angreifern ausgenutzt werden könnte. Deshalb ist es wichtig, zeitnah zu aktualisieren.

## Das tarfile-Modul im Fokus

Die konkreten Sicherheitslücken, die diese Sammelveröffentlichung ausgelöst haben, befinden sich im tarfile-Modul. Dieses Modul ist Teil der Python-Standardbibliothek und wird verwendet, um TAR-Archive zu erstellen und zu entpacken. TAR-Dateien kennt man vor allem aus der Linux- und macOS-Welt, aber auch unter Windows begegnen sie einem gelegentlich.

Die genauen Details der Schwachstellen werden in solchen Fällen oft erst nach einer gewissen Zeit vollständig offengelegt, damit Nutzer zunächst die Möglichkeit haben, ihre Systeme zu aktualisieren. Das ist eine gängige Praxis in der IT-Sicherheit und nennt sich "Responsible Disclosure".

## Welche Version betrifft mich?

Ein häufiges Missverständnis bei Anfängern ist die Annahme, dass man immer die allerneueste Python-Version verwenden muss. Das stimmt so nicht ganz. Python pflegt mehrere Versionen gleichzeitig, solange sie noch im offiziellen Support-Zeitraum liegen. Aktuell sind das:

- Python 3.9 (Sicherheitsupdates bis Oktober 2025)
- Python 3.10 (Sicherheitsupdates bis Oktober 2026)
- Python 3.11 (Sicherheitsupdates bis Oktober 2027)
- Python 3.12 (aktiver Support bis Oktober 2028)
- Python 3.13 (aktuelle Hauptversion, aktiver Support)

Wenn du also noch Python 3.10 nutzt, bist du nicht zwingend "veraltet", aber du solltest sicherstellen, dass du die jeweils neueste Patch-Version dieser Reihe verwendest, in diesem Fall 3.10.18.

## So aktualisierst du Python

Die einfachste Methode, Python zu aktualisieren, hängt davon ab, wie du es installiert hast. Wer Python direkt von python.org heruntergeladen hat, besucht einfach erneut die offizielle Website und lädt den neuen Installer herunter. Unter Windows führt man den Installer aus und wählt die Option zum Aktualisieren. Unter macOS und Linux empfiehlt sich oft ein Paketmanager wie Homebrew oder der systemeigene Paketmanager.

Ein kurzer Check in der Kommandozeile zeigt dir, welche Version gerade aktiv ist:


python --version


oder


python3 --version


## Warum regelmäßige Updates so wichtig sind

Für viele Einsteiger fühlen sich Updates wie eine lästige Pflicht an, besonders wenn das eigene Projekt gerade gut läuft und man nichts kaputt machen möchte. Dieser Gedanke ist verständlich, aber er birgt Risiken. Sicherheitslücken in Standardbibliotheken wie tarfile können in realen Projekten ausgenutzt werden, zum Beispiel wenn eine Webanwendung Dateien von Nutzern entgegennimmt und verarbeitet.

Das Gute an Patch-Releases wie diesen ist, dass sie in der Regel keine neuen Features einführen und damit auch keine bestehenden Programme brechen. Ein Update von 3.12.10 auf 3.12.11 ist also in den allermeisten Fällen problemlos möglich.

Es lohnt sich, den offiziellen Python-Blog gelegentlich im Blick zu behalten oder die Release-Ankündigungen zu abonnieren. So bleibt man informiert, ohne ständig aktiv suchen zu müssen.

## Quelle

Dieser Artikel basiert auf dem offiziellen Beitrag von Thomas Wouters im Python-Blog: [Python 3.13.4, 3.12.11, 3.11.13, 3.10.18 and 3.9.23 are now available](https://blog.python.org/2025/06/python-3134-31211-31113-31018-and-3923/)
