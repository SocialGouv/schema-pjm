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
|id|integer|Identifiant unique du mandataire individuel dans eMJPM<br>*(exemple: 134)*|Obligatoire|
|num_siret|string|Numéro SIRET du mandataire individuel (14 chiffres)<br>*(exemple: 80295478500028)*|Obligatoire<br>format: `^\d{14}$`|
|email|string|Email du mandataire individuel<br>*(exemple: mandataire@monmail.com)*|Obligatoire|
|sexe|string|Sexe du mandataire individuel<br>*(exemple: H)*|Obligatoire|
|nom_naissance|string|Nom de naissance du mandataire individuel<br>*(exemple: Dupont)*|Obligatoire|
|nom_usage|string|Nom d'usage du mandataire individuel<br>*(exemple: Dupont)*|Obligatoire|
|prenom|string|Prénom d'usage du mandataire individuel<br>*(exemple: Thomas)*|Obligatoire|
|adresse|string|L'adresse du lieu de travail du mandataire individuel<br>*(exemple: 14 Avenue Duquesne)*|Obligatoire|
|code_postal|string|Code postal du lieu de travail du mandataire individuel<br>*(exemple: 75350)*|Obligatoire<br>format: `^\d{5}$`|
|Ville|string|Ville du lieu de travail du mandataire individuel<br>*(exemple: Paris)*|Optionnel|
|telephone_bureau|string|Numéro de téléphone du bureau du mandataire individuel<br>*(exemple: 01 40 56 60 00)*|Obligatoire<br>format: `^\0d{1} d{2} d{2} d{2} d{2}$`|
|telephone_mobile|string|Numéro de téléphone mobile du mandataire individuel<br>*(exemple: 06 60 56 60 00)*|Optionnel<br>format: `^\0d{1} d{2} d{2} d{2} d{2}$`|

### Service mandataire

|nom|type|description|contrainte|
|-|-|-|-|
|id|integer|Identifiant unique du service mandataire dans eMJPM<br>*(exemple: 134)*|Obligatoire|
|num_siret|string|Numéro SIRET du service mandataire (14 chiffres).<br>*(exemple: 80295478500028)*|Obligatoire<br>format: `^\d{14}$`|
|nom_service|string|Nom du service mandataire<br>*(exemple: ATPFO 75)*|Obligatoire|
|adresse|string|L'adresse du siège social du service mandataire<br>*(exemple: 14 Avenue Duquesne)*|Obligatoire|
|code_postal|string|Code postal du siège social du service mandataire<br>*(exemple: 75350)*|Obligatoire<br>format: `^\d{5}$`|
|Ville|string|Ville du siège social du service mandataire<br>*(exemple: Paris)*|Optionnel|
|telephone|string|Numéro de téléphone du siège social du service mandataire<br>*(exemple: 01 40 56 60 00)*|Obligatoire<br>format: `^\0d{1} d{2} d{2} d{2} d{2}$`|
|email|string|Email du service mandataire<br>*(exemple: mandataire@monmail.com)*|Obligatoire|
|responsable_service|string|Personne habilitée à représenter le service mandataire<br>*(exemple: Victoria Dupont)*|Obligatoire|
|annee_creation|integer|Année de création du service mandataire<br>*(exemple: 2009)*|Obligatoire|
|convention_collective|string|Convention Nationale Collective de Travail|Obligatoire|
|organisme_gestionnaire|string|Type d'organisme gestionnaire|Obligatoire|
|affiliation_federation|boolean|Affiliation à une fédération|Obligatoire|
|federation|string|Si affilier à une fédération|Obligatoire|

