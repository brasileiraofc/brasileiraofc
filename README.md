# 🇧🇷 Brasileirão - Plateforme Interactive du Football Brésilien

Une application web interactive et moderne conçue pour faire découvrir l'univers passionnant des clubs et des légendes du football brésilien aux jeunes de **9 à 15 ans**.

---

## 🎨 Présentation Générale
**Brasileirão** offre une interface lumineuse, dynamique et hautement optimisée pour plonger dans l'histoire, la culture et l'effervescence du football brésilien. L'expérience est entièrement bilingue (Français et Portugais de façon fluide) et propose des fonctionnalités d'engagement ludiques (Quiz, Jeux, Votes, Assistant Virtuel).

---

## 🚀 Fonctionnalités Clés

### 🛡️ 1. Découverte des Clubs de Légende (`Home`)
- Exploration visuelle des équipes historiques du Brésil (Fiche technique, ville, stade principal et description).
- Filtre de recherche instantané pour trouver ses clubs favoris en un clin d'œil.

### 🌟 2. Panthéon des Légendes (`Legends`)
- Fiches biographiques détaillées des joueurs brésiliens légendaires (Pelé, Zico, Ronaldo, Ronaldinho, Neymar, Vinícius Jr, Reinaldo, etc.).
- Galerie dynamique animée affichant leurs postes de prédilection, leurs clubs clés et leurs palmarès majeurs.

### 🏟️ 3. Tour des Stades (`Stadiums`)
- Exploration immersive des arènes et stades mythiques du Brésil (Maracanã, Allianz Parque, Morumbi, Mineirão, Ligga Arena, Rua Javari, Couto Pereira, etc.).
- Informations clés sur leur capacité, leur architecture, leur histoire locale et anecdotes cultes.

### 🗳️ 4. Système de Vote Interactif (`Voting`)
- Zone d'expression où l'utilisateur vote pour élire son club de cœur.
- Visualisation interactive des parts de votes via des graphiques ou jauges fluides.
- Fonctionnalité intuitive d'annulation ou de modification du vote par simple clic.

### 🎮 5. Mini-Jeu interactif : Le Face-à-Face (`Game`)
- Un mini-jeu de tir de penalty immersif et dynamique.
- **Mécanique** : Une jauge de visée mobile simule la trajectoire. Le gardien de but ajuste ses plongeons en fonction du niveau de score du joueur (Difficulté progressive !).
- **Messages phares** : "GOOOOOL !!!", "DEFESAÇA !" (superbe arrêt), ou encore "FORA !" (à côté) pour une immersion authentique.

### 💬 6. L'Assistant IA : Brazuca (`Chat`)
- Un chatbot virtuel intelligent, incarné par **Brazuca**, l'expert en foot brésilien qui adore échanger avec les jeunes.
- Entièrement sécurisé et bridé pour rester pédagogue, amical et recentrer avec humour l'échange sur le football brésilien si l'utilisateur s'égare.

---

## 🛠️ Stack Technique

- **Framework Front-End** : React 19 (avec hooks modernes et gestion d'état fluide)
- **Outil de Build & Serveur de Dev** : Vite + TypeScript (typisage fort pour tout l'écosystème du projet)
- **Moteur d'Animations** : `motion/react` (micro-transitions, glissements de cartes et animations de tirs fluides)
- **Design & Styles** : Tailwind CSS v4 (design responsive, haut de gamme, gérant nativement un mode sombre et lumineux)
- **Bibliothèque d'Icônes** : Lucide React
- **Moteur IA** : SDK `@google/genai` (modèle Gemini pour les réponses rapides et engageantes de Brazuca)

---

## ⚙️ Installation & Lancement local

### Prérequis
- **Node.js** (version 18 ou supérieure recommandée)
- Un gestionnaire de dépendances comme **npm**

### Instructions de démarrage rapide

1. **Installer les dépendances** :
   ```bash
   npm install
   ```

2. **Démarrer le serveur de développement** (le serveur démarrera sur le port `3000`) :
   ```bash
   npm run dev
   ```

3. **Compiler pour la production** :
   ```bash
   npm run build
   ```

4. **Lancer un audit typage & syntaxe** :
   ```bash
   npm run lint
   ```

---

## 💡 Philosophie de Design
- **Desktop-First Precision & Mobile Adaptability** : Conçu pour s'ajuster impeccablement sur écran d'ordinateur ou sur mobiles et tablettes pour les enfants en déplacement.
- **Visuel Dessin & Énergique** : Un style de logo épuré intégrant un ballon dessiné à la main orné d'un **B** central majuscule, monté sur un cercle vert éclatant symbolisant l'énergie brésilienne.
