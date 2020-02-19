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

|nom|description|exemple|type|contrainte|
|-|-|-|-|-|
|id|Identifiant unique du mandataire individuel dans eMJPM|134|integer|Obligatoire|
|num_siret|Numéro SIRET du mandataire individuel (14 chiffres)|80295478500028|string|Obligatoire<br>format: `^\d{14}$`|
|email|Email du mandataire individuel|mandataire@monmail.com|string|Obligatoire|
|sexe|Sexe du mandataire individuel|H|string|Obligatoire|
|nom_naissance|Nom de naissance du mandataire individuel|Dupont|string|Obligatoire|
|nom_usage|Nom d'usage du mandataire individuel|Dupont|string|Obligatoire|
|prenom|Prénom d'usage du mandataire individuel|Thomas|string|Obligatoire|
|adresse|L'adresse du lieu de travail du mandataire individuel|14 Avenue Duquesne|string|Obligatoire|
|code_postal|Code postal du lieu de travail du mandataire individuel|75350|string|Obligatoire<br>format: `^\d{5}$`|
|Ville|Ville du lieu de travail du mandataire individuel|Paris|string|Optionnel|
|telephone_bureau|Numéro de téléphone du bureau du mandataire individuel|01 40 56 60 00|string|Obligatoire<br>format: `^\0d{1} d{2} d{2} d{2} d{2}$`|
|telephone_mobile|Numéro de téléphone mobile du mandataire individuel|06 60 56 60 00|string|Optionnel<br>format: `^\0d{1} d{2} d{2} d{2} d{2}$`|

### Service mandataire

|nom|description|exemple|type|contrainte|
|-|-|-|-|-|
|id|Identifiant unique du service mandataire dans eMJPM|134|integer|Obligatoire|
|num_siret|Numéro SIRET du service mandataire (14 chiffres).|80295478500028|string|Obligatoire<br>format: `^\d{14}$`|
|nom_service|Nom du service mandataire|ATPFO 75|string|Obligatoire|
|adresse|L'adresse du siège social du service mandataire|14 Avenue Duquesne|string|Obligatoire|
|code_postal|Code postal du siège social du service mandataire|75350|string|Obligatoire<br>format: `^\d{5}$`|
|Ville|Ville du siège social du service mandataire|Paris|string|Optionnel|
|telephone|Numéro de téléphone du siège social du service mandataire|01 40 56 60 00|string|Obligatoire<br>format: `^\0d{1} d{2} d{2} d{2} d{2}$`|
|email|Email du service mandataire|mandataire@monmail.com|string|Obligatoire|
|responsable_service|Personne habilitée à représenter le service mandataire|Victoria Dupont|string|Obligatoire|
|annee_creation|Année de création du service mandataire|2009|integer|Obligatoire|
|convention_collective|Convention Nationale Collective de Travail||string|Obligatoire|
|organisme_gestionnaire|Type d'organisme gestionnaire||string|Obligatoire|
|affiliation_federation|Affiliation à une fédération||boolean|Obligatoire|
|federation|Si affilier à une fédération||string|Obligatoire|

