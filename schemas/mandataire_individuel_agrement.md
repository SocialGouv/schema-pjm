### Agrément d'un mandataire individuel

|nom|type|description|format|enum|
|-|-|-|-|-|
|debut_activite_avant_2009|boolean|L'activité du mandataire individuel a-t-elle débuté avant 2009?<br>**donnée requise**|||
|annee_debut_activite|integer|Si début d'activité avant 2009, année de début de votre activité *(exemple: 2007)*|||
|annee_agrement|integer|Année d'agrément *(exemple: 2009)*<br>**donnée requise**|||
|departement_financeur|string|Code du département financeur *(exemple: 75)*<br>**donnée requise**|||
|departements_agrement|array|Liste des départements dans lesquels le mandataire individuel a un agrément, y compris le département financeur *(exemple: ['75', '94', '92'])*<br>**donnée requise**|||
