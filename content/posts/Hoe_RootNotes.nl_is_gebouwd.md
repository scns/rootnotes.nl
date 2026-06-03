---

title: "Hoe RootNotes.nl is gebouwd"
date: 2026-06-03
description: "Een kijkje achter de schermen van RootNotes.nl. Van Hugo en GitHub Pages tot automatische deployments en reacties via GitHub Discussions."
tags: ["hugo", "github", "github-pages", "giscus", "opensource"]
categories: ["Techniek"]
------------------------

# Hoe RootNotes.nl is gebouwd

Wanneer je een website bezoekt, zie je meestal alleen het eindresultaat. Een homepage, een paar artikelen en misschien een contactpagina. Maar achter iedere website zit een verzameling keuzes, technieken en soms ook een gezonde dosis experimenteren.

Omdat dit de eerste technische blogpost op RootNotes is, leek het me leuk om direct onder de motorkap te kijken. Hoe draait deze website eigenlijk?

## Geen WordPress, geen database

Voor deze blog wilde ik het zo simpel mogelijk houden.

Veel websites draaien op een CMS zoals WordPress. Dat werkt prima, maar brengt ook een hoop extra onderdelen met zich mee: databases, plugins, updates en beveiligingsonderhoud.

Voor een blog die voornamelijk uit tekst bestaat vond ik dat wat overdreven.

Daarom is gekozen voor een zogenaamde *static site*. De pagina's worden vooraf gegenereerd en vervolgens als gewone HTML-bestanden gepubliceerd. Er hoeft dus geen database geraadpleegd te worden wanneer jij een pagina opent.

Dat levert een aantal voordelen op:

* Snellere laadtijden
* Minder onderhoud
* Minder beveiligingsrisico's
* Eenvoudige hosting
* Lage kosten

## Hugo als basis

De website is gebouwd met **Hugo**, een open-source static site generator geschreven in Go. Hugo staat bekend als één van de snelste oplossingen voor het bouwen van websites. Zelfs grote websites met duizenden pagina's kunnen binnen enkele seconden worden gegenereerd.

Alle artikelen worden geschreven als Markdown-bestanden.

Een nieuw artikel aanmaken kan simpelweg met:

```bash
hugo new posts/mijn-artikel.md
```

Daarna hoef ik alleen nog maar de inhoud te schrijven.

Wanneer Hugo draait, worden alle Markdown-bestanden automatisch omgezet naar complete HTML-pagina's.

## Alles staat in GitHub

De volledige website staat in een openbare GitHub-repository.

Dat betekent dat:

* De broncode zichtbaar is.
* Wijzigingen worden bijgehouden.
* Oude versies eenvoudig teruggezet kunnen worden.
* Nieuwe functies veilig getest kunnen worden.

Zelfs deze blogpost begint uiteindelijk als een commit in Git. Iedere wijziging wordt opgeslagen zodat precies terug te zien is wat er veranderd is en wanneer.

## Automatisch publiceren met GitHub Actions

Het leuke aan moderne tooling is dat publiceren bijna volledig automatisch kan.

Zodra ik wijzigingen naar de `main`-branch push, start GitHub Actions automatisch een workflow. Deze workflow bouwt de website met Hugo en publiceert de gegenereerde bestanden naar GitHub Pages.

In de praktijk komt het neer op:

```bash
git add .
git commit -m "Nieuw artikel"
git push
```

Daarna regelt GitHub de rest.

Geen FTP-clients, geen handmatige uploads en geen ingewikkelde deploymentprocedures.

## GitHub Pages als hostingplatform

Voor de hosting wordt gebruikgemaakt van GitHub Pages.

GitHub Pages is oorspronkelijk bedoeld voor documentatie- en projectwebsites, maar werkt ook uitstekend voor persoonlijke blogs. Hugo genereert statische bestanden en GitHub Pages serveert deze rechtstreeks aan bezoekers.

Daarnaast is een eigen domeinnaam gekoppeld via een CNAME-configuratie waardoor de site bereikbaar is via:

```
https://rootnotes.nl
```

Dat zorgt ervoor dat bezoekers niets merken van de onderliggende GitHub-infrastructuur.

## Een eigen Hugo-thema

In plaats van een standaard thema draait RootNotes op een eigen Hugo-thema.

Dat thema bevindt zich in:

```text
themes/rootnotes/
```

Hierin zitten onder andere:

* HTML-templates
* CSS-bestanden
* Layouts
* Navigatie
* Artikelweergaven

Daardoor heb ik volledige controle over de uitstraling van de website zonder afhankelijk te zijn van externe thema's.

## Reacties zonder comment-plugin

Reacties zijn altijd een interessant onderwerp.

Veel blogs gebruiken systemen zoals Disqus, maar die voegen externe scripts, tracking en extra afhankelijkheden toe.

RootNotes gebruikt daarom **Giscus**.

Giscus koppelt reacties direct aan GitHub Discussions. Iedere reactie onder een artikel wordt opgeslagen als een discussie binnen dezelfde repository.

Voordelen daarvan zijn:

* Geen aparte database
* Geen advertentienetwerk
* Geen trackingplatform
* Goede moderatiemogelijkheden
* Integratie met GitHub

Het enige wat bezoekers nodig hebben is een GitHub-account.

## Donkere en lichte modus

Omdat veel ontwikkelaars uren achter een scherm zitten, ondersteunt RootNotes zowel een lichte als donkere weergave.

De styling wordt volledig verzorgd vanuit het eigen CSS-bestand binnen het thema. Daardoor blijft de website lichtgewicht zonder afhankelijk te zijn van grote frontend-frameworks.

## Waarom deze aanpak?

Voor mij draait een blog om inhoud.

Ik wil schrijven, publiceren en weer verder kunnen. Niet bezig zijn met databases repareren, plugins updaten of serverproblemen oplossen.

Met Hugo, GitHub Pages, GitHub Actions en Giscus bestaat de volledige infrastructuur uit een handvol overzichtelijke componenten die goed samenwerken.

Het resultaat is een snelle website, minimale onderhoudslast en volledige controle over de inhoud.

En misschien nog wel het belangrijkste: meer tijd om artikelen te schrijven dan om de website te onderhouden.

Dat lijkt me precies zoals een blog hoort te zijn.
