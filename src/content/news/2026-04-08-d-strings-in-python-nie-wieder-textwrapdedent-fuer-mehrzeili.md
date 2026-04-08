---
title: "D-Strings in Python: Nie wieder textwrap.dedent() für mehrzeilige Texte?"
description: "Python könnte D-Strings bekommen, die Einrückungen automatisch entfernen. Plus: Lazy Imports in Python 3.15 für schnellere Programmstarts."
summary: "Python könnte mit PEP 822 eine neue Funktion namens D-Strings bekommen, die automatisch überflüssige Einrückungen aus mehrzeiligen Texten entfernt – ohne dass man textwrap.dedent() verwenden muss. Außerdem ist Python 3.15.0 Alpha 7 erschienen mit 'Lazy Imports', die Module erst dann laden, wenn sie wirklich gebraucht werden, was Programme schneller starten lässt. Für Anfänger..."
url: "https://realpython.com/python-news-april-2026/"
source: "Real Python"
category: Python
tags: [
  "python",
  "d-strings",
  "pep 822",
  "lazy imports",
  "python 3.15"
]
date: 2026-04-08
og_image: "https://raw.githubusercontent.com/Psysin/philsdevquest-website/main/public/images/news/2026-04-08-d-strings-in-python-nie-wieder-textwrapdedent-fuer-mehrzeili.jpg"
---

## Was sind D-Strings und warum sind sie wichtig?

Wenn du in Python schon mal längere SQL-Abfragen oder mehrzeilige Hilfetexte geschrieben hast, kennst du das Problem: Der Code sieht mit Einrückungen ordentlich aus, aber die Ausgabe hat unschöne Leerzeichen am Anfang jeder Zeile. Bisher musste man dafür `textwrap.dedent()` verwenden – eine Funktion, die diese überflüssigen Einrückungen nachträglich entfernt. Mit PEP 822 könnte Python eine elegantere Lösung bekommen: D-Strings.

D-Strings sind eine neue Art von String-Literalen, die automatisch die gemeinsame Einrückung aller Zeilen entfernen. Du schreibst einfach ein `d` vor deine Anführungszeichen, und Python kümmert sich um den Rest. Das macht deinen Code lesbarer und erspart dir eine zusätzliche Funktionsaufrufe.

## Wie funktionieren D-Strings in der Praxis?

Stell dir vor, du schreibst eine SQL-Abfrage in deinem Python-Code. Bisher musstest du entweder die Einrückung opfern oder `dedent()` verwenden:

python
from textwrap import dedent

query = dedent("""
    SELECT name, email
    FROM users
    WHERE active = true
    """)


Mit D-Strings wird das deutlich einfacher:

python
query = d"""
    SELECT name, email
    FROM users
    WHERE active = true
    """


Das Ergebnis ist identisch, aber der Code ist klarer und direkter. Die Einrückung wird automatisch so angepasst, dass die erste nicht-leere Zeile den Referenzpunkt bildet. Besonders praktisch ist das bei Docstrings, mehrzeiligen Fehlermeldungen oder Templates.

## Python 3.15.0 Alpha 7: Lazy Imports für schnellere Starts

Neben D-Strings gibt es noch eine weitere spannende Neuerung in Python 3.15.0 Alpha 7: Lazy Imports. Diese Funktion lädt Module erst dann, wenn sie tatsächlich verwendet werden, nicht schon beim Import-Statement. Das klingt nach einem kleinen Detail, kann aber einen großen Unterschied machen.

Wenn dein Programm viele Module importiert, aber nicht alle sofort braucht, verschwendest du wertvolle Startzeit. Lazy Imports lösen dieses Problem, indem sie das Laden verzögern. Für größere Projekte oder CLI-Tools bedeutet das spürbar schnellere Programmstarts. Als Anfänger hilft dir das Konzept auch, besser zu verstehen, wie Python mit Modulen umgeht und wann welcher Code tatsächlich ausgeführt wird.

## Was bedeutet das für Anfänger?

Beide Features zeigen, wie Python kontinuierlich daran arbeitet, die Sprache intuitiver und effizienter zu machen. D-Strings sind ein perfektes Beispiel dafür, wie eine kleine syntaktische Ergänzung den Alltag erleichtern kann. Du musst dir eine Funktion weniger merken und dein Code wird lesbarer.

Lazy Imports hingegen sind eher eine Performance-Optimierung unter der Haube. Du musst nichts an deinem Code ändern, profitierst aber automatisch von schnelleren Startzeiten. Beide Neuerungen zeigen: Python entwickelt sich weiter, ohne dabei seine Einfachheit zu verlieren.

Es ist noch nicht sicher, ob PEP 822 tatsächlich angenommen wird – solche Vorschläge durchlaufen einen langen Diskussionsprozess in der Python-Community. Aber die Tatsache, dass darüber gesprochen wird, zeigt, welche Probleme echte Entwickler im Alltag haben und wie Python versucht, diese zu lösen.

## Solltest du schon jetzt etwas ändern?

Kurze Antwort: Nein. D-Strings sind noch ein Vorschlag und nicht Teil der offiziellen Python-Version. Python 3.15 ist ebenfalls noch in der Alpha-Phase und sollte nicht in Produktivumgebungen eingesetzt werden. Aber es lohnt sich, diese Entwicklungen im Auge zu behalten.

Wenn du neugierig bist, kannst du die Alpha-Version in einer isolierten Umgebung testen und mit den neuen Features experimentieren. So bekommst du ein Gefühl dafür, wie Python sich entwickelt und welche Richtung die Sprache einschlägt. Für deine aktuellen Projekte bleib aber bei stabilen Python-Versionen wie 3.12 oder 3.13.

## Quelle

Dieser Artikel basiert auf dem Beitrag ["D-Strings Could End Your textwrap.dedent() Days and Other Python News for April 2026"](https://realpython.com/python-news-april-2026/) von Real Python, der ausführlich über PEP 822 und die Neuerungen in Python 3.15 berichtet.
