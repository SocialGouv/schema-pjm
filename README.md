# Schéma de données de la Protection Juridique des Majeurs (PJM)

## Liste des données des tables de référence

- [Sexe](./datas/sexe.csv)
- [Aides sociales](./datas/aide-sociale.csv)
- [Causes de sortie de dispositif](./datas/cause-sortie.csv)
- [Champs de la mesure](./datas/champs-mesure.csv)
- [Fédérations des services mandataires](./datas/federation-service.csv)
- [Lieux d'exercice d'un MJPM](./datas/lieu-exercice-mjpm.csv)
- [Lieux de vie d'un majeur](./datas/lieu-vie-majeur.csv)
- [Natures d'une mesure](./datas/nature-mesure.csv)
- [Organismes gestionnaires](./datas/organisme-gestionnaire.csv)
- [Résultats d'une révision d'une mesure](./datas/resultat-revision-mesure.csv)
- [Types d'établissement](./datas/type-etablissement.csv)

## Schéma de données

### Mandataire individuel

|nom|type|description|format|enum|
|-|-|-|-|-|
|id|integer|Identifiant unique emjpm du mandataire individuel<br>**example**: 134|||
|num_siret|string|Numéro SIRET du mandataire individuel (14 chiffres)<br>**example**: 80295478500028|`^\d{14}$`||
|email|string|Email du mandataire individuel<br>**example**: mandataire@monmail.com|||
|sexe|string|Sexe du mandataire individuel<br>**example**: H||H<br>F|
|nom_naissance|string|Nom de naissance du mandataire individuel<br>**example**: Dupont|||
|nom_usage|string|Nom d'usage du mandataire individuel<br>**example**: Dupont|||
|prenom|string|Prénom d'usage du mandataire individuel<br>**example**: Thomas|||
|adresse|string|L'adresse du lieu de travail du mandataire individuel<br>**example**: 14 Avenue Duquesne|||
|code_postal|string|Code postal du lieu de travail du mandataire individuel<br>**example**: 75350|`^\d{5}$`||
|Ville|string|Ville du lieu de travail du mandataire individuel<br>**example**: Paris|||
|telephone_bureau|string|Numéro de téléphone du bureau du mandataire individuel<br>**example**: 01 40 56 60 00|`^\0d{1} d{2} d{2} d{2} d{2}$`||
|telephone_mobile|string|Numéro de téléphone mobile du mandataire individuel<br>**example**: 06 60 56 60 00|`^\0d{1} d{2} d{2} d{2} d{2}$`||

### Service mandataire

|nom|type|description|format|enum|
|-|-|-|-|-|
|id|integer|Identifiant unique emjpm du service mandataire<br>**example**: 134|||
|num_siret|string|Numéro SIRET du service mandataire (14 chiffres).<br>**example**: 80295478500028|`^\d{14}$`||
|nom_service|string|Nom du service mandataire<br>**example**: ATPFO 75|||
|adresse|string|L'adresse du siège social du service mandataire<br>**example**: 14 Avenue Duquesne|||
|code_postal|string|Code postal du siège social du service mandataire<br>**example**: 75350|`^\d{5}$`||
|Ville|string|Ville du siège social du service mandataire<br>**example**: Paris|||
|telephone|string|Numéro de téléphone du siège social du service mandataire<br>**example**: 01 40 56 60 00|`^\0d{1} d{2} d{2} d{2} d{2}$`||
|email|string|Email du service mandataire<br>**example**: mandataire@monmail.com|||
|responsable_service|string|Personne habilitée à représenter le service mandataire<br>**example**: Victoria Dupont|||
|annee_creation|integer|Année de création du service mandataire<br>**example**: 2009|||
|convention_collective|string|Convention Nationale Collective de Travail|||
|organisme_gestionnaire|string|Type d'organisme gestionnaire||association<br>ccas<br>organisme_securite_sociale|
|affiliation_federation|boolean|Affiliation à une fédération|||
|federation|string|Si affilier à une fédération||unaf<br>unapei<br>fnat<br>autre_federation|

###  Informations sur le personnel du service mandataire

|nom|type|description|format|enum|
|-|-|-|-|-|
|annee|integer|Année correspondante aux informations transmises<br>**example**: 2019|`^\d{4}$`||
|service_id|integer|Identifiant unique emjpm du service mandataire<br>**example**: 123|||
|nombre_postes_delegues_etp|integer|Nombre de postes de délégués en ETP au 31/12|||
|nombre_delegues|integer|Nombre de délégués au 31/12|||
|nombre_poste_autre_personnel_etp|integer|Nombre de postes autres personnels en ETP au 31/12|||
|nombre_delegues_avec_cnc|integer|Nombre de délégués en poste au 31/12 et ayant CNC|||
|nombre_delegues_en_formation|integer|Nombre de délégués en poste au 31/12 et en formation|||
|nombre_delegues_non_formes|integer|Nombre de délégués en poste au 31/12 ni formés, ni en formation|||

### Information sur la mesure de protection

|nom|type|description|format|enum|
|-|-|-|-|-|
|id|integer|Identifiant unique emjpm de la mesure de protection|||
|nom_naissance|string|Nom de naissance du majeur protégé|||
|nom_usage|string|Nom d'usage du majeur protégé'|||
|prenom|string|Prénom du majeur protégé'|||
|date_naissance|date|Date de naissance du majeur protégé<br>**example**: 22/05/1938|||
|sexe|string|Sexe du majeur protégé||H<br>F|
|date_jugement|date|Date de jugement de la mesure de protection<br>**example**: 01/02/2020|||
|tribunal_siret|string|Siret du tribunal ayant attribué la mesure de protection.|`^\d{14}$`||
|numero_rg|string|Numéro répertoire général (RG)|||
|date_revision|date|Date de revision de la mesure de protection<br>**example**: 01/02/2020|||
|resultat_revision|string|Résultat de la révision de la mesure de protection||mainlevee<br>masp<br>reduction<br>changement_mesure<br>transfert_famille<br>transfert_autre_mjpm|
|date_fin_mesure|date|Date de fin de la mesure de protection<br>**example**: 01/02/2020|||
|cause_sortie|string|Causes de sortie de la mesure de protection||mainlevee<br>deces<br>masp<br>caducite|
|nature_mesure|string|Nature de la mesure de protection||curatelle_simple<br>curatelle_renforcee<br>tutelle<br>sauvegarde_justice<br>maj<br>subroge_curateur<br>subroge_tuteur<br>mandat_protection_future<br>mesure_ad_hoc|
|champs_mesure|string|Champs de la mesure de protection||protection_bien<br>protection_personne<br>protection_bien_personne|
|lieu_vie|string|Lieu de vie du majeur protégé||domicile<br>etablissement<br>etablissement_conservation_domicile|
|type_etablissement|string|Si établissement||etablissement_handicapes<br>etablissement_personne_agee<br>autre_etablissement_s_ms<br>etablissement_hospitalier<br>etablissement_psychiatrique|

