questions = [
  {q:'Quelle balise HTML est utilisée pour créer un lien ?', opts:['<link>','<a>','<href>','<url>'], ans:1},
  {q:'Quelle balise représente le titre principal ?', opts:['<heading>','<h1>','<title>','<head>'], ans:1},
  {q:'Où doit-on placer la balise &lt;meta charset="utf-8"&gt; ?', opts:['Dans body','Dans head','Après html','Dans footer'], ans:1},
  {q:'Quelle propriété CSS change la couleur du texte ?', opts:['background-color','font-style','color','text-color'], ans:2},
  {q:'Comment sélectionner id="main" en CSS ?', opts:['.main','main','#main','*main'], ans:2},
  {q:'Quelle propriété définit l\'espace intérieur ?', opts:['margin','padding','gap','spacing'], ans:1},
  {q:'Quelle instruction JS est la plus moderne ?', opts:['var','let','const','let et const'], ans:3},
  {q:'Quel attribut permet d’ouvrir un lien dans un nouvel onglet ?', opts:['href','target','rel','src'], ans:0},
  {q:'Quelle méthode ajoute à la fin d\'un tableau ?', opts:['push()','pop()','shift()','unshift()'], ans:0},
  {q: 'Comment écrire un commentaire sur une seule ligne en JavaScript ?', opts: ['<!-- commentaire -->', '/* commentaire */', '// commentaire', '\\ commentaire'], ans: 2, exp: 'Utilise // pour un commentaire sur une seule ligne en JS.'},
  {q:'Quelle balise lie une feuille CSS ?', opts:['<style>','<link>','<script>','<css>'], ans:1},
  {q:'Quelle unité est relative à la racine ?', opts:['px','em','rem','%'], ans:2},
  {q:'Quelle balise contient du JavaScript ?', opts:['<script>','<js>','<code>','<javascript>'], ans:0},
  {q:'Quelle propriété cache mais garde l\'espace ?', opts:['display:none','visibility:hidden','opacity:0','none'], ans:1},
  {q:'Que fait le sélecteur .card > p ?', opts:['Tous les p','Enfants directs','Classe p','Après card'], ans:1},
  {q:'À quoi sert document.getElementById ?', opts:['Sélectionner un élément par son identifiant','Créer un nouvel élément HTML','Modifier le style CSS','Afficher une alerte'], ans:1},
  {q:'getElementById retourne quoi si absent ?', opts:['vide','null','undefined','erreur'], ans:1},
  {q:'Comment convertir "42" en nombre ?', opts:['Number()','+','parseInt()','Toutes'], ans:3},
  {q:'Comment empêcher un formulaire ?', opts:['return false','preventDefault','supprimer action','1 et 2'], ans:3},
  {q:'Comment centrer avec flexbox ?', opts:['align-items','justify-content','text-align','margin'], ans:1}
];

container = document.getElementById('questionsContainer');
result = document.getElementById('result');

function afficherQuestions() {
  for (i = 0; i < questions.length; i++) {
    section = document.createElement('div');
    section.className = 'question';

    titre = document.createElement('p');
    titre.innerHTML = '<strong>Q' + (i+1) + '.</strong> ' + questions[i].q;

    section.appendChild(titre);

    for (j = 0; j < questions[i].opts.length; j++) {
      label = document.createElement('label');
      label.className = 'opt';

      input = document.createElement('input');
      input.type = 'radio';
      input.name = 'q' + i;
      input.value = j;

      label.appendChild(input);
      label.appendChild(document.createTextNode(' ' + questions[i].opts[j]));

      section.appendChild(label);
      
      section.appendChild(document.createElement('br'));
    }

    container.appendChild(section);
  }
}

function corriger() {
  score = 0;

  for (i = 0; i < questions.length; i++) {
    radios = document.getElementsByName('q' + i);

    for (j = 0; j < radios.length; j++) {
      if (radios[j].checked && j == questions[i].ans) {
        score = score + 1;
      }
    }
  }

  result.hidden = false;
  result.innerHTML = 'Votre score est : ' + score + ' / ' + questions.length;
}


afficherQuestions();