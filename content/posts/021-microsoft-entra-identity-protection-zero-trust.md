+++
title = "Microsoft Entra Identity Protection: risico's detecteren voordat een account wordt misbruikt"
date = 2026-08-16
description = "Ontdek hoe Microsoft Entra Identity Protection gebruikers- en aanmeldrisico's detecteert, automatisch reageert op verdachte activiteiten en een essentiële rol speelt binnen een Zero Trust-strategie."
tags = ["entra-id", "identity-protection", "conditional-access", "zero-trust", "security", "pim", "passwordless", "identity"]
categories = ["Identity & Security"]
+++

## Waarom sterke wachtwoorden en MFA niet meer voldoende zijn

{{< sideimage src="/images/identityprotection.png" alt="identityprotection" align="right" width="260px" >}}

Veel organisaties hebben de afgelopen jaren grote stappen gezet op het gebied van identiteitsbeveiliging.

Denk aan:

* Multi-Factor Authentication
* Passwordless Authentication
* Conditional Access
* Privileged Identity Management
* Access Reviews

Dat zijn stuk voor stuk belangrijke maatregelen.

Toch blijft er een fundamenteel probleem bestaan.

Een gebruiker kan succesvol inloggen met:

* Het juiste wachtwoord
* Een geldige MFA-uitdaging
* Een compliant apparaat

En tóch gecompromitteerd zijn.

Sterker nog.

Veel moderne aanvallen maken juist misbruik van legitieme accounts.

De vraag is daarom niet langer alleen:

> Is deze gebruiker succesvol geauthenticeerd?

Maar vooral:

> Is deze gebruiker nog wel te vertrouwen?

Dat is precies waar Microsoft Entra Identity Protection voor is ontwikkeld.

---

## Wat is Microsoft Entra Identity Protection?

Microsoft Entra Identity Protection analyseert continu gebruikersaccounts en aanmeldingen op verdachte signalen.

Het platform maakt gebruik van:

* Machine Learning
* Microsoft Threat Intelligence
* Wereldwijde telemetrie
* Gedragsanalyse

Hiermee kan Microsoft risico's identificeren voordat een account daadwerkelijk wordt misbruikt.

Identity Protection kijkt niet alleen naar de identiteit.

Maar ook naar het risico rondom die identiteit.

---

## Welke licenties zijn nodig?

Een belangrijk aandachtspunt.

Microsoft Entra Identity Protection vereist:

### Microsoft Entra ID P2

Deze licentie is beschikbaar binnen:

* Microsoft 365 E5
* Microsoft Entra ID P2
* Microsoft Security E5
* Enterprise Mobility + Security E5

Zonder Entra ID P2 zijn de Identity Protection-functionaliteiten niet beschikbaar.

Voor organisaties die serieus investeren in Zero Trust beschouw ik Entra ID P2 als een van de meest waardevolle licenties binnen het Microsoft-portfolio.

---

## Waarom Identity Protection zo belangrijk is

Traditionele beveiliging richt zich vaak op:

```text
Gebruiker
↓
Correct wachtwoord
↓
MFA succesvol
↓
Toegang verleend
```

Maar moderne aanvallers maken gebruik van:

* Token theft
* Session hijacking
* AiTM-aanvallen
* Gestolen credentials
* MFA fatigue
* Phishing

Daardoor ontstaat een nieuwe uitdaging.

De authenticatie kan succesvol zijn.

Terwijl de gebruiker of sessie toch een risico vormt.

Identity Protection helpt organisaties om dat risico zichtbaar te maken.

---

## User Risk

Een van de belangrijkste concepten binnen Identity Protection is:

### User Risk

User Risk geeft aan hoe waarschijnlijk het is dat een account gecompromitteerd is.

Microsoft analyseert hierbij verschillende signalen.

Bijvoorbeeld:

* Gelekte wachtwoorden
* Verdachte activiteiten
* Bekende aanvallen
* Microsoft Threat Intelligence

Resultaat:

```text
Low Risk
Medium Risk
High Risk
```

Hoe hoger het risico.

Hoe groter de kans dat het account daadwerkelijk gecompromitteerd is.

---

## Praktijkvoorbeeld User Risk

Stel:

Een gebruikersaccount verschijnt in een database met gelekte credentials.

Microsoft detecteert dit.

Resultaat:

```text
User Risk = High
```

De gebruiker merkt hier mogelijk nog niets van.

Maar Identity Protection heeft het risico al vastgesteld.

Dat maakt vroegtijdige actie mogelijk.

---

## Sign-in Risk

Naast User Risk bestaat ook:

### Sign-in Risk

Hierbij wordt niet de gebruiker beoordeeld.

Maar de specifieke aanmelding.

Bijvoorbeeld:

```text
Gebruiker
↓
Normaal actief in Nederland
↓
Aanmelding vanuit onbekende locatie
↓
Verdachte kenmerken
↓
Sign-in Risk
```

Hiermee kan Microsoft verdachte sessies identificeren.

Zelfs wanneer het account zelf nog niet als gecompromitteerd wordt beschouwd.

---

## Verschil tussen User Risk en Sign-in Risk

### User Risk

Richt zich op:

```text
De identiteit
```

---

### Sign-in Risk

Richt zich op:

```text
De aanmelding
```

Beide risico's worden afzonderlijk beoordeeld.

Dat maakt Identity Protection bijzonder krachtig.

---

## Risk Detections

De daadwerkelijke signalen die Microsoft detecteert noemen we:

### Risk Detections

Voorbeelden zijn:

* Anonymous IP Address
* Impossible Travel
* Malware Linked IP
* Password Spray
* Leaked Credentials
* Suspicious Browser Activity
* AiTM-aanvallen

Deze signalen worden continu geëvalueerd.

Microsoft verwerkt hiervoor miljarden signalen per dag.

---

## Impossible Travel

Een bekende detectie.

Scenario:

```text
09:00
Amsterdam

09:15
Singapore
```

Fysiek onmogelijk.

Microsoft markeert deze situatie als verdacht.

Dit betekent niet automatisch dat sprake is van misbruik.

Maar wel dat nader onderzoek noodzakelijk is.

---

## Leaked Credentials

Een van de meest waardevolle detecties.

Microsoft vergelijkt accounts met bekende datasets van gelekte wachtwoorden.

Wanneer een account wordt aangetroffen:

```text
Gebruiker
↓
Leaked Credentials
↓
High User Risk
```

Dan kan direct actie worden ondernomen.

Nog voordat een aanvaller dat doet.

---

## Risk Policies

Detecteren alleen is niet voldoende.

Daarom biedt Identity Protection:

### Risk Policies

Hiermee kan automatisch worden gereageerd op risico's.

---

## User Risk Policy

Voorbeeld:

```text
User Risk = High
↓
Wachtwoord reset verplicht
```

Gebruiker krijgt pas opnieuw toegang nadat het wachtwoord is gewijzigd.

---

## Sign-in Risk Policy

Voorbeeld:

```text
Sign-in Risk = Medium
↓
Extra MFA vereist
```

Hierdoor wordt verdachte toegang direct gecontroleerd.

---

## Automatische remediatie

Een van de krachtigste onderdelen van Identity Protection.

Veel organisaties ontvangen liever geen meldingen.

Ze willen dat problemen automatisch worden opgelost.

Identity Protection ondersteunt dit.

Bijvoorbeeld:

```text
High User Risk
↓
Self Service Password Reset
↓
Risico opgelost
↓
Toegang hersteld
```

Volledig geautomatiseerd.

Zonder tussenkomst van IT.

---

## Risk-Based Conditional Access

De echte kracht ontstaat wanneer Identity Protection wordt gecombineerd met Conditional Access.

Traditionele Conditional Access kijkt naar:

* Locatie
* Apparaat
* Applicatie
* MFA

Risk-Based Conditional Access voegt daar een extra laag aan toe:

```text
Hoe risicovol is deze gebruiker?
```

En:

```text
Hoe risicovol is deze sessie?
```

---

## Praktijkvoorbeeld

Scenario:

```text
User Risk = High
```

Conditional Access:

```text
Blokkeer toegang
```

Of:

```text
Forceer Password Reset
```

---

Scenario:

```text
Sign-in Risk = Medium
```

Conditional Access:

```text
Extra MFA
```

---

Scenario:

```text
Sign-in Risk = High
```

Conditional Access:

```text
Blokkeer toegang
```

Hierdoor ontstaat dynamische beveiliging.

---

## Identity Protection en Passwordless Authentication

Een veelgestelde vraag:

> Heb ik Identity Protection nog nodig wanneer ik Passkeys of FIDO2 gebruik?

Mijn antwoord:

Absoluut.

Passwordless vermindert het risico op phishing.

Maar elimineert niet alle dreigingen.

Identity Protection blijft waardevol voor:

* Gestolen sessies
* Risicovolle locaties
* Verdachte activiteiten
* Token misbruik

Beide oplossingen versterken elkaar.

---

## Identity Protection en PIM

Ook PIM profiteert van Identity Protection.

Scenario:

```text
Global Administrator
↓
High User Risk
```

Resultaat:

* Activatie blokkeren
* Extra verificatie vereisen
* Toegang weigeren

Dit voorkomt dat gecompromitteerde beheerdersaccounts verhoogde rechten kunnen activeren.

---

## Identity Protection en Access Reviews

Access Reviews controleren:

```text
Heeft iemand nog toegang nodig?
```

Identity Protection controleert:

```text
Kunnen we deze identiteit nog vertrouwen?
```

Samen vormen ze een sterke combinatie binnen Identity Governance.

---

## Identity Protection en Break Glass Accounts

Een belangrijke uitzondering.

Microsoft adviseert doorgaans om Break Glass Accounts uit te sluiten van:

* User Risk Policies
* Sign-in Risk Policies
* Conditional Access

Waarom?

Omdat noodtoegang altijd beschikbaar moet blijven.

Wel moeten deze accounts:

* Sterk beveiligd zijn
* Worden gemonitord
* Regelmatig worden getest

---

## Mijn aanbevolen configuratie

Voor de meeste organisaties adviseer ik:

### User Risk Policy

```text
High Risk
↓
Password Reset
```

---

### Sign-in Risk Policy

```text
Medium Risk
↓
MFA
```

---

### High Sign-in Risk

```text
Block Access
```

---

### Monitoring

```text
Dagelijks controleren
```

---

### Integratie

```text
Conditional Access
PIM
Passwordless Authentication
```

---

## Veelgemaakte fouten

### Identity Protection inschakelen zonder policies

Detecteren zonder actie levert beperkte waarde op.

---

### Alleen meldingen gebruiken

Automatische remediatie levert vaak meer beveiligingswinst op.

---

### Geen integratie met Conditional Access

Hierdoor mis je een belangrijk deel van de functionaliteit.

---

### Risico's niet monitoren

Security vraagt om continue evaluatie.

---

### Break Glass Accounts vergeten

Deze accounts verdienen speciale aandacht.

---

## Mijn visie

Wanneer organisaties investeren in beveiliging richten zij zich vaak eerst op authenticatie.

Dat is logisch.

Maar moderne beveiliging draait steeds meer om risico.

Niet iedere succesvolle aanmelding is automatisch veilig.

Niet iedere geauthenticeerde gebruiker is automatisch betrouwbaar.

Microsoft Entra Identity Protection helpt organisaties om verder te kijken dan alleen gebruikersnaam, wachtwoord en MFA.

Het brengt context, risicoanalyse en automatisering samen in één oplossing.

En juist daarom beschouw ik Identity Protection als een van de belangrijkste onderdelen van een volwassen Zero Trust-architectuur.

---

## Conclusie

Microsoft Entra Identity Protection helpt organisaties bij het detecteren, beoordelen en automatisch mitigeren van risico's rondom identiteiten en aanmeldingen.

Door gebruik te maken van User Risk, Sign-in Risk, Risk Policies en Risk-Based Conditional Access ontstaat een beveiligingslaag die veel verder gaat dan traditionele authenticatie.

In combinatie met Conditional Access, Passwordless Authentication, PIM, Access Reviews en Break Glass Accounts vormt Identity Protection een essentieel onderdeel van moderne identiteitsbeveiliging.

Want uiteindelijk geldt:

**Niet iedere succesvolle login is een veilige login.**

**RootNotes – terug naar de kern van IT.**
