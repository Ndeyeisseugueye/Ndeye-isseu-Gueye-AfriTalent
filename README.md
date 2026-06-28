# AfriTalent 
Projet fil rouge — Plateforme de mise en relation entre freelances africains et 
clients. 
Auteur : Ndeye isseu Gueye 
Promotion : L1 Web — ISI
## 🔗 Liens du Projet

*   **Site en ligne (GitHub Pages) :** [ Cliquez ici pour visiter le site](https://[Ndeyeisseugueye].github.io/[Ndeye-isseu-Gueye-AfriTalent]/)
*   **Présentation du Projet (PowerPoint) :** [Télécharger le fichier PPTX](docs/[Ndye_isseu_Gueye_Presentation.pptx])


##  Description du Projet

Le marché du freelance tech en Afrique connaît une croissance explosive. **AfriTalent** est une plateforme vitrine fictive de mise en relation entre freelances tech (développeurs, designers, créateurs de contenu) et entreprises. 

Le site a été conçu pour répondre aux tendances web de 2026 tout en respectant une accessibilité stricte et une navigation fluide sur 5 pages HTML interconnectées.

### Fonctionnalités principales implémentées :
*   **Bento Grid Modulaire :** Mise en page asymétrique et moderne pour la section *"Comment ça marche"* et la section *"Chiffres clés"*.
*   **Filtrage Dynamique (Vanilla JS) :** Tri en temps réel des 9 profils de freelances sans rechargement de page.
*   **Système Dark/Light Mode :** Bascule adaptative mémorisée dans le `localStorage`.
*   **Animations au Défilement :** Compteurs statistiques animés (0 à valeur cible) et apparitions en fondu (*fade-in*) via `IntersectionObserver`.
*   **Validation Client Rigoureuse :** Formulaire de contact sécurisé par Regex, longueurs minimales et retours visuels précis.


 Technologies Utilisées & Ressources

*   **HTML5 sémantique :** Structure rigoureuse (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`).
*   **CSS3 Avancé :** Définition de plus de 6 variables globales (`:root`), Grid, Flexbox et transitions fluides au survol.
*   **Bootstrap 5 (via CDN) :** Utilisation de la grille responsive, Navbar, Cards, Carrousel (Témoignages), Accordéon (FAQ) et fenêtres Modales.
*   **JavaScript (Vanilla ES6+) :** Manipulation exclusive du DOM, gestion des événements et API `IntersectionObserver`.
*   **Typographie & Icônes :** Google Fonts (2 polices distinctes) et Bootstrap Icons / Font Awesome.


###  Menu de Navigation Dynamique & Responsive

*   **Structure Bootstrap 5 :** Utilisation de `navbar-expand` pour basculer automatiquement d'un menu horizontal sur desktop à un menu hamburger épuré sur mobile. Elle regroupe les 6 liens obligatoires (*Accueil, Freelances, Tarifs, À propos, Contact*) et un bouton CTA proéminent.
*   **Comportement JavaScript dynamique (Effet Scroll) :** La navbar est fixée en haut de l'écran (`sticky-top` / `fixed-top`). Un script JavaScript écoute l'événement de défilement (`window.onscroll`) pour appliquer un effet de rétrécissement (*shrink*), modifier son opacité et ajouter une ombre portée dès que l'utilisateur descend dans la page, améliorant ainsi la lisibilité.

###  Gestion Globale du Mode Ombre / Mode Sombre (Dark Mode)

*   **Variables CSS (`:root`) :** La charte graphique utilise des variables CSS (`--bg-color`, `--text-color`, `--card-bg`, etc.) qui se réorganisent dynamiquement.
*   **Bascule Native & Persistance :** Le changement s'effectue en JavaScript Vanilla en ajoutant ou supprimant un attribut ou une classe (ex: `data-theme="dark"`) sur la balise `<body>`. Le choix de l'utilisateur est instantanément sauvegardé dans le **`localStorage`**, ce qui permet de conserver le mode choisi (sombre ou clair) lors de la navigation entre les 5 pages du site.

##  Description Détaillée des Pages

Le site se compose de 5 pages HTML sémantiques interconnectées par une navigation cohérente :

###  Page d'Accueil (`index.html`)

*   **Section Hero :** Un titre principal `<h1>` à forte identité (Google Fonts), deux boutons CTA ciblant les freelances et les recruteurs, et une section de statistiques animées (compteurs JS s'incrémentant de 0 à leur valeur cible au scroll via `IntersectionObserver`).
*   **Section "Comment ça marche" :** Présentation asymétrique en **Bento Grid** (CSS Grid) détaillant les étapes clés du site à l'aide de cartes de tailles modulaires intégrant icônes et descriptions.
*   **Section "Catégories de services" :** Grille mettant en avant au moins 6 spécialités tech (Dev, UI/UX, Data & IA, etc.) avec des effets de survol CSS avancés (hover : ombres et transformations).
*   **Section Témoignages :** Un carrousel Bootstrap interactif affichant les avis des utilisateurs avec avatars, rôles et notes étoilées.
*   **CTA & Footer :** Un bandeau d'engagement coloré et un footer structuré sur 4 colonnes avec icônes sociales et copyright dynamique géré en JavaScript.

###  page Freelances (`freelances.html`)

*   **Barre de Filtres Intelligente :** Un système de filtrage par catégorie réalisé en **JavaScript Vanilla** (utilisation de boutons ou d'un `<select>`) qui permet d'afficher ou masquer instantanément les profils correspondants sans aucun rechargement de page
*   **Grille de Profils :** Un catalogue d'au moins 9 profils fictifs présentés sous forme de cartes Bootstrap (incluant photo, spécialité, bio, tarif horaire, note et lien vers le profil)
*   **Structure Responsive :** Configuration rigoureuse de la grille s'adaptant à tous les écrans : 3 colonnes sur ordinateur (desktop), 2 sur tablette et 1 colonne sur mobile.

###  Page Tarif (`tarifs.html`)

*   **Grille Tarifaire :** Présentation comparative de 3 offres (Gratuit, Pro, Entreprise) sous forme de cartes. L'offre "Pro" recommandée est mise en valeur graphiquement (badge "Populaire", bordure distincte, dimensions légèrement supérieures).
*   **FAQ (Foire Aux Questions) :** Intégration d'un composant d'accordéon Bootstrap regroupant au minimum 5 questions/réponses clés sur le fonctionnement de la plateforme pour optimiser l'espace et l'expérience utilisateur.

###  page À Propos (`about.html`)

*   **Notre Histoire :** Une section mêlant textes immersifs et illustrations sur les origines d'AfriTalent.
*   **L'Équipe :** Cartes Bootstrap présentant au moins 4 membres fictifs de l'équipe avec photos, fonctions et hyperliens vers leurs réseaux sociaux.
*   **Nos Valeurs :** Une mise en valeur graphique de 4 piliers majeurs (*Innovation, Accessibilité, Communauté, Excellence*) associés à des icônes.
*   **Chiffres Clés :** Une seconde structure asymétrique en **Bento Grid** gérant des compteurs JavaScript autonomes qui s'activent au défilement.

###  page Contact (`contact.html`)

*   **Validation JavaScript Obligatoire :** Script de contrôle natif empêchant la soumission si les conditions ne sont pas requises (vérification de tous les champs, validation du format email par expression régulière (Regex), message d'au moins 20 caractères). Il gère l'affichage dynamique de messages d'erreur et d'un bandeau de succès stylisé[cite: 1].
*   **Informations annexes & Carte :** Bloc de coordonnées fictives (téléphone, adresse, email) disposé à côté du formulaire, complété par l'intégration d'une carte interactive `iframe` Google Maps.


##  Arborescence du Projet

Le projet respecte scrupuleusement la structure de fichiers exigée :

NOM-Prenom-AfriTalent/
├── index.html              # Page d'accueil (Hero, Bento Grid, Témoignages, CTA)
├── freelances.html         # Catalogue et filtres de 9 profils freelances
├── tarifs.html             # Grille tarifaire (3 plans) et FAQ en Accordéon
├── about.html              # Notre histoire, Valeurs, Équipe et Chiffres clés Bento
├── contact.html            # Formulaire validé avec iframe Google Maps
├── css/
│   └── style.css           # Feuille de style principale (Variables, Reset, Media Queries)
├── js/
│   └── main.js             # Logique applicative JavaScript Vanilla
├── images/
│   └── [visuels...]       # Logotypes, illustrations et avatars des freelances
├── docs/
│   ├── screenshot.png      # Capture d'écran requise pour la documentation
│   └── [NOM_Prenom_Presentation.pptx] # Support de soutenance orale (10 à 15 diapos)
├── .gitignore              # Fichiers et dossiers à exclure du versioning
└── README.md               # Présentation professionnelle du projet (ce fichier)
