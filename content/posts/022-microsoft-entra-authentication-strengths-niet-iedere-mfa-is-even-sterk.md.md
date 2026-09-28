+++
title = "Microsoft Entra Authentication Strengths: niet iedere MFA is even sterk"
date = 2026-09-28
description = "Niet iedere MFA-methode biedt dezelfde bescherming. Ontdek hoe Microsoft Entra Authentication Strengths phishing-resistente authenticatie afdwingt en hoe je gebruikers migreert van SMS en telefoon naar passkeys."
tags = ["entra-id", "authentication-strengths", "conditional-access", "mfa", "passkeys", "fido2", "passwordless", "zero-trust", "security"]
categories = ["Security"]
+++

## MFA is niet automatisch sterke MFA

{{< sideimage src="/images/mfa.png" alt="mfa" align="right" width="260px" >}}

Multi-Factor Authentication is inmiddels bij veel organisaties de standaard.

En terecht.

Alleen een gebruikersnaam en wachtwoord gebruiken is voor een moderne IT-omgeving simpelweg niet meer voldoende.

De afgelopen jaren hebben we daarom massaal MFA uitgerold.

Gebruikers ontvangen bijvoorbeeld:

* Een SMS-code
* Een telefonische oproep
* Een pushmelding in Microsoft Authenticator
* Een verificatiecode
* Een FIDO2 security key
* Een passkey
* Windows Hello for Business

Op papier hebben al deze gebruikers MFA.

Maar daarmee ontstaat een belangrijke vraag:

> Is iedere vorm van MFA eigenlijk even veilig?

Het antwoord is simpel:

**Nee.**

Er zit een groot verschil tussen aanmelden met een wachtwoord en SMS-code en aanmelden met een phishing-resistente passkey of FIDO2 security key.

Daarom moeten we binnen moderne Microsoft Entra-omgevingen niet meer uitsluitend kijken naar **of** iemand MFA gebruikt.

We moeten ook kijken naar **hoe sterk** die authenticatie daadwerkelijk is.

En precies daarvoor heeft Microsoft Authentication Strengths ontwikkeld.

---

## Het probleem met alleen "Require MFA"

Laten we beginnen met een Conditional Access Policy die in vrijwel iedere Microsoft 365-omgeving voorkomt.

Bijvoorbeeld:

```text
Users
↓
All resources
↓
Grant
↓
Require multifactor authentication
```

Daar is op zichzelf niets mis mee.

Sterker nog: wanneer je nog geen MFA afdwingt, is dit een enorme beveiligingsverbetering.

Maar deze policy zegt voornamelijk:

> Deze gebruiker moet voldoen aan de MFA-eis.

Daarmee heb je nog niet automatisch bepaald dat voor een bepaalde gevoelige resource uitsluitend een phishing-resistente authenticatiemethode mag worden gebruikt.

En dat wordt steeds belangrijker.

Want moeten we dezelfde authenticatie-eisen stellen aan iemand die een Teams-bericht leest als aan een Global Administrator die een Conditional Access Policy wijzigt?

Wat mij betreft niet.

Het risico is anders.

En dus mag de authenticatie-eis ook anders zijn.

---

## Wat zijn Microsoft Entra Authentication Strengths?

Authentication Strengths zijn onderdeel van Microsoft Entra Conditional Access.

Hiermee kun je bepalen welke authenticatiemethoden sterk genoeg zijn voor een bepaalde toegangssituatie.

In plaats van alleen:

```text
Require MFA
```

kunnen we bijvoorbeeld afdwingen:

```text
Require authentication strength
↓
Phishing-resistant MFA
```

Daarmee verandert de vraag.

Niet langer:

> Heeft deze gebruiker MFA uitgevoerd?

Maar:

> Heeft deze gebruiker een authenticatiemethode gebruikt die sterk genoeg is voor hetgeen hij probeert te benaderen?

Dat is een fundamenteel verschil.

---

## Niet iedere MFA-methode is even sterk

MFA is eigenlijk een verzamelnaam.

De onderliggende technologie kan behoorlijk verschillen.

Denk bijvoorbeeld aan:

```text
Wachtwoord + SMS
```

of:

```text
Wachtwoord + telefonische verificatie
```

of:

```text
Passkey
```

Technisch gezien kunnen deze allemaal onderdeel zijn van een MFA-strategie.

Maar het beveiligingsniveau is niet hetzelfde.

SMS en telefonische verificatie zijn bijvoorbeeld niet phishing-resistant.

FIDO2 en geschikte passkeys kunnen dat wel zijn.

Daarom is de volgende stap in identity security niet simpelweg:

**Meer MFA.**

De volgende stap is:

**Sterkere MFA waar het risico daarom vraagt.**

---

## De ingebouwde Authentication Strengths

Microsoft Entra biedt ingebouwde Authentication Strengths waarmee we verschillende beveiligingsniveaus kunnen afdwingen.

De drie belangrijkste zijn:

* Multifactor authentication strength
* Passwordless MFA strength
* Phishing-resistant MFA strength

Iedere strength stelt andere eisen aan de authenticatiemethode.

---

### Multifactor authentication strength

Dit is de breedste ingebouwde Authentication Strength.

Het uitgangspunt is dat de gebruiker voldoet aan de MFA-eis.

Dit is prima voor algemene beveiliging.

Maar voor gevoelige accounts en resources wil ik persoonlijk verder gaan.

---

### Passwordless MFA strength

De volgende stap is Passwordless MFA.

Hiermee verschuiven we van traditionele:

```text
Wachtwoord
+
Tweede factor
```

naar authenticatiemethoden waarbij het wachtwoord steeds minder of helemaal geen rol meer speelt.

Dat levert niet alleen beveiligingsvoordelen op.

Het verbetert vaak ook de gebruikerservaring.

Want wachtwoorden kunnen:

* Worden vergeten
* Worden hergebruikt
* Worden geraden
* Worden gelekt
* Worden ingevoerd op phishingwebsites

Een wachtwoord dat niet meer wordt gebruikt, kan op die manier ook niet meer worden gestolen.

---

### Phishing-resistant MFA strength

De interessantste Authentication Strength voor gevoelige toegang is wat mij betreft:

**Phishing-resistant MFA**

Hierbij moet een gebruiker een authenticatiemethode gebruiken die voldoet aan Microsoft's phishing-resistant eisen.

Denk bijvoorbeeld aan:

* Windows Hello for Business
* FIDO2 security keys
* Geschikte passkeys
* Geschikte vormen van Certificate-Based Authentication

Dit is vooral interessant voor privileged accounts.

Denk aan:

* Global Administrator
* Privileged Role Administrator
* Conditional Access Administrator
* Security Administrator
* Intune Administrator

Juist deze accounts wil je zo sterk mogelijk beschermen.

---

## Waarom traditionele MFA nog steeds kan worden aangevallen

MFA heeft enorm geholpen om accountovernames moeilijker te maken.

Maar aanvallers zijn niet stil blijven zitten.

Moderne phishingtechnieken richten zich niet altijd meer uitsluitend op het wachtwoord.

Denk bijvoorbeeld aan:

* Adversary-in-the-Middle-aanvallen
* Social engineering
* MFA fatigue
* Session hijacking
* Token theft

Een gebruiker kan in bepaalde aanvalsscenario's netjes MFA uitvoeren terwijl een aanvaller probeert toegang tot de sessie te verkrijgen.

Dat betekent niet dat MFA niet werkt.

Het betekent dat we MFA verder moeten ontwikkelen.

En daarom wordt phishing-resistant authentication steeds belangrijker.

---

## SMS en telefonische MFA: tijd om verder te gaan

Daarmee komen we bij twee methoden die nog in veel Microsoft 365-omgevingen worden gebruikt:

* SMS
* Telefonische verificatie

Deze methoden hebben een belangrijke rol gespeeld bij de brede adoptie van MFA.

En laat één ding duidelijk zijn:

**SMS-MFA is nog altijd beter dan helemaal geen MFA.**

Maar binnen een moderne Zero Trust-omgeving zie ik SMS en telefonische verificatie niet meer als het gewenste eindstation.

Ze zijn niet phishing-resistant en zijn bovendien afhankelijk van traditionele telefonie-infrastructuur.

Daarnaast bestaan risico's zoals:

* SIM-swapping
* Social engineering
* Onderscheppen van berichten
* Misbruik van telefoonproviders

Daarom zou ik SMS en telefonische verificatie binnen een moderne Entra-omgeving behandelen als methoden die we gecontroleerd willen uitfaseren.

Mijn uitgangspunt is:

> Gebruikers die nog afhankelijk zijn van SMS of telefonische verificatie migreren we gecontroleerd naar moderne passwordless en phishing-resistente authenticatie.

En daarbij spelen passkeys een belangrijke rol.

---

## Van SMS naar passkeys

Het migratiepad ziet er conceptueel als volgt uit:

```text
SMS / telefoon
↓
Gebruiker identificeren
↓
Passkey beschikbaar maken
↓
Nieuwe methode registreren
↓
Authenticatie testen
↓
Sterkere Authentication Strength afdwingen
↓
SMS / telefoon uitfaseren
```

Het belangrijkste woord hierin is:

**Gecontroleerd.**

Je wilt niet op maandagochtend SMS uitschakelen en vervolgens ontdekken dat honderden gebruikers geen andere methode hebben geregistreerd.

Eerst migreren.

Daarna afdwingen.

En pas daarna legacy-methoden uitfaseren.

---

## Waarom passkeys?

Passkeys maken gebruik van moderne cryptografische authenticatie.

In plaats van een traditioneel geheim dat een gebruiker invoert, wordt gebruikgemaakt van public-key cryptografie.

Conceptueel verschuiven we daarmee van:

```text
Gebruikersnaam
+
Wachtwoord
+
SMS-code
```

naar:

```text
Passkey
↓
Cryptografische authenticatie
↓
Geen traditioneel wachtwoord nodig
```

Een belangrijk voordeel hiervan is dat geschikte passkey-implementaties phishing-resistant kunnen zijn.

De gebruiker heeft dus niet alleen een gebruiksvriendelijkere authenticatiemethode.

We veranderen het beveiligingsmodel zelf.

---

## FIDO2 security keys

Voor beheerders blijven fysieke FIDO2 security keys eveneens bijzonder interessant.

Een beheerder kan bijvoorbeeld beschikken over een hardware security key die nodig is voor gevoelige toegang.

In combinatie met Authentication Strengths kunnen we vervolgens afdwingen dat alleen phishing-resistant authentication wordt geaccepteerd.

Bijvoorbeeld:

```text
Global Administrator
↓
Conditional Access
↓
Require Authentication Strength
↓
Phishing-resistant MFA
↓
FIDO2 / geschikte passkey / Windows Hello for Business
```

Een traditionele SMS-code voldoet dan niet aan de vereiste Authentication Strength.

Precies dat is de kracht van deze functionaliteit.

---

## Windows Hello for Business

Windows Hello for Business past eveneens uitstekend binnen deze strategie.

Gebruikers kunnen zich bijvoorbeeld aanmelden met:

* PIN
* Gezichtsherkenning
* Vingerafdruk

De PIN wordt nog weleens aangezien voor een kort wachtwoord.

Maar Windows Hello for Business werkt fundamenteel anders.

De PIN is gekoppeld aan het specifieke apparaat en helpt cryptografisch beschermde credentials op dat apparaat te ontsluiten.

Een buitgemaakte PIN kan daardoor niet simpelweg vanaf een willekeurige computer worden gebruikt zoals een traditioneel Entra-wachtwoord.

Voor beheerde Windows-apparaten blijft Windows Hello for Business daarom een zeer belangrijke bouwsteen binnen passwordless authentication.

---

## Authentication Methods versus Authentication Strengths

Deze twee begrippen worden regelmatig door elkaar gehaald.

Maar ze hebben een andere functie.

### Authentication Methods

Hiermee bepaal je welke authenticatiemethoden gebruikers mogen registreren en gebruiken.

Bijvoorbeeld:

```text
Microsoft Authenticator
Passkeys
FIDO2
Temporary Access Pass
```

Je kunt dit zien als:

> Welke methoden zijn beschikbaar?

---

### Authentication Strengths

Hiermee bepaal je vervolgens welke van die methoden sterk genoeg zijn voor een specifieke toegangssituatie.

Je kunt dit zien als:

> Welke methode moet voor deze toegang worden gebruikt?

Conceptueel:

```text
Authentication Methods
↓
Wat mag de gebruiker gebruiken?
```

en:

```text
Authentication Strength
↓
Wat moet de gebruiker voor deze toegang gebruiken?
```

Beide onderdelen moeten daarom op elkaar aansluiten.

---

## Authentication Strengths en Conditional Access

De echte kracht ontstaat in Conditional Access.

Stel dat we onze beheerders willen beschermen.

Dan kunnen we bijvoorbeeld een policy ontwerpen voor privileged directory roles.

Conceptueel:

```text
Directory Roles
↓
Global Administrator
Privileged Role Administrator
Conditional Access Administrator
Security Administrator
Intune Administrator
↓
Target resources
↓
Grant
↓
Require Authentication Strength
↓
Phishing-resistant MFA
```

Hiermee is het niet meer voldoende dat een administrator zomaar een willekeurige MFA-methode gebruikt.

De authenticatie moet voldoen aan het door ons vereiste beveiligingsniveau.

---

## Normale gebruiker versus administrator

Authentication Strengths maken het mogelijk om beveiliging beter af te stemmen op risico.

Bijvoorbeeld:

### Reguliere gebruiker

```text
Microsoft 365
↓
MFA / passwordless
```

### Administrator

```text
Admin resource
↓
Conditional Access
↓
Phishing-resistant MFA
↓
Passkey / FIDO2 / Windows Hello for Business
```

We hoeven dus niet iedere gebruiker vanaf dag één exact hetzelfde beveiligingsniveau op te leggen.

We kunnen beginnen waar het risico het grootst is.

En daarna verder uitbouwen.

---

## Authentication Strengths en PIM

Authentication Strengths worden nog interessanter in combinatie met Microsoft Entra Privileged Identity Management.

PIM helpt ons permanente administratorrechten te verminderen.

Een beheerder kan bijvoorbeeld:

```text
Eligible Global Administrator
```

zijn in plaats van:

```text
Permanent Global Administrator
```

Wanneer de beheerder de rol nodig heeft:

```text
Rol activeren
↓
PIM
↓
Tijdelijke beheerrechten
```

Vervolgens kan Conditional Access aanvullende eisen stellen aan de toegang tot gevoelige resources.

Daarmee ontstaat een krachtige combinatie van:

* Least Privilege
* Just-In-Time beheer
* Conditional Access
* Phishing-resistant authentication
* Passwordless authentication

Dat is precies de richting waarin ik moderne beheeraccounts zou ontwerpen.

---

## Temporary Access Pass als migratiehulpmiddel

Een belangrijke vraag bij passwordless migraties is:

> Hoe registreert een gebruiker veilig zijn eerste sterke authenticatiemethode?

Daarvoor kan Temporary Access Pass, oftewel TAP, bijzonder nuttig zijn.

Een Temporary Access Pass is een tijdelijke toegangscode die gebruikt kan worden om gebruikers te helpen bij het registreren van passwordless authenticatiemethoden.

Conceptueel:

```text
Gebruiker
↓
Temporary Access Pass
↓
Aanmelden
↓
Passkey registreren
↓
Passkey gebruiken
↓
TAP verloopt
```

Dat maakt TAP bijzonder interessant bij de migratie van bestaande SMS-gebruikers naar passwordless.

---

## De migratie van SMS naar passkeys

Ik zou deze migratie nooit als één grote wijziging uitvoeren.

Mijn voorkeur gaat uit naar een gefaseerde aanpak.

### Fase 1 – Inventariseren

Begin met inzicht.

Breng in kaart welke authenticatiemethoden momenteel worden gebruikt.

Identificeer gebruikers die afhankelijk zijn van:

* SMS
* Telefonische verificatie
* Microsoft Authenticator
* FIDO2
* Passkeys
* Windows Hello for Business

Je wilt vooral weten welke gebruikers **geen geschikt alternatief** hebben wanneer SMS of telefoon niet langer beschikbaar is.

---

### Fase 2 – Passkeys beschikbaar maken

Configureer passkeys voor een pilotgroep.

Begin bijvoorbeeld met:

* IT
* Security
* Beheerders
* Technisch vaardige gebruikers

Test daarbij niet alleen de normale registratie.

Test ook:

* Nieuw apparaat
* Verloren apparaat
* Vervangen telefoon
* Recovery
* Nieuwe passkey registreren

Een authenticatiestrategie is pas goed wanneer ook de uitzonderingssituaties werken.

---

### Fase 3 – Beheerders eerst

Privileged accounts hebben de hoogste prioriteit.

Migreer daarom eerst rollen zoals:

* Global Administrator
* Privileged Role Administrator
* Conditional Access Administrator
* Security Administrator
* Intune Administrator

Mijn gewenste situatie:

```text
Administrator
↓
PIM
↓
Conditional Access
↓
Phishing-resistant Authentication Strength
↓
Passkey / FIDO2 / Windows Hello for Business
```

SMS en telefonische verificatie horen in dit model niet meer thuis als gewenste methode voor privileged toegang.

---

### Fase 4 – Gebruikers migreren

Daarna kan de bredere gebruikerspopulatie worden gemigreerd.

Communicatie is hierbij belangrijk.

Leg niet alleen uit:

> Je moet een nieuwe inlogmethode instellen.

Leg vooral uit waarom.

Bijvoorbeeld:

* Minder wachtwoorden
* Minder phishingrisico
* Eenvoudiger aanmelden
* Geen SMS-codes meer overtypen

Security werkt beter wanneer gebruikers begrijpen wat er verandert.

---

### Fase 5 – Authentication Strengths afdwingen

Wanneer gebruikers over de juiste methoden beschikken, kun je Conditional Access verder aanscherpen.

Begin bijvoorbeeld met privileged accounts.

Daarna:

* Gevoelige applicaties
* Financiële systemen
* HR-data
* Azure-beheer
* Andere kritieke resources

Pas wanneer je voldoende vertrouwen hebt in de implementatie breid je de scope verder uit.

---

### Fase 6 – SMS en telefoon gecontroleerd uitfaseren

Pas wanneer je hebt vastgesteld dat gebruikers succesvol met de nieuwe methoden kunnen werken, kun je SMS en telefonische verificatie verder uitfaseren binnen je eigen authenticatiestrategie.

Daarmee voorkom je dat legacy-authenticatie jarenlang beschikbaar blijft omdat niemand de laatste stap durft te zetten.

Het doel is duidelijk:

```text
Vandaag
SMS / telefoon / traditionele MFA
```

naar:

```text
Transitie
Authenticator / Windows Hello / passkeys
```

naar uiteindelijk:

```text
Doel
Passwordless
+
Phishing-resistant authentication waar vereist
```

---

## Begin met Report-only

Zoals bij vrijwel iedere Conditional Access-wijziging geldt:

Niet direct blokkeren.

Begin met:

```text
Report-only
```

Controleer vervolgens de Sign-in Logs.

Bekijk:

* Welke gebruikers geraakt worden
* Welke authenticatiemethoden worden gebruikt
* Welke accounts niet aan de strength kunnen voldoen
* Welke uitzonderingen bestaan

Daarna kun je gecontroleerd richting enforcement.

Een Conditional Access Policy die technisch perfect is maar de hele IT-afdeling buitensluit, is geen goede security policy.

---

## Break Glass blijft noodzakelijk

Ook in een volledig passwordless omgeving blijven Emergency Access-accounts belangrijk.

Deze accounts zijn bedoeld voor situaties waarin de normale authenticatieketen niet beschikbaar is.

Bijvoorbeeld:

* Een foutieve Conditional Access Policy
* Problemen met authenticatiemethoden
* Problemen met PIM
* Identity-storingen
* Andere noodsituaties

Behandel Break Glass daarom als een afzonderlijk securityproces.

Monitor deze accounts.

Test ze periodiek.

En gebruik ze niet voor dagelijks beheer.

---

## Welke licenties heb je nodig?

Authentication Strengths worden gebruikt binnen Conditional Access.

Daarom heb je minimaal een licentie nodig waarmee Conditional Access beschikbaar is, zoals:

**Microsoft Entra ID P1**

Entra ID P1 is onder andere opgenomen in verschillende Microsoft-abonnementen, waaronder Microsoft 365 Business Premium en diverse enterprise-abonnementen.

Voor Authentication Strengths zelf hoef je dus niet uitsluitend vanwege deze functionaliteit naar Entra ID P2.

Gebruik je daarnaast geavanceerdere identity-functionaliteit zoals bepaalde risk-based scenario's binnen Identity Protection of Privileged Identity Management, dan kunnen aanvullende licenties zoals Entra ID P2 van toepassing zijn.

Mijn advies is daarom altijd om licenties te bekijken vanuit de volledige securityarchitectuur en niet vanuit één losse Conditional Access Policy.

---

## Mijn aanbevolen doelarchitectuur

Wanneer ik vandaag een nieuwe Entra-omgeving zou ontwerpen, zou ik niet meer beginnen met SMS als gewenste langetermijnoplossing.

Mijn doelarchitectuur zou ongeveer als volgt zijn.

### Reguliere gebruikers

```text
Passkey
of
Windows Hello for Business
```

Waar nodig kan Microsoft Authenticator onderdeel blijven van de migratie- en recoverystrategie.

### Administrators

```text
PIM
↓
Conditional Access
↓
Phishing-resistant MFA
↓
Passkey / FIDO2 / Windows Hello for Business
```

### Nieuwe gebruikers

Passwordless zoveel mogelijk vanaf het begin meenemen in het onboardingproces.

### Bestaande SMS- en telefoongebruikers

Gefaseerd migreren naar passkeys of een andere geschikte moderne authenticatiemethode.

### Break Glass

Apart ontwerpen, streng monitoren en periodiek testen.

---

## Veelgemaakte fouten

### Denken dat MFA het einddoel is

MFA is een belangrijke stap.

Maar moderne identity security gaat verder.

De volgende vraag is welke MFA-methode wordt gebruikt.

---

### SMS als permanente oplossing behandelen

SMS heeft enorm geholpen bij MFA-adoptie.

Maar voor een moderne Zero Trust-strategie wil ik uiteindelijk richting passwordless en phishing-resistant authentication.

---

### SMS uitschakelen voordat gebruikers gemigreerd zijn

Dit veroorzaakt onnodige verstoringen.

Eerst een nieuwe methode registreren.

Dan testen.

Daarna afdwingen.

En pas vervolgens de oude methode uitfaseren.

---

### Iedereen direct phishing-resistant maken

Begin waar het risico het grootst is.

Administrators zijn een logisch startpunt.

Daarna kun je verder uitbreiden.

---

### Authentication Methods en Authentication Strengths verwarren

Authentication Methods bepalen wat beschikbaar is.

Authentication Strengths bepalen wat sterk genoeg is voor een bepaalde toegang.

---

### Geen rekening houden met recovery

Wat gebeurt er wanneer iemand zijn telefoon verliest?

Of zijn security key?

Of een nieuw apparaat krijgt?

Dat moet onderdeel zijn van het ontwerp.

---

### Geen Temporary Access Pass gebruiken

TAP kan een belangrijke rol spelen bij het veilig bootstrappen van passwordless authenticatie.

---

### Break Glass vergeten

Sterke security zonder noodprocedure kan uiteindelijk zelf een beschikbaarheidsrisico worden.

---

## Mijn visie

We hebben jarenlang tegen organisaties gezegd:

**Zet MFA aan.**

Dat advies was goed.

En organisaties die nog geen MFA afdwingen moeten daar wat mij betreft nog steeds direct mee beginnen.

Maar de markt is verder gegaan.

Aanvallers zijn verder gegaan.

En de technologie is verder gegaan.

Daarom is:

```text
Hebben we MFA?
```

niet meer de enige vraag die we moeten stellen.

De volgende vraag is:

```text
Welke MFA gebruiken we?
```

En daarna:

```text
Is deze authenticatiemethode sterk genoeg voor hetgeen we beschermen?
```

SMS en telefonische verificatie waren belangrijke stappen in de ontwikkeling van MFA.

Maar ze hoeven niet het eindstation te zijn.

Met passkeys, FIDO2, Windows Hello for Business, Conditional Access en Authentication Strengths beschikken we inmiddels over de technologie om een volgende stap te zetten.

Van:

**wachtwoord + tweede factor**

naar:

**passwordless**

en voor onze belangrijkste accounts en resources:

**phishing-resistant authentication**.

Dat is voor mij de logische volgende fase van Microsoft Entra security.

---

## Conclusie

Niet iedere MFA-methode biedt hetzelfde beveiligingsniveau.

Microsoft Entra Authentication Strengths geeft ons daarom de mogelijkheid om niet alleen af te dwingen dát een gebruiker MFA uitvoert, maar ook hoe sterk die authenticatie moet zijn.

Voor bestaande omgevingen betekent dat wat mij betreft ook dat we kritisch moeten kijken naar gebruikers die nog afhankelijk zijn van SMS en telefonische verificatie.

Niet door deze methoden morgen zonder waarschuwing uit te schakelen.

Maar door een gecontroleerde migratie uit te voeren.

Van SMS en telefoon.

Naar passkeys, FIDO2 en Windows Hello for Business.

En van traditionele MFA.

Naar passwordless en phishing-resistant authentication.

In combinatie met Conditional Access, PIM, Temporary Access Pass en een goed ontworpen Break Glass-procedure ontstaat daarmee een veel sterkere identity-beveiligingsarchitectuur.

Want uiteindelijk is de vraag niet alleen:

**Heb je MFA?**

De betere vraag is:

**Is je authenticatie sterk genoeg voor hetgeen je probeert te beschermen?**

**RootNotes – terug naar de kern van IT.**
