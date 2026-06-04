+++
title = "Waarom iedere Microsoft 365-omgeving Conditional Access nodig heeft"
date = 2026-06-05
description = "Conditional Access vormt de basis van moderne identiteitsbeveiliging. Ontdek hoe je met een gestructureerde baseline gebruikers, beheerders en bedrijfsdata beter beschermt."
tags = ["conditional-access", "entra-id", "microsoft-365", "security", "zero-trust", "identity"]
categories = ["Security", "Conditional Access"]
+++

## Waarom Conditional Access niet langer optioneel is

{{< sideimage src="/images/conditionalaccess.png" alt="Maarten" align="right" width="260px" >}}
Wanneer organisaties overstappen naar Microsoft 365 en Entra ID verschuift de beveiligingsgrens. Waar vroeger de firewall het belangrijkste verdedigingsmiddel was, draait moderne beveiliging om identiteit.

Microsoft noemt Conditional Access niet voor niets de **Zero Trust Policy Engine**. Het is de plek waar signalen zoals gebruikersidentiteit, apparaatstatus, locatie, risico en applicaties samenkomen om te bepalen wie toegang krijgt tot welke gegevens.

Toch zie ik in de praktijk nog veel omgevingen waar Conditional Access beperkt wordt ingezet of organisch is gegroeid tot een verzameling losse policies zonder duidelijke structuur. Dat maakt beheer complex en verhoogt het risico op beveiligingslekken.

---

## Wat is Conditional Access?

Simpel gezegd werkt Conditional Access volgens het principe:

> **Als een gebruiker toegang wil krijgen tot een applicatie, dan moet aan bepaalde voorwaarden worden voldaan.**

Denk hierbij aan:

* MFA verplichten
* Alleen toegang vanaf compliant apparaten
* Legacy authenticatie blokkeren
* Risicovolle aanmeldingen blokkeren
* Sessies beperken op onbeheerde apparaten
* Phishing-resistente authenticatie vereisen voor beheerders

Conditional Access vormt daarmee de kern van een Zero Trust-strategie. Vertrouwen wordt niet automatisch gegeven, maar continu gevalideerd.

---

## Waarom iedere organisatie Conditional Access nodig heeft

Cyberaanvallen richten zich tegenwoordig vrijwel altijd op identiteiten.

Aanvallers proberen:

* Wachtwoorden te stelen
* MFA te omzeilen
* Legacy protocollen te misbruiken
* Gestolen sessies te gebruiken
* Toegang te krijgen via onbeheerde apparaten

Zonder Conditional Access ontbreekt een cruciale beveiligingslaag tussen een gecompromitteerd account en bedrijfsdata.

Met goed ingerichte policies kun je:

✅ MFA afdwingen

✅ Legacy Authentication blokkeren

✅ Toegang beperken tot beheerde apparaten

✅ Risicovolle aanmeldingen blokkeren

✅ Administratieve accounts extra beschermen

✅ Gastgebruikers afzonderlijk beheren

---

## Het probleem met veel Conditional Access-implementaties

Veel omgevingen beginnen met een paar eenvoudige policies:

* MFA voor admins
* MFA voor gebruikers
* Legacy auth blokkeren

Na verloop van tijd worden uitzonderingen toegevoegd, nieuwe applicaties geïntroduceerd en aanvullende beveiligingsmaatregelen geactiveerd.

Het resultaat:

* Overlappende policies
* Onduidelijke uitzonderingen
* Moeilijk beheer
* Verhoogde kans op fouten

Vooral grotere organisaties lopen hier snel tegenaan.

---

## Een gestructureerde aanpak: Conditional Access Baseline

Een van de beste community-projecten die ik ben tegengekomen is:

[ConditionalAccessBaseline op GitHub](https://github.com/j0eyv/ConditionalAccessBaseline?utm_source=chatgpt.com)

Deze baseline is gebaseerd op het Microsoft Conditional Access Framework en biedt een praktische verzameling van bewezen Conditional Access-policies die direct als uitgangspunt kunnen dienen. De baseline maakt gebruik van persona's zoals Global, Admins, Internals en Guests, waardoor policies logisch en beheersbaar blijven.

---

## Waarom ik fan ben van deze aanpak

Wat deze baseline sterk maakt, is dat er niet wordt gedacht in losse policies maar in beveiligingslagen.

### Global Policies

Deze beschermen de gehele tenant.

Voorbeelden:

* MFA voor kritieke scenario's
* Legacy Authentication blokkeren
* Registratie van security-informatie beschermen
* Landen blokkeren waar geen bedrijfsactiviteiten plaatsvinden

---

### Admin Policies

Administratieve accounts vormen het grootste risico binnen iedere omgeving.

De baseline bevat onder andere:

* MFA-verplichting voor admins
* Phishing-resistente MFA
* Continuous Access Evaluation
* Extra sessiebeperkingen

Hiermee wordt het risico op privilege escalation aanzienlijk verkleind.

---

### Internal Users

Voor reguliere medewerkers worden aanvullende controles toegepast:

* MFA
* Device Compliance
* Blokkeren van onbekende platformen
* Risicogebaseerde blokkades
* Sessiebeheer

Hierdoor ontstaat een goede balans tussen gebruiksgemak en beveiliging.

---

### Guest Users

Gastaccounts worden vaak vergeten terwijl ze toegang hebben tot bedrijfsdata.

De baseline bevat specifieke policies voor:

* MFA voor gasten
* Beperkte applicatietoegang
* Sessiebeheer
* Extra beveiligingsmaatregelen

Een belangrijk onderdeel van iedere Zero Trust-strategie.

---

## Vergeet je Break Glass-accounts niet

Een van de belangrijkste aanbevelingen binnen iedere Conditional Access-strategie:

> Zorg altijd voor minimaal een Break Glass-account.

Dit account moet uitgesloten worden van Conditional Access-policies zodat je toegang behoudt wanneer een foutieve policy of storing reguliere beheerders buitensluit.

Ook de genoemde baseline benadrukt expliciet het gebruik van een aparte uitsluitingsgroep voor noodaccounts.

---

## Mijn advies

Wanneer je vandaag een nieuwe Microsoft 365-omgeving zou bouwen, zou ik niet beginnen met losse Conditional Access-policies.

Ik zou beginnen met:

1. Een duidelijke persona-structuur
2. Een Break Glass-strategie
3. MFA voor alle gebruikers
4. Legacy Authentication blokkeren
5. Device Compliance inzetten
6. Administratieve accounts extra beschermen
7. Policies eerst testen in Report-only modus

Van daaruit kun je stapsgewijs uitbreiden zonder dat je tenant verandert in een onbeheerbare verzameling uitzonderingen.

---

## Conclusie

Conditional Access is uitgegroeid tot één van de belangrijkste beveiligingscomponenten binnen Microsoft 365. Het beschermt niet alleen accounts, maar vormt de basis van een moderne Zero Trust-architectuur.

Door gebruik te maken van een gestructureerde baseline zoals de ConditionalAccessBaseline van j0eyv hoef je niet vanaf nul te beginnen en profiteer je van een bewezen aanpak die aansluit bij Microsoft Best Practices.

Beveiliging draait niet om zoveel mogelijk policies.

Het draait om de juiste policies, op de juiste plek, voor de juiste gebruikers.

**RootNotes – terug naar de kern van IT.**
