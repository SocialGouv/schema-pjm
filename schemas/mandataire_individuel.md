### Mandataire individuel

|nom|type|description|format|enum|
|-|-|-|-|-|
|id|integer|Identifiant unique emjpm du mandataire individuel *example*: 134*<br>**donnée requise**|||
|num_siret|string|Numéro SIRET du mandataire individuel (14 chiffres) *example*: 80295478500028*<br>**donnée requise**|`^\d{14}$`||
|email|string|Email du mandataire individuel *example*: mandataire@monmail.com*<br>**donnée requise**|||
|sexe|string|Sexe du mandataire individuel *example*: H*<br>**donnée requise**||H<br>F|
|nom_naissance|string|Nom de naissance du mandataire individuel *example*: Dupont*<br>**donnée requise**|||
|nom_usage|string|Nom d'usage du mandataire individuel *example*: Dupont*<br>**donnée requise**|||
|prenom|string|Prénom d'usage du mandataire individuel *example*: Thomas*<br>**donnée requise**|||
|adresse|string|L'adresse du lieu de travail du mandataire individuel *example*: 14 Avenue Duquesne*<br>**donnée requise**|||
|code_postal|string|Code postal du lieu de travail du mandataire individuel *example*: 75350*<br>**donnée requise**|`^\d{5}$`||
|ville|string|Ville du lieu de travail du mandataire individuel *example*: Paris*|||
|telephone_bureau|string|Numéro de téléphone du bureau du mandataire individuel *example*: 01 40 56 60 00*<br>**donnée requise**|`^\0d{1} d{2} d{2} d{2} d{2}$`||
|telephone_mobile|string|Numéro de téléphone mobile du mandataire individuel *example*: 06 60 56 60 00*|`^\0d{1} d{2} d{2} d{2} d{2}$`||
