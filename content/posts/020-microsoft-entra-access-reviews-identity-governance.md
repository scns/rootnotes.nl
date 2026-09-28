+++
title = "Microsoft Entra Access Reviews: waarom rechten regelmatig gecontroleerd moeten worden"
date = 2026-08-10
description = "Ontdek hoe Microsoft Entra Access Reviews helpen bij het voorkomen van privilege creep, het verbeteren van compliance en het beheren van toegangsrechten binnen een Zero Trust-strategie."
tags = ["access-reviews", "identity-governance", "entra-id", "zero-trust", "security", "access-packages", "pim"]
categories = ["Identity & Security"]
+++

## Toegang geven is eenvoudig. Toegang intrekken is de uitdaging

{{< sideimage src="/images/accessreview.png" alt="accessreview" align="right" width="260px" >}}

Vrijwel iedere organisatie heeft processen voor het verstrekken van toegang.

Een nieuwe medewerker start.

Een consultant wordt ingehuurd.

Een projectteam wordt opgezet.

Binnen enkele minuten worden groepen toegewezen, applicaties beschikbaar gemaakt en rechten verstrekt.

Maar wat gebeurt er daarna?

Dat is vaak het moment waarop het overzicht verdwijnt.

Projecten eindigen.

Functies veranderen.

Medewerkers verlaten de organisatie.

Externe partijen ronden hun werkzaamheden af.

Toch blijven rechten vaak bestaan.

Soms maanden.

Soms jaren.

En juist daar ontstaat een van de grootste risico's binnen Identity & Access Management:

> **Privilege Creep**

---

## Wat is Privilege Creep?

Privilege Creep ontstaat wanneer gebruikers in de loop van de tijd steeds meer rechten verzamelen zonder dat oude rechten worden verwijderd.

Een voorbeeld:

### Jaar 1

```text id="av7r4q"
Helpdesk
```

Toegang tot:

* Service Desk Portal
* Intune Read Access

---

### Jaar 2

```text id="d5n3ka"
Endpoint Engineer
```

Extra toegang:

* Intune Administrator
* Device Management

---

### Jaar 4

```text id="h4yo4d"
Security Engineer
```

Extra toegang:

* Defender Portal
* Security Tools

---

Resultaat:

Alle oude rechten bestaan nog steeds.

Vaak zonder dat iemand zich daarvan bewust is.

---

## Waarom privilege creep gevaarlijk is

Hoe meer rechten een gebruiker verzamelt, hoe groter het risico wordt wanneer dat account wordt gecompromitteerd.

Een aanvaller krijgt dan niet alleen toegang tot de huidige functie.

Maar ook tot alle historische rechten die nooit zijn verwijderd.

Daarom geldt binnen moderne beveiligingsarchitecturen:

> Toegang moet niet alleen worden verstrekt. Toegang moet ook periodiek worden gevalideerd.

Dat is precies waar Access Reviews voor bedoeld zijn.

---

## Wat zijn Microsoft Entra Access Reviews?

Access Reviews zijn onderdeel van Microsoft Entra Identity Governance.

Met Access Reviews kunnen organisaties periodiek controleren:

* Wie toegang heeft
* Waarom die toegang bestaat
* Of de toegang nog nodig is

Het proces kan volledig worden geautomatiseerd.

Daardoor ontstaat een continue controle op bestaande machtigingen.

---

## Welke licenties zijn nodig?

Access Reviews maken onderdeel uit van:

### Microsoft Entra ID P2

Beschikbaar binnen:

* Microsoft 365 E5
* Microsoft Entra ID P2
* Microsoft Security E5
* EMS E5

Voor organisaties die actief gebruikmaken van:

* Access Packages
* PIM
* Identity Governance

is Entra ID P2 feitelijk een vereiste.

---

## Wat kan worden gereviewd?

Access Reviews kunnen worden toegepast op verschillende typen toegang.

### Security Groups

Controle op groepslidmaatschappen.

---

### Microsoft 365 Groups

Controle op samenwerkingstoegang.

---

### Teams

Controle op teamlidmaatschappen.

---

### Enterprise Applications

Controle op SaaS-toegang.

---

### Access Packages

Controle op toegangspakketten.

---

### PIM Assignments

Controle op beheerdersrollen.

Dit maakt Access Reviews bijzonder breed inzetbaar.

---

## Waarom organisaties Access Reviews nodig hebben

Veel organisaties vertrouwen op een proces zoals:

```text id="v7d4fj"
Manager meldt uitdiensttreding
↓
IT verwijdert toegang
```

Dat werkt meestal goed.

Maar niet altijd.

In de praktijk zien we regelmatig:

* Vergeten accounts
* Projectgroepen die nooit worden opgeschoond
* Externe gebruikers die actief blijven
* Tijdelijke toegang die permanent wordt

Access Reviews vormen een extra veiligheidsnet.

---

## Hoe werkt een Access Review?

Een review verloopt doorgaans volgens een vast patroon.

```text id="z84s0v"
Review starten
↓
Reviewer ontvangt verzoek
↓
Toegang beoordelen
↓
Goedkeuren of verwijderen
↓
Actie automatisch uitvoeren
```

Hierdoor wordt toegangsbeheer een continu proces.

---

## Wie kan reviews uitvoeren?

Microsoft biedt verschillende mogelijkheden.

### Manager

De leidinggevende beoordeelt de toegang.

---

### Resource Owner

De eigenaar van de applicatie of groep voert de review uit.

---

### Gebruiker zelf

De gebruiker verklaart waarom toegang nog nodig is.

---

### Meerdere reviewers

Extra controle voor gevoelige omgevingen.

---

Mijn voorkeur gaat meestal uit naar de Resource Owner.

Deze persoon weet doorgaans het beste wie daadwerkelijk toegang nodig heeft.

---

## Automatische verwijdering van toegang

Een van de krachtigste functies.

Wanneer een gebruiker niet reageert op een review kan Microsoft automatisch actie ondernemen.

Bijvoorbeeld:

```text id="v2t8bz"
Geen reactie
↓
Review verloopt
↓
Toegang automatisch verwijderen
```

Dit voorkomt dat verouderde rechten blijven bestaan.

---

## Access Reviews voor externe gebruikers

Een van de meest voorkomende toepassingen.

Externe gebruikers zijn vaak lastig te beheren.

Bijvoorbeeld:

* Leveranciers
* Consultants
* Partners
* Externe ontwikkelaars

Veel organisaties weten niet precies welke externe accounts nog actief zijn.

Met Access Reviews kun je bijvoorbeeld instellen:

```text id="r0jh38"
Iedere 90 dagen review
```

Wanneer toegang niet wordt bevestigd:

```text id="pc57kw"
Toegang verwijderen
```

Hierdoor blijft de omgeving veel beter beheersbaar.

---

## Access Reviews en Access Packages

Access Packages en Access Reviews vormen een ideale combinatie.

### Access Package

Verstrekt toegang.

---

### Access Review

Valideert toegang.

Samen ontstaat een volledige lifecycle.

```text id="pwkz0e"
Aanvragen
↓
Goedkeuring
↓
Toegang
↓
Review
↓
Verlengen of verwijderen
```

Dit sluit perfect aan op Identity Governance.

---

## Access Reviews en PIM

Ook Privileged Identity Management maakt gebruik van Access Reviews.

Bijvoorbeeld voor:

* Global Administrator
* Security Administrator
* Exchange Administrator
* Intune Administrator

Hierdoor kan periodiek worden gecontroleerd:

> Heeft deze gebruiker deze rol nog nodig?

Dit voorkomt dat beheerrechten jarenlang actief blijven.

---

## Access Reviews en Zero Trust

Zero Trust draait om continue validatie.

Niet alleen van apparaten.

Niet alleen van identiteiten.

Maar ook van rechten.

Een belangrijke vraag binnen Zero Trust is:

> Waarom heeft iemand nog steeds toegang?

Access Reviews helpen organisaties om die vraag structureel te beantwoorden.

---

## Access Reviews en Compliance

Veel compliance-frameworks vereisen periodieke controle van toegangsrechten.

Denk aan:

* ISO 27001
* NIS2
* SOC 2
* CIS Controls

Access Reviews leveren aantoonbaar bewijs dat rechten actief worden gecontroleerd.

Dat maakt audits aanzienlijk eenvoudiger.

---

## Mijn aanbevolen configuratie

Voor de meeste organisaties adviseer ik:

### Externe gebruikers

```text id="mp2h6r"
Iedere 90 dagen
```

---

### Projectgroepen

```text id="q5z0fv"
Iedere 90 dagen
```

---

### Gevoelige applicaties

```text id="z1wncw"
Iedere 60 dagen
```

---

### Administratorrollen

```text id="tbofn3"
Iedere 30 tot 60 dagen
```

---

### Automatische verwijdering

```text id="c1mthf"
Inschakelen
```

---

## Veelgemaakte fouten

### Reviews uitvoeren zonder opvolging

Een review zonder actie heeft weinig waarde.

---

### Geen eigenaar aanwijzen

Iedere resource moet een verantwoordelijke hebben.

---

### Alleen beheerdersrollen reviewen

Ook reguliere toegang verdient aandacht.

---

### Externe gebruikers vergeten

Juist daar ontstaan vaak risico's.

---

### Reviews te weinig uitvoeren

Jaarlijkse reviews zijn vaak onvoldoende.

---

## Mijn visie

Veel organisaties investeren in beveiliging aan de voorkant.

Ze richten MFA in.

Ze implementeren Conditional Access.

Ze activeren PIM.

Maar vergeten vervolgens te controleren of bestaande rechten nog relevant zijn.

Access Reviews vullen precies dat gat.

Het is geen spectaculaire technologie.

Het voorkomt geen ransomware-aanvallen.

Maar het helpt wel om een fundamenteel probleem op te lossen:

Verouderde rechten die niemand meer begrijpt.

En juist die rechten vormen vaak een groter risico dan organisaties denken.

---

## Conclusie

Microsoft Entra Access Reviews helpen organisaties om toegangsrechten actief te beheren en periodiek te valideren.

Door groepen, applicaties, Access Packages en beheerdersrollen regelmatig te controleren wordt privilege creep voorkomen en blijft de omgeving beter beheersbaar.

In combinatie met Access Packages, PIM, Conditional Access en Zero Trust vormt Access Reviews een essentieel onderdeel van moderne Identity Governance.

Want uiteindelijk geldt:

**Toegang die nooit wordt gecontroleerd, wordt uiteindelijk een risico.**

**RootNotes – terug naar de kern van IT.**
