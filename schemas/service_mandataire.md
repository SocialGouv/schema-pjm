### Service mandataire

|nom|type|description|format|enum|
|-|-|-|-|-|
|id|integer|Identifiant unique emjpm du service mandataire<br>**example**: 134<br>**Obligatoire**|||
|num_siret|string|Numéro SIRET du service mandataire (14 chiffres).<br>**example**: 80295478500028<br>**Obligatoire**|`^\d{14}$`||
|nom_service|string|Nom du service mandataire<br>**example**: ATPFO 75<br>**Obligatoire**|||
|adresse|string|L'adresse du siège social du service mandataire<br>**example**: 14 Avenue Duquesne<br>**Obligatoire**|||
|code_postal|string|Code postal du siège social du service mandataire<br>**example**: 75350<br>**Obligatoire**|`^\d{5}$`||
|ville|string|Ville du siège social du service mandataire<br>**example**: Paris|||
|telephone|string|Numéro de téléphone du siège social du service mandataire<br>**example**: 01 40 56 60 00<br>**Obligatoire**|`^\0d{1} d{2} d{2} d{2} d{2}$`||
|email|string|Email du service mandataire<br>**example**: mandataire@monmail.com<br>**Obligatoire**|||
|responsable_service|string|Personne habilitée à représenter le service mandataire<br>**example**: Victoria Dupont<br>**Obligatoire**|||
|annee_creation|integer|Année de création du service mandataire<br>**example**: 2009<br>**Obligatoire**<br>**min: 1950** **max: 2020**|||
|convention_collective|string|Convention Nationale Collective de Travail<br>**Obligatoire**|||
|organisme_gestionnaire|string|Type d'organisme gestionnaire<br>**Obligatoire**||association<br>ccas<br>organisme_securite_sociale|
|affiliation_federation|boolean|Affiliation à une fédération<br>**Obligatoire**|||
|federation|string|Si affilier à une fédération<br>**Obligatoire**||unaf<br>unapei<br>fnat<br>autre_federation|
