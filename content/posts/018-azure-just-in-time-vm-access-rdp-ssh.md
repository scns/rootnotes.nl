+++
title = "Azure Just-In-Time VM Access: RDP en SSH alleen wanneer nodig"
date = 2026-07-30
description = "Ontdek hoe Azure Just-In-Time VM Access ongewenste RDP- en SSH-toegang voorkomt. Leer hoe Microsoft Defender for Cloud beheerpoorten beschermt en het aanvalsoppervlak van Azure Virtual Machines verkleint."
tags = ["azure", "jit", "defender-for-cloud", "rdp", "ssh", "azure-vm", "security", "zero-trust"]
categories = ["Security"]
+++

## Waarom open beheerpoorten een risico vormen

{{< sideimage src="/images/azure-jit.png" alt="azure jit" align="right" width="260px" >}}

Wanneer een nieuwe Azure Virtual Machine wordt uitgerold is de verleiding groot om direct beheerpoorten open te zetten.

Bijvoorbeeld:

* RDP (3389)
* SSH (22)
* WinRM
* Custom Management Ports

Dat werkt eenvoudig.

Maar vanuit beveiligingsperspectief creëert dit direct een risico.

Open beheerpoorten behoren namelijk al jaren tot de meest gescande en aangevallen services op internet.

Geautomatiseerde bots scannen continu op:

* Open RDP-poorten
* Open SSH-poorten
* Zwakke wachtwoorden
* Bekende kwetsbaarheden

Vaak binnen enkele minuten nadat een server online komt.

Daarom geldt binnen moderne cloudomgevingen steeds vaker:

> Een beheerpoort hoort standaard gesloten te zijn.

En precies daar komt Azure Just-In-Time VM Access om de hoek kijken.

---

## Wat is Azure Just-In-Time VM Access?

Azure Just-In-Time VM Access, vaak afgekort als JIT VM Access, is een beveiligingsfunctie binnen Microsoft Defender for Cloud.

De functie zorgt ervoor dat beheerpoorten standaard gesloten blijven.

Pas wanneer een beheerder daadwerkelijk toegang nodig heeft worden deze poorten tijdelijk geopend.

Bijvoorbeeld:

```text
Beheerder
↓
RDP toegang aanvragen
↓
Defender for Cloud valideert aanvraag
↓
Poort 3389 tijdelijk open
↓
Toegang toegestaan
↓
Periode verloopt
↓
Poort automatisch gesloten
```

Daardoor wordt het aanvalsoppervlak van virtuele machines aanzienlijk verkleind.

---

## JIT als Resource Access

In eerdere artikelen hebben we gesproken over Just-In-Time Access als beveiligingsprincipe.

Bijvoorbeeld:

* PIM
* Endpoint Privilege Management
* Tijdelijke administratorrechten

Azure JIT VM Access werkt volgens hetzelfde idee.

Maar dan niet voor identiteiten.

Hier gaat het om:

> Tijdelijke toegang tot een resource.

In dit geval:

* Azure Virtual Machines
* RDP
* SSH
* Beheerpoorten

Daarom wordt deze vorm vaak aangeduid als:

> **Resource JIT**

---

## Welke licenties zijn nodig?

Azure JIT VM Access maakt onderdeel uit van:

### Microsoft Defender for Cloud Plan 2

Voorheen bekend als:

```text
Azure Defender
```

Defender for Cloud Plan 2 biedt daarnaast:

* Vulnerability Assessment
* Security Recommendations
* Adaptive Application Controls
* Endpoint Hardening
* Workload Protection

Voor productieomgevingen adviseer ik vrijwel altijd Defender for Cloud Plan 2.

---

## Hoe werkt Azure JIT VM Access?

Wanneer JIT wordt geactiveerd analyseert Defender for Cloud de bestaande netwerkconfiguratie.

Vervolgens worden beheerpoorten beschermd.

Bijvoorbeeld:

### Voor JIT

```text
Internet
↓
RDP 3389
↓
Azure VM
```

De poort staat permanent open.

---

### Na JIT

```text
Internet
↓
Poort gesloten
↓
Aanvraag vereist
↓
Tijdelijke opening
↓
Automatische sluiting
```

Hierdoor wordt de server veel minder zichtbaar voor aanvallers.

---

## Bescherming van RDP

RDP behoort al jaren tot de meest aangevallen protocollen.

Aanvallers gebruiken:

* Password Spraying
* Brute Force
* Credential Stuffing
* Gelekte wachtwoorden

Een permanent openstaande RDP-poort vormt daardoor een aantrekkelijk doelwit.

Met JIT:

* Is poort 3389 standaard gesloten
* Wordt toegang alleen tijdelijk verleend
* Kunnen bron-IP's worden beperkt
* Wordt iedere aanvraag gelogd

Dit vermindert het risico aanzienlijk.

---

## Bescherming van SSH

Voor Linux-systemen geldt hetzelfde principe.

SSH-poort 22 wordt eveneens continu gescand.

JIT zorgt ervoor dat:

* SSH standaard gesloten blijft
* Toegang alleen op aanvraag beschikbaar is
* Tijdslimieten worden afgedwongen
* Logging beschikbaar blijft

Voor Linux-workloads adviseer ik JIT vrijwel altijd.

---

## Network Security Group (NSG) wijzigingen

Een veelgestelde vraag:

> Hoe opent Defender de poorten eigenlijk?

Het antwoord is relatief eenvoudig.

Azure JIT werkt door automatisch regels toe te voegen aan:

### Network Security Groups (NSG's)

Scenario:

```text
Normale situatie
↓
RDP geblokkeerd
```

Gebruiker vraagt toegang aan:

```text
Defender for Cloud
↓
Tijdelijke NSG-regel
↓
RDP toegestaan
```

Na afloop:

```text
NSG-regel verwijderd
↓
RDP opnieuw geblokkeerd
```

Volledig geautomatiseerd.

---

## Waarom dit beter is dan een VPN

Veel organisaties gebruiken uitsluitend VPN-oplossingen.

Dat helpt.

Maar het probleem blijft bestaan wanneer beheerpoorten permanent openstaan.

Met JIT:

* Bestaat de poort meestal niet
* Wordt toegang tijdelijk verleend
* Wordt iedere sessie geregistreerd

Daardoor ontstaat een extra beveiligingslaag bovenop bestaande netwerkbeveiliging.

---

## JIT en Attack Surface Reduction

Het begrip Attack Surface Reduction komen we vaker tegen binnen moderne beveiliging.

Het uitgangspunt:

> Verwijder alles wat niet continu nodig is.

Dat geldt voor:

* Accounts
* Applicaties
* Poorten
* Protocols
* Services

Azure JIT VM Access is eigenlijk een vorm van Attack Surface Reduction op infrastructuurniveau.

In plaats van aanvallen te detecteren wordt het aanvalsoppervlak simpelweg kleiner gemaakt.

---

## JIT en Zero Trust

Azure JIT sluit perfect aan op Zero Trust.

Een belangrijk uitgangspunt van Zero Trust is:

> Nooit impliciet vertrouwen.

Wanneer een poort permanent openstaat, vertrouw je erop dat niemand misbruik maakt van die toegang.

JIT draait dat om.

De poort bestaat alleen wanneer deze nodig is.

Daardoor wordt het risico drastisch verlaagd.

---

## JIT en Defender for Cloud

De echte kracht zit in de integratie met Defender for Cloud.

Defender levert onder andere:

* Security Recommendations
* Attack Path Analysis
* Vulnerability Assessments
* Secure Score

JIT vormt één van de aanbevolen maatregelen binnen veel Azure-beveiligingsscenario's.

Het helpt organisaties om hun Secure Score direct te verbeteren.

---

## Praktijkvoorbeeld

Stel:

Een beheerder moet een Windows Server beheren.

Traditionele situatie:

```text
Internet
↓
3389 open
↓
365 dagen per jaar
```

Risico:

Iedereen kan de poort bereiken.

---

Met JIT:

```text
Internet
↓
3389 gesloten
↓
Beheerder vraagt toegang aan
↓
1 uur open
↓
Automatisch gesloten
```

Het verschil lijkt klein.

De beveiligingswinst is groot.

---

## Mijn aanbevolen configuratie

Voor productieomgevingen gebruik ik doorgaans:

### RDP

```text
Maximaal 1 uur
```

---

### SSH

```text
Maximaal 1 uur
```

---

### Source IP Restriction

```text
Alleen bekende beheerlocaties
```

---

### Logging

```text
Altijd inschakelen
```

---

### Defender for Cloud

```text
Plan 2
```

---

## Veelgemaakte fouten

### RDP permanent open laten

Nog steeds een van de meest voorkomende configuratiefouten.

---

### SSH open laten voor internet

Ook Linux-systemen blijven populaire doelwitten.

---

### Geen IP-beperkingen gebruiken

Open toegang vergroot het risico.

---

### Geen monitoring uitvoeren

Controleer regelmatig wie toegang aanvraagt.

---

### JIT niet combineren met andere beveiligingslagen

JIT werkt het beste samen met:

* PIM
* Conditional Access
* Defender for Cloud
* MFA
* Privileged Workstations

---

## Mijn visie

Wanneer ik Azure-omgevingen beoordeel zie ik regelmatig virtuele machines met permanent openstaande RDP- of SSH-poorten.

Vaak omdat het eenvoudig is.

Maar eenvoud en veiligheid gaan niet altijd hand in hand.

Azure Just-In-Time VM Access is een van die functies die relatief weinig implementatie-inspanning vraagt maar direct veel beveiligingswaarde oplevert.

Juist daarom beschouw ik JIT VM Access als een van de eenvoudigste beveiligingsmaatregelen die iedere Azure-beheerder zou moeten activeren.

---

## Conclusie

Azure Just-In-Time VM Access helpt organisaties om het aanvalsoppervlak van Azure Virtual Machines aanzienlijk te verkleinen.

Door RDP- en SSH-poorten standaard gesloten te houden en alleen tijdelijk toegang te verlenen wanneer dat nodig is, wordt het risico op ongeautoriseerde toegang en brute-force aanvallen sterk verminderd.

In combinatie met Microsoft Defender for Cloud, Zero Trust en moderne beheerprocessen vormt JIT VM Access een krachtige beveiligingslaag voor iedere Azure-omgeving.

Want uiteindelijk geldt:

**De veiligste beheerpoort is de poort die niet openstaat.**

**RootNotes – terug naar de kern van IT.**
