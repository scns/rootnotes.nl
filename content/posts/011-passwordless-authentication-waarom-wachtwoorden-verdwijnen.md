+++
title = "Passwordless Authentication: waarom wachtwoorden hun houdbaarheidsdatum hebben bereikt"
date = 2026-06-25
description = "Ontdek waarom organisaties afscheid nemen van traditionele wachtwoorden. Leer hoe Passkeys, FIDO2, Windows Hello for Business en phishing-resistente authenticatie bijdragen aan een moderne Zero Trust-strategie."
tags = ["passwordless", "passkeys", "fido2", "windows-hello-for-business", "entra-id", "conditional-access", "zero-trust", "security"]
categories = ["Security"]
+++

## Waarom wachtwoorden het grootste beveiligingsprobleem blijven

{{< sideimage src="/images/passwords.png" alt="defender" align="right" width="260px" >}}

Al jarenlang investeren organisaties enorme bedragen in beveiliging.

We implementeren:

* Multi-Factor Authentication
* Conditional Access
* Endpoint Detection & Response
* Device Compliance
* Security Awareness Training

En toch blijft één van de grootste beveiligingsrisico's onveranderd aanwezig:

Het wachtwoord.

Ondanks alle technologische vooruitgang vertrouwen veel organisaties nog steeds op een authenticatiemethode die al tientallen jaren bestaat.

Het probleem?

Wachtwoorden zijn eenvoudig te stelen.

Niet omdat gebruikers onvoorzichtig zijn, maar omdat moderne aanvallen steeds slimmer worden.

Denk aan:

* Phishing
* Credential Harvesting
* Password Spraying
* Man-in-the-Middle aanvallen
* Session Token Theft
* Social Engineering

Microsoft rapporteert al jaren dat een groot deel van de accountovernames direct gerelateerd is aan gestolen of gecompromitteerde credentials.

Daarom verschuift de focus steeds meer van het beschermen van wachtwoorden naar het volledig elimineren ervan.

---

## Wat is Passwordless Authentication?

Passwordless Authentication betekent precies wat de naam zegt:

Authenticatie zonder traditioneel wachtwoord.

In plaats van een wachtwoord gebruikt een gebruiker bijvoorbeeld:

* Windows Hello for Business
* FIDO2 Security Keys
* Passkeys
* Microsoft Authenticator
* Biometrische authenticatie

Het doel is simpel:

> Verwijder het onderdeel dat het vaakst wordt aangevallen.

Een aanvaller kan immers geen wachtwoord stelen dat niet bestaat.

---

## Waarom MFA alleen niet voldoende is

Veel organisaties denken dat MFA het probleem oplost.

Dat klopt gedeeltelijk.

MFA verhoogt de beveiliging aanzienlijk.

Maar moderne aanvallers hebben inmiddels manieren gevonden om ook MFA te omzeilen.

Voorbeelden:

### MFA Fatigue

De gebruiker ontvangt tientallen MFA-aanvragen en keurt er uiteindelijk één goed.

---

### Adversary-in-the-Middle

Een aanvaller onderschept de authenticatiesessie tussen gebruiker en applicatie.

---

### Session Hijacking

Een aanvaller steelt een actieve sessie nadat MFA succesvol is afgerond.

---

### Token Theft

Authenticatietokens worden buitgemaakt zonder dat het wachtwoord nodig is.

Hierdoor ontstaat een belangrijke conclusie:

> MFA beschermt het wachtwoord, maar elimineert het wachtwoord niet.

Passwordless doet dat wel.

---

## Waarom Microsoft inzet op Passwordless

Microsoft heeft de afgelopen jaren enorme investeringen gedaan in passwordless technologieën.

Niet omdat het een trend is.

Maar omdat wachtwoorden structureel een zwakke schakel blijven.

Het uiteindelijke doel van Microsoft is duidelijk:

* Minder phishing
* Minder accountovernames
* Minder gebruikersfrustratie
* Meer veiligheid

Dat zie je terug in ontwikkelingen zoals:

* Passkeys
* Authentication Strengths
* Windows Hello for Business
* FIDO2
* Microsoft Authenticator Passwordless

---

## Windows Hello for Business

Voor veel organisaties is Windows Hello for Business de eerste stap richting passwordless.

In plaats van een wachtwoord gebruikt de gebruiker:

* Gezichtsherkenning
* Vingerafdruk
* PIN

Die PIN lijkt op een wachtwoord, maar werkt fundamenteel anders.

Het geheim verlaat nooit het apparaat.

Daardoor kan het niet worden onderschept of hergebruikt.

Voordelen:

* Gebruiksvriendelijk
* Sterke beveiliging
* Volledig geïntegreerd met Entra ID
* Ondersteuning voor Conditional Access

Persoonlijk beschouw ik Windows Hello for Business als de standaard authenticatiemethode voor moderne Windows-werkplekken.

---

## FIDO2 Security Keys

FIDO2 wordt vaak beschouwd als de gouden standaard binnen passwordless authenticatie.

Bekende voorbeelden zijn:

* YubiKey
* Feitian
* Token2

De gebruiker steekt een fysieke sleutel in de laptop of gebruikt NFC.

Vervolgens wordt een cryptografische challenge uitgevoerd.

Voordelen:

* Zeer hoge beveiliging
* Phishing-resistent
* Geen wachtwoord nodig
* Geen gedeelde geheimen

Voor beheerdersaccounts adviseer ik vrijwel altijd FIDO2.

---

## Wat zijn Passkeys?

Passkeys zijn momenteel een van de belangrijkste ontwikkelingen binnen identity security.

In plaats van:

```text
Gebruikersnaam + Wachtwoord
```

wordt gebruikgemaakt van:

```text
Cryptografische sleutelparen
```

Hierbij bestaat:

* Een private key
* Een public key

De private key blijft altijd op het apparaat van de gebruiker.

De public key wordt opgeslagen bij de dienstverlener.

Daardoor kan een aanvaller geen wachtwoord stelen omdat er simpelweg geen wachtwoord bestaat.

Passkeys worden inmiddels ondersteund door:

* Microsoft
* Google
* Apple
* GitHub
* Amazon
* Veel SaaS-oplossingen

Dit is waarschijnlijk de richting waarin authenticatie zich de komende jaren zal ontwikkelen.

---

## Phishing-Resistente Authenticatie

Microsoft spreekt steeds vaker over:

> **Phishing Resistant Authentication**

Dit zijn authenticatiemethoden die niet vatbaar zijn voor traditionele phishingaanvallen.

Voorbeelden:

### Windows Hello for Business (WHFB)

✅ Phishing-resistent

### FIDO2 Security Keys (voorbeeld: Yubikey)

✅ Phishing-resistent

### Passkeys

✅ Phishing-resistent

### SMS MFA

❌ Niet phishing-resistent

### OTP Codes

❌ Niet phishing-resistent

Juist daarom zie je dat Microsoft steeds meer nadruk legt op deze moderne authenticatiemethoden.

---

## Authentication Strengths

Een relatief nieuwe functie binnen Entra ID is Authentication Strengths.

Hiermee kun je exact bepalen welke authenticatiemethoden zijn toegestaan.

Voorbeeld:

### Normale gebruikers

Toestaan:

* Microsoft Authenticator
* Windows Hello for Business

---

### Beheerders

Toestaan:

* FIDO2
* Windows Hello for Business

Blokkeren:

* SMS
* Voice Calls

Dit maakt het mogelijk om beveiligingsniveaus per doelgroep af te dwingen.

---

## Passwordless en Conditional Access

Passwordless wordt nog krachtiger wanneer het gecombineerd wordt met Conditional Access.

Bijvoorbeeld:

```text
Administrators
↓
Require Authentication Strength
↓
Phishing Resistant MFA
```

Resultaat:

Een beheerder kan uitsluitend inloggen met:

* FIDO2
* Passkeys
* Windows Hello for Business

Traditionele MFA-methoden worden automatisch geweigerd.

Dit sluit perfect aan op een Zero Trust-strategie.

---

## Passwordless en Device Compliance

Authenticatie is slechts één onderdeel van beveiliging.

Ook het apparaat moet vertrouwd zijn.

Daarom combineer ik passwordless vaak met:

* Device Compliance Policies
* Intune
* Defender Device Risk

Scenario:

* Gebruiker heeft een Passkey
* Apparaat voldoet niet aan compliance-eisen

Resultaat:

❌ Geen toegang

Hierdoor ontstaat een combinatie van:

* Sterke identiteit
* Vertrouwd apparaat

Precies zoals Zero Trust bedoeld is.

---

## Passwordless en Microsoft Defender

Defender for Endpoint levert aanvullende signalen.

Bijvoorbeeld:

* Device Risk
* Threat Detection
* Compromised Device Status

Wanneer Defender een hoog risico detecteert kan Conditional Access alsnog toegang blokkeren.

Zelfs wanneer een gebruiker een Passkey gebruikt.

Passwordless betekent dus niet dat andere beveiligingslagen overbodig worden.

Integendeel.

---

## Passwordless en Privileged Identity Management

Voor beheerders wordt passwordless pas echt interessant in combinatie met PIM.

Een ideaal scenario:

1. Beheerder activeert een rol via PIM.
2. Authenticatie vereist FIDO2.
3. Device moet compliant zijn.
4. Defender Risk moet laag zijn.

Pas daarna wordt toegang verleend.

Hierdoor ontstaat een uiterst veilige beheeromgeving.

---

## Vergeet je Break Glass Accounts niet

Bij iedere passwordless implementatie blijft één onderwerp belangrijk:

Break Glass Accounts.

Deze accounts vormen de laatste reddingslijn wanneer:

* Conditional Access faalt
* Identity Services niet beschikbaar zijn
* Authenticatiemethoden niet werken

Daarom adviseert Microsoft nog steeds minimaal twee Emergency Access Accounts.

Passwordless verandert daar niets aan.

---

## Mijn aanbevolen aanpak

Wanneer ik vandaag een nieuwe Microsoft 365-omgeving zou bouwen:

### Reguliere gebruikers

* Windows Hello for Business
* Microsoft Authenticator

### Beheerders (privileged rollen)

* FIDO2 Security Keys
* Authentication Strengths
* Conditional Access

### Apparaten

* Device Compliance Policies
* Microsoft Intune

### Security

* Microsoft Defender for Endpoint
* Device Risk Policies

### Noodtoegang

* Twee Break Glass Accounts

Deze combinatie sluit perfect aan op een moderne Zero Trust-architectuur.

---

## Veelgemaakte fouten

### Alleen MFA implementeren

MFA is belangrijk, maar geen eindstation.

---

### SMS blijven gebruiken

SMS is beter dan niets, maar niet toekomstbestendig.

---

### Geen Authentication Strengths inzetten

Daardoor blijven zwakke MFA-methoden beschikbaar.

---

### Geen Device Compliance gebruiken

Een sterke identiteit is onvoldoende zonder een vertrouwd apparaat.

---

### Geen beheeraccounts scheiden

Administratieve accounts verdienen altijd extra bescherming.

---

## Mijn visie

Wachtwoorden verdwijnen niet morgen.

Maar hun rol wordt steeds kleiner.

Net zoals we afscheid hebben genomen van:

* Telnet
* NTLM
* Onbeveiligde protocollen

zullen ook traditionele wachtwoorden langzaam verdwijnen.

Passkeys, Windows Hello for Business en FIDO2 laten zien dat authenticatie veiliger én gebruiksvriendelijker kan zijn.

Voor organisaties die investeren in Entra ID, Conditional Access, Device Compliance en Microsoft Defender is passwordless daarom geen toekomstmuziek meer.

Het is de volgende logische stap.

---

## Conclusie

Passwordless Authentication is niet alleen een verbetering van de gebruikerservaring, maar vooral een fundamentele verbetering van de beveiliging.

Door wachtwoorden te vervangen door moderne authenticatiemethoden zoals Windows Hello for Business, Passkeys en FIDO2 Security Keys wordt het risico op phishing, credential theft en accountovernames aanzienlijk verkleind.

In combinatie met Conditional Access, Device Compliance, Microsoft Defender, Entra ID en PIM ontstaat een krachtige Zero Trust-architectuur waarin identiteit, apparaat en risico continu worden gevalideerd.

En misschien is dat wel de belangrijkste conclusie:

**De veiligste wachtwoorden zijn de wachtwoorden die niet meer bestaan.**

**RootNotes – terug naar de kern van IT.**
