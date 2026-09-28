+++
title = "Just-In-Time Access: waarom permanente rechten niet meer van deze tijd zijn"
date = 2026-07-20
description = "Ontdek waarom organisaties afscheid nemen van permanente beheerrechten. Leer hoe Just-In-Time Access, Least Privilege en Zero Trust bijdragen aan een moderne beveiligingsstrategie."
tags = ["jit", "just-in-time", "zero-trust", "least-privilege", "security", "identity", "entra-id"]
categories = ["Security"]
+++

## Waarom permanente rechten steeds moeilijker te verdedigen zijn

{{< sideimage src="/images/jit.png" alt="jit" align="right" width="260px" >}}

Jarenlang was het heel normaal.

Een beheerder kreeg een rol toegewezen.

Bijvoorbeeld:

* Global Administrator
* Intune Administrator
* Exchange Administrator
* Domain Administrator

En behield deze rechten permanent.

Dag in.

Dag uit.

Ook wanneer deze rechten op dat moment helemaal niet nodig waren.

Destijds was dat logisch.

IT-omgevingen waren kleiner, minder complex en cyberaanvallen waren minder geavanceerd.

De werkelijkheid van vandaag ziet er echter heel anders uit.

Cybercriminelen richten zich steeds vaker op accounts met verhoogde rechten.

Niet omdat deze accounts kwetsbaarder zijn.

Maar omdat ze waardevoller zijn.

Wanneer een aanvaller een account met administratorrechten weet te compromitteren, krijgt hij direct toegang tot kritieke systemen, configuraties en gegevens.

Daardoor verschuift de focus binnen moderne beveiligingsstrategieën steeds meer van:

> Wie heeft toegang?

naar:

> Wanneer heeft iemand toegang nodig?

Dat is precies waar Just-In-Time Access om draait.

---

## Wat is Just-In-Time Access?

Just-In-Time Access, vaak afgekort als JIT, is een beveiligingsprincipe waarbij verhoogde rechten alleen beschikbaar zijn wanneer ze daadwerkelijk nodig zijn.

In plaats van permanente toegang krijgt een gebruiker tijdelijke toegang.

Bijvoorbeeld:

```text
Beheerder
↓
Toegang aanvragen
↓
Verificatie uitvoeren
↓
Tijdelijke rechten ontvangen
↓
Werkzaamheden uitvoeren
↓
Rechten vervallen automatisch
```

Het doel is eenvoudig:

De periode waarin verhoogde rechten beschikbaar zijn zo klein mogelijk maken.

Daardoor wordt ook het risico kleiner dat deze rechten kunnen worden misbruikt.

---

## JIT is een principe, geen product

Een veelgemaakte fout is denken dat Just-In-Time Access een specifieke Microsoft-oplossing is.

Dat is niet het geval.

JIT is een beveiligingsconcept.

Een strategie.

Een manier van denken over toegang en bevoegdheden.

Verschillende oplossingen kunnen dit principe implementeren.

Denk bijvoorbeeld aan:

* Microsoft Entra Privileged Identity Management
* Endpoint Privilege Management
* Azure Just-In-Time VM Access
* Privileged Access Management-oplossingen

De technologie kan verschillen.

Het doel blijft hetzelfde:

Verhoogde rechten alleen beschikbaar maken wanneer ze nodig zijn.

---

## Het probleem van Standing Privileges

Om het belang van JIT te begrijpen moeten we eerst kijken naar een van de grootste risico's binnen moderne IT-omgevingen:

> **Standing Privileges**

Dit zijn rechten die permanent beschikbaar zijn.

Bijvoorbeeld:

```text
Gebruiker
↓
Global Administrator
↓
Altijd actief
```

Het account beschikt continu over dezelfde hoge rechten.

Ook wanneer de gebruiker:

* E-mail leest
* Teams gebruikt
* Documenten opent
* Niet actief werkt

Vanuit beveiligingsperspectief is dat problematisch.

Want een aanvaller heeft geen beheeractie nodig om misbruik te maken van de rechten.

De rechten zijn immers altijd beschikbaar.

---

## Waarom Standing Privileges gevaarlijk zijn

Stel dat een beheerder beschikt over permanente Global Administrator-rechten.

Op een willekeurige werkdag gebeurt het volgende:

* Een phishingmail wordt geopend.
* Een sessietoken wordt buitgemaakt.
* Malware wordt uitgevoerd.

De aanvaller krijgt niet alleen toegang tot het account.

De aanvaller krijgt ook toegang tot alle rechten die aan dat account gekoppeld zijn.

Dat maakt privileged accounts bijzonder aantrekkelijk.

Het risico zit dus niet alleen in het account zelf.

Het risico zit vooral in de permanent beschikbare rechten.

---

## Het Least Privilege-principe

Just-In-Time Access is nauw verbonden met een ander belangrijk beveiligingsprincipe:

> **Least Privilege**

Het uitgangspunt hiervan is eenvoudig:

> Geef gebruikers uitsluitend de rechten die nodig zijn om hun werkzaamheden uit te voeren.

Niet meer.

Niet minder.

Een medewerker van de servicedesk hoeft geen Global Administrator te zijn.

Een Intune-beheerder hoeft geen Exchange Administrator te zijn.

En een gebruiker hoeft geen lokaal administrator te zijn.

Door rechten te beperken wordt het aanvalsoppervlak kleiner.

En juist daar zit de kracht van moderne beveiliging.

---

## Least Privilege in de praktijk

Traditioneel werd vaak gedacht:

> Geef rechten voor de zekerheid maar vast.

Binnen moderne beveiligingsarchitecturen wordt juist andersom gedacht:

> Geef rechten pas wanneer ze daadwerkelijk nodig zijn.

Dat lijkt een klein verschil.

Maar de impact op beveiliging is enorm.

Want iedere overbodige machtiging vormt een potentieel risico.

---

## Waarom Zero Trust hier perfect op aansluit

De afgelopen jaren heeft Microsoft sterk ingezet op het Zero Trust-model.

Zero Trust draait om drie kernprincipes:

### Verify Explicitly

Verifieer altijd identiteit en context.

---

### Use Least Privilege Access

Geef zo min mogelijk rechten.

---

### Assume Breach

Ga ervan uit dat een account of apparaat ooit gecompromitteerd raakt.

Just-In-Time Access sluit perfect aan op deze principes.

Wanneer een account wordt gecompromitteerd maar geen actieve verhoogde rechten heeft, wordt de impact aanzienlijk kleiner.

Dat maakt JIT een belangrijk onderdeel van iedere Zero Trust-strategie.

---

## Moderne aanvallen richten zich op rechten

Veel organisaties richten hun beveiliging voornamelijk op authenticatie.

Denk aan:

* MFA
* Passkeys
* FIDO2
* Conditional Access

Dat zijn belangrijke maatregelen.

Maar uiteindelijk draait een aanval vaak om iets anders:

Rechten.

Een aanvaller wil niet alleen binnenkomen.

Een aanvaller wil iets kunnen doen.

Daarom zien we dat moderne aanvallen zich steeds vaker richten op:

* Administratorrollen
* Service Accounts
* Lokale administratoraccounts
* Privileged identities

Hoe minder rechten permanent beschikbaar zijn, hoe kleiner de potentiële schade.

---

## JIT als risicobeperking

Just-In-Time Access voorkomt niet dat een account gecompromitteerd kan worden.

Dat is een belangrijk onderscheid.

Wat JIT wél doet:

* Het verkleint de impact.
* Het beperkt de tijd waarin rechten beschikbaar zijn.
* Het vermindert het aanvalsoppervlak.
* Het maakt misbruik moeilijker.

Daardoor verschuift de beveiligingsstrategie van:

> Voorkom iedere aanval.

naar:

> Beperk de impact wanneer een aanval toch slaagt.

En dat is precies wat moderne securityteams proberen te bereiken.

---

## De voordelen van Just-In-Time Access

Een goed geïmplementeerde JIT-strategie levert verschillende voordelen op.

### Minder aanvalsoppervlak

Rechten zijn niet permanent beschikbaar.

---

### Minder risico op privilege escalation

Aanvallers kunnen minder eenvoudig misbruik maken van verhoogde rechten.

---

### Betere auditing

Je ziet precies:

* Wie toegang kreeg
* Wanneer
* Waarom

---

### Sterkere compliance

Veel compliance-frameworks adviseren tijdelijke toegang.

---

### Betere aansluiting op Zero Trust

JIT ondersteunt de principes van moderne beveiligingsarchitecturen.

---

## Veelgemaakte fouten

### Permanente beheerrollen behouden

Hierdoor verdwijnt een groot deel van de beveiligingswinst.

---

### Te veel uitzonderingen maken

Iedere uitzondering vergroot het risico.

---

### Geen periodieke review uitvoeren

Rechten moeten regelmatig worden geëvalueerd.

---

### Alleen focussen op identiteit

Ook apparaten en risico-indicatoren blijven belangrijk.

---

### JIT zien als einddoel

JIT is onderdeel van een bredere beveiligingsstrategie.

Geen losse oplossing.

---

## Mijn visie

Wanneer ik Microsoft 365-omgevingen audit zie ik nog regelmatig accounts met permanente administratorrechten.

Vaak met de beste bedoelingen.

Omdat het gemakkelijk is.

Omdat het altijd zo gedaan is.

Of omdat men bang is om toegang kwijt te raken.

Toch zie ik dat moderne organisaties steeds meer bewegen richting tijdelijke toegang, minimale rechten en continue verificatie.

Niet omdat het een trend is.

Maar omdat het aantoonbaar veiliger is.

Just-In-Time Access vormt daarin een belangrijke stap.

Niet als technologie.

Maar als manier van denken.

---

## Conclusie

Just-In-Time Access is een beveiligingsprincipe dat organisaties helpt om permanente rechten te vervangen door tijdelijke toegang.

Door verhoogde rechten uitsluitend beschikbaar te maken wanneer ze daadwerkelijk nodig zijn, wordt het risico op misbruik van privileged accounts aanzienlijk verkleind.

In combinatie met Least Privilege en Zero Trust ontstaat een moderne beveiligingsstrategie waarin toegang niet langer gebaseerd is op vertrouwen, maar op noodzaak.

Want uiteindelijk geldt:

**De veiligste rechten zijn de rechten die niet permanent bestaan.**

**RootNotes – terug naar de kern van IT.**
