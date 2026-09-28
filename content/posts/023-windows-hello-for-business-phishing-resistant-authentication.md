+++
title = "Windows Hello for Business: van wachtwoord naar phishing-resistant authentication"
date = 2026-10-02
description = "Ontdek hoe Windows Hello for Business wachtwoorden vervangt door phishing-resistant authentication met PIN, biometrie, TPM en Microsoft Entra ID, en hoe je WHfB implementeert met Microsoft Intune."
tags = ["windows-hello-for-business", "passwordless", "phishing-resistant", "entra-id", "intune", "conditional-access", "authentication-strengths", "zero-trust", "security"]
categories = ["Security"]
+++

## Het wachtwoord heeft zijn beste tijd gehad

{{< sideimage src="/images/wachtwoord.png" alt="wachtwoord" align="right" width="260px" >}}

We gebruiken wachtwoorden al tientallen jaren.

En eigenlijk weten we al net zo lang dat ze een probleem vormen.

Een wachtwoord kan worden:

- Geraden
- Hergebruikt
- Gelekt
- Gedeeld
- Gestolen
- Ingevoerd op een phishingwebsite

Multi-Factor Authentication heeft dat probleem aanzienlijk kleiner gemaakt.

Maar zoals ik in mijn artikel over **Microsoft Entra Authentication Strengths** al beschreef, is niet iedere vorm van MFA even sterk.

Een wachtwoord gecombineerd met een SMS-code is bijvoorbeeld nog steeds afhankelijk van een wachtwoord en biedt niet dezelfde bescherming als een phishing-resistente authenticatiemethode.

Daarom moeten we uiteindelijk verder kijken dan:

> Hoe beschermen we het wachtwoord beter?

De interessantere vraag is:

> Waarom gebruiken we het wachtwoord überhaupt nog?

Voor Windows-apparaten heeft Microsoft daar al jaren een antwoord op:

**Windows Hello for Business.**

---

## Wat is Windows Hello for Business?

Windows Hello for Business, vaak afgekort tot WHfB, is Microsoft's passwordless authenticatieoplossing voor Windows.

In plaats van een traditioneel wachtwoord meldt een gebruiker zich aan met bijvoorbeeld:

- Een PIN
- Gezichtsherkenning
- Een vingerafdruk

Op het eerste gezicht klinkt dat misschien alsof we het wachtwoord simpelweg vervangen door een PIN.

Maar technisch gebeurt er iets heel anders.

Windows Hello for Business maakt gebruik van cryptografische sleutels die aan de identiteit van de gebruiker en het apparaat zijn gekoppeld.

Conceptueel werkt traditionele authenticatie ongeveer als volgt:

```text
Gebruiker
↓
Wachtwoord
↓
Identity Provider
↓
Wachtwoord wordt gevalideerd
↓
Toegang
```

Met Windows Hello for Business ziet dat model er anders uit:

```text
Gebruiker
↓
PIN / biometrie
↓
Lokale verificatie
↓
Private key op apparaat
↓
Cryptografische authenticatie
↓
Toegang
```

Het wachtwoord hoeft daarbij niet voor iedere aanmelding opnieuw gebruikt te worden.

Dat is een fundamenteel ander beveiligingsmodel.

---

## Maar een PIN is toch gewoon een kort wachtwoord?

Dit is waarschijnlijk de meest voorkomende misvatting over Windows Hello for Business.

Een gebruiker heeft bijvoorbeeld een wachtwoord van twintig tekens.

Vervolgens configureert hij een PIN van zes cijfers.

Dan lijkt het logisch om te denken:

> We hebben een sterk wachtwoord vervangen door zes cijfers. Hoe kan dat veiliger zijn?

Omdat die PIN niet hetzelfde werkt als een wachtwoord.

Een traditioneel wachtwoord kan in principe vanaf ieder apparaat worden gebruikt.

Wanneer een aanvaller jouw Microsoft 365-wachtwoord buitmaakt, kan hij proberen dat vanaf zijn eigen systeem te gebruiken.

Een Windows Hello PIN is gekoppeld aan het apparaat waarop Windows Hello is geregistreerd.

De PIN wordt gebruikt om lokaal de cryptografische sleutel te ontgrendelen die voor authenticatie wordt gebruikt.

Conceptueel:

```text
Wachtwoord gestolen
↓
Aanvaller gebruikt wachtwoord op eigen apparaat
↓
Aanmeldpoging mogelijk
```

Bij Windows Hello for Business:

```text
Windows Hello PIN gestolen
↓
Aanvaller probeert PIN op ander apparaat
↓
Geen bijbehorende private key
↓
PIN is daar niet bruikbaar
```

Om alleen een buitgemaakte PIN te kunnen misbruiken, ontbreekt de aanvaller dus nog steeds het bijbehorende apparaat en de beschermde sleutel.

Dat verandert het risicomodel aanzienlijk.

---

## De rol van de TPM

Een belangrijke bouwsteen van Windows Hello for Business is de **Trusted Platform Module**, oftewel TPM.

De TPM is hardware die cryptografische functies kan uitvoeren en sleutelmateriaal kan beschermen.

Bij Windows Hello for Business kan de private key hierdoor hardwarematig worden beschermd.

Die sleutel hoeft het apparaat niet te verlaten.

Dat is belangrijk.

Bij traditionele authenticatie beschermen we vaak een gedeeld geheim:

```text
Wachtwoord
```

Bij Windows Hello for Business werken we met asymmetrische cryptografie:

```text
Private key
+
Public key
```

De private key blijft beschermd op het apparaat.

De public key wordt gebruikt om de authenticatie cryptografisch te verifiëren.

Daardoor is er tijdens de normale Windows Hello-authenticatie geen traditioneel wachtwoord dat kan worden onderschept.

---

## PIN en biometrie zijn lokale gestures

Een ander belangrijk concept binnen Windows Hello for Business is dat de PIN of biometrische verificatie niet zelf de credential richting Microsoft vormt.

Ze worden gebruikt om lokaal toegang te krijgen tot de beveiligde sleutel.

Bijvoorbeeld:

```text
Gezichtsherkenning
↓
Gebruiker lokaal geverifieerd
↓
Private key beschikbaar voor authenticatie
↓
Cryptografische challenge
↓
Microsoft Entra ID
```

Hetzelfde geldt voor:

```text
Vingerafdruk
```

of:

```text
PIN
```

Je gezicht, vingerafdruk of PIN wordt dus niet simpelweg als vervanger van je wachtwoord naar Microsoft gestuurd.

Dat onderscheid is essentieel om te begrijpen waarom Windows Hello for Business zoveel sterker kan zijn dan traditionele wachtwoordauthenticatie.

---

## Waarom Windows Hello for Business phishing-resistant is

Phishing werkt traditioneel goed omdat een gebruiker een geheim kent dat hij ergens kan invoeren.

Bijvoorbeeld:

```text
Gebruikersnaam
+
Wachtwoord
```

Een aanvaller maakt vervolgens een overtuigende nepwebsite en vraagt de gebruiker deze gegevens in te voeren.

Wanneer de gebruiker dat doet, heeft de aanvaller het wachtwoord.

Windows Hello for Business werkt anders.

De private key die voor authenticatie wordt gebruikt, blijft aan het apparaat gebonden.

De gebruiker kan die private key niet per ongeluk in een phishingformulier typen.

Dat maakt Windows Hello for Business geschikt als **phishing-resistant authentication method** binnen Microsoft Entra.

---

## Van MFA naar phishing-resistant authentication

Traditioneel zien we bijvoorbeeld:

```text
Wachtwoord
↓
Microsoft Authenticator
↓
MFA voltooid
```

Dat is aanzienlijk veiliger dan alleen een wachtwoord.

Maar met Windows Hello for Business kunnen we naar:

```text
Windows Hello for Business
↓
Device-bound cryptographic authentication
↓
Phishing-resistant authentication
```

Vervolgens kunnen we met Conditional Access bepalen dat gevoelige toegang uitsluitend met zo'n sterke methode mag plaatsvinden.

---

## Windows Hello for Business en Authentication Strengths

Microsoft Entra bevat een ingebouwde Authentication Strength:

**Phishing-resistant MFA**

Windows Hello for Business kan aan deze strength voldoen.

Dat betekent dat we bijvoorbeeld voor administrators een Conditional Access Policy kunnen ontwerpen:

```text
Directory roles
↓
Global Administrator
Privileged Role Administrator
Conditional Access Administrator
Security Administrator
Intune Administrator
↓
Target resources
↓
Require authentication strength
↓
Phishing-resistant MFA
```

Een beheerder die Windows Hello for Business gebruikt kan daarmee aan de authenticatie-eis voldoen.

Dat is precies waarom WHfB zo interessant wordt in combinatie met Conditional Access.

Het is niet alleen een gemakkelijkere manier om Windows te ontgrendelen.

Het wordt onderdeel van je identity security-model.

---

## Windows Hello for Business versus Windows Hello

De naamgeving zorgt nog weleens voor verwarring.

Windows Hello wordt ook gebruikt voor lokale consumentenfunctionaliteit.

Windows Hello for Business gaat verder.

WHfB is ontworpen voor organisaties en koppelt sterke authenticatie aan de zakelijke identiteit.

Denk daarbij aan integratie met:

- Microsoft Entra ID
- Active Directory
- Microsoft Intune
- Conditional Access
- Authentication Strengths

Voor een zakelijke securityarchitectuur hebben we het daarom specifiek over **Windows Hello for Business**.

---

## Windows Hello for Business en Microsoft Entra ID

Binnen een moderne cloudomgeving is de combinatie met Microsoft Entra ID bijzonder interessant.

Bijvoorbeeld:

```text
Windows 11
↓
Microsoft Entra joined
↓
Intune managed
↓
Windows Hello for Business
↓
Conditional Access
↓
Microsoft 365 / Azure / SaaS
```

Hiermee ontstaat een identity- en device-model waarbij verschillende beveiligingslagen elkaar versterken.

De identiteit is sterk geauthenticeerd.

Het apparaat wordt beheerd.

Compliance kan worden gecontroleerd.

En Conditional Access bepaalt uiteindelijk of toegang wordt verleend.

---

## Windows Hello for Business en Intune

Binnen een moderne werkplek zou ik Windows Hello for Business centraal beheren via Microsoft Intune.

Daarmee kun je beleid configureren rondom onder andere:

- Gebruik van Windows Hello for Business
- PIN-vereisten
- Biometrie
- Security keys
- Anti-spoofing waar ondersteund

Het grote voordeel is consistentie.

Je bent niet afhankelijk van gebruikers die zelf besluiten of ze Windows Hello wel of niet activeren.

Je maakt het onderdeel van je standaard werkplekconfiguratie.

---

## Hoe ik Windows Hello for Business zou implementeren

Ik zou WHfB niet als losse feature behandelen.

Het hoort onderdeel te zijn van een bredere passwordless strategie.

Mijn implementatie zou daarom gefaseerd verlopen.

### Fase 1 – Bepaal de doelarchitectuur

Begin met de vraag hoe je endpoints zijn ingericht.

Bijvoorbeeld:

```text
Windows 11
+
Microsoft Entra joined
+
Microsoft Intune
+
TPM 2.0
```

Voor nieuwe cloud-native omgevingen is dat wat mij betreft het meest logische uitgangspunt.

Heb je nog Hybrid Microsoft Entra joined apparaten en on-premises resources, dan moet je ook goed kijken naar het trustmodel dat je gebruikt.

---

### Fase 2 – Controleer de hardware

Controleer of apparaten geschikt zijn.

Denk onder andere aan:

- TPM
- Ondersteunde Windows-versie
- Biometrische hardware wanneer je biometrie wilt gebruiken

Voor een moderne zakelijke Windows-omgeving zou ik TPM 2.0 als uitgangspunt nemen.

Niet alleen vanwege Windows Hello for Business, maar ook vanwege andere beveiligingsfuncties binnen Windows 11.

---

### Fase 3 – Start met een pilot

Zoals altijd:

Niet direct de hele organisatie.

Maak eerst een pilotgroep.

Bijvoorbeeld:

```text
IT
↓
Security
↓
Key users
↓
Brede uitrol
```

Test daarbij verschillende scenario's.

Niet alleen:

> Kan de gebruiker aanmelden?

Maar ook:

- Wat gebeurt er bij een nieuw apparaat?
- Wat gebeurt er wanneer de PIN wordt vergeten?
- Hoe werkt recovery?
- Werken on-premises resources?
- Werkt Remote Desktop?
- Werken legacy-applicaties?
- Hoe gedragen Conditional Access Policies zich?

Dat zijn de situaties waar je tijdens een echte uitrol tegenaan loopt.

---

### Fase 4 – Configureer Windows Hello for Business via Intune

Vervolgens configureer je het beleid centraal.

Mijn uitgangspunt daarbij is:

```text
Windows Hello for Business
↓
Enabled
```

Daarna bepaal je welke aanvullende instellingen nodig zijn voor jouw organisatie.

Ik zou PIN-complexiteit niet onnodig extreem maken.

Het beveiligingsmodel van Windows Hello for Business is immers niet gebaseerd op het idee dat de PIN hetzelfde is als een traditioneel wachtwoord.

Gebruik beleid dus om risico's te beperken, niet om gebruikers alsnog een zestiencijferige PIN te laten onthouden.

---

### Fase 5 – Gebruikers laten registreren

Na het inschakelen van WHfB doorloopt de gebruiker provisioning.

Conceptueel:

```text
Gebruiker meldt aan
↓
Identiteit wordt geverifieerd
↓
Windows Hello for Business provisioning
↓
PIN / biometrie instellen
↓
Sleutelpaar wordt aangemaakt
↓
Public key wordt geregistreerd
↓
Windows Hello beschikbaar
```

Vanaf dat moment kan Windows Hello for Business worden gebruikt voor authenticatie.

---

### Fase 6 – Conditional Access toevoegen

Wanneer voldoende gebruikers succesvol zijn gemigreerd, kunnen we de volgende stap zetten.

Authentication Strengths.

Begin bijvoorbeeld met beheerders.

```text
Admin
↓
Conditional Access
↓
Require phishing-resistant MFA
↓
Windows Hello for Business
```

Hierdoor wordt WHfB niet alleen aangeboden.

Je gaat sterke authenticatie daadwerkelijk afdwingen waar dat nodig is.

---

## Cloud Kerberos Trust

In omgevingen waar Microsoft Entra ID en on-premises Active Directory naast elkaar bestaan, komt vaak een belangrijke vraag naar voren:

> Kunnen gebruikers met Windows Hello for Business nog bij on-premises resources?

Daarvoor is **Cloud Kerberos Trust** een belangrijke optie.

Cloud Kerberos Trust vereenvoudigt veel hybride WHfB-scenario's en maakt het mogelijk om vanuit een moderne authenticatiearchitectuur toegang te krijgen tot Kerberos-resources.

Denk bijvoorbeeld aan:

- Fileshares
- Printers
- Bepaalde on-premises applicaties

Voor veel moderne hybride implementaties zou ik Cloud Kerberos Trust als eerste model onderzoeken voordat ik complexere legacy trustmodellen inzet.

---

## Windows Hello for Business en passkeys

Windows Hello for Business en passkeys lijken op elkaar omdat beide moderne cryptografische authenticatie gebruiken.

Toch zijn het niet simpelweg twee namen voor hetzelfde product.

Windows Hello for Business is sterk gekoppeld aan de Windows-werkplek en zakelijke identiteit.

Passkeys kunnen breder worden gebruikt en zijn interessant voor authenticatie over verschillende platformen en scenario's.

Voor mij zijn ze daarom geen concurrenten.

Ze vullen elkaar aan.

Een gebruiker kan bijvoorbeeld:

```text
Windows laptop
↓
Windows Hello for Business
```

gebruiken en daarnaast:

```text
Andere ondersteunde scenario's
↓
Passkey
```

Voor administrators kan daar nog een fysieke FIDO2 security key naast bestaan als aanvullende sterke methode.

---

## Windows Hello for Business en PIM

Voor beheerders wordt de combinatie bijzonder interessant.

Stel dat een beheerder normaal geen actieve Global Administrator-rechten heeft.

Dan ontstaat:

```text
Beheerder
↓
Windows Hello for Business
↓
Microsoft Entra ID
↓
PIM
↓
Global Administrator activeren
↓
Conditional Access
↓
Phishing-resistant authentication
↓
Tijdelijke beheerrechten
```

Daarmee combineren we:

- Passwordless
- Phishing-resistant authentication
- Just-In-Time beheer
- Least Privilege
- Conditional Access

Dat is een veel sterkere architectuur dan:

```text
Permanent Global Administrator
+
Wachtwoord
+
SMS
```

---

## Windows Hello for Business en Device Compliance

Authenticatie vertelt ons wie de gebruiker is.

Maar binnen Zero Trust willen we ook weten vanaf welk apparaat de gebruiker werkt.

Daarom combineer ik WHfB graag met Device Compliance.

Bijvoorbeeld:

```text
Gebruiker
↓
Windows Hello for Business
↓
Phishing-resistant authentication
+
Compliant device
↓
Conditional Access
↓
Toegang
```

Daarmee controleren we zowel:

**Identity**

als:

**Device**

Dat is veel krachtiger dan authenticatie als losstaand beveiligingsmechanisme.

---

## Van SMS naar Windows Hello en passkeys

In het vorige artikel heb ik beschreven waarom ik SMS en telefonische verificatie uiteindelijk wil uitfaseren.

Windows Hello for Business speelt daarin een belangrijke rol.

Voor Windows-gebruikers kan het migratiepad bijvoorbeeld worden:

```text
Vandaag

Wachtwoord
+
SMS
```

naar:

```text
Transitie

Wachtwoord
+
Microsoft Authenticator
+
Windows Hello for Business
```

naar uiteindelijk:

```text
Doel

Windows Hello for Business
+
Passkeys waar passend
+
Phishing-resistant Authentication Strengths
```

SMS en telefonische verificatie worden daarmee geen onderdeel van de gewenste eindarchitectuur.

---

## Maar verdwijnt het wachtwoord dan echt?

Dit is een belangrijke nuance.

Windows Hello for Business gebruiken betekent niet automatisch dat het wachtwoord van het account technisch niet meer bestaat.

Het doel is in eerste instantie:

**Het wachtwoord niet meer gebruiken voor dagelijkse authenticatie.**

Dat verschil is belangrijk.

Hoe minder vaak gebruikers hun wachtwoord gebruiken, hoe kleiner de kans dat ze het:

- Invoeren op een phishingpagina
- Hergebruiken
- Delen
- Per ongeluk prijsgeven

Passwordless is daarom niet alleen een technische configuratie.

Het is ook een verandering in gebruikersgedrag.

---

## Welke licenties heb je nodig?

Voor Windows Hello for Business zelf heb je niet automatisch een aparte premium WHfB-licentie nodig.

De exacte licentiebehoefte hangt vooral af van de manier waarop je de omgeving eromheen bouwt.

Wil je WHfB centraal configureren via Microsoft Intune, dan heb je een passende **Microsoft Intune-licentie** nodig.

Wil je vervolgens Conditional Access en Authentication Strengths gebruiken om phishing-resistant authentication af te dwingen, dan heb je minimaal:

**Microsoft Entra ID P1**

nodig voor de betreffende Conditional Access-functionaliteit.

In veel organisaties komen deze onderdelen bijvoorbeeld samen in licentiepakketten zoals:

- Microsoft 365 Business Premium
- Microsoft 365 E3
- Microsoft 365 E5

Afhankelijk van aanvullende functionaliteit kunnen andere licenties nodig zijn.

Gebruik je bijvoorbeeld PIM voor je administrators, dan moet je ook rekening houden met de licentievereisten van Microsoft Entra Privileged Identity Management.

Mijn advies is daarom om niet alleen naar de licentie voor Windows Hello te kijken.

Kijk naar de complete architectuur:

```text
Windows Hello for Business
+
Intune
+
Conditional Access
+
Authentication Strengths
+
PIM waar nodig
```

---

## Mijn aanbevolen configuratie

Voor een nieuwe cloud-native Windows-omgeving zou mijn uitgangspunt ongeveer zijn:

```text
Windows 11
↓
Microsoft Entra joined
↓
Microsoft Intune managed
↓
TPM 2.0
↓
Windows Hello for Business
↓
Device Compliance
↓
Conditional Access
↓
Authentication Strengths
```

Voor administrators:

```text
Windows Hello for Business
↓
PIM
↓
Phishing-resistant MFA
↓
Compliant managed device
↓
Administrative access
```

En daarnaast:

- Passkeys waar passend
- FIDO2 security keys voor geselecteerde privileged accounts
- Een goed ontworpen Break Glass-procedure
- SMS en telefonische verificatie gecontroleerd uitfaseren

---

## Veelgemaakte fouten

### Denken dat de PIN een wachtwoord is

Dat is misschien wel de grootste misvatting rond Windows Hello for Business.

De PIN is lokaal aan het apparaat gekoppeld en wordt gebruikt om cryptografische credentials te ontsluiten.

### Alleen naar gebruikersgemak kijken

Windows Hello is prettig voor gebruikers.

Maar WHfB is veel meer dan snel aanmelden met gezichtsherkenning.

Het is een securitytechnologie.

### Geen TPM gebruiken waar dat wel kan

Voor zakelijke apparaten zou ik hardware-backed key protection als uitgangspunt nemen.

### Direct iedereen migreren

Begin met een pilot.

Test vooral de uitzonderingen en legacy-applicaties.

### Hybride resources vergeten

Controleer vooraf hoe gebruikers toegang krijgen tot on-premises resources en onderzoek Cloud Kerberos Trust waar dat passend is.

### Windows Hello inschakelen maar Conditional Access vergeten

Dan heb je een sterke methode beschikbaar gemaakt, maar nog niet bepaald wanneer die sterke methode verplicht is.

Authentication Strengths vullen dat gat.

### SMS beschikbaar houden als permanente fallback

Wanneer gebruikers altijd kunnen terugvallen op zwakkere methoden, bereik je niet overal het beveiligingsniveau dat je met phishing-resistant authentication nastreeft.

Bepaal daarom bewust welke recovery- en fallbackmethoden je toestaat.

---

## Mijn visie

Windows Hello for Business wordt naar mijn mening nog te vaak gezien als:

> Die functie waarmee je met je gezicht kunt inloggen op Windows.

Daarmee doen we de technologie tekort.

Windows Hello for Business is een fundamentele verandering in de manier waarop we authenticatie ontwerpen.

We gaan van:

```text
Wat weet de gebruiker?
```

naar een combinatie van:

```text
Welk apparaat bezit de gebruiker?
+
Kan de gebruiker zichzelf lokaal verifiëren?
+
Kan het apparaat cryptografisch bewijzen wie de gebruiker is?
```

En juist dat maakt WHfB zo interessant binnen Zero Trust.

Voor mij vormt Windows Hello for Business daarom samen met passkeys, FIDO2, Authentication Strengths en Conditional Access de basis van een moderne passwordless strategie.

Niet omdat wachtwoorden morgen volledig verdwenen zijn.

Maar omdat we ervoor kunnen zorgen dat gebruikers ze steeds minder nodig hebben.

En iedere keer dat een gebruiker zijn wachtwoord niet hoeft in te voeren, is er ook één mogelijkheid minder om dat wachtwoord via phishing buit te maken.

---

## Conclusie

Windows Hello for Business is veel meer dan een handige manier om met een PIN, vingerafdruk of gezichtsherkenning aan te melden.

Het vervangt dagelijkse wachtwoordauthenticatie door een model gebaseerd op cryptografische sleutels, device binding en lokale gebruikersverificatie.

Daardoor vormt WHfB een belangrijke bouwsteen voor passwordless én phishing-resistant authentication binnen Microsoft-omgevingen.

In combinatie met Microsoft Intune, Conditional Access, Authentication Strengths, Device Compliance en PIM ontstaat een securityarchitectuur waarin het wachtwoord steeds minder belangrijk wordt.

Het doel is wat mij betreft dan ook niet:

**Een sterker wachtwoord bedenken.**

Het doel is:

**Ervoor zorgen dat we het wachtwoord uiteindelijk niet meer nodig hebben.**

**RootNotes – terug naar de kern van IT.**