### Mesure de protection

|nom|type|description|format|enum|
|-|-|-|-|-|
|uuid|string|Identifiant unique emjpm de la mesure de protection<br>**donnée requise**|||
|numero_rg|string|Numéro répertoire général (RG)<br>**donnée requise**|||
|numero_dossier|string| Le numéro de dossier correspond à un numéro interne du mandataire|||
|date_naissance|date|Date de naissance du majeur protégé *(example: 22/05/1938)*<br>**donnée requise**|||
|civilite|string|Civilité du majeur protégé<br>**donnée requise**||madame<br>monsieur|
|date_premier_protection|date|Date de la première mise sous protection juridique *(example: 01/02/2020)*<br>**donnée requise**|||
|date_nomination|date|Date de jugement ou ordonnance de nomination *(example: 01/02/2020)*<br>**donnée requise**|||
|date_revision|date|Date de revision. Peut-etre égal à la de jugement ou ordonnance de nomination *(example: 01/02/2020)*|||
|date_fin_mesure|date|Date de fin de la mesure de protection *(example: 01/02/2020)*|||
|resultat_revision|string|Résultat de la révision de la mesure de protection||mainlevee<br>masp<br>reduction<br>changement_mesure<br>transfert_famille<br>transfert_autre_mjpm|
|cause_sortie|string|Causes de sortie de la mesure de protection||mainlevee<br>deces<br>masp<br>caducite|
|cause_sortie_mainlevee_detail|string|Causes de sortie de la mesure de protection, détail de la main levée||masp<br>maj|
|tribunal_siret|string|Siret du tribunal ayant attribué la mesure de protection.<br>**donnée requise**|`^\d{14}$`||
|tribunal_cabinet|string|Cabinet du tribunal ayant attribué la mesure de protection.|||
|niveau_ressource|integer|Niveau de ressource correspondant à l'assiette<br>**donnée requise**|||
|prestations_sociales|array|Prestations sociales perçues<br>**donnée requise**||AAH<br>PCH<br>ASI<br>RSA<br>ALS<br>APL<br>ASPA<br>APA|
|antenne_uuid|string|Dans le cas d'un service mandataire, identifiant unique emjpm de l'antenne'|||
