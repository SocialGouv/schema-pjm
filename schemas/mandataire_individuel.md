|nom|description|exemple|type|contrainte|
|-|-|-|-|-|
|id|Identifiant unique du mandataire individuel dans eMJPM|134|integer|Obligatoire<br>undefined|
|num_siret|Numéro SIRET du mandataire individuel (14 chiffres)|80295478500028|string|Obligatoire<br>^\d{14}$|
|email|Email du mandataire individuel|mandataire@monmail.com|string|Obligatoire<br>undefined|
|sexe|Sexe du mandataire individuel|H|string|Obligatoire<br>undefined|
|nom_naissance|Nom de naissance du mandataire individuel|Dupont|string|Obligatoire<br>undefined|
|nom_usage|Nom d'usage du mandataire individuel|Dupont|string|Obligatoire<br>undefined|
|prenom|Prénom d'usage du mandataire individuel|Thomas|string|Obligatoire<br>undefined|
|adresse|L'adresse du lieu de travail du mandataire individuel|14 Avenue Duquesne|string|Obligatoire<br>undefined|
|code_postal|Code postal du lieu de travail du mandataire individuel|75350|string|Obligatoire<br>^\d{5}$|
|Ville|Ville du lieu de travail du mandataire individuel|Paris|string|Optionnel<br>undefined|
|telephone_bureau|Numéro de téléphone du bureau du mandataire individuel|01 40 56 60 00|string|Obligatoire<br>^\0d{1} d{2} d{2} d{2} d{2}$|
|telephone_mobile|Numéro de téléphone mobile du mandataire individuel|06 60 56 60 00|string|Optionnel<br>^\0d{1} d{2} d{2} d{2} d{2}$|
