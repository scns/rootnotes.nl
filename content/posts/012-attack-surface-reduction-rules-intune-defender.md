+++
title = "Attack Surface Reduction Rules: een van de krachtigste beveiligingslagen binnen Microsoft Defender"
date = 2026-06-29
description = "Ontdek hoe Attack Surface Reduction Rules aanvallen blokkeren voordat ze kunnen plaatsvinden. Leer welke ASR-regels Microsoft aanbeveelt, hoe je ze implementeert via Intune en waarom ze essentieel zijn binnen een Zero Trust-strategie."
tags = ["attack-surface-reduction", "asr", "defender-for-endpoint", "intune", "zero-trust", "security", "microsoft-defender"]
categories = ["Security"]
+++

## Waarom antivirus alleen niet meer voldoende is

{{< sideimage src="/images/asr.png" alt="asr" align="right" width="260px" >}}

Wanneer we denken aan endpointbeveiliging denken veel mensen nog steeds aan antivirussoftware.

Dat is begrijpelijk.

Jarenlang was het primaire doel van endpointbeveiliging het detecteren van malware nadat deze op een apparaat terecht was gekomen.

De realiteit van vandaag ziet er echter anders uit.

Veel moderne aanvallen maken helemaal geen gebruik van traditionele malware.

In plaats daarvan gebruiken aanvallers legitieme Windows-functionaliteiten zoals:

* PowerShell
* WMI
* Office Macro's
* JavaScript
* Script Hosts
* LSASS
* RDP
* MSI Installers

Dit wordt vaak aangeduid als:

> **Living off the Land**

De aanvaller gebruikt bestaande onderdelen van Windows om zijn doel te bereiken.

Daardoor wordt detectie veel moeilijker.

Microsoft introduceerde daarom een aanvullende beveiligingslaag:

> **Attack Surface Reduction Rules**

Of kortweg:

> **ASR**

---

## Wat zijn Attack Surface Reduction Rules?

Attack Surface Reduction Rules zijn beveiligingsregels binnen Microsoft Defender die ontworpen zijn om veelgebruikte aanvalstechnieken te blokkeren.

In plaats van malware te detecteren nadat deze actief wordt, probeert ASR aanvallen te voorkomen voordat ze kunnen worden uitgevoerd.

Je kunt ASR vergelijken met een extra beveiligingslaag tussen de gebruiker en het besturingssysteem.

De regels monitoren gedrag en blokkeren acties die vaak voorkomen tijdens cyberaanvallen.

Denk bijvoorbeeld aan:

* Office die PowerShell start
* Macro's die scripts uitvoeren
* Processen die credentials proberen te stelen
* Applicaties die ransomware-achtig gedrag vertonen

Het doel is eenvoudig:

> Aanvallen stoppen voordat ze schade veroorzaken.

---

## Waarom ASR zo effectief is

Veel beveiligingsproducten reageren op dreigingen.

ASR probeert ze te voorkomen.

Dat lijkt een klein verschil, maar in de praktijk maakt het een enorme impact.

Stel dat een gebruiker een phishingmail ontvangt met een kwaadaardig Word-document.

Traditioneel verloop:

1. Gebruiker opent document.
2. Macro start PowerShell.
3. Malware wordt gedownload.
4. Antivirus probeert malware te detecteren.

ASR-verloop:

1. Gebruiker opent document.
2. Macro probeert PowerShell te starten.
3. ASR blokkeert de actie direct.

De aanval stopt voordat deze kan beginnen.

---

## Welke licentie heb je nodig?

Attack Surface Reduction Rules zijn beschikbaar binnen:

### Microsoft Defender for Endpoint Plan 1

Beschikbaar in:

* Microsoft 365 Business Premium
* Microsoft Defender for Business
* Diverse Enterprise-bundels

---

### Microsoft Defender for Endpoint Plan 2

Beschikbaar in:

* Microsoft 365 E5
* Microsoft Security E5
* Defender for Endpoint P2

Hoewel ASR technisch beschikbaar is binnen P1, adviseer ik vrijwel altijd om dit te combineren met Defender for Endpoint P2.

Dan beschik je ook over:

* Endpoint Detection & Response
* Device Risk
* Vulnerability Management
* Advanced Hunting

Daardoor krijg je niet alleen preventie, maar ook inzicht en detectie.

---

## Hoe werkt ASR?

Iedere regel richt zich op een specifieke aanvalstechniek.

Wanneer een proces een verdachte actie uitvoert controleert Defender of een ASR-regel van toepassing is.

Afhankelijk van de configuratie gebeurt vervolgens één van de volgende acties:

### Audit

De actie wordt toegestaan.

De gebeurtenis wordt gelogd.

Ideaal tijdens implementaties.

---

### Warn

De gebruiker krijgt een waarschuwing.

Kan onder voorwaarden doorgaan.

---

### Block

De actie wordt direct geblokkeerd.

Dit is uiteindelijk de gewenste configuratie voor productieomgevingen.

---

## Microsofts meest waardevolle ASR-regels

Microsoft levert inmiddels meer dan twintig verschillende ASR-regels.

In de praktijk zie ik dat een aantal regels veruit de meeste waarde oplevert.

---

### Block Office Applications from Creating Child Processes

Een van de bekendste regels.

Blokkeert:

```text
Word → PowerShell
Excel → CMD
Outlook → Scripts
```

Veel phishingcampagnes worden hierdoor direct gestopt.

---

### Block Credential Stealing from LSASS

Beschermt tegen tools die credentials proberen uit te lezen uit LSASS.

Bekende aanvallen zoals Mimikatz worden hierdoor aanzienlijk moeilijker.

---

### Block Office Applications from Injecting Code

Voorkomt dat Office-processen code injecteren in andere processen.

Een techniek die veel malware gebruikt.

---

### Block Executable Content from Email Client and Webmail

Blokkeert uitvoerbare bestanden die rechtstreeks vanuit e-mail worden gestart.

Zeer effectief tegen phishing.

---

### Block JavaScript or VBScript from Launching Downloaded Executables

Voorkomt dat scripts malware downloaden en uitvoeren.

---

### Block Process Creations Originating from PSExec and WMI

Beschermt tegen laterale beweging binnen netwerken.

Met name interessant voor grotere organisaties.

---

### Use Advanced Protection Against Ransomware

Extra bescherming tegen ransomware-gedrag.

Een van de eerste regels die ik doorgaans activeer.

---

## Mijn aanbevolen ASR-baseline

Wanneer ik een nieuwe omgeving implementeer gebruik ik meestal onderstaande regels.

### Direct in Block Mode

* Block Office Child Processes
* Block Credential Stealing from LSASS
* Block Executable Content from Email
* Block JavaScript Downloaded Executables
* Advanced Ransomware Protection

---

### Eerst in Audit Mode

* WMI Process Creation
* PSExec Process Creation
* Office Code Injection

Deze regels kunnen impact hebben op legacy-applicaties.

Daarom test ik ze eerst uitgebreid.

---

## Implementatie via Microsoft Intune

Microsoft Intune maakt het relatief eenvoudig om ASR-regels uit te rollen.

Ga naar:

```text
Intune Admin Center
→ Endpoint Security
→ Attack Surface Reduction
→ Create Policy
```

Vervolgens kies je:

```text
Platform:
Windows 10 and later

Profile:
Attack Surface Reduction Rules
```

Daarna kun je iedere regel afzonderlijk configureren.

Mijn advies:

Begin altijd met Audit Mode.

---

## Waarom Audit Mode belangrijk is

Een veelgemaakte fout is direct alles blokkeren.

Dat lijkt veilig.

Totdat blijkt dat een bedrijfskritische applicatie afhankelijk is van een geblokkeerde actie.

Daarom gebruik ik vrijwel altijd deze aanpak:

### Fase 1

Audit Mode

2 tot 4 weken.

---

### Fase 2

Analyse van gebeurtenissen.

Controleer:

* Defender Portal
* Intune Reports
* Security Events

---

### Fase 3

Block Mode.

Alleen voor regels die geen problemen veroorzaken.

---

## ASR en Microsoft Defender for Endpoint

Hier komt de echte kracht naar voren.

Wanneer Defender for Endpoint actief is krijg je inzicht in:

* Geblokkeerde acties
* Audit Events
* Aanvalspatronen
* Risicoscores

Daardoor kun je veel beter beoordelen welke regels veilig kunnen worden afgedwongen.

---

## ASR en Device Risk

Defender gebruikt ASR-signalen ook binnen Device Risk.

Wanneer apparaten verdacht gedrag vertonen kan dit bijdragen aan een verhoogde risicoscore.

Deze risicoscore kan vervolgens worden gebruikt binnen:

* Device Compliance Policies
* Conditional Access

Zo ontstaat een volledig geïntegreerde beveiligingsketen.

---

## ASR en Zero Trust

Veel organisaties zien Zero Trust als:

* MFA
* Conditional Access

Maar Zero Trust gaat verder dan identiteit.

Ook apparaten moeten beschermd zijn.

ASR speelt hierin een belangrijke rol.

Een gebruiker kan immers volledig legitiem zijn.

Maar wanneer malware actief wordt op het apparaat ontstaat alsnog risico.

ASR helpt dit risico te beperken voordat schade ontstaat.

---

## Veelgemaakte fouten

### Geen Audit Mode gebruiken

Direct blokkeren veroorzaakt vaak onnodige verstoringen.

---

### Alleen Defender Antivirus gebruiken

Dan mis je belangrijke rapportages en inzichten.

---

### Geen monitoring uitvoeren

ASR moet regelmatig geëvalueerd worden.

---

### Legacy-applicaties negeren

Sommige applicaties vereisen uitzonderingen.

Test daarom altijd zorgvuldig.

---

### Geen koppeling maken met Intune

ASR werkt het beste als onderdeel van een bredere endpointstrategie.

---

## Mijn visie

Wanneer ik kijk naar moderne ransomware-aanvallen zie ik dat veel aanvallen gebruikmaken van standaard Windows-functionaliteiten.

Juist daarom zijn traditionele detectiemechanismen niet altijd voldoende.

Attack Surface Reduction Rules vormen een van de meest effectieve beveiligingsmaatregelen die Microsoft de afgelopen jaren heeft toegevoegd aan Defender.

Sterker nog:

Wanneer ik slechts één Defender-functionaliteit zou mogen activeren naast antivirus, dan zou het waarschijnlijk ASR zijn.

De combinatie van:

* Preventie
* Lage beheerlast
* Hoge impact

maakt deze functionaliteit bijzonder waardevol.

---

## Conclusie

Attack Surface Reduction Rules behoren tot de krachtigste maar tegelijkertijd meest onderschatte beveiligingsfuncties binnen Microsoft Defender.

Door veelgebruikte aanvalstechnieken direct te blokkeren voordat ze uitgevoerd kunnen worden, verkleinen ASR-regels het aanvalsoppervlak van endpoints aanzienlijk.

In combinatie met Microsoft Defender for Endpoint, Intune, Device Compliance Policies en Conditional Access vormen ze een essentieel onderdeel van een moderne Zero Trust-strategie.

Want uiteindelijk geldt:

**De beste aanval is de aanval die nooit uitgevoerd kan worden.**

**RootNotes – terug naar de kern van IT.**
