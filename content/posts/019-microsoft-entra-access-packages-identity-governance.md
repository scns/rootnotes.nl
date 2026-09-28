+++
title = "Microsoft Entra Access Packages: geautomatiseerd toegangsbeheer zonder handmatig gedoe"
date = 2026-08-04
description = "Ontdek hoe Microsoft Entra Access Packages het aanvragen, goedkeuren en beheren van toegang automatiseert. Leer hoe Access Packages bijdragen aan Identity Governance, Zero Trust en efficiënter toegangsbeheer."
tags = ["access-packages", "identity-governance", "entra-id", "access-reviews", "zero-trust", "security", "microsoft-entra"]
categories = ["Identity & Security"]
+++

## Waarom traditioneel toegangsbeheer niet meer schaalbaar is

{{< sideimage src="/images/accesspackage.png" alt="accesspackage" align="right" width="260px" >}}

Vrijwel iedere organisatie kent hetzelfde probleem.

Een nieuwe medewerker start.

Een externe consultant wordt ingehuurd.

Een projectteam wordt samengesteld.

En direct ontstaat de vraag:

> Welke toegang heeft deze persoon nodig?

In veel organisaties verloopt dit proces nog handmatig.

Een manager stuurt een e-mail.

De servicedesk maakt een ticket aan.

Een beheerder voegt gebruikers toe aan groepen.

En maanden later weet niemand meer waarom bepaalde rechten ooit zijn toewezen.

Het gevolg:

* Overbodige rechten
* Verouderde groepslidmaatschappen
* Gebrek aan controle
* Compliance-uitdagingen

Microsoft Entra Access Packages zijn ontworpen om dit probleem op te lossen.

---

## Wat zijn Access Packages?

Access Packages zijn onderdeel van Microsoft Entra Identity Governance.

Met Access Packages kun je een complete verzameling toegangsrechten bundelen in één aanvraagproces.

Bijvoorbeeld:

### Projectteam Finance

Bevat:

* Microsoft 365-groep
* Teams Team
* SharePoint-site
* Security Group
* Applicatietoegang

In plaats van vijf afzonderlijke aanvragen hoeft een gebruiker slechts één Access Package aan te vragen.

---

## Wat lossen Access Packages op?

Traditioneel proces:

```text
Nieuwe medewerker
↓
5 tickets
↓
3 beheerders
↓
7 groepen
↓
Handmatige controles
```

---

Met Access Packages:

```text
Nieuwe medewerker
↓
Access Package aanvragen
↓
Goedkeuring
↓
Automatische provisioning
```

Daardoor wordt toegangsbeheer veel eenvoudiger en consistenter.

---

## Welke licenties zijn nodig?

Access Packages maken onderdeel uit van:

### Microsoft Entra ID Governance

Minimaal vereist:

### Microsoft Entra ID P2

Beschikbaar in:

* Microsoft 365 E5
* Microsoft Entra ID P2
* Microsoft Security E5
* EMS E5

Voor productieomgevingen waarin Identity Governance serieus wordt ingezet is Entra ID P2 feitelijk een vereiste.

---

## Wat zit er in een Access Package?

Een Access Package kan bestaan uit verschillende resources.

Bijvoorbeeld:

### Security Groups

Voor autorisaties.

---

### Microsoft 365 Groups

Voor samenwerking.

---

### Teams

Voor communicatie.

---

### SharePoint Sites

Voor documenttoegang.

---

### Enterprise Applications

Voor SaaS-toegang.

---

### Azure AD Groups

Voor aanvullende rechten.

Hierdoor ontstaat één centraal toegangspakket.

---

## Een praktijkvoorbeeld

Stel:

Een externe consultant start op een project.

Benodigde toegang:

* Teams Project X
* SharePoint Project X
* Applicatie Projectadministratie
* Security Group Consultants

Traditioneel:

Vier losse aanvragen.

---

Met Access Packages:

```text
Project X Consultant
↓
Aanvraag
↓
Goedkeuring
↓
Automatische toegang
```

Veel eenvoudiger.

---

## Access Package Catalogs

Voordat Access Packages kunnen worden gemaakt moet eerst een Catalog worden aangemaakt.

Een Catalog is feitelijk een verzameling van resources.

Bijvoorbeeld:

### Finance Catalog

Bevat:

* Finance Teams
* Finance SharePoint
* Finance Applicaties

---

### HR Catalog

Bevat:

* HR Teams
* HR Portalen
* HR Security Groups

Zo ontstaat een duidelijke structuur.

---

## Self-Service Access Requests

Een van de grootste voordelen van Access Packages is self-service.

Gebruikers kunnen zelf toegang aanvragen.

Bijvoorbeeld:

```text
Mijn Toegang
↓
Beschikbare Packages
↓
Aanvragen
↓
Goedkeuring
↓
Automatische toegang
```

Hierdoor wordt de afhankelijkheid van IT aanzienlijk kleiner.

---

## Approval Workflows

Toegang hoeft uiteraard niet automatisch te worden toegekend.

Access Packages ondersteunen uitgebreide goedkeuringsprocessen.

Bijvoorbeeld:

### Manager Approval

De leidinggevende moet eerst goedkeuren.

---

### Resource Owner Approval

De eigenaar van de applicatie moet akkoord geven.

---

### Meerdere goedkeurders

Vier-ogenprincipe.

Daardoor blijft controle behouden.

---

## Tijdelijke toegang

Een bijzonder krachtige functie is de mogelijkheid om toegang automatisch te laten verlopen.

Bijvoorbeeld:

```text
Consultant
↓
Toegang voor 90 dagen
↓
Automatische verwijdering
```

Of:

```text
Projectlid
↓
Toegang tot einde project
↓
Automatische intrekking
```

Hiermee voorkom je dat rechten eindeloos blijven bestaan.

---

## Access Reviews

Access Packages werken uitstekend samen met Access Reviews.

Periodiek wordt gecontroleerd:

* Heeft deze gebruiker nog toegang nodig?
* Is deze rol nog relevant?
* Is het project nog actief?

Daardoor voorkom je:

### Privilege Creep

Het langzaam opstapelen van rechten.

---

## Externe gebruikers beheren

Een van mijn favoriete toepassingen.

Veel organisaties werken met:

* Leveranciers
* Consultants
* Partners
* Externe ontwikkelaars

Traditioneel blijven deze accounts vaak veel te lang actief.

Met Access Packages kun je dit automatiseren.

Bijvoorbeeld:

```text
Externe gebruiker
↓
180 dagen toegang
↓
Review
↓
Verlengen of verwijderen
```

Daardoor blijft de omgeving schoner en veiliger.

---

## Access Packages en Zero Trust

Zero Trust draait niet alleen om authenticatie.

Het draait ook om:

* Toegang
* Rechten
* Governance

Access Packages helpen hierbij door:

* Toegang expliciet te maken
* Goedkeuringen af te dwingen
* Tijdslimieten toe te passen
* Reviews te automatiseren

Daardoor ontstaat veel meer controle over wie toegang heeft tot welke resources.

---

## Access Packages en Conditional Access

Toegang krijgen is één ding.

Toegang gebruiken is iets anders.

Daarom combineer ik Access Packages vrijwel altijd met:

* MFA
* Device Compliance
* Conditional Access
* Authentication Strengths

Zo wordt niet alleen bepaald wie toegang krijgt.

Maar ook onder welke voorwaarden.

---

## Access Packages en PIM

PIM en Access Packages vullen elkaar uitstekend aan.

### PIM

Beheert:

* Rollen
* Administratorrechten
* Just-In-Time toegang

---

### Access Packages

Beheren:

* Groepen
* Applicaties
* Samenwerkingsomgevingen
* Zakelijke toegang

Samen vormen ze een sterke Identity Governance-oplossing.

---

## Mijn aanbevolen implementatie

Wanneer ik Access Packages implementeer gebruik ik doorgaans:

### Stap 1

Catalogs maken per afdeling.

---

### Stap 2

Resources logisch groeperen.

---

### Stap 3

Approval Workflows activeren.

---

### Stap 4

Expiratiedatums configureren.

---

### Stap 5

Access Reviews inschakelen.

---

### Stap 6

Externe gebruikers opnemen in het proces.

---

## Veelgemaakte fouten

### Alles handmatig blijven beheren

Dan mis je de grootste voordelen.

---

### Geen expiratie instellen

Toegang blijft dan onnodig bestaan.

---

### Geen Access Reviews uitvoeren

Risico op privilege creep.

---

### Geen eigenaars aanwijzen

Iedere resource moet een eigenaar hebben.

---

### Geen governanceproces definiëren

Technologie alleen lost het probleem niet op.

---

## Mijn visie

Veel organisaties investeren in MFA, Conditional Access en PIM.

Dat is belangrijk.

Maar uiteindelijk draait beveiliging ook om een fundamentele vraag:

> Wie heeft toegang tot wat?

En minstens zo belangrijk:

> Waarom heeft iemand die toegang nog steeds?

Access Packages helpen organisaties om die vragen structureel te beantwoorden.

Niet handmatig.

Maar geautomatiseerd.

Juist daarom zie ik Access Packages als een van de meest onderschatte onderdelen van Microsoft Entra Identity Governance.

---

## Conclusie

Microsoft Entra Access Packages maken het mogelijk om toegangsbeheer te automatiseren, standaardiseren en beter controleerbaar te maken.

Door groepen, applicaties, Teams-omgevingen en SharePoint-sites samen te voegen in beheerde toegangspakketten ontstaat een schaalbare oplossing voor moderne organisaties.

In combinatie met Access Reviews, Conditional Access, PIM en Zero Trust vormt Access Packages een essentieel onderdeel van een volwassen Identity Governance-strategie.

Want uiteindelijk geldt:

**Toegang beheren is eenvoudig. Toegang gecontroleerd beheren is de echte uitdaging.**

**RootNotes – terug naar de kern van IT.**
