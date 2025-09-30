(function(globals) {

  var django = globals.django || (globals.django = {});

  
  django.pluralidx = function(count) { return (count == 1) ? 0 : 1; };
  

  /* gettext library */

  django.catalog = django.catalog || {};
  
  var newcatalog = {
    "%(sel)s of %(cnt)s selected": [
      "%(sel)s sur %(cnt)s s\u00e9lectionn\u00e9",
      "%(sel)s sur %(cnt)s s\u00e9lectionn\u00e9s"
    ],
    "6 a.m.": "6:00",
    "6 p.m.": "18:00",
    "<p> A bug to report? A typo to point out? An improvement to suggest? </p> <p> Send a ticket to the Schooding team via this button, and follow its progress. </p>": "<p>Un bug \u00e0 signaler ? Une typo \u00e0 faire remarquer ? Une am\u00e9lioration \u00e0 proposer ? </p><p>Envoyez un ticket \u00e0 l'\u00e9quipe Schooding via ce bouton, et suivez l'\u00e9volution de celui-ci.</p>",
    "<p> A drop-down menu allowing quick access to the functionalities linked to the courses. </p>": "<p>Un menu d\u00e9roulant pour un acc\u00e8s rapide aux fonctionnalit\u00e9s li\u00e9es aux cours. </p>",
    "<p> A drop-down menu allowing quick access to the managers of the various entities for which you are responsible. </p>": "<p>Un menu d\u00e9roulant permettant l'acc\u00e8s rapide aux gestionnaires des diff\u00e9rentes entit\u00e9s dont vous avez la charge.</p>",
    "<p> A drop-down menu allowing quick access to your students. </p>": "<p> Un menu d\u00e9roulant pour un acc\u00e8s rapide \u00e0 vos \u00e9tudiants.</p>",
    "<p> Average student progress is shown here. </p> <p> Color may vary from red to green. Red indicates that the pupils are behind schedule, green means that everything is fine. </p>": "<p>La progression moyenne des \u00e9tudiants est indiqu\u00e9e ici</p> <p>La couleur varie du rouge au vert. Rouge indique qu'ils sont en retard par rapport au planning, vert indique que tout va bien. </p>",
    "<p> By clicking on the current exercise, you access a menu allowing you to change the exercise. </p>": "<p>En cliquant sur l'exercice actuel, vous acc\u00e9dez \u00e0 un menu permettant de changer d'exercice.</p>",
    "<p> By clicking on the current session, you access a menu allowing you to change the session. </p>": "<p>En cliquant sur la session actuelle, vous acc\u00e9dez \u00e0 un menu permettant de changer de session.</p>",
    "<p> Click on a student will display the student menu. </p>": "<p> Cliquer sur un \u00e9l\u00e8ve fait appara\u00eetre son menu. </p>",
    "<p> Click on the course title to access the editing panel. </p>": "<p> Cliquer sur le titre du cours permet d'acc\u00e9der \u00e0 la vue d'\u00e9dition du contenu.</p>",
    "<p> Click on the icon to access the general view of each student's progress. </p>": "<p>Cliquer sur cette ic\u00f4ne permet d'acc\u00e9der \u00e0 la vue de progression g\u00e9n\u00e9rale.</p>",
    "<p> Click on this button open a dialog to send a message to the student.</p>": "<p> Cliquer sur ce lien ouvre une fen\u00eatre pour envoyer un message \u00e0 l'\u00e9l\u00e8ve.</p>",
    "<p> Click on this button to access the general view of each student's progress. </p>": "<p> Cliquez sur ce bouton pour acc\u00e9der \u00e0 la vue de progression g\u00e9n\u00e9rale.</p>",
    "<p> Click on this link redirect you to the last exercise of the highlighted student.</p>": "<p>Cliquer sur ce lien vous redirigera sur le dernier exercice de l'\u00e9l\u00e8ve.</p>",
    "<p> Click on this link to go to the student's info page. </p>": "<p> Cliquer sur ce lien vous redirigera vers la page d'informations de l'\u00e9l\u00e8ve. </p>",
    "<p> Click this button to view messages sent by teachers. </p>": "<p> Cliquer sur ce bouton pour voir les messages pr\u00e9c\u00e9demment envoy\u00e9s par vos enseignants.</p>",
    "<p> Click this button to view the course from a student perspective. </p>": "<p>Cliquer sur ce bouton permet de voir le cours d'un point de vue \u00e9tudiant, et d'essayer soi-m\u00eame les exercices.</p>",
    "<p> Clicking on one of the courses will take you to its page. </p>": "<p>Cliquer sur un cours vous dirige sur sa page</p>",
    "<p> Clicking on the icon returns you to the course page. </p>": "<p>Cliquer sur l'icone vous renvoit \u00e0 la page du cours.</p>",
    "<p> Clicking on this button allows you to access the list of the last exercises seen and attempted by each student. </p>": "<p>Cliquez sur ce bouton pour acc\u00e9der \u00e0 la page de suivi des \u00e9tudiants</p>",
    "<p> Here is the list of courses concerning you. </p>": "<p> Ici se trouve la liste des cours vous concernant.</p>",
    "<p> If you need help, you can ask the teacher a question here. </p> ": "<p>Si vous avez besoin d'aide, vous pouvez poser ici une question \u00e0 l'enseignant.</p><p>Celui-ci vous r\u00e9pondra d\u00e8s que possible.</p>  ",
    "<p> In this section, you will find the course materials relating to the session. </p>": "<p>Dans cette partie, vous trouvez les supports de cours relatifs \u00e0 la session.</p>",
    "<p> Legal notices. Information on the use of your data and the management of cookies. </p> <p> All information is available by clicking on this button. </p>": "<p>Mentions L\u00e9gales. Informations sur l'utilisation de vos donn\u00e9es et la gestion des cookies. </p><p>Toutes les informations sont disponibles en cliquant sur ce bouton.</p>",
    "<p> To create new exercises, you can use this menu. </p>": "<p>Pour cr\u00e9er de nouveaux exercices, vous pouvez utiliser ce menu.</p>",
    "<p> Via this menu, you can manage your profile, change your password and profile photo, and log out. </p>": "<p>Via ce menu, vous pouvez g\u00e9rer votre profil, changer de mot de passe et de photo de profil, et vous d\u00e9connecter.</p>",
    "<p> Welcome to <strong>Schooding</strong>!</p> <p> You are on the home page, which allows: <ul> <li> to access the different courses concerning you </ li> <li> to view the next sessions you are involved in</li> </ul> </p>": "<p> Bienvenue sur <strong>Schooding</strong>!</p> <p>Vous \u00eates actuellement sur la page d'accueil, qui permet: <ul> <li>d'acc\u00e9der \u00e0 vos diff\u00e9rents cours </ li> <li>de voir les prochaines sessions qui vous concernent</li> </ul> </p>",
    "<p>A drop-down menu allows you to access the courses corresponding to each of the promotions to which you belong.</p>": "<p>A drop-down menu allows you to access the courses corresponding to each of the promotions to which you belong.</p>",
    "<p>Click on the icon to see the course from a student view point, and try the exercices yourself. </p>": "<p>Cliquer sur cette ic\u00f4ne permet de voir le cours d'un point de vue \u00e9tudiant, et d'essayer soi-m\u00eame les exercices.</p>",
    "<p>Clicking on the icon returns you to the home page (the one where you are currently).</p>": "<p>Cliquer sur l'icone permet de revenir sur la page d'accueil (celle ou vous vous trouvez actuellement).</p>",
    "<p>Each element of this kind represent one of your courses.</p><p> Click on it to access the course content.</p>": "<p>Chaque \u00e9l\u00e9ment de ce type repr\u00e9sente un de vos cours.</p><p> Cliquez dessus pour acc\u00e9der au contenu.</p>",
    "<p>Type the name of your student here to filter the list. </p> <p>You can then use the up and down arrows to choose the student. Pressing 'Enter' will automatically redirect you to the last exercise of the highlighted student. You can use the shortcut <code>Ctrl+E</code> to open the list.</p>": "<p>Tapez le nom de votre \u00e9tudiant ici pour filtrer la liste.</p> <p>Vous pouvez ensuite utiliser les fl\u00e8ches haut et bas pour s\u00e9lectionner l'\u00e9l\u00e8ve de votre choix. Appuyer sur 'Entr\u00e9e' vous redirigera sur le dernier exercice de l'\u00e9l\u00e8ve. Vous pouvez aussi utiliser le raccourci <code>Ctrl+E</code> pour ouvrir la liste.</p>",
    "<p>With this progress bar, you can watch the average progression in your group.</p>": "<p>Avec cette barre de progression, vous pouvez surveiller la progression de votre classe.</p>",
    "<p>With this progress bar, you can watch your progression in the course.</p><p> The color indicate if you are late (red) or not (green).</p>": "<p>Avec cette barre de progression, vous pouvez surveiller votre avanc\u00e9e dans le cours.</p><p> La couleur indique si vous \u00eates en retard (rouge) ou non (vert).</p>",
    "<p>You can restart the visit at any time by clicking on this button.</p>": "<p>Vous pouvez relancer la visite guid\u00e9e \u00e0 tout moment en cliquant sur ce bouton.</p>",
    "Access to courses": "Acc\u00e8s aux cours",
    "Access to promotion courses": "Acc\u00e8s aux cours de la promotion",
    "Access to student infos": "Acc\u00e8s aux infos de l'\u00e9tudiant",
    "Account Settings": "Gestion du profil",
    "Administrative": "Administratif",
    "April": "Avril",
    "Attendance": "Emargement",
    "August": "Ao\u00fbt",
    "Available %s": "%s disponible(s)",
    "Back": "Retour",
    "Back to course main page": "Retour \u00e0 la page du cours",
    "Back to home": "Retour \u00e0 l'accueil",
    "Cancel": "Annuler",
    "Chat": "Chat enseignant",
    "Choose": "Choisir",
    "Choose a Date": "Choisir une date",
    "Choose a Time": "Choisir une heure",
    "Choose a time": "Choisir une heure",
    "Choose all": "Tout choisir",
    "Chosen %s": "Choix des \u00ab\u00a0%s \u00bb",
    "Click to choose all %s at once.": "Cliquez pour choisir tous les \u00ab\u00a0%s\u00a0\u00bb en une seule op\u00e9ration.",
    "Click to remove all chosen %s at once.": "Cliquez pour enlever tous les \u00ab\u00a0%s\u00a0\u00bb en une seule op\u00e9ration.",
    "Content": "Contenu",
    "Course": "Cours",
    "Course Access": "Acc\u00e8s aux cours",
    "Courses": "Cours",
    "Create Exercices": "Cr\u00e9er des exercices",
    "December": "D\u00e9cembre",
    "Documents": "Documents",
    "Edit": "Edition",
    "Edit content": "Editer contenu",
    "Edit main informations": "Editer infos principales",
    "Edit staff": "Editer staff",
    "Error : you don't have the right to do this exercice !": "Erreur : vous n'avez pas le droit de faire cet exercice !",
    "Evaluation": "Evaluation",
    "Exercice choice": "Choix de l'exercice",
    "Exercices": "Exercices",
    "February": "F\u00e9vrier",
    "Filter": "Filtrer",
    "Grading": "Notation",
    "Hello !": "Hello !",
    "Hide": "Masquer",
    "Infos": "Infos",
    "January": "Janvier",
    "July": "Juillet",
    "June": "Juin",
    "Last exercice": "Dernier exercice",
    "Last exercices": "Derniers exercices",
    "Legal": "Mentions l\u00e9gales",
    "Managers": "Gestionnaires",
    "March": "Mars",
    "May": "Mai",
    "Messages": "Messages",
    "Midnight": "Minuit",
    "Monitoring": "Surveillance",
    "Next": "Suivant",
    "Noon": "Midi",
    "Note: You are %s hour ahead of server time.": [
      "Note\u00a0: l'heure du serveur pr\u00e9c\u00e8de votre heure de %s heure.",
      "Note\u00a0: l'heure du serveur pr\u00e9c\u00e8de votre heure de %s heures."
    ],
    "Note: You are %s hour behind server time.": [
      "Note\u00a0: votre heure pr\u00e9c\u00e8de l'heure du serveur de %s heure.",
      "Note\u00a0: votre heure pr\u00e9c\u00e8de l'heure du serveur de %s heures."
    ],
    "November": "Novembre",
    "Now": "Maintenant",
    "October": "Octobre",
    "Once again !": "Encore une fois !",
    "Personnal progression": "Progression personnelle",
    "Plagiarism detection": "D\u00e9tection de plagiat",
    "Progression": "Progression",
    "Promotion progression": "Progression de la promotion",
    "Remove": "Enlever",
    "Remove all": "Tout enlever",
    "Scheduling": "Planification",
    "Search": "Recherche",
    "Send message": "Envoi de message",
    "September": "Septembre",
    "Server Error...<br>Please retry in a few seconds !": "Erreur serveur...<br>Merci de reessayer dans quelques instants !",
    "Session choice": "Choix de la session",
    "Show": "Afficher",
    "Statistics": "Statistiques",
    "Stop": "Stop",
    "Student Point of View": "Point de vue \u00e9tudiant",
    "Student menu": "Menu de l'\u00e9tudiant",
    "Student monitoring": "Suivi des \u00e9tudiants",
    "Student view": "Vue \u00e9tudiante",
    "Students options": "Options des \u00e9tudiants",
    "Test the exam": "Tester l'examen",
    "This is the list of available %s. You may choose some by selecting them in the box below and then clicking the \"Choose\" arrow between the two boxes.": "Ceci est une liste des \u00ab\u00a0%s\u00a0\u00bb disponibles. Vous pouvez en choisir en les s\u00e9lectionnant dans la zone ci-dessous, puis en cliquant sur la fl\u00e8che \u00ab\u00a0Choisir\u00a0\u00bb entre les deux zones.",
    "This is the list of chosen %s. You may remove some by selecting them in the box below and then clicking the \"Remove\" arrow between the two boxes.": "Ceci est la liste des \u00ab\u00a0%s\u00a0\u00bb choisi(e)s. Vous pouvez en enlever en les s\u00e9lectionnant dans la zone ci-dessous, puis en cliquant sur la fl\u00e8che \u00ab Enlever \u00bb entre les deux zones.",
    "Tickets": "Tickets",
    "Today": "Aujourd'hui",
    "Tomorrow": "Demain",
    "Type into this box to filter down the list of available %s.": "\u00c9crivez dans cette zone pour filtrer la liste des \u00ab\u00a0%s\u00a0\u00bb disponibles.",
    "Type your message...": "Tapez votre message...",
    "Yesterday": "Hier",
    "You have selected an action, and you haven't made any changes on individual fields. You're probably looking for the Go button rather than the Save button.": "Vous avez s\u00e9lectionn\u00e9 une action, et vous n'avez fait aucune modification sur des champs. Vous cherchez probablement le bouton Envoyer et non le bouton Enregistrer.",
    "You have selected an action, but you haven't saved your changes to individual fields yet. Please click OK to save. You'll need to re-run the action.": "Vous avez s\u00e9lectionn\u00e9 une action, mais vous n'avez pas encore sauvegard\u00e9 certains champs modifi\u00e9s. Cliquez sur OK pour sauver. Vous devrez r\u00e9appliquer l'action.",
    "You have unsaved changes on individual editable fields. If you run an action, your unsaved changes will be lost.": "Vous avez des modifications non sauvegard\u00e9es sur certains champs \u00e9ditables. Si vous lancez une action, ces modifications vont \u00eatre perdues.",
    "codingtest tour !": "tour coding test !",
    "one letter Friday\u0004F": "V",
    "one letter Monday\u0004M": "L",
    "one letter Saturday\u0004S": "S",
    "one letter Sunday\u0004S": "D",
    "one letter Thursday\u0004T": "J",
    "one letter Tuesday\u0004T": "M",
    "one letter Wednesday\u0004W": "M"
  };
  for (var key in newcatalog) {
    django.catalog[key] = newcatalog[key];
  }
  

  if (!django.jsi18n_initialized) {
    django.gettext = function(msgid) {
      var value = django.catalog[msgid];
      if (typeof(value) == 'undefined') {
        return msgid;
      } else {
        return (typeof(value) == 'string') ? value : value[0];
      }
    };

    django.ngettext = function(singular, plural, count) {
      var value = django.catalog[singular];
      if (typeof(value) == 'undefined') {
        return (count == 1) ? singular : plural;
      } else {
        return value.constructor === Array ? value[django.pluralidx(count)] : value;
      }
    };

    django.gettext_noop = function(msgid) { return msgid; };

    django.pgettext = function(context, msgid) {
      var value = django.gettext(context + '\x04' + msgid);
      if (value.indexOf('\x04') != -1) {
        value = msgid;
      }
      return value;
    };

    django.npgettext = function(context, singular, plural, count) {
      var value = django.ngettext(context + '\x04' + singular, context + '\x04' + plural, count);
      if (value.indexOf('\x04') != -1) {
        value = django.ngettext(singular, plural, count);
      }
      return value;
    };

    django.interpolate = function(fmt, obj, named) {
      if (named) {
        return fmt.replace(/%\(\w+\)s/g, function(match){return String(obj[match.slice(2,-2)])});
      } else {
        return fmt.replace(/%s/g, function(match){return String(obj.shift())});
      }
    };


    /* formatting library */

    django.formats = {
    "DATETIME_FORMAT": "j F Y H:i",
    "DATETIME_INPUT_FORMATS": [
      "%d/%m/%Y %H:%M:%S",
      "%d/%m/%Y %H:%M:%S.%f",
      "%d/%m/%Y %H:%M",
      "%d/%m/%Y",
      "%d.%m.%Y %H:%M:%S",
      "%d.%m.%Y %H:%M:%S.%f",
      "%d.%m.%Y %H:%M",
      "%d.%m.%Y",
      "%Y-%m-%d %H:%M:%S",
      "%Y-%m-%d %H:%M:%S.%f",
      "%Y-%m-%d %H:%M",
      "%Y-%m-%d"
    ],
    "DATE_FORMAT": "j F Y",
    "DATE_INPUT_FORMATS": [
      "%d/%m/%Y",
      "%d/%m/%y",
      "%d.%m.%Y",
      "%d.%m/%y",
      "%Y-%m-%d"
    ],
    "DECIMAL_SEPARATOR": ",",
    "FIRST_DAY_OF_WEEK": 1,
    "MONTH_DAY_FORMAT": "j F",
    "NUMBER_GROUPING": 3,
    "SHORT_DATETIME_FORMAT": "j N Y H:i",
    "SHORT_DATE_FORMAT": "j N Y",
    "THOUSAND_SEPARATOR": "\u00a0",
    "TIME_FORMAT": "H:i",
    "TIME_INPUT_FORMATS": [
      "%H:%M:%S",
      "%H:%M:%S.%f",
      "%H:%M"
    ],
    "YEAR_MONTH_FORMAT": "F Y"
  };

    django.get_format = function(format_type) {
      var value = django.formats[format_type];
      if (typeof(value) == 'undefined') {
        return format_type;
      } else {
        return value;
      }
    };

    /* add to global namespace */
    globals.pluralidx = django.pluralidx;
    globals.gettext = django.gettext;
    globals.ngettext = django.ngettext;
    globals.gettext_noop = django.gettext_noop;
    globals.pgettext = django.pgettext;
    globals.npgettext = django.npgettext;
    globals.interpolate = django.interpolate;
    globals.get_format = django.get_format;

    django.jsi18n_initialized = true;
  }

}(this));


