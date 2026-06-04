+++
title = "Microsoft Defender for Endpoint: meer dan alleen antivirus"
date = 2026-06-16
description = "Ontdek waarom Microsoft Defender for Endpoint veel meer is dan traditionele antivirus. Leer hoe EDR, Vulnerability Management, Device Risk en Zero Trust samenkomen binnen Microsoft 365."
tags = ["defender-for-endpoint", "microsoft-defender", "edr", "intune", "zero-trust", "conditional-access", "security"]
categories = ["Security"]
+++

## Waarom traditionele antivirus niet meer voldoende is

{{< sideimage src="/images/defender.png" alt="defender" align="right" width="260px" >}}

Jarenlang was endpointbeveiliging relatief eenvoudig.

Je installeerde antivirussoftware, zorgde ervoor dat definities werden bijgewerkt en controleerde af en toe een rapportage. Zolang er geen virusmeldingen binnenkwamen, leek alles onder controle.

Maar de dreigingen van vandaag zien er compleet anders uit.

Aanvallers gebruiken:

* Gestolen sessietokens
* Phishing-aanvallen
* Ransomware
* Living-off-the-Land technieken
* PowerShell-misbruik
* Zero-Day kwetsbaarheden
* Credential Theft
* Supply Chain-aanvallen

Veel van deze aanvallen worden niet eens herkend door traditionele antivirussoftware.

Dat is precies waarom Microsoft Defender for Endpoint is uitgegroeid tot veel meer dan alleen een antivirusoplossing.

Het platform beschermt niet alleen apparaten, maar biedt inzicht in kwetsbaarheden, detecteert verdachte activiteiten en speelt een centrale rol binnen een moderne Zero Trust-architectuur.

---

## Wat is Microsoft Defender for Endpoint?

Microsoft Defender for Endpoint (MDE) is een cloudgebaseerd endpointbeveiligingsplatform dat apparaten beschermt tegen moderne cyberdreigingen.

Het platform bestaat uit verschillende beveiligingslagen:

* Next-Generation Protection
* Endpoint Detection & Response (EDR)
* Vulnerability Management
* Threat Intelligence
* Attack Surface Reduction
* Device Control
* Web Protection
* Automated Investigation & Remediation
* Device Risk Management

Samen vormen deze onderdelen een geïntegreerd beveiligingsplatform dat veel verder gaat dan traditionele antivirus.

Microsoft Defender for Endpoint is bovendien volledig geïntegreerd met:

* Microsoft Intune
* Microsoft Entra ID
* Conditional Access
* Microsoft Sentinel
* Microsoft Defender XDR
* Security Copilot

Juist die integratie maakt het platform zo krachtig binnen moderne Microsoft 365-omgevingen.

---

## Welke licenties zijn nodig?

Voordat je enthousiast aan de slag gaat met Microsoft Defender for Endpoint is het verstandig om eerst te kijken welke functionaliteiten je daadwerkelijk tot je beschikking hebt.

Een veelvoorkomende misvatting is dat iedere Microsoft 365-licentie automatisch alle Defender-functionaliteiten bevat.

Dat is niet het geval.

### Microsoft Defender Antivirus

Iedere moderne Windows 10- en Windows 11-installatie bevat standaard Microsoft Defender Antivirus.

Hiermee beschik je over:

* Malwarebescherming
* Antivirus
* Realtime bescherming
* Cloud-gebaseerde detectie
* Anti-phishing

Voor thuisgebruikers is dit vaak voldoende.

Voor zakelijke omgevingen vormt dit echter slechts de basis.

Je beschikt bijvoorbeeld nog niet over:

* Endpoint Detection & Response
* Vulnerability Management
* Device Risk Scoring
* Advanced Hunting
* Automated Remediation

### Microsoft Defender for Endpoint Plan 1

Defender for Endpoint Plan 1 is bedoeld voor organisaties die verder willen gaan dan traditionele antivirus.

Plan 1 bevat onder andere:

* Next-Generation Protection
* Attack Surface Reduction Rules
* Device Control
* Web Protection
* Firewall Management
* Security Baselines

Defender for Endpoint P1 is opgenomen in:

* Microsoft Defender for Business
* Microsoft 365 Business Premium
* Diverse Enterprise-bundels

Voor veel kleine en middelgrote organisaties biedt dit al een aanzienlijke verbetering ten opzichte van standaard endpointbeveiliging.

### Microsoft Defender for Endpoint Plan 2

Wanneer Microsoft spreekt over geavanceerde endpointbeveiliging gaat het vrijwel altijd over Defender for Endpoint Plan 2.

Hier komen de functies beschikbaar die Defender onderscheiden van traditionele antivirusoplossingen.

Plan 2 bevat onder andere:

* Endpoint Detection & Response (EDR)
* Vulnerability Management
* Threat Intelligence
* Automated Investigation & Remediation
* Device Risk Scoring
* Advanced Hunting
* Endpoint Attack Notifications
* Security Recommendations

Defender for Endpoint Plan 2 is beschikbaar binnen:

* Microsoft 365 E5
* Microsoft 365 A5
* Microsoft Security E5
* Defender for Endpoint P2 Standalone

Voor organisaties die serieus investeren in beveiliging is dit doorgaans de aanbevolen licentie.

### Welke licentie heb je nodig voor Zero Trust?

Veel van de functionaliteiten die in dit artikel worden besproken vereisen meer dan alleen Defender.

Wanneer je apparaten automatisch wilt blokkeren op basis van risico heb je nodig:

* Microsoft Defender for Endpoint Plan 2
* Microsoft Intune
* Microsoft Entra ID P1 of P2

Deze combinatie maakt scenario's mogelijk zoals:

* Defender detecteert ransomwaregedrag
* Device Risk stijgt naar High
* Intune ontvangt de risicoscore
* Conditional Access blokkeert toegang

Volledig automatisch.

Dit is een van de krachtigste voorbeelden van Zero Trust binnen Microsoft 365.

### Welke licentie adviseer ik?

#### Kleine organisaties

Voor organisaties tot ongeveer 300 gebruikers is Microsoft 365 Business Premium vaak de meest interessante keuze.

Je krijgt hiermee:

* Microsoft Intune
* Microsoft Entra ID P1
* Defender for Business
* Conditional Access
* Windows Autopatch

#### Middelgrote en grote organisaties

Voor organisaties die serieus inzetten op security adviseer ik meestal Microsoft 365 E5.

Daarmee beschik je over:

* Defender for Endpoint P2
* Microsoft Intune
* Microsoft Entra ID P2
* Microsoft Defender XDR
* Advanced Hunting
* Identity Protection
* Privileged Identity Management

Dit vormt momenteel de meest complete Microsoft-securitysuite.

### Overzicht van functionaliteiten

| Functionaliteit                       | Defender Antivirus | Defender P1 | Defender P2 |
| ------------------------------------- | ------------------ | ----------- | ----------- |
| Antivirus                             | ✅                 | ✅          | ✅          |
| Realtime Protection                   | ✅                 | ✅          | ✅          |
| Attack Surface Reduction              | ❌                 | ✅          | ✅          |
| Device Control                        | ❌                 | ✅          | ✅          |
| Endpoint Detection & Response         | ❌                 | ❌          | ✅          |
| Vulnerability Management              | ❌                 | ❌          | ✅          |
| Device Risk Scoring                   | ❌                 | ❌          | ✅          |
| Advanced Hunting                      | ❌                 | ❌          | ✅          |
| Automated Investigation & Remediation | ❌                 | ❌          | ✅          |

---

## Van antivirus naar EDR

Het grootste verschil tussen klassieke antivirus en Defender for Endpoint zit in de manier waarop dreigingen worden gedetecteerd.

Traditionele antivirus kijkt vooral naar:

* Bekende malware
* Virusdefinities
* Signatures

Defender kijkt naar gedrag.

Bijvoorbeeld:

* Waarom start Word PowerShell?
* Waarom probeert een proces LSASS uit te lezen?
* Waarom worden honderden bestanden plotseling versleuteld?
* Waarom wordt een ongebruikelijke netwerkverbinding opgezet?

Hierdoor kunnen ook onbekende aanvallen worden gedetecteerd.

---

## Endpoint Detection & Response (EDR)

Een van de krachtigste onderdelen van Defender is EDR.

EDR registreert gebeurtenissen op endpoints zoals:

* Processen
* Netwerkverbindingen
* Scripts
* Inlogpogingen
* Registry-wijzigingen
* Bestandsactiviteiten

Wanneer afwijkend gedrag wordt gedetecteerd genereert Defender automatisch een incident.

Beheerders kunnen vervolgens:

* Onderzoeken wat er gebeurd is
* Apparaten isoleren
* Processen stoppen
* Gebruikers blokkeren
* Bestanden in quarantaine plaatsen

Dit maakt het mogelijk om aanvallen vroegtijdig te stoppen voordat schade ontstaat.

---

## Vulnerability Management

Een functie die vaak wordt onderschat is Vulnerability Management.

Defender inventariseert continu:

* Verouderde software
* Ontbrekende patches
* Kwetsbare applicaties
* Risicovolle configuraties

Daardoor krijg je inzicht in vragen zoals:

* Welke apparaten draaien nog verouderde software?
* Welke systemen missen kritieke updates?
* Welke applicaties vormen het grootste risico?

Voor veel organisaties levert deze functionaliteit direct meer waarde op dan traditionele antivirus.

---

## Attack Surface Reduction

Microsoft noemt dit vaak ASR.

Deze regels helpen om veelgebruikte aanvalstechnieken te blokkeren voordat ze schade kunnen veroorzaken.

Voorbeelden:

* Office-macro's blokkeren
* PowerShell-misbruik beperken
* Credential Theft voorkomen
* Ransomware-technieken blokkeren
* Verdachte scripts tegenhouden

Veel moderne aanvallen worden hierdoor al tegengehouden voordat ze actief worden.

---

## Device Risk en Zero Trust

Hier komt de koppeling met Intune en Conditional Access.

Defender kent een risicoscore toe aan apparaten.

Bijvoorbeeld:

* Low
* Medium
* High

Deze score kan vervolgens worden gebruikt binnen Compliance Policies en Conditional Access.

Voorbeeld:

```text
Require device risk level to be low
```

Wanneer een apparaat verdacht gedrag vertoont:

* Verhoogt Defender de risicoscore
* Intune ontvangt deze informatie
* Conditional Access blokkeert toegang

Volledig automatisch.

Dit is Zero Trust in actie.

---

## Defender en Device Compliance

In een modern Microsoft 365-landschap werken Defender en Intune nauw samen.

Je kunt bijvoorbeeld eisen dat:

* Defender actief is
* Realtime bescherming actief is
* Device Risk lager is dan Medium
* Antivirus up-to-date is

Wanneer niet aan deze eisen wordt voldaan:

❌ Apparaat wordt Non-Compliant

❌ Toegang wordt geblokkeerd

---

## Defender en Conditional Access

Een van de krachtigste combinaties binnen Microsoft 365.

Scenario:

Een gebruiker logt succesvol in.

MFA wordt goedgekeurd.

Normaal gesproken zou toegang worden verleend.

Maar Defender detecteert ransomware-activiteit op het apparaat.

Resultaat:

❌ Device Risk stijgt

❌ Compliance mislukt

❌ Conditional Access blokkeert toegang

Nog voordat bedrijfsdata kan worden benaderd.

---

## Defender en Windows Autopatch

Ook hier zien we een interessante koppeling.

Windows Autopatch zorgt voor:

* Security Updates
* Feature Updates
* Driver Updates
* Geautomatiseerde deployment rings

Defender controleert vervolgens:

* Welke kwetsbaarheden aanwezig zijn
* Welke updates ontbreken
* Welke apparaten risico lopen

Daardoor ontstaat een krachtig ecosysteem waarin updates en beveiliging elkaar versterken.

---

## Defender en Windows Hotpatch

Hotpatch vermindert het aantal noodzakelijke herstarts.

Daardoor worden beveiligingsupdates sneller toegepast.

Defender ziet vervolgens sneller een afname van kwetsbaarheden en een hogere beveiligingsstatus van apparaten.

Ook hier versterken beide technologieën elkaar.

---

## Mijn aanbevolen basisconfiguratie

Wanneer ik een nieuwe omgeving implementeer activeer ik vrijwel altijd:

### Defender Antivirus

Voor basisbescherming.

### Endpoint Detection & Response

Voor gedragsanalyse.

### Vulnerability Management ()

Voor inzicht in risico's.

### Attack Surface Reduction (ASR)

Voor preventie.

### Device Risk Integratie

Voor Zero Trust.

### Intune Integratie

Voor Compliance Policies.

### Conditional Access

Voor automatische toegangscontrole.

Samen vormen deze onderdelen een sterke beveiligingsbasis.

---

## Veelgemaakte fouten

### Defender alleen als antivirus gebruiken

Dan benut je slechts een klein deel van de mogelijkheden.

### Device Risk niet gebruiken

Hiermee verlies je een belangrijk Zero Trust-signaal.

### Geen Vulnerability Management inzetten

Daardoor ontbreekt inzicht in kwetsbaarheden.

### Geen ASR-regels configureren

Veel preventieve bescherming blijft dan ongebruikt.

### Geen integratie met Conditional Access

Daardoor kan een gecompromitteerd apparaat nog steeds toegang krijgen.

---

## Mijn visie

De tijd waarin endpointbeveiliging draaide om antivirussoftware ligt achter ons.

Moderne beveiliging draait om:

* Identiteit
* Apparaten
* Risico
* Gedrag
* Automatisering

Microsoft Defender for Endpoint brengt al deze onderdelen samen binnen één platform.

In combinatie met Intune, Conditional Access, Device Compliance, Autopatch en Hotpatch ontstaat een moderne beveiligingsarchitectuur die niet alleen reageert op aanvallen, maar deze actief probeert te voorkomen.

En dat is uiteindelijk waar Zero Trust om draait.

Niet vertrouwen.

Altijd verifiëren.

---

## Conclusie

Microsoft Defender for Endpoint is veel meer dan een antivirusoplossing. Het platform biedt geavanceerde detectie, kwetsbaarheidsbeheer, gedragsanalyse en integratie met de rest van het Microsoft 365-ecosysteem.

Voor organisaties die investeren in Zero Trust vormt Defender dan ook een van de belangrijkste bouwstenen van een moderne beveiligingsstrategie.

Want hoe beter je inzicht hebt in de staat van je endpoints, hoe beter je kunt bepalen wie toegang krijgt tot je bedrijfsdata.

**RootNotes – terug naar de kern van IT.**
