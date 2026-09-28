+++
title = "Microsoft Intune Endpoint Privilege Management: gebruikers geen admin, wel controle"
date = 2026-07-15
description = "Ontdek hoe Microsoft Intune Endpoint Privilege Management (EPM) gebruikers tijdelijk verhoogde rechten geeft zonder lokale administratoraccounts. Leer hoe EPM past binnen Zero Trust en moderne endpointbeveiliging."
tags = ["epm", "endpoint-privilege-management", "intune", "least-privilege", "security", "zero-trust", "microsoft-intune"]
categories = ["Security"]
+++

## Waarom lokale administratorrechten nog steeds een probleem zijn

{{< sideimage src="/images/epm.png" alt="epm" align="right" width="260px" >}}

Jarenlang kregen gebruikers lokale administratorrechten omdat het eenvoudig was.

Een applicatie installeren?

Administrator.

Een printerdriver installeren?

Administrator.

Een configuratiewijziging uitvoeren?

Administrator.

Vanuit gebruikersperspectief werkte dit prima.

Vanuit beveiligingsperspectief was het echter verre van ideaal.

Wanneer een gebruiker administratorrechten bezit, krijgt malware deze rechten vaak automatisch ook.

Daardoor wordt het voor aanvallers eenvoudiger om:

* Malware te installeren
* Securitysoftware uit te schakelen
* Credentials te verzamelen
* Lateraal door het netwerk te bewegen
* Ransomware uit te voeren

Binnen moderne Zero Trust-omgevingen geldt daarom een belangrijk uitgangspunt:

> Gebruikers werken standaard zonder administratorrechten.

Maar hoe ga je dan om met situaties waarin verhoogde rechten toch nodig zijn?

Dat is precies waarvoor Endpoint Privilege Management is ontwikkeld.

---

## Wat is Endpoint Privilege Management?

Endpoint Privilege Management (EPM) is een Microsoft Intune-functionaliteit waarmee gebruikers tijdelijk verhoogde rechten kunnen krijgen zonder lokaal administrator te zijn.

In plaats van:

```text
Gebruiker = Administrator
```

werkt EPM volgens het principe:

```text
Gebruiker = Standaard gebruiker
↓
Specifieke actie vereist elevatie
↓
EPM verleent tijdelijk rechten
↓
Rechten vervallen automatisch
```

Daardoor blijft het apparaat beschermd terwijl gebruikers toch hun werkzaamheden kunnen uitvoeren.

---

## Wat is het Least Privilege-principe?

EPM is gebaseerd op een fundamenteel beveiligingsprincipe:

### Least Privilege

Een gebruiker krijgt uitsluitend de rechten die nodig zijn om zijn werkzaamheden uit te voeren.

Niet meer.

Niet minder.

Dit principe vermindert:

* Aanvalsoppervlak
* Risico op misbruik
* Impact van malware
* Onbedoelde configuratiewijzigingen

Binnen Zero Trust vormt Least Privilege een van de belangrijkste bouwstenen.

---

## Welke licenties zijn nodig?

Endpoint Privilege Management is een aanvullende Intune-functionaliteit.

Je hebt nodig:

### Microsoft Intune Suite

Of:

### Endpoint Privilege Management Add-on

Daarnaast uiteraard:

* Microsoft Intune
* Microsoft Entra ID

Voor organisaties die al investeren in Intune vormt EPM vaak een relatief kleine uitbreiding met grote beveiligingswinst.

---

## Hoe werkt EPM?

EPM werkt met beleidsregels.

Je bepaalt:

* Welke applicaties mogen worden verhoogd
* Welke scripts mogen worden uitgevoerd
* Welke gebruikers dit mogen doen
* Onder welke voorwaarden dit gebeurt

Wanneer een gebruiker een goedgekeurde actie uitvoert:

* Verhoogt EPM tijdelijk de rechten
* Voert de applicatie uit
* Verwijdert de verhoogde rechten na afloop

Het apparaat blijft dus volledig binnen het Least Privilege-model functioneren.

---

## Elevation Methods

Microsoft ondersteunt meerdere manieren van elevatie.

### Automatic Elevation

Een goedgekeurde applicatie krijgt automatisch verhoogde rechten.

Gebruiker merkt hier vrijwel niets van.

Ideaal voor:

* Bedrijfssoftware
* Standaard tools
* Bekende applicaties

---

### User Confirmed Elevation

Gebruiker vraagt expliciet verhoogde rechten aan.

Bijvoorbeeld:

```text
Installatie software
↓
UAC Prompt
↓
Gebruiker bevestigt
↓
Tijdelijke elevatie
```

---

### Justification Based Elevation

Gebruiker moet eerst motiveren waarom verhoogde rechten nodig zijn.

Bijvoorbeeld:

```text
Reden:
Installatie nieuwe VPN Client
```

Deze informatie wordt gelogd voor auditing.

---

## Werken met Hashes en Certificates

EPM kan applicaties identificeren op basis van:

### File Hash

Controle op exacte bestanden.

---

### Publisher Certificate

Controle op ondertekende software.

---

### File Attributes

Controle op:

* Bestandspad
* Bestandsnaam
* Versie

Mijn voorkeur gaat vrijwel altijd uit naar certificaatvalidatie.

Dat vereist minder onderhoud bij updates.

---

## EPM en Windows LAPS

Een veelvoorkomende vraag:

> Heb ik LAPS nog nodig als ik EPM gebruik?

Het antwoord is:

Ja.

Beide oplossingen lossen verschillende problemen op.

### Windows LAPS

Beschermt lokale administratoraccounts.

---

### EPM

Voorkomt dat gebruikers administratorrechten nodig hebben.

Samen vormen ze een sterke combinatie.

---

## EPM en Conditional Access

Hoewel EPM lokaal op het apparaat werkt, speelt Conditional Access nog steeds een belangrijke rol.

Bijvoorbeeld:

* Alleen compliant apparaten
* Alleen beheerde apparaten
* Alleen apparaten met laag risico

Daardoor ontstaat een extra beveiligingslaag rondom privilege-elevatie.

---

## EPM en Device Compliance

Binnen moderne Intune-omgevingen combineer ik EPM vrijwel altijd met Compliance Policies.

Scenario:

* Apparaat compliant
* Defender actief
* BitLocker actief

Resultaat:

✅ EPM beschikbaar

---

Scenario:

* Device Risk hoog
* Niet compliant

Resultaat:

❌ Geen toegang

---

## EPM en Microsoft Defender for Endpoint

Defender en EPM versterken elkaar.

Defender detecteert:

* Verdachte processen
* Malware
* Device Risk

EPM beperkt ondertussen:

* Lokale privileges
* Malware-impact
* Misbruik van administratorrechten

Deze combinatie sluit perfect aan op een Zero Trust-strategie.

---

## Praktijkvoorbeeld

Stel:

Een gebruiker wil Wireshark installeren.

Traditionele aanpak:

```text
Gebruiker is lokaal administrator
```

Risico:

Iedere applicatie krijgt adminrechten.

---

Met EPM:

```text
Wireshark toegestaan
↓
EPM valideert applicatie
↓
Tijdelijke elevatie
↓
Installatie voltooid
↓
Rechten verdwijnen
```

De gebruiker krijgt precies wat nodig is.

Niet meer.

Niet minder.

---

## Mijn aanbevolen implementatie

Wanneer ik EPM implementeer gebruik ik doorgaans:

### Fase 1

Inventariseren:

* Welke applicaties vereisen adminrechten?

---

### Fase 2

Pilotgroep.

---

### Fase 3

Automatische elevatie voor bekende applicaties.

---

### Fase 4

Justification workflows voor uitzonderingen.

---

### Fase 5

Monitoring en optimalisatie.

---

## Veelgemaakte fouten

### Alles toestaan

Dan verlies je de beveiligingswaarde van EPM.

---

### Geen logging gebruiken

Auditing is essentieel.

---

### Geen pilot uitvoeren

Applicaties gedragen zich niet altijd zoals verwacht.

---

### LAPS vervangen door EPM

Deze oplossingen vullen elkaar aan.

---

### Geen Device Compliance inzetten

Privilege management zonder apparaatvalidatie blijft een risico.

---

## Mijn visie

Endpoint Privilege Management is een van de meest interessante toevoegingen aan Microsoft Intune van de afgelopen jaren.

Veel organisaties proberen al jaren lokale administratorrechten te verwijderen, maar lopen vast op uitzonderingen.

EPM biedt eindelijk een oplossing die zowel gebruikers als beheerders tevreden houdt.

Gebruikers kunnen blijven werken.

Beheerders behouden controle.

En de beveiliging gaat aanzienlijk vooruit.

Dat is precies hoe moderne endpointbeveiliging eruit zou moeten zien.

---

## Conclusie

Microsoft Intune Endpoint Privilege Management helpt organisaties bij het implementeren van het Least Privilege-principe zonder gebruikersproductiviteit te beperken.

Door tijdelijke elevatie, uitgebreide auditing en integratie met Intune, Defender en Conditional Access ontstaat een moderne beveiligingsarchitectuur waarin administratorrechten alleen worden verleend wanneer dat echt noodzakelijk is.

Want uiteindelijk geldt:

**De veiligste administratorrechten zijn de rechten die alleen bestaan wanneer ze nodig zijn.**

**RootNotes – terug naar de kern van IT.**
