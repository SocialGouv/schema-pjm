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

|nom|type|description|format|enum|
|-|-|-|-|-|
|id|integer|Identifiant unique du mandataire individuel dans eMJPM<br>**example**: 134|`undefined`||
|num_siret|string|Numéro SIRET du mandataire individuel (14 chiffres)<br>**example**: 80295478500028|`^\d{14}$`||
|email|string|Email du mandataire individuel<br>**example**: mandataire@monmail.com|`undefined`||
|sexe|string|Sexe du mandataire individuel<br>**example**: H|`undefined`|H<br>F|
|nom_naissance|string|Nom de naissance du mandataire individuel<br>**example**: Dupont|`undefined`||
|nom_usage|string|Nom d'usage du mandataire individuel<br>**example**: Dupont|`undefined`||
|prenom|string|Prénom d'usage du mandataire individuel<br>**example**: Thomas|`undefined`||
|adresse|string|L'adresse du lieu de travail du mandataire individuel<br>**example**: 14 Avenue Duquesne|`undefined`||
|code_postal|string|Code postal du lieu de travail du mandataire individuel<br>**example**: 75350|`^\d{5}$`||
|Ville|string|Ville du lieu de travail du mandataire individuel<br>**example**: Paris|`undefined`||
|telephone_bureau|string|Numéro de téléphone du bureau du mandataire individuel<br>**example**: 01 40 56 60 00|`^\0d{1} d{2} d{2} d{2} d{2}$`||
|telephone_mobile|string|Numéro de téléphone mobile du mandataire individuel<br>**example**: 06 60 56 60 00|`^\0d{1} d{2} d{2} d{2} d{2}$`||

### Service mandataire

|nom|type|description|format|enum|
|-|-|-|-|-|
|id|integer|Identifiant unique du service mandataire dans eMJPM<br>**example**: 134|`undefined`||
|num_siret|string|Numéro SIRET du service mandataire (14 chiffres).<br>**example**: 80295478500028|`^\d{14}$`||
|nom_service|string|Nom du service mandataire<br>**example**: ATPFO 75|`undefined`||
|adresse|string|L'adresse du siège social du service mandataire<br>**example**: 14 Avenue Duquesne|`undefined`||
|code_postal|string|Code postal du siège social du service mandataire<br>**example**: 75350|`^\d{5}$`||
|Ville|string|Ville du siège social du service mandataire<br>**example**: Paris|`undefined`||
|telephone|string|Numéro de téléphone du siège social du service mandataire<br>**example**: 01 40 56 60 00|`^\0d{1} d{2} d{2} d{2} d{2}$`||
|email|string|Email du service mandataire<br>**example**: mandataire@monmail.com|`undefined`||
|responsable_service|string|Personne habilitée à représenter le service mandataire<br>**example**: Victoria Dupont|`undefined`||
|annee_creation|integer|Année de création du service mandataire<br>**example**: 2009|`undefined`||
|convention_collective|string|Convention Nationale Collective de Travail|`undefined`||
|organisme_gestionnaire|string|Type d'organisme gestionnaire|`undefined`|association<br>ccas<br>organisme_securite_sociale|
|affiliation_federation|boolean|Affiliation à une fédération|`undefined`||
|federation|string|Si affilier à une fédération|`undefined`|unaf<br>unapei<br>fnat<br>autre_federation|

