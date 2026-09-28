+++
title = "Microsoft Entra Privileged Identity Management (PIM): Just-In-Time beheer in de praktijk"
date = 2026-07-25
description = "Ontdek hoe Microsoft Entra Privileged Identity Management (PIM) tijdelijke beheerrechten mogelijk maakt. Leer alles over Eligible Assignments, Active Assignments, Role Activation, Approvals en Access Reviews binnen een Zero Trust-strategie."
tags = ["pim", "privileged-identity-management", "entra-id", "just-in-time", "zero-trust", "security", "conditional-access"]
categories = ["Security"]
+++

## Van Just-In-Time theorie naar praktijk

{{< sideimage src="/images/pim.png" alt="pim" align="right" width="260px" >}}

In een eerder artikel heb ik uitgelegd waarom permanente beheerrechten steeds moeilijker te verdedigen zijn binnen moderne IT-omgevingen.

Het principe achter Just-In-Time Access is eenvoudig:

> Geef verhoogde rechten alleen wanneer ze daadwerkelijk nodig zijn.

Maar hoe implementeer je dat in de praktijk?

Binnen Microsoft 365 is Microsoft Entra Privileged Identity Management (PIM) de belangrijkste oplossing om dit principe toe te passen.

PIM maakt het mogelijk om beheerrechten tijdelijk beschikbaar te stellen zonder dat gebruikers permanent verhoogde rechten bezitten.

Daardoor wordt het risico op misbruik van privileged accounts aanzienlijk kleiner.

---

## Wat is Microsoft Entra Privileged Identity Management?

Microsoft Entra Privileged Identity Management, kortweg PIM, is een functionaliteit binnen Microsoft Entra ID waarmee organisaties verhoogde rechten kunnen beheren, controleren en tijdelijk toekennen.

In plaats van:

```text
Gebruiker
↓
Permanent Global Administrator
```

werkt PIM als volgt:

```text
Gebruiker
↓
Eligible Administrator
↓
Rol activeren
↓
Tijdelijke toegang
↓
Automatisch verlopen
```

Hierdoor zijn beheerrechten alleen actief wanneer ze daadwerkelijk nodig zijn.

---

## Waarom PIM belangrijk is

Administratoraccounts behoren tot de meest waardevolle doelwitten binnen iedere organisatie.

Aanvallers richten zich specifiek op:

* Global Administrators
* Security Administrators
* Exchange Administrators
* Intune Administrators
* Privileged Accounts

Wanneer een aanvaller een permanent beheerdersaccount weet te compromitteren, kan de impact enorm zijn.

PIM beperkt dit risico door rechten tijdelijk beschikbaar te maken.

Daarmee vormt PIM een belangrijk onderdeel van een moderne Zero Trust-strategie.

---

## Welke licenties zijn nodig?

Een van de meest gestelde vragen.

Voor het gebruik van PIM heb je minimaal nodig:

### Microsoft Entra ID P2

Deze licentie is beschikbaar binnen:

* Microsoft 365 E5
* Microsoft Entra ID P2
* Enterprise Mobility + Security E5
* Microsoft Security E5

Zonder Entra ID P2 is Privileged Identity Management niet beschikbaar.

---

## Eligible Assignments

Het hart van PIM begint bij een belangrijk concept:

### Eligible

Een gebruiker heeft een rol toegewezen gekregen.

Maar deze rol is niet actief.

Bijvoorbeeld:

```text
Maarten
↓
Eligible Global Administrator
```

De gebruiker kan de rol activeren.

Maar beschikt op dit moment nog niet over de rechten.

Dit is de aanbevolen configuratie voor vrijwel alle beheerrollen.

---

## Active Assignments

Naast Eligible Assignments bestaat ook:

### Active Assignment

Hierbij is de rol direct actief.

Bijvoorbeeld:

```text
Maarten
↓
Active Global Administrator
```

De gebruiker beschikt permanent over de rechten.

Hoewel dit technisch mogelijk is, probeer ik Active Assignments zoveel mogelijk te vermijden.

PIM levert namelijk de meeste beveiligingswinst wanneer rollen uitsluitend Eligible worden toegewezen.

---

## Wanneer gebruik je Active Assignments?

Soms zijn er uitzonderingen.

Bijvoorbeeld:

* Break Glass Accounts
* Specifieke serviceaccounts
* Tijdelijke migraties

Maar zelfs dan moet goed worden beoordeeld of permanente rechten daadwerkelijk noodzakelijk zijn.

Mijn uitgangspunt:

> Active alleen wanneer het écht niet anders kan.

---

## Role Activation

Wanneer een gebruiker een rol nodig heeft kan deze worden geactiveerd.

Bijvoorbeeld:

```text
Intune Administrator
↓
Activate
↓
MFA
↓
Toegang verleend
↓
4 uur actief
↓
Automatisch verlopen
```

Dit noemen we:

### PIM Role Activation

Tijdens de activatie kan PIM aanvullende controles uitvoeren.

---

## Multi-Factor Authentication

Vrijwel altijd configureer ik:

```text
Require MFA on Activation
```

Daardoor moet een gebruiker zich opnieuw verifiëren voordat verhoogde rechten beschikbaar worden.

Dit vermindert het risico op misbruik van actieve sessies.

---

## Justification

PIM kan gebruikers verplichten een reden op te geven.

Bijvoorbeeld:

```text
Wijzigen Conditional Access Policy
```

Of:

```text
Probleemoplossing Intune Enrollment
```

Deze informatie wordt opgeslagen in auditlogs.

Daardoor ontstaat meer inzicht in beheeractiviteiten.

---

## Approval Workflows

Voor gevoelige rollen adviseer ik het gebruik van Approvals.

Scenario:

```text
Global Administrator
↓
Activatie aanvragen
↓
Goedkeuring vereist
↓
Security Team keurt goed
↓
Rol actief
```

Daardoor ontstaat een extra controlelaag.

Met name voor Global Administrator-rollen is dit sterk aan te raden.

---

## Approval Chains

Binnen grotere organisaties kunnen meerdere goedkeurders worden ingesteld.

Bijvoorbeeld:

* Security Team
* IT Manager
* Lead Engineer

Hierdoor ontstaat een vier-ogenprincipe.

Een belangrijke maatregel voor gevoelige rollen.

---

## Activatieduur

PIM maakt het mogelijk om per rol een maximale activatieduur te configureren.

Bijvoorbeeld:

### Global Administrator

```text
1 uur
```

### Security Administrator

```text
2 uur
```

### Intune Administrator

```text
4 uur
```

Mijn advies:

Houd de duur zo kort mogelijk.

---

## Access Reviews

Een van de meest onderschatte functies binnen PIM.

Veel organisaties kennen het probleem:

Niemand weet meer waarom bepaalde rechten ooit zijn toegekend.

PIM lost dit op met:

### PIM Access Reviews

Periodiek wordt gecontroleerd:

* Heeft deze gebruiker de rol nog nodig?
* Is de rol nog relevant?
* Kan de toewijzing worden verwijderd?

Daardoor voorkom je zogenaamde:

> **Privilege Creep**

Het langzaam opstapelen van rechten.

---

## Waarom Access Reviews belangrijk zijn

Zonder reviews ontstaan situaties zoals:

```text
Project afgerond in 2024
↓
Beheerrechten nog steeds actief in 2026
```

Dit gebeurt vaker dan organisaties denken.

Regelmatige reviews verminderen dit risico aanzienlijk.

---

## PIM voor Azure Resources

PIM beperkt zich niet tot Entra-rollen.

Ook Azure-resources kunnen worden beschermd.

Bijvoorbeeld:

* Subscription Owners
* Contributors
* Resource Group Administrators

Daardoor kunnen Azure-rechten eveneens tijdelijk worden geactiveerd.

---

## PIM voor Groups

Een relatief nieuwe functionaliteit is:

### PIM for Groups

Hiermee kunnen gebruikers tijdelijk lid worden van groepen.

Bijvoorbeeld:

```text
Intune Admin Group
↓
Activatie
↓
Tijdelijk lid
↓
Automatisch verwijderen
```

Dit biedt veel flexibiliteit binnen grotere omgevingen.

---

## PIM en Conditional Access

PIM wordt nog krachtiger wanneer het gecombineerd wordt met Conditional Access.

Bijvoorbeeld:

Voor activatie vereist:

* MFA
* Compliant Device
* Lage Device Risk
* FIDO2 of Passkey

Pas daarna wordt de rol geactiveerd.

Dit sluit perfect aan op een Zero Trust-strategie.

---

## PIM en Microsoft Defender

Defender for Endpoint levert aanvullende signalen zoals:

* Device Risk
* Compromised Devices
* Suspicious Activity

Deze signalen kunnen worden meegenomen in de voorwaarden voor activatie.

Daardoor ontstaat een extra beveiligingslaag rondom beheerrollen.

---

## PIM en Break Glass Accounts

Een belangrijke uitzondering.

Break Glass Accounts worden doorgaans niet beheerd via PIM.

Waarom?

Omdat deze accounts beschikbaar moeten blijven wanneer:

* PIM niet werkt
* MFA niet beschikbaar is
* Conditional Access faalt

Microsoft adviseert daarom nog steeds minimaal twee Emergency Access Accounts.

---

## Mijn aanbevolen configuratie

Wanneer ik een nieuwe Microsoft 365-omgeving implementeer gebruik ik doorgaans:

### Eligible Assignments ()

Voor alle beheerrollen.

---

### Active Assignments ()

Alleen voor uitzonderingen.

---

### MFA bij activatie

Altijd verplicht.

---

### Justification ()

Altijd verplicht.

---

### Approval Workflows ()

Voor:

* Global Administrator
* Privileged Role Administrator

---

### Access Reviews ()

Iedere 90 dagen.

---

### Activatieduur ()

Zo kort mogelijk.

---

## Veelgemaakte fouten

### Te veel Active Assignments

Hierdoor verdwijnt de beveiligingswinst van PIM.

---

### Geen MFA tijdens activatie

Verhoogde rechten zonder extra verificatie blijven risicovol.

---

### Geen Approval Workflows gebruiken

Met name voor gevoelige rollen.

---

### Geen Access Reviews uitvoeren

Privilege Creep ontstaat sneller dan veel organisaties denken.

---

### Break Glass Accounts in PIM plaatsen

Dit ondermijnt het doel van noodtoegang.

---

## Mijn visie

Van alle securityfunctionaliteiten binnen Microsoft Entra ID behoort PIM tot de oplossingen met de hoogste impact.

Waarom?

Omdat het niet alleen draait om authenticatie.

Het draait om rechten.

En uiteindelijk zijn het juist die rechten waar aanvallers naar op zoek zijn.

Door beheerrechten tijdelijk beschikbaar te maken ontstaat een veel veiliger model dan traditionele permanente administratorrollen ooit kunnen bieden.

---

## Conclusie

Microsoft Entra Privileged Identity Management brengt het principe van Just-In-Time Access naar de praktijk.

Door gebruik te maken van Eligible Assignments, Role Activation, Approval Workflows en Access Reviews kunnen organisaties beheerrechten veel veiliger beheren.

In combinatie met Conditional Access, Microsoft Defender, Device Compliance en Passwordless Authentication vormt PIM een essentieel onderdeel van iedere moderne Zero Trust-architectuur.

Want uiteindelijk geldt:

**Administratorrechten zijn het veiligst wanneer ze alleen bestaan op het moment dat ze nodig zijn.**

**RootNotes – terug naar de kern van IT.**
