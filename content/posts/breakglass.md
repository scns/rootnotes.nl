+++
title = "Waarom iedere Microsoft 365-omgeving een Break Glass-account nodig heeft"
date = 2026-06-04
description = "Waarom een Break Glass-account essentieel is voor Microsoft 365 en Entra ID. Ontdek wanneer je een noodaccount nodig hebt, welke beveiligingseisen gelden en hoe je voorkomt dat beheerders zichzelf buitensluiten."
tags = ["Microsoft365", "Entra", "Breakglass", "giscus", "opensource"]
categories = ["Waarom", "Microsoft365", "Entra"]
+++

## Waarom iedere Microsoft 365-omgeving een Break Glass-account nodig heeft

### Terug naar de kern van IT

Wanneer organisaties hun beveiliging verbeteren met Multi-Factor Authentication (MFA), Conditional Access, Privileged Identity Management (PIM) en Zero Trust-principes, ontstaat er een nieuwe uitdaging: wat gebeurt er als beheerders zichzelf buitensluiten?

Het antwoord is simpel: zonder een goed ingericht Break Glass-account kan een beveiligingsmaatregel veranderen in een bedrijfsrisico.

## Wat is een Break Glass-account?

Een Break Glass-account is een speciaal noodaccount dat uitsluitend wordt gebruikt wanneer reguliere beheerdersaccounts geen toegang meer hebben tot de Microsoft 365- of Entra ID-omgeving.

De naam komt uit de fysieke wereld. Denk aan een noodhamer achter glas in een trein of gebouw. Je gebruikt hem nooit tijdens normale werkzaamheden, maar wanneer zich een noodsituatie voordoet kan hij het verschil maken tussen snel herstel en langdurige uitval.

## Waarom is een Break Glass-account noodzakelijk?

Moderne cloudomgevingen vertrouwen steeds meer op geautomatiseerde beveiligingsmaatregelen. Hoewel deze maatregelen essentieel zijn, kunnen fouten of onverwachte situaties ervoor zorgen dat niemand meer beheerrechten heeft.

Voorbeelden:

* Een foutieve Conditional Access-policy blokkeert alle beheerders.
* Een MFA-provider ondervindt een storing.
* Een synchronisatieprobleem verwijdert beheerdersrechten.
* Een account wordt per ongeluk uitgeschakeld.
* Een cyberaanval richt zich specifiek op beheerdersaccounts.
* Federatie- of Single Sign-On-diensten vallen uit.

In dergelijke situaties biedt een Break Glass-account directe toegang om de oorzaak te onderzoeken en herstelwerkzaamheden uit te voeren.

## Hoeveel Break Glass-accounts zijn nodig?

Microsoft adviseert minimaal twee noodaccounts.

Waarom twee?

Een enkel account vormt een Single Point of Failure. Wanneer één account wordt geblokkeerd, verwijderd of gecompromitteerd, blijft er altijd een tweede account beschikbaar.

Een veelgebruikte naamgeving is bijvoorbeeld:

* [bg-admin01@tenant.onmicrosoft.com](mailto:bg-admin01@tenant.onmicrosoft.com)
* [bg-admin02@tenant.onmicrosoft.com](mailto:bg-admin02@tenant.onmicrosoft.com)

Gebruik bij voorkeur geen persoonsgebonden accounts.

## Aan welke eisen moet een Break Glass-account voldoen?

### 1. Permanente Global Administrator-rechten

Een Break Glass-account moet beschikken over de rol Global Administrator.

Deze rechten mogen niet afhankelijk zijn van:

* PIM-activatie
* Goedkeuringsworkflows
* Tijdelijke roltoewijzingen

Het account moet direct inzetbaar zijn tijdens een noodsituatie.

### 2. Uitsluiten van Conditional Access

Het belangrijkste kenmerk van een Break Glass-account is dat het niet wordt beïnvloed door Conditional Access-beleid.

Maak daarom een aparte uitsluitingsgroep voor noodaccounts en configureer deze expliciet in alle relevante Conditional Access-policies.

Controleer dit regelmatig. Nieuwe policies worden vaak uitgerold zonder rekening te houden met bestaande noodaccounts.

### 3. Gebruik een zeer sterk wachtwoord

Het wachtwoord moet:

* Uniek zijn
* Minimaal 20 tekens bevatten
* Willekeurig gegenereerd zijn
* Niet elders worden gebruikt

Bewaar het wachtwoord in een beveiligde password vault of een fysieke kluis volgens de procedures van de organisatie.

### 4. Geen dagelijkse werkzaamheden

Een Break Glass-account is geen beheeraccount.

Gebruik het account nooit voor:

* Dagelijks beheer
* Troubleshooting
* Testwerkzaamheden
* Scriptautomatisering

Hoe vaker het account wordt gebruikt, hoe groter de kans op compromittering.

### 5. Continue monitoring

Omdat het account vrijwel nooit gebruikt wordt, moet iedere aanmelding direct aandacht krijgen.

Configureer:

* Sign-in logging
* Audit logging
* Waarschuwingen in Microsoft Sentinel
* E-mailmeldingen voor beveiligingsbeheerders

Een login op een Break Glass-account moet altijd onderzocht worden.

### 6. Regelmatig testen

Een noodprocedure die nooit getest wordt, werkt meestal niet wanneer het erop aankomt.

Voer minimaal elk kwartaal een controle uit:

* Werkt het account nog?
* Is het wachtwoord bekend en beschikbaar?
* Zijn de uitsluitingen in Conditional Access correct?
* Zijn de rechten nog aanwezig?
* Worden meldingen correct gegenereerd?

Documenteer iedere test.

## Moet een Break Glass-account MFA gebruiken?

Dit is een veelbesproken onderwerp.

In veel organisaties worden Break Glass-accounts bewust uitgesloten van MFA-verplichtingen. Niet omdat MFA onbelangrijk is, maar omdat het account juist moet functioneren wanneer MFA-diensten of Conditional Access niet beschikbaar zijn.

De beveiliging wordt in dat geval gewaarborgd door:

* Een extreem sterk wachtwoord
* Beperkt gebruik
* Monitoring
* Veilige opslag van credentials

Sommige organisaties kiezen voor phishing-resistente MFA-methoden als extra beveiligingslaag. De keuze hangt af van de risicobereidheid en architectuur van de organisatie.

## Veelgemaakte fouten

Bij audits kom ik regelmatig de volgende situaties tegen:

❌ Slechts één noodaccount aanwezig

❌ Het account valt alsnog onder Conditional Access

❌ MFA vereist terwijl het account bedoeld is voor noodherstel

❌ Wachtwoorden zijn onbekend of verouderd

❌ Geen monitoring op aanmeldingen

❌ Het account wordt gebruikt voor regulier beheer

❌ Geen periodieke controle van de werking

## Conclusie

Een Break Glass-account is geen luxe, maar een essentieel onderdeel van iedere Microsoft 365- en Entra ID-omgeving.

Juist organisaties die veel investeren in beveiliging lopen het risico zichzelf buiten te sluiten door foutieve configuraties of onverwachte storingen. Een goed ingericht noodaccount zorgt ervoor dat er altijd een gecontroleerde manier bestaat om toegang te herstellen.

De beste Break Glass-account is een account dat je nooit nodig hebt. Maar als het moment komt waarop je hem wél nodig hebt, moet hij direct werken.

Dat is precies waar een noodaccount voor bedoeld is.
