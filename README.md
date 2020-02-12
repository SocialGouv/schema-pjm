# Schéma de données de la Protection Juridique des Majeurs (PJM)

## Liste des données des tables de référence

- [Sexe](./datas/sexe.csv)
- [Aides sociales](./datas/aide-sociale.csv)
- [Causes de sortie de dispositif](./datas/cause-sortie-dispositif.csv)
- [Champs de la mesure](./datas/champs-mesure.csv)
- [Fédérations des services mandataires](./datas/federation-service.csv)
- [Lieux d'exercice d'un MJPM](./datas/lieu-exercice-mjpm.csv)
- [Lieux d'hébergement d'un majeur](./datas/lieu-hebergement-majeur.csv)
- [Natures d'une mesure](./datas/nature-mesure.csv)
- [Organismes gestionnaires](./datas/organisme-gestionnaire.csv)
- [Résultats d'une révision d'une mesure](./datas/resultat-revision-mesure.csv)
- [Types d'établissement](./datas/type-etablissement.csv)

## Schéma de données

### Mandataire individuel (MI)

|nom de la colonne  | description   | type                      | Obligatoire   | contrainte                                      |
|------------------ |---------------|---------------------------|---------------|-------------------------------------------------|
|sexe               | Sexe              | Chaine de caractère   | Oui           | Valeurs de `id` dans [Sexe](./datas/sexe.csv)   |
|nom_naissance      | Nom de naissance  | Chaine de caractère   | Oui           |  |
|nom_usage          | Nom d'usage       | Chaine de caractère   | Oui           |  |
|prenom             | Prénom            | Chaine de caractère   | Oui           |  |
|adresse            | Adresse           | Chaine de caractère   | Oui           |  |
|code_postal        | Code postal       | Chaine de caractère   | Oui           | regexp: `` | 
|ville              | Ville             | Chaine de caractère   | Oui           |  | 
|telephone_bureau   | Num. tél. pro.    | Chaine de caractère   | Oui           | regexp: `` | 
|telephone_portable | Num. tél. mobile  | Chaine de caractère   | Non           | regexp: `` | 
|email              | Email             | Chaine de caractère   | Oui           | format: `email` | 



