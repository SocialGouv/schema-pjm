### Service mandataire

|nom|type|description|format|enum|
|-|-|-|-|-|
|id|integer|Identifiant unique emjpm du service mandataire *(example: 134)*<br>**donnée requise**|||
|num_siret|string|Numéro SIRET du service mandataire (14 chiffres). *(example: 80295478500028)*<br>**donnée requise**|`^\d{14}$`||
|nom_service|string|Nom du service mandataire *(example: ATPFO 75)*<br>**donnée requise**|||
|adresse|string|L'adresse du siège social du service mandataire *(example: 14 Avenue Duquesne)*<br>**donnée requise**|||
|code_postal|string|Code postal du siège social du service mandataire *(example: 75350)*<br>**donnée requise**|`^\d{5}$`||
|ville|string|Ville du siège social du service mandataire *(example: Paris)*|||
|telephone|string|Numéro de téléphone du siège social du service mandataire *(example: 01 40 56 60 00)*<br>**donnée requise**|`^\0d{1} d{2} d{2} d{2} d{2}$`||
|email|string|Email du service mandataire *(example: mandataire@monmail.com)*<br>**donnée requise**|||
|responsable_service|string|Personne habilitée à représenter le service mandataire *(example: Victoria Dupont)*<br>**donnée requise**|||
|annee_creation|integer|Année de création du service mandataire *(example: 2009)*<br>**donnée requise**<br>**min: 1950**, **max: 2020**|||
|convention_collective|string|Convention Nationale Collective de Travail<br>**donnée requise**|||
|organisme_gestionnaire|string|Type d'organisme gestionnaire<br>**donnée requise**||association<br>ccas<br>organisme_securite_sociale|
|affiliation_federation|boolean|Affiliation à une fédération<br>**donnée requise**|||
|federation|string|Si affilier à une fédération<br>**donnée requise**||unaf<br>unapei<br>fnat<br>autre_federation|
