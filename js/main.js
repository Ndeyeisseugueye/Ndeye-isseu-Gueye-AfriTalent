// darkmode

// On récupère l’élément HTML qui a l’id "theme-toggle"
// (par exemple un bouton qui sert à changer le thème)
const themeToggle = document.getElementById("theme-toggle");

// On vérifie dans le localStorage si un thème "dark" a déjà été enregistré
// localStorage = mémoire du navigateur (reste même après fermeture du site)
if (localStorage.getItem("theme") === "dark") {

    // Si le thème enregistré est "dark",
    // on ajoute la classe CSS "dark-mode" au body
    document.body.classList.add("dark-mode");

    // On change le texte du bouton en soleil ☀️ (car on est en mode sombre)
    themeToggle.textContent = "☀️";
}

// On ajoute un événement "click" sur le bouton
themeToggle.addEventListener("click", () => {

    // À chaque clic, on active ou désactive la classe "dark-mode"
    // toggle = ajoute si absent, enlève si présent
    document.body.classList.toggle("dark-mode");

    // Si après le toggle le body contient "dark-mode"
    if (document.body.classList.contains("dark-mode")) {

        // On sauvegarde le choix dans le localStorage
        // pour garder le mode sombre même après recharge de la page
        localStorage.setItem("theme", "dark");

        // On change l’icône du bouton en soleil ☀️ (pour revenir au clair)
        themeToggle.textContent = "☀️";

    } else {

        // Sinon on est en mode clair
        localStorage.setItem("theme", "light");

        // On met la lune 🌙 pour indiquer le mode sombre disponible
        themeToggle.textContent = "🌙";
    }
});


// bouton retour en haut

// On récupère le bouton HTML qui a l’id "backToTop"
// (bouton qui sert à revenir en haut de la page)
const backToTopBtn = document.getElementById('backToTop');


// On écoute l’événement de défilement (scroll) de la fenêtre
window.addEventListener('scroll', function () {

    // window.scrollY = position actuelle du scroll en pixels (vertical)
    // Si l’utilisateur a descendu de plus de 300px
    if (window.scrollY > 300) {

        // On affiche le bouton (mode flex pour le centrer ou styliser)
        backToTopBtn.style.display = 'flex';

    } else {

        // Sinon on cache le bouton
        backToTopBtn.style.display = 'none';
    }
});


// On vérifie que le bouton existe bien dans la page
// (évite les erreurs si l’élément est absent)
if (backToTopBtn) {

    // On ajoute un événement au clic sur le bouton
    backToTopBtn.addEventListener('click', function () {

        // Quand on clique, on fait remonter la page en haut
        window.scrollTo({

            // position verticale 0 = tout en haut de la page
            top: 0,

            // animation douce (scroll fluide)
            behavior: 'smooth'
        });
    });
}
// Animation des sections

// On sélectionne toutes les sections qui ont la classe "fade-in"
// querySelectorAll retourne une liste de tous ces éléments
const sections = document.querySelectorAll(".fade-in");


// On crée un IntersectionObserver
// Il permet de détecter quand un élément entre dans la zone visible de l’écran
const sectionObserver = new IntersectionObserver((entries) => {

    // entries = liste des éléments observés qui changent d’état (visible ou non)
    entries.forEach(entry => {

        // entry.isIntersecting = true si l’élément est visible dans le viewport
        if (entry.isIntersecting) {

            // On ajoute la classe "visible" à l’élément
            // Cette classe est souvent utilisée pour déclencher une animation CSS
            entry.target.classList.add("visible");
        }

    });

// Options de l’IntersectionObserver
}, {
    // threshold = pourcentage de visibilité nécessaire pour déclencher l’animation
    // 0.15 = 15% de l’élément doit être visible
    threshold: 0.15
});


// On parcourt toutes les sections trouvées
sections.forEach(section => {

    // On dit à l’observer de surveiller chaque section
    sectionObserver.observe(section);
});


// Compteurs animés

// On sélectionne tous les éléments qui ont la classe "counter"
// Ce sont généralement des chiffres animés (ex: statistiques)
const counters = document.querySelectorAll(".counter");


// On crée un IntersectionObserver pour détecter quand les compteurs apparaissent à l’écran
const counterObserver = new IntersectionObserver((entries, observer) => {

    // entries = liste des éléments observés qui changent d’état (visible / non visible)
    entries.forEach(entry => {

        // Si l’élément est visible dans la zone de l’écran
        if (entry.isIntersecting) {

            // On récupère l’élément compteur
            const counter = entry.target;

            // On récupère la valeur cible depuis l’attribut HTML data-target
            // Exemple : <div class="counter" data-target="1000"></div>
            const target = +counter.dataset.target; 
            // "+" convertit la chaîne en nombre

            // Valeur actuelle du compteur (on démarre à 0)
            let current = 0;

            // On définit la vitesse d’incrémentation
            // Plus le nombre est grand, plus ça monte vite
            const increment = target / 100;

            // Fonction qui met à jour le compteur progressivement
            const updateCounter = () => {

                // Tant qu’on n’a pas atteint la valeur cible
                if (current < target) {

                    // On augmente la valeur actuelle
                    current += increment;

                    // On affiche la valeur arrondie vers le haut
                    counter.textContent = Math.ceil(current);

                    // requestAnimationFrame permet une animation fluide (optimisée navigateur)
                    requestAnimationFrame(updateCounter);

                } else {

                    // Quand on atteint la cible exacte
                    counter.textContent = target.toLocaleString();
                    // toLocaleString ajoute des séparateurs (ex: 1,000 ou 1 000 selon langue)
                }
            };

            // On lance l’animation du compteur
            updateCounter();

            // On arrête d’observer cet élément
            // (pour éviter que l’animation recommence en scrollant)
            observer.unobserve(counter);
        }

    });

// Options de l’IntersectionObserver
}, {
    // Déclenche quand 50% de l’élément est visible
    threshold: 0.5
});


// On applique l’observer à tous les compteurs
counters.forEach(counter => {
    counterObserver.observe(counter);
});
// navbar qui change au scrool
// On sélectionne l’élément qui a la classe "navbar"
// C’est généralement la barre de navigation en haut du site
const navbar = document.querySelector(".navbar");


// On écoute le scroll de la page (quand l’utilisateur descend ou remonte)
window.addEventListener("scroll", () => {

    // window.scrollY = position du scroll en pixels (vertical)
    // Si l’utilisateur a scrollé plus de 50px vers le bas
    if (window.scrollY > 50) {

        // On ajoute la classe "scrolled" à la navbar
        // Cette classe sert généralement à changer le style (fond, ombre, taille…)
        navbar.classList.add("scrolled");

    } else {

        // Si on est en haut de la page (moins de 50px)
        // On enlève la classe "scrolled"
        navbar.classList.remove("scrolled");
    }

});


// filtrage
// On récupère le <select> (liste déroulante) qui permet de choisir une catégorie
const categorySelect = document.getElementById('categorySelect');

// On sélectionne tous les éléments qui représentent les freelances
// (chaque profil a la classe "profil")
const freelances = document.querySelectorAll('.profil');


// On écoute le changement de valeur dans le select
categorySelect.addEventListener('change', function() {

    // this.value = valeur actuellement sélectionnée dans le <select>
    const selectedCategory = this.value;

    // On parcourt tous les profils de freelances
    freelances.forEach(freelance => {

        // On récupère la catégorie de chaque freelance
        // stockée dans un attribut HTML personnalisé : data-cat
        const freelanceCategory = freelance.getAttribute('data-cat');

        // On vérifie si :
        // - la catégorie sélectionnée est "all" (tout afficher)
        // OU
        // - la catégorie du freelance correspond à celle sélectionnée
        if (selectedCategory === 'all' || freelanceCategory === selectedCategory) {

            // On affiche le profil
            // block = affichage simple (peut être flex ou grid selon ton design)
            freelance.style.display = 'block';

        } else {

            // Sinon on cache le profil
            freelance.style.display = 'none';
        }
    });
});


// validation formulaire
// On récupère le formulaire de contact grâce à son id "contactForm"
const form = document.getElementById("contactForm");
// On écoute l’événement "submit" (quand l’utilisateur clique sur envoyer)
form.addEventListener("submit", function (e) {

    // On empêche le rechargement automatique de la page
    // sinon les messages d’erreur disparaissent
    e.preventDefault();

    // Variable qui permet de savoir si le formulaire est valide
    let valide = true;
    // On récupère tous les champs du formulaire
    const prenom = document.getElementById("prenom");
    const nom = document.getElementById("nom");
    const email = document.getElementById("email");
    const demande = document.getElementById("demande");
    const message = document.getElementById("message");
    // On réinitialise tous les messages d’erreur et de succès
    document.getElementById("prenomError").textContent = "";
    document.getElementById("nomError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("demandeError").textContent = "";
    document.getElementById("messageError").textContent = "";
    document.getElementById("successMessage").textContent = "";
    // Vérification du prénom
    if (prenom.value.trim() === "") {
        document.getElementById("prenomError").textContent =
            "Le prénom est obligatoire.";
        valide = false;
    }

    // Vérification du nom
    if (nom.value.trim() === "") {
        document.getElementById("nomError").textContent =
            "Le nom est obligatoire.";
        valide = false;
    }

    // Expression régulière pour vérifier un email valide
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Vérification de l’email
    if (!regex.test(email.value.trim())) {
        document.getElementById("emailError").textContent =
            "Adresse e-mail invalide.";
        valide = false;
    }

    // Vérification du type de demande (select)
    if (demande.value === "") {
        document.getElementById("demandeError").textContent =
            "Sélectionnez un type de demande.";
        valide = false;
    }

    // Vérification du message (minimum 20 caractères)
    if (message.value.trim().length < 20) {
        document.getElementById("messageError").textContent =
            "Le message doit contenir au moins 20 caractères.";
        valide = false;
    }

    // Si toutes les vérifications sont bonnes
    if (valide) {

        // On affiche un message de succès
        document.getElementById("successMessage").textContent =
            "Message envoyé avec succès !";

        // On vide le formulaire
        form.reset();
    }
});
