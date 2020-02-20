### Mandataire individuel

|nom|type|description|format|enum|
|-|-|-|-|-|
|id|integer|Identifiant unique emjpm du mandataire individuel<br>**example**: 134<br>**Obligatoire**|||
|num_siret|string|Numéro SIRET du mandataire individuel (14 chiffres)<br>**example**: 80295478500028<br>**Obligatoire**|`^\d{14}$`||
|email|string|Email du mandataire individuel<br>**example**: mandataire@monmail.com<br>**Obligatoire**|||
|sexe|string|Sexe du mandataire individuel<br>**example**: H<br>**Obligatoire**||H<br>F|
|nom_naissance|string|Nom de naissance du mandataire individuel<br>**example**: Dupont<br>**Obligatoire**|||
|nom_usage|string|Nom d'usage du mandataire individuel<br>**example**: Dupont<br>**Obligatoire**|||
|prenom|string|Prénom d'usage du mandataire individuel<br>**example**: Thomas<br>**Obligatoire**|||
|adresse|string|L'adresse du lieu de travail du mandataire individuel<br>**example**: 14 Avenue Duquesne<br>**Obligatoire**|||
|code_postal|string|Code postal du lieu de travail du mandataire individuel<br>**example**: 75350<br>**Obligatoire**|`^\d{5}$`||
|ville|string|Ville du lieu de travail du mandataire individuel<br>**example**: Paris|||
|telephone_bureau|string|Numéro de téléphone du bureau du mandataire individuel<br>**example**: 01 40 56 60 00<br>**Obligatoire**|`^\0d{1} d{2} d{2} d{2} d{2}$`||
|telephone_mobile|string|Numéro de téléphone mobile du mandataire individuel<br>**example**: 06 60 56 60 00|`^\0d{1} d{2} d{2} d{2} d{2}$`||
