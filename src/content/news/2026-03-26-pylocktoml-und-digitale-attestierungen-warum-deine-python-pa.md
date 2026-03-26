---
title: "pylock.toml und digitale Attestierungen: Warum deine Python-Pakete jetzt sicherer werden"
description: "Mit pylock.toml und digitalen Attestierungen lässt sich in Python prüfen, ob Pakete wirklich aus der erwarteten Quelle stammen – so funktioniert es."
summary: "Der Artikel erklärt, wie digitale Attestierungen in Python-Projekten dabei helfen, gefälschte oder manipulierte Paket-Releases auf PyPI zu erkennen. Mithilfe von 'Trusted Publishing' und der neuen Lock-Datei 'pylock.toml' kann automatisch überprüft werden, ob ein Paket wirklich aus der erwarteten Quelle stammt. Für Anfänger ist das Thema relevant, weil es zeigt, wie man externe Abhängigk"
url: "https://snarky.ca/why-pylock-toml-includes-digital-attestations/"
source: "snarky.ca (Brett Cannon)"
category: Python
tags: [
  "python",
  "pypi",
  "paketverwaltung",
  "sicherheit",
  "pylock.toml"
]
date: 2026-03-26
og_image: "https://raw.githubusercontent.com/Psysin/philsdevquest-website/main/public/images/news/2026-03-26-pylocktoml-und-digitale-attestierungen-warum-deine-python-pa.jpg"
---

## Das Problem: Woher kommt dieses Paket eigentlich?

Wer Python-Projekte entwickelt, installiert früher oder später externe Pakete über PyPI. Das ist praktisch und gehört zum Alltag. Aber hast du dich schon einmal gefragt, ob das Paket, das du gerade installierst, wirklich das ist, was es vorgibt zu sein? Genau hier setzt ein neues Konzept an, das Brett Cannon in seinem Blogartikel ausführlich erklärt: digitale Attestierungen in Kombination mit der neuen Lock-Datei `pylock.toml`.

## Was ist eine Lock-Datei und warum brauche ich sie?

Eine Lock-Datei speichert die exakten Versionen aller Pakete, die ein Projekt verwendet. Das klingt zunächst unspektakulär, ist aber enorm wichtig. Ohne Lock-Datei kann es passieren, dass zwei Entwickler dasselbe Projekt auschecken und trotzdem unterschiedliche Paketversionen installiert bekommen, weil zwischenzeitlich Updates erschienen sind.

`pylock.toml` ist der neue Standard dafür in der Python-Welt. Die Datei wird im TOML-Format geschrieben, das du vielleicht schon aus `pyproject.toml` kennst, und soll künftig von verschiedenen Tools wie `pip` oder `uv` unterstützt werden. Das Ziel ist eine einheitliche, toolübergreifende Lösung, die bisher fehlte.

## Digitale Attestierungen: Ein Echtheitszertifikat für Pakete

Neben der Versionsfixierung bringt `pylock.toml` eine weitere Neuerung mit: die Unterstützung digitaler Attestierungen. Eine Attestierung ist im Grunde ein kryptografisch signierter Nachweis, der belegt, dass ein bestimmtes Paket-Release tatsächlich aus einem bestimmten Quellcode-Repository stammt und über eine definierte CI/CD-Pipeline gebaut wurde.

Konkret funktioniert das so:

- Ein Paketautor veröffentlicht sein Paket über ein sogenanntes "Trusted Publishing"-Verfahren auf PyPI.
- Dabei wird automatisch eine Attestierung erstellt, die das Paket mit dem GitHub-Repository und dem genauen Workflow-Run verknüpft.
- Diese Attestierung wird zusammen mit dem Paket auf PyPI gespeichert.
- Wenn du das Paket später installierst, kann dein Tool prüfen, ob die Attestierung gültig ist.

Das klingt technisch, hat aber einen sehr praktischen Nutzen: Es wird deutlich schwerer, ein gefälschtes oder manipuliertes Paket unter dem Namen eines legitimen Projekts auf PyPI hochzuladen.

## Trusted Publishing: Der Schlüssel zum System

Das Konzept des Trusted Publishing ist dabei zentral. Anstatt sich mit einem statischen API-Token bei PyPI anzumelden, nutzt der Paketautor die Identität seiner CI/CD-Umgebung, zum Beispiel einen GitHub Actions Workflow. PyPI vertraut dieser Umgebung und stellt beim Upload automatisch eine Attestierung aus.

Für dich als Anfänger bedeutet das: Du musst das Verfahren nicht selbst implementieren. Wenn du Pakete von Autoren verwendest, die Trusted Publishing nutzen, profitierst du automatisch davon, sobald dein Tool die Attestierungen in der `pylock.toml` überprüft. Es ist ein bisschen wie ein Herkunftsnachweis beim Lebensmittelkauf, nur eben für Code.

## Warum ist das für Anfänger relevant?

Gerade wer am Anfang steht, installiert Pakete oft ohne groß nachzudenken. Das ist verständlich, denn die Hürde soll niedrig sein. Aber Supply-Chain-Angriffe, also Angriffe, bei denen Schadsoftware über manipulierte Abhängigkeiten eingeschleust wird, sind ein reales Problem. Bekannte Beispiele aus der Vergangenheit zeigen, dass selbst große Projekte betroffen sein können.

Die gute Nachricht: Du musst kein Sicherheitsexperte werden, um davon zu profitieren. Wenn du moderne Tools verwendest und auf `pylock.toml` setzt, übernimmt das Ökosystem einen Großteil der Arbeit für dich. Trotzdem lohnt es sich, das Prinzip zu verstehen, denn es schärft das Bewusstsein dafür, dass externe Abhängigkeiten keine Selbstverständlichkeit sind.

## Was bedeutet das für die Praxis?

Derzeit befindet sich `pylock.toml` noch in der Entwicklung und ist kein fertiger Standard, den du sofort in jedem Projekt einsetzen kannst. Aber die Richtung ist klar: Die Python-Community arbeitet aktiv daran, die Paketverwaltung sicherer und einheitlicher zu gestalten. Es lohnt sich, das Thema im Blick zu behalten und die eigenen Projekte schrittweise auf moderne Standards umzustellen.

Wenn du heute anfängst, dich mit `pyproject.toml` und Lock-Dateien vertraut zu machen, bist du gut vorbereitet, wenn `pylock.toml` zum Standard wird.

## Quelle

Dieser Artikel basiert auf dem Originalbeitrag von Brett Cannon auf seinem Blog snarky.ca: [Why pylock.toml includes digital attestations](https://snarky.ca/why-pylock-toml-includes-digital-attestations/). Dort findest du eine technisch tiefergehende Erklärung des Themas direkt vom Python-Core-Entwickler.
