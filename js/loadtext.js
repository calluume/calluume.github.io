languages = {
                "eng": {"name": "English", "main-colour": "rgb(244, 241, 222)", "accent-colour": "rgb(224, 122, 95)"},
                "fr": {"name": "Français", "main-colour": "rgb(244, 241, 222)", "accent-colour": "rgb(224, 122, 95)"}
            }

webText = {
    "all-pages": {
        "menu-home": {"eng": "About Me", "fr": "Page d'acceuil"},
        "menu-projects": { "eng": "Projects", "fr": "Projets" },
        "menu-contact": { "eng": "Contact", "fr": "Contacter" },
        "menu-publications": { "eng": "Publications", "fr": "Publications"},
        "footer-div": {
            "eng": `<p>
                        Contact me at: <a href="javascript:toggleContactForm()">callumdoneevans@gmail.com</a><br>
                        Last updated: <span id="last-updated"></span>
                    </p>`,
            "fr":  `<p>
                        Me contacter au: <a href="javascript:toggleContactForm()">callumdoneevans@gmail.com</a><br>
                        Dernière mise à jour: <span id="last-updated"></span>
                    </p>`
        },
        "contact-shadow": {
            "eng": `<svg class="contact-close" onclick="javascript:toggleContactForm()" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" overflow="visible" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                        <line x2="20" y2="20" />
                        <line x1="20" y2="20" />
                    </svg>
                    <div class="contact-form-div">
                        <form class="contact-form" id="contact-form">
                            <input type="text" name="subject" id="input-subject" placeholder="Subject">
                            <input type="email" name="email" id="input-email" placeholder="Email">
                            <textarea name="text" id="input-message" placeholder="Message"></textarea>
                            <input type="submit" id="js_send" value="Send Message">
                            <p id="contact-error-msg" class="contact-error-msg">An error occured whilst trying to send your message.<br>Please try again later.</p>
                            <p id="contact-invalid-msg" class="contact-error-msg">Please fill in all details.</p>
                        </form>
                    </div>
                    <p id="contact-postmail">Powered by <a href="https://postmail.invotes.com" target="_blank">PostMail</a></p>`,
            "fr":  `<svg class="contact-close" onclick="javascript:toggleContactForm()" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" overflow="visible" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                        <line x2="20" y2="20" />
                        <line x1="20" y2="20" />
                    </svg>
                    <div class="contact-form-div">
                        <form class="contact-form" id="contact-form">
                            <input type="text" name="subject" id="input-subject" placeholder="Sujet">
                            <input type="email" name="email" id="input-email" placeholder="Votre e-mail">
                            <textarea name="text" id="input-message" placeholder="Votre message"></textarea>
                            <input type="submit" id="js_send" value="Envoyer">
                            <p id="contact-error-msg" class="contact-error-msg">Une erreur s'est produite lors de l'envoi de votre message.<br>Veuillez réessayer plus tard.</p>
                            <p id="contact-invalid-msg" class="contact-error-msg">Veuillez remplir tous les champs.</p>
                        </form>
                    </div>
                    <p id="contact-postmail">Ce site utilise <a href="https://postmail.invotes.com" target="_blank">PostMail</a></p>`
        }
    },
    "home-page": {
        "subheading": { "eng": "Computer Science Student", "fr": "Étudiant en informatique", "nl": "Promovendus in de informatica" },
        "section1": {
            "eng": `<p class="content-txt">
                        I have recently finished the 4<sup>th</sup> and final year of my MSci in Computer Science at the University of Exeter and plan
                        on continuing my studies in 2022 with a PhD. Throughout my time at Exeter, I have gained experience in many different
                        fields within Computer Science, including data science, evolutionary computation, artificial intelligence and machine
                        learning, however, I'm mainly interested in urban informatics and its applications within environmental and social sciences.
                    </p><p class="content-txt">
                        Specifically, for my 3<sup>rd</sup> year project, as I became more interested in urban science and transportation, I chose
                        to create an urban digital twin of Manchester with a focus on traffic and emissions simulations. The project had the main
                        goal of showing how digital twins and data visualisation can be incredibly useful in conveying complex and data-rich problems,
                        such as climate change, and did well towards this goal. Then, for my master's dissertation, I decided I wanted to research
                        social issues using data science and developed a new reinforcement learning algorithm for electoral redistricting, applied
                        to the UK. The algorithm aimed to optimise the parliamentary constituency boundaries of the UK, prioritising their ability
                        to represent the electorate through a new measure of electoral fairness, the "Seats-Votes difference," which was designed
                        to work in parliamentary systems. The UK redistricter project was ultimately very successful, with the resulting paper
                        to be published as part of "<a href="https://sites.google.com/view/ecmlpkddsogood2022/">SoGood 2022: The 7<sup>th</sup>
                        Workshop on Data Science for Social Good</a>" in Grenoble this September.
                    </p><p class="content-txt">
                        Both of these completed projects, including their source code and final report can be found <a href="https://github.com/calluume/mdt_project">here</a>,
                        on GitHub.
                    </p>`,
            "fr":  `<p class="content-txt">
                        Récemment, j'ai fini la 4e et la dernière année de ma maîtrise en informatique à l'université d'Exeter et
                        maintenant j'ai l'intention de continuer mes études en 2022 en faisant un doctorat. Tout au long de mon temps à Exeter, j'ai
                        gagné beaucoup d'expérience dans plusieurs domaines d'informatique différents, y compris le calcul évolutif,
                        l'intelligence artificielle et le machine learning, cependant je m'intéresse surtout aux sciences urbaines et à
                        ses applications dans les sciences sociales et environnementales.
                    </p><p class="content-txt">
                        Particulièrement, pour le projet de ma 3e année, après être devenu plus intéressé par les sciences urbaines et le
                        transport, j'ai choisi de créer un ‘urban digital twin’ de Manchester qui se concentrait sur la circulation et les émissions
                        de gaz d'échappement. Le but principal du projet était de montrer comment les ‘digital twins’ et la visualisation peuvent
                        être vraiment utiles pour communiquer les problèmes complexes où il y a abondance de données, comme le changement climatique,
                        et il était un gros succès. Puis, pour le grand projet de ma maîtrise, j'ai décidé que je voulais faire plus de recherche sur
                        les problèmes sociaux et la science des données avec le développement d'une nouvelle méthode algorithmique pour le découpage
                        électoral qui utilise le renforcement de l'apprentissage, qui était appliquée au Royaume-Uni. L'algorithme visait à optimiser
                        les frontières des circonscriptions électorales du Royaume-Uni tout en accordant la priorité à la capacité des frontières de
                        représenter le plus précisément et équitablement l'électorat avec une nouvelle métrique, le ‘Seats-Votes difference,’ qui
                        était conçue pour fonctionner dans les systèmes parlementaires. Dans l'ensemble, le projet était un vrai succès et le papier
                        résultant sera publié dans le cadre de "<a href="https://sites.google.com/view/ecmlpkddsogood2022/">SoGood 2022: The 7<sup>th</sup>
                        Workshop on Data Science for Social Good</a>" à Grenoble en septembre.
                    </p><p class="content-txt">
                        Ces projets achevés peuvent être trouvés <a href="https://github.com/calluume/mdt_project">ici</a> avec leurs codes source et
                        leurs rapports finaux.
                    </p>`
        },
        "section2": {
            "eng": `<p class="content-txt">
                        Outside of study, I also love surfing and sailing which I have been doing at my local reservoir since 2010, even achieving my RYA
                        instructor qualifications in 2015. I really enjoy learning languages too, particularly French which I have been learning
                        since the beginning of the COVID-19 pandemic after having stopped a few years ago. Then, in December 2021, I was very happy
                        to be able to pass the DALF C1 exam in French, which I hope should allow me to study or work in France in the future.
                    </p>`,
            "fr":  `<p class="content-txt">
                        À part mes études, j'aime bien faire du surf et la voile que je fais à mon réservoir local depuis 2010, même obtenant mes diplômes
                        d'instructeur avec le RYA en 2015. Je suis aussi très intéressé par l'apprentissage des langues, particulièrement le français que
                        j'apprends depuis le début de la pandémie de COVID-19 après avoir arrêté il y a quelques années. Puis, en décembre 2021, j'étais
                        vraiment content de réussir l'examen de DALF C1, qui j'espère me permettrai d'étudier ou de travailler en France à l'avenir.
                    </p>`
        },
        "prev-exp": {"eng": "<b>Previous Experience</b>", "fr": "<b>Expérience Préalable</b>"},
        "epsrc-description": {
            "eng": `<td class="experience-title hide600"><b>Research Intern</b><br><i>University of Exeter<br>July - September 2021</i></td>
                    <td class="experience-descr">
                        <span class="show600"><b>Research Intern</b><br><i>University of Exeter<br>July - September 2021</i><br><br></span>
                        In the summer of 2021, I helped with an ongoing project into the adoption of EV public transportation in Exeter
                        under the EPSRC vacation internship scheme. The goal of the project was to use multi-objective optimisation techniques
                        to find the best way to completely transition Exeter’s bus network to use electric vehicles, with my part being to look
                        at how the model could be expanded. I was able to research a lot into the problem itself and learned a great deal about
                        public transportation planning and nature-inspired algorithms whilst gaining some valuable experience in PhD research.
                    </td>`,
            "fr":  `<td class="experience-title hide600"><b>Stagiaire de Recherche</b><br><i>L'université d'Exeter<br>Juillet à septembre 2021</i></td>
                    <td class="experience-descr">
                        <span class="show600"><b>Stagiaire de Recherche</b><br><i>L'université d'Exeter<br>Juillet à septembre 2021</i><br><br></span>
                        En été 2021, j'ai aidé avec un projet en cours qui appliquait les approches inspirées par la nature au transport en véhicule électrique
                        avec l'EPSRC ‘vacation internship scheme.’ Le but du projet était d'utiliser les techniques d'optimisation multi-objectifs pour trouver
                        la meilleure façon de transformer le réseau de bus d'Exeter aux véhicules électriques, tandis que ma part était de trouver comment
                        on pouvait étendre le modèle. J'ai pu faire beaucoup de recherches sur le problème lui-même et j'ai appris beaucoup de planification
                        des transports en commun et les algorithmes inspirés par la nature et j'ai aussi gagné d'expérience précieuse de la recherche
                        doctorale.
                    </td>`
        },
        "school-description": {
            "eng": `<td class="experience-title hide600"><b>IT Technician</b><br><i>Chapel-en-le-Frith High School<br>July - September 2019</i></td>
                    <td class="experience-descr">
                        <span class="show600"><b>IT Technician</b><br><i>Chapel-en-le-Frith High School<br>July - September 2019</i><br><br></span>
                        During the school’s summer holidays, I worked with the network manager of the school to help deal with technical issues and
                        upgraded the hardware of all the school’s staff computers. This greatly helped my technical knowledge of computer hardware
                        as well as my problem-solving skills and attention to detail and allowed me to gain a greater understanding of how larger
                        organisations function on a technical level.
                    </td>`,
            "fr":  `<td class="experience-title hide600"><b>Technicien Informatique</b><br><i>Chapel-en-le-Frith High School<br>Juillet à septembre 2019</i></td>
                    <td class="experience-descr">
                        <span class="show600"><b>Technicien Informatique</b><br><i>Chapel-en-le-Frith High School<br>Juillet à septembre 2019</i><br><br></span>
                        J'ai travaillé aux côtés du responsable du réseau du lycée dans la mise à niveau et la révision de leurs ordinateurs au cours de l'été
                        et j'ai aussi aidé à résoudre les autres problèmes techniques. Cela a vraiment amélioré mes connaissances techniques du matériel informatique,
                        mais j'ai aussi pu mieux comprendre comment les grandes organisations marchent à un niveau technique.
                    </td>`
        },
        "itts-description": {
            "eng": `<td class="experience-title hide600"><b>Web Developer</b><br><i>IT Telemarketing Services<br>June - July 2019</i></td>
                    <td class="experience-descr">
                        <span class="show600"><b>Web Developer</b><br><i>IT Telemarketing Services<br>June - July 2019</i><br><br></span>
                        I took a large role in fixing and redesigning elements of the company’s website before the launch of a new service, as well as 
                        creating some additional branding to be used by other employees. I also created and sent out e-communications for various
                        clients, helping my ability to deliver the highest quality and service I could whilst following their specifications, although
                        this also generally gave me a lot more confidence in my web development and graphic design skills.
                    </td>`,
            "fr":  `<td class="experience-title hide600"><b>Développeur Web</b><br><i>IT Telemarketing Services<br>Juin à juillet 2019</i></td>
                    <td class="experience-descr">
                        <span class="show600"><b>Développeur Web</b><br><i>IT Telemarketing Services<br>Juin à juillet 2019</i><br><br></span>
                        J'ai joué un grand rôle dans la réparation et la refonte des éléments du site de la compagnie avant le lancement d'un nouveau service, de plus
                        j'ai fait des brandings supplémentaires pour les autres employés. Aussi, je créais et envoyais des communications électroniques pour les clients
                        variés, ce qui a aidé ma capacité d'offrir la meilleure qualité possible en suivant leur spécification. Cependant, ça m'a généralement donné
                        beaucoup plus de confiance en mes compétences dans le développement Web et dans la conception graphique.
                    </td>`
        },
        "sailing-description": {
            "eng": `<td class="experience-title hide600"><b>Sailing Instructor</b><br><i>Toddbrook Sailing Club<br>2015 - Present</i></td>
                    <td class="experience-descr">
                        <span class="show600"><b>Sailing Instructor</b><br><i>Toddbrook Sailing Club<br>2015 - Present</i><br><br></span>
                        Outside of my interests within Computer Science, I am also a fully qualified sailing instructor and have been helping to
                        run training at my local reservoir, and competing in national competitions, for many years. I also became the club’s junior
                        coordinator for some time, helping to organise extra social events for younger members as well as helping with some of
                        the administrative elements of training. This has all greatly helped my ability to adapt and plan under pressure, and I
                        continue to take part in the club when I am home from university.
                    </td>`,
            "fr":  `<td class="experience-title hide600"><b>Moniteur de Voile</b><br><i>Toddbrook Sailing Club<br>2015 jusqu’à présent</i></td>
                    <td class="experience-descr">
                        <span class="show600"><b>Moniteur de Voile</b><br><i>Toddbrook Sailing Club<br>2015 jusqu’à présent</i><br><br></span>
                        En dehors de mes intérêts en informatique, je suis aussi moniteur de voile diplômé où j'aide à diriger la formation junior dans mon lac artificiel
                        local et je participe à des compétitions nationales depuis des années. J'étais aussi le ‘junior coordinator’ du club, où j'aidais à organiser
                        des événements sociaux supplémentaires pour les plus jeunes membres et avec les éléments administratifs de la formation. Tout ceci a vraiment
                        amélioré ma capacité de m'adapter et planifier sous pression et je continue de contribuer au club quand je ne suis pas à l'université.
                    </td>`
        },
    },
    "projects-page": {
        "prev-projects": { "eng": "Previous Projects", "fr":  "Les projets précédents" },
        "projects-description": {
            "eng": `<p class="content-txt">
                        My main research interests centre around the combination of urban and Computer Science, particularly looking at the
                        social and environmental impact of cities and transportation, however, I’m also interested in other fields such as nature-inspired or applications
                        of Computer Science, machine learning and web development. My GitHub profile can be found <a href="https://github.com/calluume">here</a> and will expand as I
                        develop more projects alongside my studies, but below is an outline of some of my more recent projects.
                    </p>`,
            "fr":  `<p class="content-txt">
                        Mes principaux intérêts de recherche se concentrent sur la combinaison des sciences urbaines et l'informatique,
                        particulièrement avec l'impact environnemental et social des villes. Cependant, je m'intéresse aussi aux autres domaines
                        comme les applications de l'informatique inspirées par la nature, le Machine Learning et le développement Web.
                        Mon profil sur GitHub peut être accédé <a href="https://github.com/calluume">ici</a> et étendrai
                        alors que je développe plus de projets aux côtés de mes études, mais il y a un contour de quelques-un de mes
                        projets plus récents au-dessous.
                    </p>`
        },
        "redistrictertitle": { "eng": "The UK Redistricter Project", "fr": "The UK Redistricter Project"},
        "redistricterbody": {
            "eng": `<p class="project-descr">
                        For my final year dissertation at Exeter, I developed a new reinforcement learning-based method for drawing
                        electoral district boundaries which aims to directly optimise boundaries for fairness. The model was applied
                        to the UK and evaluates fairness using a new metric, the Seats-Votes difference, that is able to make direct
                        comparisons between parties' proportional vote and seat share in order to most fairly and accurately represent
                        the electorate.
                    </p><p class="project-descr">
                        The project was completed in May 2022, after the model was found to be able to improve the fairness of the UK's constituency
                        boundaries in every experiment performed. The source code and final report can be found on
                        <a href="https://github.com/calluume/UK_redistricter">GitHub</a>, with a paper on the algorithm to be published as part
                        of "<a href="https://sites.google.com/view/ecmlpkddsogood2022/">SoGood 2022: The 7<sup>th</sup> Workshop on Data Science
                        for Social Good</a>" in Grenoble this September.
                    </p>
                    <div class="resizeable-outer-div project-img" style="height: 300px;"><div class="resizeable-inner-div" id="redistricter"></div></div>`,
            "fr":  `<p class="project-descr">
                        Pour le grand project dans ma dernière année à Exeter, j'ai développé une nouvelle méthode algorithmique pour
                        le découpage électoral qui utilise le renforcement de l'apprentissage pour optimiser les solutions pour l'équité.
                        Le modèle était appliqué au Royaume-Uni et il évaluait l'équité avec une nouvelle métrique, le ‘Seats-Votes
                        difference,’ qui peut comparer directement la part de vote de chaque partie et le nombre de sièges qui lui sont
                        attribués pour trouver les frontières qui peuvent représenter le plus précisément et équitablement l'électorat.
                    </p><p class="project-descr">
                        Le project a fini en Mai 2022, mais j'ai trouvé que le modèle a pu améliorer l'équité des frontières électorales
                        dans chaque expérience réalisée. Le projet lui-même, le code source et le rapport final peuvent être trouvés sur
                        <a href="https://github.com/calluume/UK_redistricter">GitHub</a>, et un papier sur l'algorithme sera publié
                        dans le cadre de "<a href="https://sites.google.com/view/ecmlpkddsogood2022/">SoGood 2022: The 7<sup>th</sup>
                        Workshop on Data Science for Social Good</a>" à Grenoble en septembre.
                    </p>
                    <div class="resizeable-outer-div project-img" style="height: 300px;"><div class="resizeable-inner-div" id="redistricter"></div></div>`
        },
        "mdttitle": { "eng": "The Manchester Digital Twin", "fr": "The Manchester Digital Twin"},
        "mdtbody": {
            "eng": `<p class="project-descr">
                        The project was developed for my 3rd-year dissertation and consisted of
                        creating a digital twin of central Manchester, focusing on traffic simulation and resulting emissions. This had
                        the ultimate goal of showing how digital twins could be used to convey complex and data-rich problems and systems
                        to even non-experts, in this case showing the effect of traffic on emissions.
                    </p><p class="project-descr">
                        The completed project source code and report can be seen on <a href="https://github.com/calluume/mdt_project">GitHub</a>.
                    </p>
                    <div class="resizeable-outer-div project-img"><div class="resizeable-inner-div" id="mdt"></div></div>`,
            "fr":  `<p class="project-descr">
                        Ce projet était développé pour le grand projet de ma troisième année impliquait la création d'un ‘digital twin’ du centre de
                        Manchester, en concentrant sur la simulation de la circulation et ses émissions. Le but principal était de montrer comment les
                        ‘digital twins’ pourrait être utilisés pour communiquer les problèmes et les systèmes complexes où il y a abondance de données 
                        à tout le monde, même aux non-experts.
                    </p><p class="project-descr">
                        Le code source et le rapport final peuvent être trouvés sur <a href="https://github.com/calluume/mdt_project">GitHub</a>.
                    </p>
                    <div class="resizeable-outer-div project-img"><div class="resizeable-inner-div" id="mdt"></div></div>`
        },
        "acotitle": { "eng": "Ant Colony Optimisation", "fr": "Optimisation des Colonies de Fourmis"},
        "acobody": {
            "eng": `<p class="project-descr">
                        This is one of my smaller projects and looked at applying ant colony optimisation techniques to a 2D ant colony simulation.
                        The project aimed to research swarm intelligence and works by simulating ants moving around a board, looking for randomly
                        placed food, with their movements influenced by pheromones laid by other ants. Over time, the movements of the colony
                        should converge to optimal paths between their home and food.    
                    </p>
                    <div class="resizeable-outer-div project-img" style="height: 400px;"><div class="resizeable-inner-div" id="aco"></div></div>`,
            "fr":  `<p class="project-descr">
                        Ceci est un de mes projets plus petits et il essaye d'appliquer les techniques de l'optimisation des colonies de fourmis à une
                        simulation 2D. Le projet vise à rechercher l'intelligence d'essaim et marche par la simulation des fourmis sur un tableau, qui
                        cherche la nourriture réparties au hasard, avec leurs mouvements influencés par les phéromones des autres fourmis. Au fil du
                        temps, les mouvements des fourmis devraient converger vers un chemin optimal entre la colonie et la nourriture.
                    </p>
                    <div class="resizeable-outer-div project-img" style="height: 400px;"><div class="resizeable-inner-div" id="aco"></div></div>`
        },
        "webdevtitle": { "eng": "Web Development Projects", "fr": "Projets de Développement Web"},
        "webdevbody": {
            "eng": `<p class="project-descr">
                        Throughout my time at Exeter, I also completed many other smaller web development projects, in and outside
                        of my course. For example, I created a basic site for my family’s holiday let (<a href="https://tawelfa.com">tawelfa.com</a>), and in 2nd year, I played a
                        large role in the design and branding of a group software development project as pictured below. The brief was
                        to create an interactive treasure hunt centred around the university, and our group decided to make it into a
                        story-based web app called ‘Hunt Dayo.’
                    </p>
                    <div class="resizeable-outer-div project-img" style="height: 350px;"><div class="resizeable-inner-div" id="webdev"></div></div>`,
            "fr":  `<p class="project-descr">
                        Tout au long de mon séjour à Exeter, j'ai aussi achevé d'autres projets de développement Web plus petits, à part mes études et aux côtés.
                        Par exemple, j'ai créé un site simple pour le gîte de ma famille (<a href="https://tawelfa.com">tawelfa.com</a>), et dans ma deuxième année, j'ai joué un grand rôle dans le design et l'image
                        de marque d'un projet de développement logiciel du groupe. Le brief était de créer une application de chasse au trésor interactif qui se
                        concentrait sur l'université, et notre groupe a décidé de faire une application web basée sur une histoire qui s'appelait ‘Hunt Dayo.'
                    </p>
                    <div class="resizeable-outer-div project-img" style="height: 350px;"><div class="resizeable-inner-div" id="webdev"></div></div>`
        }
    },
    "publications-page": {
        "publications-title": { "eng": "Publications", "fr": "Publications"},
        "publications-description": {
            "eng": `<p class="content-txt">
                        My main research interests centre around the combination of urban and Computer Science, particularly looking at the
                        social and environmental impact of cities and transportation, however, I’m also interested in other fields such as nature-inspired or applications
                        of Computer Science, machine learning and web development. My GitHub profile can be found <a href="https://github.com/calluume">here</a> and will expand as I
                        develop more projects alongside my studies, but below is an outline of some of my more recent projects.
                    </p>`,
        },
        "publication1": {
            "eng": `<h1>A Reinforcement Learning Algorithm for Fair Electoral Redistricting in Parliamentary Systems</h1>
                    <p>Callum Evans, Hugo Barbosa 'A Reinforcement Learning Algorithm for Fair Electoral Redistricting in Parliamentary Systems' in <i>SoGood 2022: The 7th Workshop on Data Science for Social Good</i>.
                    Grenoble, France: September 23<sup>rd</sup> 2022</p>`
        }
    }
}

function getLanguage() {
    if (!localStorage.hasOwnProperty("language")) {
        localStorage.setItem("language", "eng")
    }
    return localStorage.getItem("language")
}

function loadText(currentPage, language) {
    pages = ["all-pages", currentPage]

    for (let i = 0; i < 2; i++) {
        for (var key in webText[pages[i]]){
            if (document.getElementById(key)) {
                if (webText[pages[i]][key].hasOwnProperty(language)) {
                    document.getElementById(key).innerHTML = webText[pages[i]][key][language]
                } else {
                    document.getElementById(key).innerHTML = webText[pages[i]][key]["eng"]
                }
            }
        }
    }

    if (document.getElementById('menu-table-tr')) {
        for (var lang in languages) {
            if (lang != localStorage.getItem("language")) {
                document.getElementById('menu-table-tr').innerHTML += `<td class="menu-link"><a href="javascript:changeLanguage('${lang}')">${languages[lang]["name"]}</a></td>`
            }
        }
    }
    displayLastUpdate(localStorage.getItem("language"))
}

function changeLanguage(newLanguage) {
    localStorage.setItem("language", newLanguage)
    window.location.reload()
}

function getDateString(date, language) {
    frMonths = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre']
    enMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    if (language == "fr") {
        month = frMonths[date.getMonth()]
        at = 'à'
    } else {
        month = enMonths[date.getMonth()]
        at = 'at'
    }

    return `<i>${date.getDate()} ${month}, ${date.getFullYear()} ${at} ${zeroPad(date.getHours())}:${zeroPad(date.getMinutes())}</i>`
}

function displayLastUpdate(language) {
    fetch("https://api.github.com/repos/calluume/calluume.github.io").then(function(response) {
        return response.json()
    }).then(function(data) {
        date = new Date(data.updated_at)
        dateString = getDateString(date, language)
        document.getElementById('last-updated').innerHTML += ' ' + dateString
    }).catch(function() {
        console.log(`Could not fetch last updated.`)
    })
}