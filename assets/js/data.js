/* =========================================================
   Atelier IA — Formation · contenus interactifs
   (quiz en mises en situation, test d’orientation, tâches)
   ========================================================= */
window.ATELIER_DATA = {
  quizzes: {
    comprendre: {
      title: '01 · Comprendre l’IA',
      questions: [
        {
          q: 'Un collègue dit : « L’IA va chercher la bonne réponse dans une grande base de données. » Que lui répondez-vous ?',
          options: [
            'Il a raison, c’est pour cela qu’elle ne se trompe jamais',
            'Elle génère la suite de texte la plus probable selon ce qu’elle a appris : c’est fluide, mais ça peut être faux',
            'Elle copie la première page Google qui correspond',
            'Elle demande à un humain avant de répondre',
          ],
          answer: 1,
          explain: 'Un modèle de langage prédit la suite la plus probable. C’est ce qui le rend fluide… et capable d’inventer avec aplomb quand l’information lui manque.',
        },
        {
          q: 'Vous demandez à l’IA le montant d’une taxe locale, sans recherche web. Elle répond avec un chiffre précis. Que faites-vous ?',
          options: [
            'Je l’utilise : elle a l’air sûre d’elle',
            'Je me méfie : les sujets locaux et datés sont son point faible. J’active la recherche web et je vérifie à la source officielle',
            'Je lui demande « Tu es sûre ? » et je garde la réponse si elle dit oui',
            'Je change d’IA et je prends la réponse de la seconde',
          ],
          answer: 1,
          explain: 'Les IA connaissent mal les réglementations locales, et les montants changent. Recherche web, puis source officielle (DGI, Journal officiel).',
        },
        {
          q: 'Laquelle de ces tâches est un point fort de l’IA ?',
          options: [
            'Donner le nombre exact de mots d’un long texte',
            'Traduire parfaitement un contrat en fon',
            'Transformer des notes en vrac en un plan clair et bien rédigé',
            'Décider à votre place qui recruter',
          ],
          answer: 2,
          explain: 'Structurer, rédiger, reformuler et résumer sont ses points forts. Compter précisément, les langues nationales et les décisions sur des personnes ne le sont pas.',
        },
        {
          q: 'Votre structure utilise Microsoft Copilot, pas Claude ni ChatGPT. Ce que vous apprenez dans cette formation…',
          options: [
            'ne vous servira à rien',
            's’applique aussi : briefer, fournir de la matière, vérifier et protéger les données fonctionnent avec toutes les IA',
            'ne fonctionne qu’avec ChatGPT',
            'n’est valable qu’en anglais',
          ],
          answer: 1,
          explain: 'Les compétences sont transférables. Les boutons changent d’un outil à l’autre, la méthode reste la même.',
        },
        {
          q: 'Que signifie « l’IA a une mémoire » en 2026 ?',
          options: [
            'Elle se souvient de tout Internet en temps réel',
            'Elle retient d’une conversation à l’autre ce que vous lui apprenez sur vous et votre travail, et vous pouvez le consulter ou l’effacer',
            'Elle enregistre votre écran en permanence',
            'Elle garde vos mots de passe',
          ],
          answer: 1,
          explain: 'La mémoire retient votre profil, vos préférences et vos dossiers. Vous la gérez dans les paramètres, et vous n’y mettez jamais de données sensibles.',
        },
      ],
    },

    claude: {
      title: '02 · Claude',
      questions: [
        {
          q: 'Vous devez rédiger une note délicate de 3 pages pour votre direction, avec un ton nuancé. Pourquoi Claude est-il un bon choix ?',
          options: [
            'Parce qu’il génère les plus belles images',
            'Parce qu’il est reconnu pour la qualité de son écriture et sa rigueur sur les textes longs',
            'Parce qu’il est intégré à Gmail',
            'Parce qu’il ne fait jamais d’erreur',
          ],
          answer: 1,
          explain: 'Claude se distingue par la qualité de sa plume, sa fidélité aux consignes et sa rigueur sur les documents longs. Il faut quand même relire.',
        },
        {
          q: 'Vous préparez chaque mois le même type de rapport, avec les mêmes documents de référence. Que créez-vous dans Claude ?',
          options: [
            'Une nouvelle conversation à chaque fois, en recollant tout',
            'Un Projet avec les documents de référence et les consignes',
            'Un compte supplémentaire',
            'Rien, Claude ne garde rien',
          ],
          answer: 1,
          explain: 'Un Projet garde vos documents et vos consignes. Chaque nouvelle conversation du Projet en tient compte : vous ne donnez que les éléments nouveaux.',
        },
        {
          q: 'Vous avez besoin d’une affiche illustrée pour un événement. Que faites-vous ?',
          options: [
            'Je la demande à Claude, il génère des images photoréalistes',
            'Claude ne génère pas d’images : je fais le texte avec lui et l’image avec ChatGPT ou Gemini',
            'J’abandonne l’IA pour ce projet',
            'Je passe à l’offre Max de Claude pour débloquer les images',
          ],
          answer: 1,
          explain: 'Claude crée des documents, des schémas et des présentations, mais pas d’images. ChatGPT et Gemini sont faits pour cela.',
        },
        {
          q: 'Vous voulez que Claude traite les 30 factures PDF d’un dossier de votre ordinateur et en fasse un tableau Excel. Quelle fonction utilisez-vous ?',
          options: [
            'Cowork, dans l’application de bureau, avec accès à ce seul dossier',
            'La recherche web',
            'Le mode vocal',
            'Ce n’est pas possible',
          ],
          answer: 0,
          explain: 'Cowork travaille sur vos fichiers et livre un document fini. Donnez accès à un seul dossier et demandez le plan avant qu’il agisse.',
        },
        {
          q: 'Au milieu d’un dossier, Claude vous indique que vous avez atteint votre limite. Le meilleur réflexe ?',
          options: [
            'Recommencer la même très longue conversation',
            'Ouvrir une nouvelle conversation avec un résumé, ou attendre la recharge (fenêtres de 5 heures), ou continuer sur une autre IA',
            'Créer un second compte gratuit avec un autre e-mail',
            'Acheter immédiatement l’offre la plus chère',
          ],
          answer: 1,
          explain: 'Les longues conversations consomment beaucoup. Une nouvelle conversation avec un résumé économise l’usage, et l’usage se recharge par fenêtres de 5 heures.',
        },
      ],
    },

    chatgpt: {
      title: '03 · ChatGPT',
      questions: [
        {
          q: 'Vous voulez un seul outil pour écrire, créer des visuels, parler à voix haute et analyser un Excel. Lequel est le plus complet ?',
          options: ['ChatGPT', 'Une calculatrice', 'NotebookLM', 'Un moteur de recherche classique'],
          answer: 0,
          explain: 'ChatGPT est le « couteau suisse » : texte, images, voix, analyse de données, recherche et agent au même endroit.',
        },
        {
          q: 'Votre équipe rédige chaque semaine des réponses à des demandes de devis, toujours sur le même modèle. Que créez-vous ?',
          options: [
            'Un GPT personnalisé avec le modèle, la grille tarifaire et les consignes',
            'Un compte partagé entre tous',
            'Un nouveau prompt écrit de mémoire chaque fois',
            'Rien, ChatGPT ne sait pas faire de devis',
          ],
          answer: 0,
          explain: 'Un GPT garde instructions et documents de référence. En offre Business, il se partage avec l’équipe. Chacun garde son propre compte.',
        },
        {
          q: 'Vous utilisez un compte ChatGPT personnel pour le travail. Quel réglage faire en premier ?',
          options: [
            'Changer la couleur du thème',
            'Désactiver « Améliorer le modèle pour tous » dans Contrôle des données',
            'Activer les emojis',
            'Supprimer l’application après chaque usage',
          ],
          answer: 1,
          explain: 'Sur les comptes personnels, les conversations peuvent servir à l’entraînement par défaut. Ce réglage l’empêche.',
        },
        {
          q: 'Qu’est-ce que ChatGPT Work ?',
          options: [
            'Une offre réservée aux grandes entreprises américaines',
            'Le mode qui mène une tâche complète (rassembler, planifier, produire un fichier fini), notamment depuis l’application de bureau',
            'Un réseau social professionnel',
            'Un ancien nom de ChatGPT',
          ],
          answer: 1,
          explain: 'Lancé en juillet 2026, ChatGPT Work remplace l’ancien mode agent. Vous suivez ce qu’il fait et validez les actions importantes.',
        },
        {
          q: 'Le texte de ChatGPT « sonne IA » : listes partout, formules creuses, ton enthousiaste. Que faites-vous ?',
          options: [
            'Je l’envoie tel quel',
            'Je règle mes instructions personnalisées (style, pas de formules creuses) et je donne un exemple de mon ton',
            'Je change d’ordinateur',
            'J’écris ma demande en majuscules',
          ],
          answer: 1,
          explain: 'Les instructions personnalisées corrigent durablement le style. Un exemple de vos propres textes fait le reste.',
        },
      ],
    },

    gemini: {
      title: '04 · Gemini',
      questions: [
        {
          q: 'Votre structure utilise Gmail, Google Drive et Meet au quotidien. Quelle IA s’intègre le mieux ?',
          options: ['Gemini', 'Aucune', 'Un logiciel de comptabilité', 'Une IA sans connexion Internet'],
          answer: 0,
          explain: 'Gemini est intégré dans Gmail, Docs, Sheets, Drive et Meet. Avec Google Workspace, il est souvent déjà inclus.',
        },
        {
          q: 'Vous voulez un assistant qui réponde aux nouveaux employés uniquement à partir de vos procédures internes, en citant ses sources. Quel outil ?',
          options: ['NotebookLM', 'Un générateur d’images', 'Le mode vocal', 'Une recherche web générale'],
          answer: 0,
          explain: 'NotebookLM répond seulement à partir des documents que vous lui donnez, avec une citation pour chaque affirmation. Il peut aussi faire des résumés audio.',
        },
        {
          q: 'Vous devez résumer une conférence YouTube d’une heure. Le plus direct ?',
          options: ['Coller le lien dans Gemini', 'La regarder en accéléré', 'Demander à Claude de générer la vidéo', 'C’est impossible'],
          answer: 0,
          explain: 'Gemini comprend les vidéos YouTube à partir de leur lien : résumé, chapitres, passages précis avec l’horodatage.',
        },
        {
          q: 'Une fonction de Gemini que vous avez vue dans une vidéo n’apparaît pas sur votre compte. Explication la plus probable ?',
          options: [
            'Votre ordinateur est trop ancien',
            'Google déploie certaines fonctions d’abord dans quelques pays, comme les États-Unis',
            'Il faut écrire en anglais',
            'Elle n’existe pas',
          ],
          answer: 1,
          explain: 'Plusieurs fonctions (certains agents, la mémoire avancée) arrivent progressivement selon les pays. Vérifiez ce que propose votre compte.',
        },
        {
          q: 'Pourquoi Google AI Pro est-il souvent intéressant pour un indépendant ?',
          options: [
            'Il est gratuit à vie',
            'Il inclut le modèle Pro, Gemini dans Gmail et Docs, NotebookLM étendu et 5 To de stockage pour environ 11 700 FCFA par mois',
            'Il donne accès à Claude',
            'Il remplace la connexion Internet',
          ],
          answer: 1,
          explain: 'Le stockage inclus remplace souvent un autre abonnement. C’est un bon rapport qualité-prix si vous vivez dans l’univers Google.',
        },
      ],
    },

    comparatif: {
      title: '05 · Choisir son IA',
      questions: [
        {
          q: 'Vous démarrez, sans budget. Quelle stratégie ?',
          options: [
            'Payer les trois abonnements tout de suite',
            'Deux comptes gratuits (par exemple ChatGPT et Gemini), et basculer de l’un à l’autre aux limites',
            'Acheter un compte partagé à un revendeur',
            'Attendre que l’IA soit gratuite et illimitée',
          ],
          answer: 1,
          explain: 'Les versions gratuites couvrent la plupart des besoins des débutants. On paie quand l’IA devient un outil de travail quotidien.',
        },
        {
          q: 'Vous devez analyser un appel d’offres de 150 pages et en extraire les exigences. Premier réflexe ?',
          options: ['Claude ou Gemini, avec le document joint', 'Un générateur d’images', 'Une recherche web générale', 'Aucune IA ne lit 150 pages'],
          answer: 0,
          explain: 'Claude est très fidèle sur les documents longs, Gemini accepte d’énormes volumes. Dans les deux cas, exigez les numéros de page.',
        },
        {
          q: 'Quelle affirmation est la plus juste ?',
          options: [
            'Une IA est meilleure que les autres sur tout',
            'On choisit selon l’usage, ses outils habituels et la confidentialité : les écarts changent à chaque version',
            'La plus chère est toujours la meilleure',
            'Les trois sont strictement identiques',
          ],
          answer: 1,
          explain: 'Les trois se dépassent tour à tour. Le bon critère, c’est l’adéquation avec vos tâches, vos outils et vos contraintes.',
        },
        {
          q: 'Une institution de microfinance veut utiliser l’IA sur des dossiers clients. Que recommander ?',
          options: [
            'Des comptes gratuits personnels pour chaque agent',
            'Une offre entreprise, validée par la direction et le délégué à la protection des données, et un usage encadré',
            'Un compte partagé pour toute l’agence',
            'Coller les dossiers dans n’importe quelle IA, c’est plus rapide',
          ],
          answer: 1,
          explain: 'Secret professionnel et données sensibles : jamais de compte personnel. Une offre entreprise avec contrat, et des règles claires.',
        },
        {
          q: 'Vous voulez savoir quelle IA vous convient le mieux pour VOTRE travail. La meilleure méthode ?',
          options: [
            'Lire un classement sur Internet',
            'Soumettre la même demande, sur 5 de vos vraies tâches, aux trois IA, et comparer le temps de retouche',
            'Choisir celle que votre ami utilise',
            'Prendre celle qui a le plus beau logo',
          ],
          answer: 1,
          explain: 'Seul un test sur vos tâches réelles tranche. Le vrai indicateur : le temps qu’il faut pour rendre le résultat utilisable.',
        },
      ],
    },

    memoire: {
      title: '06 · Mémoire et agents',
      questions: [
        {
          q: 'Vous en avez assez de réexpliquer votre métier à chaque conversation. Que faites-vous ?',
          options: [
            'Je le recopie au début de chaque message',
            'Je remplis mes instructions personnalisées et je dis une fois « Souviens-toi que… » avec mon profil',
            'Je change d’IA à chaque fois',
            'Rien, c’est impossible',
          ],
          answer: 1,
          explain: 'Les instructions s’appliquent à chaque réponse, la mémoire retient ce que vous lui apprenez. Vous n’avez plus à vous présenter.',
        },
        {
          q: 'Laquelle de ces informations ne doit JAMAIS aller dans la mémoire de l’IA ?',
          options: [
            'Votre métier et votre secteur',
            'Votre style d’écriture préféré',
            'Le mot de passe de la messagerie de l’entreprise',
            'Le type de clients que vous servez',
          ],
          answer: 2,
          explain: 'Jamais de mots de passe, de codes, de données bancaires ou de données personnelles de tiers dans la mémoire.',
        },
        {
          q: 'Trois collègues utilisent le même compte ChatGPT. Quel problème cela pose-t-il ?',
          options: [
            'Aucun, c’est économique',
            'La mémoire mélange leurs profils, chacun voit l’historique des autres, et c’est contraire aux conditions d’utilisation',
            'Les réponses sont plus rapides',
            'Seul le premier peut écrire en français',
          ],
          answer: 1,
          explain: 'Un compte par personne. Pour travailler en équipe, il existe les offres Team et Business.',
        },
        {
          q: 'Vous confiez à un agent le rangement de 300 fichiers. Quelle précaution est la plus importante ?',
          options: [
            'Lui donner accès à tout l’ordinateur pour aller plus vite',
            'Lui donner accès à ce seul dossier, faire une copie avant, et exiger de voir le plan avant qu’il déplace quoi que ce soit',
            'Le laisser travailler sans regarder',
            'Lui donner aussi le code de la carte bancaire au cas où',
          ],
          answer: 1,
          explain: 'Un dossier précis, une sauvegarde, le plan d’abord. Et jamais d’argent ni de mots de passe.',
        },
        {
          q: 'Quelle est la différence entre la mémoire et un Projet ?',
          options: [
            'Aucune',
            'La mémoire concerne vous (profil, préférences) ; un Projet concerne un dossier (documents et consignes propres à ce dossier)',
            'Le Projet est réservé aux informaticiens',
            'La mémoire est payante, le Projet gratuit',
          ],
          answer: 1,
          explain: 'La mémoire vous suit partout. Le Projet regroupe ce qui sert à un dossier précis, comme les appels d’offres ou le rapport mensuel.',
        },
      ],
    },

    briefer: {
      title: '07 · Bien briefer',
      questions: [
        {
          q: 'Quelle demande donnera le meilleur résultat ?',
          options: [
            '« Écris une relance. »',
            '« Écris une relance, fais-la bien. »',
            '« Relance pour un client qui n’a pas payé une facture de 850 000 FCFA échue depuis 30 jours. Courtoise mais ferme, 120 mots, propose un échéancier si besoin. »',
            '« RELANCE URGENTE !!! »',
          ],
          answer: 2,
          explain: 'Situation, faits, objectif, longueur et ton : l’IA n’a plus rien à deviner.',
        },
        {
          q: 'Votre IA connaît déjà votre métier grâce à la mémoire. Que devez-vous quand même donner à chaque demande ?',
          options: [
            'Rien de plus',
            'La situation précise, le destinataire, le résultat attendu et la matière (faits, document)',
            'Votre date de naissance',
            'Le nom de l’IA',
          ],
          answer: 1,
          explain: 'La mémoire remplace les deux premières lignes du brief. La situation, le destinataire et la matière changent à chaque tâche.',
        },
        {
          q: 'Le premier jet est trop long et trop familier. Que faites-vous ?',
          options: [
            'Je recommence une nouvelle conversation avec la même demande',
            'Dans la même conversation : « Réduis de moitié, vouvoie et retire les points d’exclamation. »',
            '« Fais mieux. »',
            'J’abandonne',
          ],
          answer: 1,
          explain: 'Un retour précis dans la même conversation améliore le résultat en une ou deux relances.',
        },
        {
          q: 'Pour une tâche complexe dont vous ne maîtrisez pas tous les paramètres, la meilleure technique est :',
          options: [
            'Lui demander de poser ses questions avant de commencer',
            'Écrire la demande la plus courte possible',
            'Lui demander de deviner',
            'Utiliser trois IA en même temps',
          ],
          answer: 0,
          explain: '« Avant de commencer, pose-moi les questions dont tu as besoin » : l’IA construit le contexte avec vous au lieu de l’inventer.',
        },
        {
          q: 'Vous voulez que l’IA écrive dans votre style. Le plus efficace ?',
          options: [
            'Lui décrire votre style avec beaucoup d’adjectifs',
            'Lui donner deux ou trois textes que vous avez écrits, comme exemples',
            'Lui demander d’écrire « comme un professionnel »',
            'Écrire en majuscules',
          ],
          answer: 1,
          explain: 'Montrer vaut mieux que décrire : l’IA imite le ton, la longueur et la structure des exemples.',
        },
      ],
    },

    verifier: {
      title: '08 · Vérifier',
      questions: [
        {
          q: 'L’IA a résumé votre réunion. Quelle erreur est la plus dangereuse dans un compte rendu ?',
          options: [
            'Une faute de frappe',
            'Un point discuté transformé en « décision prise »',
            'Un paragraphe un peu long',
            'L’absence de titre',
          ],
          answer: 1,
          explain: 'Une fausse décision diffusée à toute une équipe peut déclencher des actions qui n’ont jamais été validées.',
        },
        {
          q: 'Un devis préparé par l’IA affiche un total. Que faites-vous avant de l’envoyer ?',
          options: [
            'Rien, les IA calculent parfaitement',
            'Je recalcule au moins les lignes et le total, ou je fais calculer par l’outil d’analyse avec le détail',
            'Je demande « Tu es sûre ? »',
            'J’ajoute 10 % par sécurité',
          ],
          answer: 1,
          explain: 'Une seule erreur de ligne fausse tout le devis. Recalculez, ou faites calculer avec le détail visible.',
        },
        {
          q: 'L’IA vous cite « l’article 245 du Code général des impôts » pour justifier une règle. Votre réflexe ?',
          options: [
            'Je le reprends tel quel dans mon courrier',
            'Je vérifie dans le texte officiel ; si je ne le trouve pas, je retire la référence',
            'Je l’ignore toujours, les IA mentent',
            'Je demande à l’IA de confirmer',
          ],
          answer: 1,
          explain: 'Une référence précise sans source vérifiée est le signe typique d’une invention. Seule la source officielle fait foi.',
        },
        {
          q: 'L’IA vous explique une règle de droit du travail. Quel est le risque spécifique ?',
          options: [
            'Qu’elle réponde en anglais',
            'Qu’elle applique le droit français ou d’un autre pays et non celui qui s’applique à vous',
            'Qu’elle refuse de répondre',
            'Qu’elle soit trop courte',
          ],
          answer: 1,
          explain: 'Le « mauvais pays » est une erreur fréquente. Demandez-vous toujours : est-ce vrai ici ? Et vérifiez sur une source officielle nationale.',
        },
        {
          q: 'Dans quel cas faut-il éviter d’utiliser l’IA seule ?',
          options: [
            'Pour trouver des idées de titres',
            'Pour reformuler un mail',
            'Pour une décision coûteuse en cas d’erreur et difficile à vérifier, comme un diagnostic médical ou un conseil juridique engageant',
            'Pour résumer vos propres notes',
          ],
          answer: 2,
          explain: 'Erreur coûteuse + vérification difficile = un professionnel décide. L’IA peut aider à préparer, pas trancher.',
        },
      ],
    },

    usages: {
      title: '09 · Familles d’usage',
      questions: [
        {
          q: '« Préparer un tableau de suivi des créances avec une formule Excel. » À quelle famille d’usage appartient cette tâche ?',
          options: ['Rédiger', 'Analyser des chiffres', 'Créer des visuels', 'S’entraîner'],
          answer: 1,
          explain: 'Formules, calculs et tableaux relèvent de l’analyse de chiffres : on dépose le fichier, on exige le détail des calculs, on vérifie une ligne.',
        },
        {
          q: 'Vous voulez préparer un entretien d’embauche difficile. Quelle famille et quelle méthode ?',
          options: [
            'Rechercher : lire des articles sur les entretiens',
            'S’entraîner : un jeu de rôle avec un recruteur exigeant, une question à la fois, et un retour franc à la fin',
            'Déléguer : laisser l’IA passer l’entretien',
            'Créer : faire une affiche',
          ],
          answer: 1,
          explain: 'Le jeu de rôle est l’un des usages les plus utiles et les moins connus. Exigez la critique, sinon l’IA vous félicitera.',
        },
        {
          q: 'Vous cherchez des informations sur une petite entreprise de Parakou très peu présente en ligne. À quoi vous attendre ?',
          options: [
            'L’IA trouvera tout grâce à la recherche web',
            'L’IA trouvera peu de choses ; si elle donne des chiffres précis sans source, ils sont probablement inventés',
            'L’IA appellera l’entreprise',
            'L’IA refusera de répondre',
          ],
          answer: 1,
          explain: 'Ce qui n’est pas en ligne, l’IA ne le sait pas. Le terrain et votre réseau restent indispensables.',
        },
        {
          q: 'Pour quel message vaut-il mieux écrire vous-même, sans IA ?',
          options: [
            'Un rapport de 10 pages',
            'Un mot de condoléances à un collègue',
            'Une offre d’emploi',
            'Un calendrier de publications',
          ],
          answer: 1,
          explain: 'Quand le message doit porter votre voix personnelle et votre sincérité, l’IA n’apporte rien, et cela peut se sentir.',
        },
        {
          q: 'Quelle tâche convient le mieux à un agent (famille « Déléguer ») ?',
          options: [
            'Virer de l’argent à un fournisseur',
            'Lire 40 factures PDF d’un dossier et en faire un tableau récapitulatif, en montrant le plan d’abord',
            'Répondre à la place du directeur à un client important sans relecture',
            'Supprimer les anciens fichiers de l’entreprise',
          ],
          answer: 1,
          explain: 'Tâche répétitive, bien définie, vérifiable, sans argent ni envoi ni suppression : c’est le terrain idéal d’un agent.',
        },
      ],
    },

    cadre: {
      title: '11 · Données et cadre légal',
      questions: [
        {
          q: 'Vous voulez faire rédiger un courrier à un client en retard de paiement. Que transmettez-vous à l’IA ?',
          options: [
            'Son nom, son téléphone, son numéro de compte et sa situation familiale',
            'Le montant, le retard et l’objectif du courrier, avec [NOM] à compléter ensuite',
            'Une photo de sa pièce d’identité',
            'Son mot de passe client',
          ],
          answer: 1,
          explain: 'Principe de proportionnalité : l’IA n’a besoin que de ce qui sert à la tâche. Les éléments d’identification se complètent après, hors de l’IA.',
        },
        {
          q: 'Selon le Code du numérique, quelle autorité contrôle la protection des données personnelles ?',
          options: ['La BCEAO', 'L’APDP', 'L’OHADA', 'La DGI'],
          answer: 1,
          explain: 'L’Autorité de protection des données à caractère personnel (APDP) veille à l’application du Code du numérique, et contrôle et sanctionne.',
        },
        {
          q: 'Un vendeur sur WhatsApp propose « ChatGPT Plus » à 3 000 FCFA par mois via Mobile Money. Quel est le principal risque ?',
          options: [
            'Aucun, c’est une bonne affaire',
            'Un compte partagé : d’autres voient vos conversations et vos fichiers, et le compte peut être fermé à tout moment',
            'Le texte sera en anglais',
            'L’IA sera plus lente',
          ],
          answer: 1,
          explain: 'Pour un usage professionnel, on s’abonne soi-même, sur le site officiel, à son nom.',
        },
        {
          q: 'Vous recevez un message vocal de « votre directeur » demandant un transfert urgent. La voix est très ressemblante. Que faites-vous ?',
          options: [
            'J’exécute, c’est sa voix',
            'Je rappelle le directeur sur son numéro habituel avant toute action',
            'Je transfère la moitié',
            'Je réponds par message vocal',
          ],
          answer: 1,
          explain: 'Une voix peut être imitée à partir de quelques secondes d’enregistrement. Vérifiez toujours par un autre canal.',
        },
        {
          q: 'Vous avez généré une image d’un chantier « terminé » pour une publication. Que devez-vous éviter ?',
          options: [
            'La publier avec une légende claire « illustration »',
            'La présenter comme une vraie photo de votre réalisation',
            'Relire le texte présent dans l’image',
            'Vérifier les couleurs',
          ],
          answer: 1,
          explain: 'Présenter une image générée comme réelle peut tromper vos clients. Une illustration se présente comme telle.',
        },
      ],
    },

    final: {
      title: 'Évaluation finale',
      questions: [
        {
          q: 'Un comptable doit expliquer les états financiers annuels au gérant, qui n’est pas financier. Quelle approche ?',
          options: [
            'Demander à l’IA d’inventer des commentaires généraux',
            'Joindre les états (anonymisés), demander une note simple sans chiffre absent des documents, et vérifier chaque chiffre cité',
            'Copier un commentaire trouvé sur Internet',
            'Laisser l’IA envoyer la note directement',
          ],
          answer: 1,
          explain: 'Matière fournie, consigne de fidélité, vérification : la combinaison gagnante pour tout texte chiffré.',
        },
        {
          q: 'Quelle information ne doit jamais être collée dans une IA grand public sans cadre ?',
          options: [
            'Un article de presse public',
            'Les dossiers médicaux ou bancaires de clients',
            'Une question de culture générale',
            'Un texte que vous avez écrit et publié',
          ],
          answer: 1,
          explain: 'Données personnelles sensibles et secret professionnel : offre entreprise validée, ou anonymisation.',
        },
        {
          q: 'Vous voulez qu’une IA arrête d’écrire « Bien sûr ! » et des listes à puces partout, dans toutes ses réponses. Où le régler ?',
          options: [
            'Dans chaque message, à chaque fois',
            'Dans les instructions personnalisées (ou préférences) du compte',
            'Dans les paramètres de Windows',
            'C’est impossible',
          ],
          answer: 1,
          explain: 'Les instructions personnalisées s’appliquent à chaque réponse, pour toujours, jusqu’à ce que vous les changiez.',
        },
        {
          q: 'Une enseignante veut des exercices de mathématiques adaptés à ses élèves. Quel élément rend la demande vraiment efficace ?',
          options: [
            '« Fais des exercices. »',
            'Fournir l’extrait du programme officiel, le niveau, la taille de la classe et demander des situations locales en FCFA',
            'Demander 1 000 exercices',
            'Écrire la demande en anglais',
          ],
          answer: 1,
          explain: 'Sans le programme officiel, l’IA s’aligne sur des programmes étrangers. Le contexte local rend les exercices parlants.',
        },
        {
          q: 'Une personne gagne 2 500 FCFA de l’heure et paie un abonnement de 11 700 FCFA par mois. Combien d’heures doit-elle gagner par mois pour le rentabiliser ?',
          options: ['Moins de 5 heures', 'Environ 20 heures', 'Environ 50 heures', 'Ce n’est jamais rentable'],
          answer: 0,
          explain: '11 700 / 2 500 ≈ 4,7 heures par mois, soit environ une heure par semaine. Beaucoup d’utilisateurs formés gagnent plus.',
        },
        {
          q: 'L’IA résume votre réunion et écrit « le recrutement a été validé ». Vos notes disent « à revoir ». Que retenez-vous ?',
          options: [
            'L’IA a sans doute raison',
            'L’IA peut transformer un point ouvert en décision : on compare toujours les points clés avec la source',
            'Il faut arrêter d’utiliser l’IA',
            'Il faut demander à l’IA si elle est sûre',
          ],
          answer: 1,
          explain: 'La « mauvaise lecture » est une erreur fréquente des résumés. La comparaison avec la source est indispensable.',
        },
        {
          q: 'Vous voulez qu’un agent prépare un tableau à partir de factures sur votre ordinateur. Quel est le bon cadre ?',
          options: [
            'Accès complet à l’ordinateur et aux comptes bancaires',
            'Accès au seul dossier des factures, copie de sauvegarde, plan validé avant exécution, aucune suppression',
            'Le laisser faire la nuit sans contrôle',
            'Lui envoyer les factures par WhatsApp',
          ],
          answer: 1,
          explain: 'Les quatre règles des agents : un dossier précis, une sauvegarde, le plan d’abord, jamais d’argent ni de suppression non validée.',
        },
        {
          q: 'L’IA explique une procédure administrative locale avec beaucoup d’assurance. Que faites-vous ?',
          options: [
            'Je suis la procédure à la lettre',
            'Je demande ses sources, j’ouvre les liens, et je confirme sur le site officiel ou auprès du service concerné',
            'Je la partage à tous mes collègues',
            'Je lui demande de réécrire avec plus d’assurance',
          ],
          answer: 1,
          explain: 'Les procédures changent et l’IA connaît mal le contexte local. Source officielle, toujours.',
        },
        {
          q: 'Vous voulez garder un ton constant dans tous les courriers de votre service. La meilleure solution ?',
          options: [
            'Recommencer de zéro à chaque courrier',
            'Un Projet, un GPT ou un Gem avec votre modèle de courrier, des exemples et les consignes',
            'Changer d’IA à chaque message',
            'Écrire en anglais',
          ],
          answer: 1,
          explain: 'Les espaces persistants gardent consignes et exemples : plus besoin de tout répéter, et le ton reste stable.',
        },
        {
          q: 'Pour démarrer sans budget avec l’IA dans votre travail, que conseillez-vous ?',
          options: [
            'Acheter un compte à un revendeur',
            'Deux comptes gratuits bien réglés (entraînement désactivé), puis un abonnement le jour où les limites gênent vraiment',
            'Payer l’offre la plus chère pour être tranquille',
            'Attendre',
          ],
          answer: 1,
          explain: 'Gratuit d’abord, payant quand l’usage le justifie, et toujours à votre nom sur le site officiel.',
        },
        {
          q: 'Que signifie concrètement le terme « agent » ?',
          options: [
            'L’IA prend une voix d’agent secret',
            'L’IA enchaîne elle-même plusieurs actions (ouvrir, lire, créer, naviguer) pour accomplir une tâche complète',
            'Un humain répond à la place de l’IA',
            'Une offre réservée aux agents immobiliers',
          ],
          answer: 1,
          explain: 'Un agent planifie et exécute une suite d’étapes. Puissant, à condition de superviser.',
        },
        {
          q: 'Quelle est la posture professionnelle la plus juste face à l’IA ?',
          options: [
            'Lui confier les décisions',
            'La refuser par principe',
            'L’utiliser comme un collaborateur rapide et brillant, dont on vérifie et assume chaque production',
            'L’utiliser seulement pour les loisirs',
          ],
          answer: 2,
          explain: 'Vous restez l’auteur et le responsable. L’IA accélère, propose et challenge. Vous décidez, vérifiez et signez.',
        },
      ],
    },
  },

  profiler: {
    questions: [
      {
        q: 'Dans quel environnement passez-vous l’essentiel de votre journée de travail ?',
        options: [
          { label: 'Gmail, Google Docs, Drive, Meet', w: { gemini: 3 } },
          { label: 'Outlook, Word, Excel, Teams', w: { chatgpt: 2, claude: 2 } },
          { label: 'Surtout le téléphone et WhatsApp', w: { chatgpt: 2, gemini: 2 } },
          { label: 'Des documents longs et des rapports', w: { claude: 3 } },
        ],
      },
      {
        q: 'Quelle tâche voulez-vous accélérer en priorité ?',
        options: [
          { label: 'Rédiger des textes soignés : rapports, courriers, propositions', w: { claude: 3 } },
          { label: 'Produire des visuels et du contenu pour les réseaux sociaux', w: { chatgpt: 3, gemini: 1 } },
          { label: 'Trier mes mails et préparer mes réunions', w: { gemini: 3 } },
          { label: 'Analyser des documents ou des chiffres', w: { claude: 2, chatgpt: 1, gemini: 1 } },
        ],
      },
      {
        q: 'Avec quels contenus travaillez-vous le plus ?',
        options: [
          { label: 'Contrats, rapports, appels d’offres de plusieurs dizaines de pages', w: { claude: 3 } },
          { label: 'Vidéos, enregistrements, formations en ligne', w: { gemini: 3 } },
          { label: 'Photos, affiches, captures d’écran', w: { chatgpt: 2, gemini: 1 } },
          { label: 'Tableaux, chiffres, fichiers Excel', w: { chatgpt: 2, claude: 2 } },
        ],
      },
      {
        q: 'Comment préférez-vous échanger avec l’IA ?',
        options: [
          { label: 'À la voix, sur mon téléphone', w: { chatgpt: 3, gemini: 2 } },
          { label: 'Par écrit, avec des échanges approfondis', w: { claude: 3 } },
          { label: 'Directement dans mes outils Google', w: { gemini: 3 } },
          { label: 'Je veux qu’elle fasse des tâches complètes pour moi', w: { chatgpt: 2, claude: 2 } },
        ],
      },
      {
        q: 'Qu’est-ce qui compte le plus pour vous dans une réponse ?',
        options: [
          { label: 'Qu’elle soit juste, nuancée et bien écrite', w: { claude: 3 } },
          { label: 'Qu’elle soit rapide et que l’outil sache tout faire', w: { chatgpt: 3 } },
          { label: 'Qu’elle s’appuie sur des sources web récentes', w: { gemini: 2, chatgpt: 1 } },
          { label: 'Qu’elle utilise mes fichiers et mes mails', w: { gemini: 2, claude: 1 } },
        ],
      },
      {
        q: 'Quel budget envisagez-vous ?',
        options: [
          { label: 'Zéro pour l’instant : je commence en gratuit', w: { chatgpt: 1, gemini: 2 } },
          { label: 'Environ 11 700 FCFA par mois pour l’outil le plus polyvalent', w: { chatgpt: 2 } },
          { label: 'Environ 11 700 FCFA par mois pour la meilleure qualité de travail', w: { claude: 2 } },
          { label: 'C’est ma structure qui paie, il nous faut une offre équipe', w: { claude: 1, chatgpt: 1, gemini: 1 } },
        ],
      },
    ],
    results: {
      claude: {
        name: 'Claude',
        file: 'claude.html',
        why: 'Vous privilégiez la qualité du raisonnement et de l’écriture, et vous travaillez sur des contenus denses. Claude sera votre analyste et votre plume : rapports, synthèses, courriers, relecture critique.',
        plan: 'Commencez par Claude Free. Passez à Claude Pro (environ 11 700 FCFA par mois) quand les limites vous gênent, ou à Claude Team si vous êtes plusieurs à manipuler des données clients.',
        complement: 'pour créer des images ou résumer une vidéo.',
      },
      chatgpt: {
        name: 'ChatGPT',
        file: 'chatgpt.html',
        why: 'Vous voulez un outil qui sait tout faire : texte, images, voix, fichiers, recherche, tâches complètes. ChatGPT est le plus polyvalent, idéal pour un usage varié au quotidien, y compris sur téléphone.',
        plan: 'Commencez par ChatGPT Free. Passez à Plus (environ 11 700 FCFA par mois) quand il devient votre outil quotidien, ou à Business pour une équipe.',
        complement: 'pour les textes longs et délicats où la qualité d’écriture prime.',
      },
      gemini: {
        name: 'Gemini',
        file: 'gemini.html',
        why: 'Votre quotidien passe par Google. Gemini vous fera gagner du temps sans changer d’outil : mails, documents, réunions, vidéos et recherches au même endroit.',
        plan: 'Commencez par Gemini gratuit. Google AI Pro (environ 11 700 FCFA par mois, 5 To inclus) pour un usage intensif, ou Google Workspace pour votre structure.',
        complement: 'pour les rédactions exigeantes ou les visuels hors Google.',
      },
    },
  },

  tasks: [
    { label: 'Rédiger un rapport', best: 'claude', why: 'Écriture la plus naturelle et la mieux structurée, respect fin des consignes de ton. Très bon pour réécrire, condenser et argumenter.', alt: 'chatgpt', altWhy: 'Très bon aussi, mais demandez-lui explicitement d’éviter les listes à puces et les formules toutes faites.' },
    { label: 'Analyser un long PDF', best: 'claude', why: 'Lecture fidèle de documents de plusieurs centaines de pages, citations précises et repérage des incohérences.', alt: 'gemini', altWhy: 'Énorme capacité de lecture, idéale pour croiser plusieurs gros documents à la fois.' },
    { label: 'Créer une image', best: 'chatgpt', why: 'Génération et retouche d’images en conversation, avec un excellent rendu du texte dans l’image (affiches, visuels).', alt: 'gemini', altWhy: 'Nano Banana excelle en retouche et en cohérence, et le modèle d’images est intégré à Slides.' },
    { label: 'Résumer une réunion', best: 'gemini', why: 'Prise de notes automatique dans Google Meet, résumé et actions envoyés dans Docs, sans manipulation.', alt: 'claude', altWhy: 'À partir de vos notes ou d’une transcription, compte rendu fidèle, sans transformer les discussions en décisions.' },
    { label: 'Trier ses mails', best: 'gemini', why: 'Intégré à Gmail : résumés de fils, brouillons de réponse et recherche dans votre boîte en langage naturel.', alt: 'claude', altWhy: 'Le connecteur Gmail permet de chercher et de synthétiser vos échanges depuis Claude.' },
    { label: 'Analyser un Excel', best: 'chatgpt', why: 'L’analyse de données exécute du code pour calculer, croiser et tracer des graphiques fiables sur vos fichiers.', alt: 'claude', altWhy: 'Excellent en analyse, crée directement des fichiers Excel et s’intègre à Excel via Microsoft 365.' },
    { label: 'Faire une veille', best: 'gemini', why: 'Deep Research appuyé sur la recherche Google, et NotebookLM pour exploiter vos sources en citant chaque passage.', alt: 'chatgpt', altWhy: 'Deep Research très complet, rapports longs et bien sourcés.' },
    { label: 'Traiter un dossier de fichiers', best: 'claude', why: 'Cowork lit les fichiers d’un dossier de votre ordinateur et livre un tableau, un rapport ou une présentation.', alt: 'chatgpt', altWhy: 'ChatGPT Work, dans l’application de bureau Windows et Mac, fait le même type de travail, y compris en gratuit sur ordinateur.' },
    { label: 'Résumer une vidéo', best: 'gemini', why: 'Lecture native des vidéos YouTube et des fichiers vidéo : résumé, chapitres et citations horodatées.', alt: 'chatgpt', altWhy: 'Possible via la transcription, mais moins direct.' },
    { label: 'Préparer un oral', best: 'chatgpt', why: 'Le mode vocal permet de répéter à voix haute et de se faire challenger en temps réel, comme face à un client ou un jury.', alt: 'gemini', altWhy: 'Gemini Live offre une expérience vocale similaire, avec partage d’écran ou de caméra.' },
    { label: 'Document sensible', best: 'claude', why: 'Approche prudente, pas d’entraînement sur les données en offre Team et Enterprise, et grande rigueur sur le texte source.', alt: 'gemini', altWhy: 'Dans Workspace, les données restent couvertes par les garanties contractuelles de Google.' },
    { label: 'Publications réseaux sociaux', best: 'chatgpt', why: 'Texte, visuel et variantes au même endroit. Un GPT dédié garde votre ligne éditoriale.', alt: 'gemini', altWhy: 'Texte et images de qualité, pratique si vous travaillez déjà dans Google.' },
  ],
};
