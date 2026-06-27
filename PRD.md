# 📄 Product Requirements Document (PRD)

## Projet : Platforme Interactive Brasileirão

---

## 📅 Document Metadata
- **Version** : 1.0.0
- **Statut** : Approuvé
- **Public Cible** : Jeunes de 9 à 15 ans, amateurs ou curieux de football
- **Langues Supportées** : Français (FR), Portugais (PT-BR)

---

## 1. Vision du Produit & Motivation

Le football est un vecteur d'éducation, de partage et de culture. Le Brésil est le pays aux 5 coupes du monde et détient l'un des patrimoines sportifs les plus denses. 
Cependant, la plupart des plateformes sur le sujet s'adressent à des adultes (statistiques complexes, paris sportifs, design surchargé). 

**Brasileirão** est une plateforme ludo-éducative interactive conçue spécifiquement pour sensibiliser les **9-15 ans** à l'histoire, aux clubs mythiques et aux géants du football brésilien. Elle fusionne informations vérifiées, jeux de réflexe (tirs de pénaltys), quiz dynamiques et intelligence artificielle pédagogique (Brazuca) pour assurer une captation maximale de l'attention sans surcharger l'utilisateur.

---

## 2. Objectifs Majeurs & Indicateurs de Succès (KPI)

### Objectifs :
- **Éduquer de manière ludique** : Offrir un accès simplifié à l'histoire des clubs brésiliens traditionnels (dont certains moins exposés à l'international) et aux grandes légendes historiques.
- **Offrir de la réactivité visuelle** : Maintenir un niveau de performance irréprochable avec des micro-interactions soignées.
- **Stimuler la rétention** : Grâce à un jeu de football au but mobile, un quiz captivant et un assistant intelligent interactif.

### Métriques d'Évaluation :
- **Taux de complétion du Quiz** : Pourcentage d'utilisateurs complétant les sessions de quiz.
- **Engagement dans le mini-jej** : Nombre moyen de tentatives de tirs de pénaltys par session utilisateur.
- **Intéractivité Chat** : Nombre de questions posées à l'assistant d'IA *Brazuca*.

---

## 3. Personas Utilisateurs

### 🧑‍💻 Lucas (11 ans - Jeune passionné de foot)
- **Profil** : Joue en club, regarde les résumés de matchs sur YouTube, adore Neymar et Vinícius Jr.
- **Besoins** : Découvrir l'histoire des légendes qu'il a moins connues (Pelé, Ronaldo, Garrincha) de façon directe, sans lire de trop longs blocs de texte.
- **Attentes vis-à-vis de l'app** : Pouvoir défier ses connaissances dans un quiz et s'amuser sur un mini-jeu amusant de pénaltys entre deux lectures.

### 👩‍🎓 Sofia (14 ans - Curieuse de culture étrangère)
- **Profil** : Apprend le portugais au collège, aime la géographie mondiale et s'intéresse à l'ambiance des stades et aux villes brésiliennes.
- **Besoins** : Naviguer sur une carte ou un répertoire des stades, explorer les villes brésiliennes (Rio, São Paulo, Recife, Curitiba, Porto Alegre, Chapecó).
- **Attentes vis-à-vis de l'app** : Traduction française claire et précise, explications détaillées sur l'histoire des clubs et possibilité de chatter avec un assistant brésilien amusant.

---

## 4. Spécifications des Fonctionnalités (Core Features)

### Section A : Navigation & Choix du Thème
- **Barre de Navigation Sticky** : Permet de basculer instantanément entre :
  - `Home` (Clubs Brésiliens)
  - `Legends` (Joueurs Mythiques)
  - `Stadiums` (Visite des Stades)
  - `Voting` (Élection de son Club favori)
  - `Game` (Mini-jeu de Penalty)
- **Toggle Light / Dark Mode** : Adaptation visuelle en un clic (symbole Soleil/Lune).
- **Sélecteur de Langue** : Passage dynamique entre Français (FR) et Portugais (PT-BR) modifiant tous les textes, questions du quiz et instructions de l'IA.

### Section B : Exploration des Clubs & Légendes
- **Recherche Instantanée** : Barre de recherche réactive filtrant dynamiquement les cartes de clubs ou de joueurs en fonction du texte entré.
- **Cartes Interactives** :
  - *Clubs* : Affiche le logo du club, la ville natale de l'équipe, le nom du stade officiel et une description ludique de l'institution.
  - *Légendes* : Affiche le nom, la photo du joueur, son poste, ses réalisations/palmarès et une biographie riche en anecdotes.

### Section C : Visite Interactive des Stades
- Répertoire interactif mettant en lumière les infrastructures mythiques du football brésilien.
- Inclut des fiches explicatives détaillées pour chaque stade, de la célèbre *Ligga Arena* (et son toit rétractable moderne) au romantique stade de la *Rua Javari* (renommé pour son ambiance rétro et ses cannoli à la mi-temps).

### Section D : Système de Vote Populiste & Interactif
- Les utilisateurs choisissent leur club préféré dans une interface esthétique.
- **Capacité de désinscription de vote** : En recliquant sur le club voté, la sélection se retire proprement pour préserver l'autonomie et l'amusement des enfants.

### Section E : Simulateur de Penalty (Mini-Jeu)
- **Système de jauge mobile** : Un curseur oscille de gauche à droite au-dessus du but. Le joueur appuie sur "Booter/Tirer" au moment opportun.
- **Complexité Adaptive** : À chaque penalty réussi, la jauge s'accélère. Le gardien IA ajuste sa réactivité (réduisant son taux d'erreur de plongée) en fonction du score accumulé.
- **Feedback sonore-visuel** : Affichage d'alertes instantanées ("GOOOOOL !!!", "DEFESAÇA !" ou "FORA !") appuyées par des animations fluides.

### Section F : AI Copilot Chatbot - "Brazuca"
- Un assistant virtuel intégré propulsé par le SDK de pointe `@google/genai` (modèle `gemini-3-flash-preview`).
- **Comportement personnalisé** : Le système injecte des instructions renforcées imposant à l'IA d'agir sous l'identité de Brazuca, d'utiliser des emojis sportifs sympathiques, de s'adapter spécifiquement à une tranche d'âge de 9-15 ans et de ramener courtoisement tout sujet de discussion vers le ballon rond brésilien.

---

## 5. Architecture Logicielle & Modèle de Données

```
+-------------------------------------------------------------+
|                         VITE + REACT                        |
+-------------------------------------------------------------+
         |                       |                     |
         v                       v                     v
+----------------+      +-----------------+   +---------------+
| UI Components  |      | Static Data     |   | Generative AI |
| (Home, Game,   |      | (teams.ts,      |   | (Brazuca Chat |
|  Stadiums,     |      |  legends.ts)    |   |  @google/genai|
|  Quiz, Voting) |      +-----------------+   |  Gemini API)  |
+----------------+                            +---------------+
```

### Structuration des Fichiers Clés :
- `/src/App.tsx` : Point névralgique de l'application orchestrant la navigation globale, le dictionnaire de questions de quiz, de votes locaux et de l’assistant IA.
- `/src/components/FootballGame.tsx` : Component autonome encapsulant la physique simplifiée du mini-jeu (visée oscillatoire et animation du gardien).
- `/src/components/StadiumsPage.tsx` : Composant dédié à la navigation documentaire et historique à travers les stades.
- `/src/utils/translations.ts` : Hub de dictionnaire d'internationalisation bilingue garantissant des traductions exactes sans latence.
- `/public/` : Emplacement d'hébergement des logos de clubs, photos de joueurs de légende et du tout nouveau logo stylisé : un ballon de football dessiné doté d'un **B** capital inséré sur un rond vert brésilien.

---

## 6. Exigences d'Interface, Ergonomie & Visuel
- **Colorimétrie** : Palette vibrante reposant sur le célèbre vert brésilien (`#009739`), le jaune or (`#FEDD00`) et le bleu de la Seleção, contrastée élégamment avec un canvas moderne blanc doux/charbon selon le mode sélectionné.
- **Cible ergonomique tactile** : Les boutons d'action d'enregistrement de vote ou d'activation de tirs sont dimensionnés de façon large (minimum 44x44px) pour s'adapter aux écrans tactiles mobiles des adolescents.
- **Identité Graphique** : Un bouton de brand central abritant la mascotte texturisée sous forme de dessin au stylet.

---

## 7. Jalons de l'Étape 2 & Évolutions Futures (Out of Scope v1)
*(Ces fonctionnalités ne sont pas implémentées dans la version actuelle, mais constituent la feuille de route)*
1. **Multijoueur Local en un contre un** : Permettre à deux adolescents de s'affronter au tir au but sur le même appareil (l'un tireur, l'un gardien).
2. **Persistence Firebase Realtime Database** : Synchroniser le classement général des clubs à partir des votes globaux de l'ensemble des utilisateurs de l'application.
3. **Packs Sonores Ambiance Stade** : Intégrer des chants de supporters brésiliens lors des buts inscrits dans le mini-jeu.
