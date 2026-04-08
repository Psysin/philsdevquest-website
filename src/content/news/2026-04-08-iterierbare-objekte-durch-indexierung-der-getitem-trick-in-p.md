---
title: "Iterierbare Objekte durch Indexierung: Der __getitem__-Trick in Python"
description: "Lerne, wie du mit der __getitem__-Methode eigene Python-Objekte in for-Schleifen verwendbar machst – ohne Iterator-Protokoll."
summary: "Dieser Artikel erklärt, wie Python-Objekte automatisch in for-Schleifen verwendbar werden, wenn du die __getitem__-Methode mit Integer-Indizes implementierst. Anhand einer ArithmeticSequence-Klasse wird gezeigt, wie durch einfache Indexierung ein Objekt iterierbar wird, ohne explizit Iterator-Methoden implementieren zu müssen. Das ist besonders nützlich für Anfänger, die eigene..."
url: "https://mathspp.com/blog/indexable-iterables"
source: "mathspp.com"
category: Python
tags: [
  "python",
  "iterables",
  "dunder-methoden",
  "objektorientierung",
  "for-schleife"
]
date: 2026-04-08
og_image: "https://raw.githubusercontent.com/Psysin/philsdevquest-website/main/public/images/news/2026-04-08-iterierbare-objekte-durch-indexierung-der-getitem-trick-in-p.jpg"
---

## Was macht ein Objekt iterierbar?

Wenn du in Python eine for-Schleife schreibst, denkst du wahrscheinlich zuerst an Listen, Tupel oder Strings. Aber hast du dich schon mal gefragt, wie Python eigentlich entscheidet, ob ein Objekt in einer for-Schleife verwendet werden kann? Die Antwort ist überraschend flexibel: Es gibt nicht nur einen Weg, sondern mehrere.

Der klassische Ansatz ist das Iterator-Protokoll mit den Methoden `__iter__()` und `__next__()`. Doch Python bietet einen weniger bekannten Trick: Wenn deine Klasse die `__getitem__()`-Methode mit Integer-Indizes unterstützt, wird sie automatisch iterierbar. Das ist besonders praktisch für Anfänger, die eigene Container-Klassen erstellen möchten, ohne sich sofort mit dem kompletten Iterator-Protokoll auseinandersetzen zu müssen.

## Die magische __getitem__-Methode

Die `__getitem__()`-Methode kennst du vielleicht schon vom Zugriff auf Listenelemente mit eckigen Klammern: `meine_liste[0]`. Wenn du diese Methode in deiner eigenen Klasse implementierst, ermöglichst du genau diesen Zugriff. Python ist dabei clever genug zu erkennen: "Wenn ich mit Integer-Indizes auf Elemente zugreifen kann, dann kann ich das Objekt auch durchlaufen."

Der Mechanismus dahinter ist simpel. Python versucht bei einer for-Schleife zunächst, auf Index 0 zuzugreifen, dann auf Index 1, dann auf Index 2 und so weiter. Sobald ein `IndexError` auftritt, weiß Python, dass alle Elemente durchlaufen wurden und beendet die Schleife.

## Beispiel: Eine arithmetische Sequenz

Stell dir vor, du möchtest eine Klasse erstellen, die arithmetische Folgen repräsentiert – also Zahlenreihen wie 2, 5, 8, 11, 14, bei denen jeder Schritt gleich groß ist. Hier ist eine einfache Implementierung:

python
class ArithmeticSequence:
    def __init__(self, start, step, length):
        self.start = start
        self.step = step
        self.length = length
    
    def __getitem__(self, index):
        if not isinstance(index, int):
            raise TypeError("Index muss eine Ganzzahl sein")
        if index < 0 or index >= self.length:
            raise IndexError("Index außerhalb des gültigen Bereichs")
        return self.start + index * self.step


Diese Klasse speichert nur drei Werte: den Startwert, die Schrittweite und die Länge der Sequenz. Die eigentlichen Werte werden erst bei Bedarf berechnet, wenn auf einen bestimmten Index zugegriffen wird.

## Automatische Iteration ohne Iterator-Protokoll

Das Faszinierende: Obwohl wir weder `__iter__()` noch `__next__()` implementiert haben, funktioniert diese Klasse in for-Schleifen:

python
seq = ArithmeticSequence(start=10, step=3, length=5)

for zahl in seq:
    print(zahl)
# Ausgabe: 10, 13, 16, 19, 22


Python ruft im Hintergrund nacheinander `seq[0]`, `seq[1]`, `seq[2]` und so weiter auf, bis ein `IndexError` geworfen wird. Das ist ein eleganter Fallback-Mechanismus, der besonders für Sequenzen mit fester Länge gut funktioniert.

## Wann solltest du diesen Ansatz nutzen?

Dieser Trick eignet sich besonders gut für Objekte, die:

- Eine feste oder bekannte Anzahl von Elementen haben
- Sich natürlich über Integer-Indizes ansprechen lassen
- Einfach zu implementieren sein sollen, ohne komplexes Iterator-Management

Für unendliche Sequenzen oder Datenströme, bei denen du nicht im Voraus weißt, wie viele Elemente existieren, ist das vollständige Iterator-Protokoll die bessere Wahl. Aber für viele Alltagsfälle – etwa wenn du eine eigene Liste-ähnliche Datenstruktur baust – ist `__getitem__()` der schnellere und intuitivere Weg.

Ein weiterer Vorteil: Deine Klasse unterstützt automatisch auch andere Operationen wie `len()` (wenn du `__len__()` implementierst) und Slicing, was sie noch vielseitiger macht.

## Quelle

Dieser Artikel basiert auf dem Blogbeitrag von Rodrigo Girão Serrão auf mathspp.com: [Indexable iterables](https://mathspp.com/blog/indexable-iterables). Dort findest du weitere Details und zusätzliche Beispiele zum Thema.
