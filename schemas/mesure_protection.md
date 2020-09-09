### Mesure de protection

|nom|type|description|format|enum|
|-|-|-|-|-|
|id|integer|Identifiant unique emjpm de la mesure de protection<br>**donnée requise**|||
|numero_rg|string|Numéro répertoire général (RG)<br>**donnée requise**|||
|numero_dossier|string| Le numéro de dossier correspond à un numéro interne du mandataire|||
|annee_naissance|integer|Date de naissance du majeur protégé *(exemple: 1938)*<br>**donnée requise**|||
|civilite|string|Civilité du majeur protégé<br>**donnée requise**||madame<br>monsieur|
|date_premier_mesure|date|Date de la première mise sous protection juridique *(exemple: 2020-02-01)*|`yyyy-MM-dd`||
|date_nomination|date|Date de jugement ou ordonnance de nomination *(exemple: 2020-02-01)*<br>**donnée requise**|`yyyy-MM-dd`||
|date_protection_en_cours|date|Date de la protection en cours *(exemple: 2020-02-01)*|`yyyy-MM-dd`||
|date_fin_mesure|date|Date de fin de la mesure de protection *(exemple: 2020-02-01)*|`yyyy-MM-dd`||
|resultat_revision|string|Résultat de la révision de la mesure de protection||mainlevee<br>reconduction<br>aggravation<br>allegement<br>dessaisissement_famille<br>dessaisissement_autre_mjpm|
|cause_sortie|string|Causes de sortie de la mesure de protection||mainlevee<br>deces<br>caducite<br>dessaisissement_famille<br>dessaisissement_autre_mjpm|
|tribunal_siret|string|Siret du tribunal ayant attribué la mesure de protection.<br>**donnée requise**|`^\d{14}$`||
|tribunal_cabinet|string|Cabinet du tribunal ayant attribué la mesure de protection.|||
|antenne_id|integer|Dans le cas d'un service mandataire, identifiant unique emjpm de l'antenne'|||
