# Schéma de données de la Protection Juridique des Majeurs (PJM)

## Liste des données des tables de référence

- [Sexe](./datas/sexe.csv)
- [Aides sociales](./datas/aide-sociale.csv)
- [Causes de sortie de dispositif](./datas/cause-sortie.csv)
- [Champs de la mesure](./datas/champs-mesure.csv)
- [Fédérations des services mandataires](./datas/federation-service.csv)
- [Lieux d'exercice d'un MJPM](./datas/lieu-exercice-mjpm.csv)
- [Lieux d'hébergement d'un majeur](./datas/lieu-hebergement-majeur.csv)
- [Natures d'une mesure](./datas/nature-mesure.csv)
- [Organismes gestionnaires](./datas/organisme-gestionnaire.csv)
- [Résultats d'une révision d'une mesure](./datas/resultat-revision-mesure.csv)
- [Types d'établissement](./datas/type-etablissement.csv)

## Schéma de données

### Mandataire individuel

|nom|type|description|contrainte|
|-|-|-|-|
|id|integer|Identifiant unique du mandataire individuel dans eMJPM<br>**example**: 134|donnée obligatoire|
|num_siret|string|Numéro SIRET du mandataire individuel (14 chiffres)<br>**format**: ^\d{14}$<br>**example**: 80295478500028|donnée obligatoire|
|email|string|Email du mandataire individuel<br>**example**: mandataire@monmail.com|donnée obligatoire|
|sexe|string|Sexe du mandataire individuel<br>**example**: H|donnée obligatoire|
|nom_naissance|string|Nom de naissance du mandataire individuel<br>**example**: Dupont|donnée obligatoire|
|nom_usage|string|Nom d'usage du mandataire individuel<br>**example**: Dupont|donnée obligatoire|
|prenom|string|Prénom d'usage du mandataire individuel<br>**example**: Thomas|donnée obligatoire|
|adresse|string|L'adresse du lieu de travail du mandataire individuel<br>**example**: 14 Avenue Duquesne|donnée obligatoire|
|code_postal|string|Code postal du lieu de travail du mandataire individuel<br>**format**: ^\d{5}$<br>**example**: 75350|donnée obligatoire|
|Ville|string|Ville du lieu de travail du mandataire individuel<br>**example**: Paris|donnée optionnel|
|telephone_bureau|string|Numéro de téléphone du bureau du mandataire individuel<br>**format**: ^\0d{1} d{2} d{2} d{2} d{2}$<br>**example**: 01 40 56 60 00|donnée obligatoire|
|telephone_mobile|string|Numéro de téléphone mobile du mandataire individuel<br>**format**: ^\0d{1} d{2} d{2} d{2} d{2}$<br>**example**: 06 60 56 60 00|donnée optionnel|

### Service mandataire

|nom|type|description|contrainte|
|-|-|-|-|
|id|integer|Identifiant unique du service mandataire dans eMJPM<br>**example**: 134|donnée obligatoire|
|num_siret|string|Numéro SIRET du service mandataire (14 chiffres).<br>**format**: ^\d{14}$<br>**example**: 80295478500028|donnée obligatoire|
|nom_service|string|Nom du service mandataire<br>**example**: ATPFO 75|donnée obligatoire|
|adresse|string|L'adresse du siège social du service mandataire<br>**example**: 14 Avenue Duquesne|donnée obligatoire|
|code_postal|string|Code postal du siège social du service mandataire<br>**format**: ^\d{5}$<br>**example**: 75350|donnée obligatoire|
|Ville|string|Ville du siège social du service mandataire<br>**example**: Paris|donnée optionnel|
|telephone|string|Numéro de téléphone du siège social du service mandataire<br>**format**: ^\0d{1} d{2} d{2} d{2} d{2}$<br>**example**: 01 40 56 60 00|donnée obligatoire|
|email|string|Email du service mandataire<br>**example**: mandataire@monmail.com|donnée obligatoire|
|responsable_service|string|Personne habilitée à représenter le service mandataire<br>**example**: Victoria Dupont|donnée obligatoire|
|annee_creation|integer|Année de création du service mandataire<br>**example**: 2009|donnée obligatoire|
|convention_collective|string|Convention Nationale Collective de Travail|donnée obligatoire|
|organisme_gestionnaire|string|Type d'organisme gestionnaire|donnée obligatoire|
|affiliation_federation|boolean|Affiliation à une fédération|donnée obligatoire|
|federation|string|Si affilier à une fédération|donnée obligatoire|

