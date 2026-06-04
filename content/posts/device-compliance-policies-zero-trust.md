+++
title = "Device Compliance Policies: de vergeten schakel in Zero Trust"
date = 2026-06-12
description = "MFA alleen is niet voldoende. Ontdek waarom Device Compliance Policies een cruciale rol spelen binnen een Zero Trust-strategie en hoe je ze implementeert met Microsoft Intune en Conditional Access."
tags = ["intune", "device-compliance", "conditional-access", "zero-trust", "microsoft-365", "entra-id", "security"]
categories = ["Security"]
+++

## Waarom MFA alleen niet voldoende is

{{< sideimage src="/images/device_complience.png" alt="device complience" align="right" width="260px" >}}

Wanneer organisaties beginnen met het verbeteren van hun Microsoft 365-beveiliging, ligt de focus vaak op Multi-Factor Authentication (MFA) en Conditional Access. Dat is logisch. MFA voorkomt een groot deel van de accountovernames en Conditional Access biedt de mogelijkheid om toegang dynamisch te beheren.

Maar er is een belangrijke vraag die vaak vergeten wordt:

> Wat als de gebruiker legitiem is, maar het apparaat niet?

Een gebruiker kan succesvol MFA doorlopen, maar alsnog inloggen vanaf een onbeveiligd, verouderd of zelfs gecompromitteerd apparaat.

Dat is precies waar **Device Compliance Policies** in beeld komen.

Binnen een moderne Zero Trust-strategie draait beveiliging niet alleen om identiteit, maar ook om de staat van het apparaat waarmee toegang wordt verkregen.

En eerlijk gezegd zie ik dit nog regelmatig ontbreken tijdens audits van Microsoft 365-omgevingen.

---

## Wat zijn Device Compliance Policies?

Device Compliance Policies zijn beleidsregels binnen Microsoft Intune waarmee je bepaalt aan welke beveiligingseisen een apparaat moet voldoen.

Intune controleert continu of apparaten aan deze eisen voldoen.

Wanneer een apparaat niet compliant is, kan dit gevolgen hebben voor:

* Toegang tot Microsoft 365
* SharePoint Online
* Exchange Online
* Teams
* SaaS-applicaties
* Bedrijfsdata

De echte kracht ontstaat wanneer Compliance Policies worden gecombineerd met Conditional Access.

Dan kun je namelijk zeggen:

> Alleen apparaten die voldoen aan onze beveiligingsstandaarden krijgen toegang.

Dat is de essentie van Zero Trust.

---

## Waarom Compliance belangrijker wordt

Traditioneel vertrouwden organisaties op het bedrijfsnetwerk.

Zolang een apparaat binnen het netwerk zat, werd het vaak als betrouwbaar beschouwd.

Die wereld bestaat nauwelijks meer.

Vandaag de dag werken gebruikers vanaf:

* Huis
* Klantlocaties
* Openbare netwerken
* Mobiele verbindingen
* Persoonlijke apparaten

Daardoor verschuift vertrouwen van locatie naar identiteit én apparaatstatus.

Microsoft noemt dit:

> **Verify Explicitly**

Een van de drie kernprincipes van Zero Trust.

---

## Wat controleert een Compliance Policy?

Intune kan verschillende controles uitvoeren.

De meest gebruikte zijn:

### BitLocker

Controleert of schijfversleuteling actief is.

Waarom belangrijk?

Wanneer een laptop wordt gestolen blijven de gegevens beschermd.

Voor moderne werkplekken beschouw ik BitLocker als een minimale vereiste.

---

### Secure Boot

Controleert of het systeem beschermd is tegen ongeautoriseerde wijzigingen tijdens het opstartproces.

Hiermee wordt de kans op firmware-aanvallen aanzienlijk verkleind.

---

### TPM

Controleert de aanwezigheid van een Trusted Platform Module.

TPM speelt een belangrijke rol bij:

* BitLocker
* Windows Hello for Business
* Device Health Attestation

---

### Antivirus

Controleert of een ondersteunde antivirusoplossing actief is.

In de meeste omgevingen zal dit Microsoft Defender Antivirus zijn.

---

### Microsoft Defender Status

Controleert of Defender correct functioneert.

Bijvoorbeeld:

* Real-time protection
* Malware bescherming
* Beveiligingsstatus

---

### Firewall

Controleert of Windows Firewall actief is.

Hoewel dit vanzelfsprekend lijkt, kom ik nog regelmatig apparaten tegen waarbij de firewall handmatig is uitgeschakeld.

---

### Operating System Version

Controleert of een apparaat voldoet aan de minimale Windows-versie.

Hierdoor voorkom je dat sterk verouderde systemen toegang houden.

---

### Device Risk

Wanneer Microsoft Defender for Endpoint gekoppeld is aan Intune kan het risiconiveau van een apparaat worden meegenomen.

Bijvoorbeeld:

* Low Risk
* Medium Risk
* High Risk

Een apparaat met een hoog risico kan automatisch worden geblokkeerd.

Dit is waar Zero Trust echt krachtig wordt.

---

## Compliance en Conditional Access

Veel organisaties richten Compliance Policies in maar vergeten de laatste stap.

Conditional Access.

Een compliance status op zichzelf doet namelijk niets.

Pas wanneer je Conditional Access gebruikt ontstaat echte bescherming.

Een veelgebruikte policy:

```text
Require device to be marked as compliant
```

Hiermee krijgt een gebruiker alleen toegang wanneer:

* Het account vertrouwd is
* MFA succesvol is uitgevoerd
* Het apparaat compliant is

Deze combinatie vormt voor veel organisaties de basis van Zero Trust.

---

## Een praktijkvoorbeeld

Stel:

Een medewerker logt in op Microsoft Teams.

Scenario 1:

* Correct wachtwoord
* MFA succesvol
* Compliant apparaat

Resultaat:

✅ Toegang verleend

---

Scenario 2:

* Correct wachtwoord
* MFA succesvol
* BitLocker uitgeschakeld

Resultaat:

❌ Toegang geweigerd

---

Scenario 3:

* Correct wachtwoord
* MFA succesvol
* Hoog Defender-risico

Resultaat:

❌ Toegang geweigerd

---

In alle gevallen is de gebruiker dezelfde persoon.

Het verschil zit uitsluitend in de staat van het apparaat.

En dat is precies waarom Compliance Policies zo belangrijk zijn.

---

## Mijn aanbevolen minimale Compliance Baseline

Wanneer ik een nieuwe Intune-omgeving implementeer gebruik ik vaak onderstaande basis.

### Windows 11

Vereist:

* BitLocker Enabled
* TPM aanwezig
* Secure Boot Enabled
* Firewall Enabled
* Defender Enabled
* Geen Jailbreak of Root
* Minimale Windows-versie
* Device Risk lager dan Medium

Deze configuratie biedt een uitstekende balans tussen beveiliging en beheerbaarheid.

---

## Device Compliance en Windows Autopatch

Een interessant voordeel van Compliance Policies is de relatie met Windows Autopatch.

Autopatch zorgt ervoor dat apparaten:

* Security Updates ontvangen
* Feature Updates ontvangen
* Up-to-date blijven

Compliance Policies kunnen vervolgens controleren of apparaten daadwerkelijk voldoen aan de minimale versie-eisen.

Daardoor ontstaat een gesloten beveiligingsketen:

1. Autopatch installeert updates.
2. Compliance controleert de status.
3. Conditional Access valideert toegang.
4. Gebruiker krijgt toegang.

Dit sluit perfect aan op een moderne Microsoft 365-strategie.

---

## Device Compliance en Hotpatch

Ook Hotpatch speelt hierin een rol.

Doordat beveiligingsupdates sneller worden toegepast zonder herstarts, blijven apparaten vaker compliant.

Gebruikers stellen minder updates uit.

Daardoor neemt de algehele beveiligingsstatus van de organisatie toe.

Hotpatch, Autopatch en Compliance vormen samen een sterke combinatie.

---

## Veelgemaakte fouten

Tijdens implementaties zie ik regelmatig dezelfde problemen terugkomen.

### Geen Compliance Policies

De meest voorkomende fout.

MFA wordt verplicht gesteld maar apparaatbeveiliging ontbreekt volledig.

---

### Geen Conditional Access koppeling

De policy bestaat wel, maar wordt nergens afgedwongen.

Daardoor heeft de compliance-status geen enkele impact.

---

### Te veel uitzonderingen

Iedere uitzondering vermindert de effectiviteit van het beleid.

Probeer uitzonderingen zoveel mogelijk te beperken.

---

### Geen Device Risk integratie

Veel organisaties beschikken over Defender for Endpoint maar gebruiken de risicoscore niet binnen Conditional Access.

Daardoor gaat een belangrijk onderdeel van Zero Trust verloren.

---

### Geen monitoring

Controleer regelmatig:

* Compliance percentages
* Failed Evaluations
* Device Risk Scores
* Non-Compliant apparaten

Een policy die niet wordt gecontroleerd verliest uiteindelijk zijn waarde.

---

## Mijn visie

Wanneer ik kijk naar moderne Microsoft 365-omgevingen zie ik dat veel organisaties investeren in:

* MFA
* Conditional Access
* Defender
* Intune
* Autopatch

Maar Device Compliance wordt vaak gezien als een aanvullende functie.

Dat is een gemiste kans.

In werkelijkheid vormt Compliance de brug tussen identiteit en apparaatbeveiliging.

Een gebruiker kan nog zo goed beveiligd zijn, wanneer hij werkt vanaf een onbeveiligd apparaat blijft er een risico bestaan.

Juist daarom zie ik Compliance Policies als een van de belangrijkste bouwstenen binnen een volwassen Zero Trust-strategie.

---

## Conclusie

Zero Trust draait niet alleen om het verifiëren van gebruikers, maar ook om het continu beoordelen van de apparaten waarmee zij werken.

Device Compliance Policies maken dit mogelijk door beveiligingseisen af te dwingen voordat toegang wordt verleend tot bedrijfsdata en applicaties.

In combinatie met Conditional Access, Microsoft Defender, Windows Autopatch en Hotpatch ontstaat een krachtige beveiligingsarchitectuur waarin identiteit, apparaatstatus en risico samenkomen.

En misschien is dat wel de belangrijkste les:

**MFA vertelt je wie iemand is. Device Compliance vertelt je of je het apparaat kunt vertrouwen.**

**RootNotes – terug naar de kern van IT.**
