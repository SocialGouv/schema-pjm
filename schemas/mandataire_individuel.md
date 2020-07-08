### Mandataire individuel

|nom|type|description|format|enum|
|-|-|-|-|-|
|num_siret|string|Numéro SIRET du mandataire individuel (14 chiffres) *(exemple: 80295478500028)*<br>**donnée requise**|`^\d{14}$`||
|lieu_exercice|string|Lieu d'exercice du mandataire individuelle *(exemple: EARL)*<br>**donnée requise**||domicile<br>cabinet<br>cabinet_partage|
|forme_juridique|string|Forme juridique de la société du mandataire individuel *(exemple: EARL)*<br>**donnée requise**||EARL<br>EI<br>EIRL<br>EURL<br>SARL<br>SA<br>SAS,<br>SASU|
|email|string|Email du mandataire individuel *(exemple: mandataire@monmail.com)*<br>**donnée requise**|||
|civilite|string|Civilité du mandataire individuel *(exemple: monsieur)*<br>**donnée requise**||madame<br>monsieur|
|nom_naissance|string|Nom de naissance du mandataire individuel *(exemple: Dupont)*<br>**donnée requise**|||
|nom_usage|string|Nom d'usage du mandataire individuel *(exemple: Dupont)*<br>**donnée requise**|||
|date_naissance|date|Date de naissance du mandataire judiciaire *(exemple: 22/05/1938)*<br>**donnée requise**|||
|prenom|string|Prénom d'usage du mandataire individuel *(exemple: Thomas)*<br>**donnée requise**|||
|adresse|string|L'adresse du lieu de travail du mandataire individuel *(exemple: 14 Avenue Duquesne)*<br>**donnée requise**|||
|code_postal|string|Code postal du lieu de travail du mandataire individuel *(exemple: 75350)*<br>**donnée requise**|`^\d{5}$`||
|ville|string|Ville du lieu de travail du mandataire individuel *(exemple: Paris)*|||
|telephone_bureau|string|Numéro de téléphone du bureau du mandataire individuel *(exemple: 01 40 56 60 00)*<br>**donnée requise**|`^\0d{1} d{2} d{2} d{2} d{2}$`||
|telephone_mobile|string|Numéro de téléphone mobile du mandataire individuel *(exemple: 06 60 56 60 00)*|`^\0d{1} d{2} d{2} d{2} d{2}$`||
