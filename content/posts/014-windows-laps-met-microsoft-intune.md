+++
title = "Windows LAPS met Microsoft Intune: lokaal beheer veilig automatiseren"
date = 2026-07-09
description = "Ontdek hoe Windows LAPS lokale administratoraccounts beveiligt met unieke wachtwoorden per apparaat. Leer hoe je LAPS implementeert via Microsoft Intune en waarom het een essentiële beveiligingsmaatregel is binnen een Zero Trust-strategie."
tags = ["laps", "windows-laps", "intune", "local-admin", "entra-id", "security", "zero-trust", "endpoint-management"]
categories = ["Security"]
+++

## Waarom lokale administratoraccounts nog steeds een risico vormen

{{< sideimage src="/images/laps.png" alt="laps" align="right" width="260px" >}}

Lokale administratoraccounts bestaan al zolang Windows bestaat.

En ondanks alle ontwikkelingen rondom cloudbeheer, Zero Trust en moderne authenticatie spelen ze nog steeds een belangrijke rol.

Denk bijvoorbeeld aan:

* Noodherstel
* Troubleshooting
* Applicatiebeheer
* Onderhoudswerkzaamheden

Het probleem ontstaat wanneer hetzelfde lokale administratorwachtwoord op meerdere apparaten wordt gebruikt.

Dat was jarenlang de standaard.

Een beheerder configureerde een lokaal adminaccount en gebruikte vervolgens hetzelfde wachtwoord op honderden of zelfs duizenden systemen.

Vanuit beheerperspectief leek dat handig.

Vanuit beveiligingsperspectief is het een nachtmerrie.

Wanneer een aanvaller één apparaat compromitteert en het lokale administratorwachtwoord achterhaalt, kan dit wachtwoord vaak ook op andere systemen worden gebruikt.

Dit noemen we:

> **Lateral Movement**

En juist daarom is LAPS ontstaan.

---

## Wat is Windows LAPS?

LAPS staat voor:

> **Local Administrator Password Solution**

Microsoft ontwikkelde LAPS om een eenvoudig maar belangrijk probleem op te lossen:

> Zorg ervoor dat ieder apparaat een uniek lokaal administratorwachtwoord heeft.

Windows LAPS genereert automatisch:

* Een uniek wachtwoord per apparaat
* Een sterk wachtwoord
* Regelmatige wachtwoordrotatie

Vervolgens wordt dit wachtwoord veilig opgeslagen in:

* Microsoft Entra ID
* Active Directory

Daardoor hoeft een beheerder nooit meer handmatig wachtwoorden te beheren.

---

## Waarom is LAPS belangrijk?

Een lokaal administratoraccount blijft vaak een aantrekkelijk doelwit voor aanvallers.

Wanneer een aanvaller eenmaal lokale administratorrechten verkrijgt, wordt het eenvoudiger om:

* Credentials te verzamelen
* Lateraal te bewegen
* Beveiligingsinstellingen te wijzigen
* Malware te installeren
* Ransomware te verspreiden

LAPS beperkt dit risico aanzienlijk.

Zelfs wanneer een lokaal adminwachtwoord wordt buitgemaakt, is het uitsluitend bruikbaar op dat ene apparaat.

De aanval stopt daar.

---

## De oude situatie zonder LAPS

Een voorbeeld.

Stel dat een organisatie 500 laptops beheert.

Alle apparaten hebben:

```text
Administrator
```

met hetzelfde wachtwoord.

Wanneer een aanvaller toegang krijgt tot één apparaat:

```text
Administrator
Welkom123!
```

kan datzelfde account vaak gebruikt worden op honderden andere apparaten.

Dat maakt laterale beweging relatief eenvoudig.

---

## De situatie met LAPS

Met Windows LAPS krijgt ieder apparaat een uniek wachtwoord.

Bijvoorbeeld:

```text
Laptop-001
A!x93P$wL#4

Laptop-002
Q9m@Jk!7Rf2

Laptop-003
T#5nKx!91Pv
```

Zelfs wanneer één wachtwoord wordt buitgemaakt blijft de schade beperkt tot één apparaat.

Dat maakt een enorm verschil.

---

## Welke licenties zijn nodig?

Een van de voordelen van Windows LAPS is dat Microsoft het tegenwoordig standaard heeft geïntegreerd in moderne Windows-versies.

Voor Entra ID-gebaseerde implementaties heb je doorgaans nodig:

### Microsoft Intune

Voor configuratie en beheer.

---

### Microsoft Entra ID

Voor opslag van wachtwoorden.

---

### Ondersteunde Windows-versies

* Windows 11
* Moderne Windows 10-versies
* Windows Server 2019
* Windows Server 2022

---

### Aanbevolen Microsoft-licenties

#### Microsoft 365 Business Premium

Bevat:

* Intune
* Entra ID P1
* Conditional Access

Voor veel organisaties meer dan voldoende.

---

#### Microsoft 365 E3

Geschikt voor grotere organisaties.

---

#### Microsoft 365 E5

Ideaal wanneer je LAPS combineert met:

* Defender for Endpoint
* Privileged Identity Management
* Device Compliance
* Conditional Access

---

## Hoe werkt Windows LAPS?

Het proces is relatief eenvoudig.

### Stap 1

Windows genereert een sterk wachtwoord.

---

### Stap 2

Het wachtwoord wordt opgeslagen in Entra ID.

---

### Stap 3

Beheerders met de juiste rechten kunnen het wachtwoord bekijken.

---

### Stap 4

Na een ingestelde periode wordt het wachtwoord automatisch vervangen.

---

### Stap 5

Het oude wachtwoord vervalt.

Volledig automatisch.

---

## LAPS en Microsoft Entra ID

Een van de grootste verbeteringen ten opzichte van de oude LAPS-oplossing is de integratie met Entra ID.

Beheerders kunnen direct vanuit het Entra Portal:

* Het wachtwoord bekijken
* Wachtwoorden roteren
* Auditlogs bekijken

Hierdoor is geen on-premises Active Directory meer nodig.

Dat sluit perfect aan op cloud-native beheer.

---

## Implementatie via Microsoft Intune

Het configureren van LAPS in Intune is relatief eenvoudig.

Ga naar:

```text
Intune Admin Center
→ Endpoint Security
→ Account Protection
→ Create Policy
```

Kies vervolgens:

```text
Windows LAPS
```

Daarna configureer je onder andere:

* Password Length
* Password Complexity
* Rotation Interval
* Backup Directory

Mijn advies:

### Password Length

```text
16 tot 20 karakters
```

---

### Password Complexity

```text
Uppercase
Lowercase
Numbers
Special Characters
```

---

### Rotation

```text
30 dagen
```

Dit biedt een goede balans tussen beveiliging en beheerbaarheid.

---

## Wie mag LAPS-wachtwoorden bekijken?

Een belangrijke vraag.

Niet iedere beheerder zou toegang moeten hebben tot lokale administratorwachtwoorden.

Mijn advies:

Toegang beperken tot:

* Global Administrators
* Endpoint Administrators
* Helpdesk Tier 2/3

Gebruik waar mogelijk:

* Role Based Access Control
* Privileged Identity Management

---

## LAPS en Privileged Identity Management

LAPS wordt nog krachtiger in combinatie met PIM.

Scenario:

1. Beheerder activeert tijdelijk een rol.
2. PIM valideert MFA.
3. Tijdelijke toegang wordt verleend.
4. LAPS-wachtwoord wordt ingezien.
5. Rol verloopt automatisch.

Hierdoor wordt de kans op misbruik aanzienlijk kleiner.

---

## LAPS en Conditional Access

Ook Conditional Access speelt een belangrijke rol.

Beheerders die LAPS-wachtwoorden opvragen kunnen bijvoorbeeld verplicht worden om:

* MFA te gebruiken
* Een compliant apparaat te gebruiken
* Een laag Device Risk te hebben

Hierdoor ontstaat een extra beveiligingslaag rondom beheeractiviteiten.

---

## LAPS en Microsoft Defender for Endpoint

Defender helpt bij het beschermen van de apparaten waarop lokale administratoraccounts aanwezig zijn.

Daarnaast levert Defender signalen zoals:

* Device Risk
* Compromised Devices
* Suspicious Activity

Deze signalen kunnen vervolgens worden gebruikt binnen Conditional Access.

Daardoor ontstaat een sterke combinatie van:

* Identiteit
* Apparaatbeveiliging
* Toegangscontrole

---

## Veelgemaakte fouten

### Geen lokale adminaccounts beheren

Veel organisaties weten niet eens welke lokale administratoraccounts actief zijn.

---

### Geen wachtwoordrotatie configureren

Een uniek wachtwoord zonder rotatie blijft een risico.

---

### Te veel beheerders toegang geven

Niet iedere beheerder heeft toegang nodig tot LAPS-wachtwoorden.

---

### Geen auditing gebruiken

Controleer regelmatig wie wachtwoorden opvraagt.

---

### Geen PIM inzetten

Permanente toegang tot gevoelige informatie is niet meer van deze tijd.

---

## Mijn aanbevolen configuratie

Wanneer ik een nieuwe Intune-omgeving implementeer gebruik ik meestal:

### Password Length (hoe langer hoe beter)

```text
16-20 karakters
```

### Complexity

```text
Volledig complex
```

### Rotation (hoe vaker hoe beter)

```text
30 dagen
```

### Storage

```text
Microsoft Entra ID
```

### Access

```text
RBAC + PIM
```

### Security

```text
Conditional Access
Device Compliance
Defender Risk Policies
```

Hiermee ontstaat een moderne en veilige implementatie.

---

## Mijn visie

Windows LAPS lost een probleem op dat jarenlang als normaal werd beschouwd.

Het idee dat honderden apparaten hetzelfde lokale administratorwachtwoord delen is eigenlijk niet meer verdedigbaar binnen moderne IT-omgevingen.

Dankzij de integratie met Intune en Entra ID is LAPS tegenwoordig eenvoudig te implementeren zonder extra infrastructuur.

Voor organisaties die investeren in:

* Intune
* Conditional Access
* Device Compliance
* Defender for Endpoint
* Zero Trust

zou Windows LAPS eigenlijk standaard onderdeel moeten zijn van iedere implementatie.

---

## Conclusie

Windows LAPS biedt een eenvoudige maar zeer effectieve manier om lokale administratoraccounts te beveiligen.

Door unieke wachtwoorden per apparaat te genereren, deze veilig op te slaan in Entra ID en automatisch te roteren, wordt het risico op laterale beweging aanzienlijk verkleind.

In combinatie met Microsoft Intune, Conditional Access, Privileged Identity Management en Defender for Endpoint vormt LAPS een belangrijke bouwsteen binnen een moderne Zero Trust-strategie.

Want uiteindelijk geldt:

**Een lokaal administratoraccount is niet het probleem. Het hergebruik van hetzelfde wachtwoord wel.**

**RootNotes – terug naar de kern van IT.**
