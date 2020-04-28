### Etat d'une mesure de protection

|nom|type|description|format|enum|
|-|-|-|-|-|
|date_changement_etat|date|Date de changement d'état de la protection *(exemple: 01/02/2020)*<br>**donnée requise**|||
|nature_mesure|string|Nature de la mesure de protection<br>**donnée requise**||curatelle_simple<br>curatelle_renforcee<br>tutelle<br>sauvegarde_justice<br>mesure_accompagnement_judiciaire<br>subroge_curateur<br>subroge_tuteur<br>mandat_protection_future<br>mesure_ad_hoc|
|champs_mesure|string|Champs de la mesure de protection<br>**donnée requise**||protection_bien<br>protection_personne<br>protection_bien_personne|
|lieu_vie|string|Lieu de vie du majeur protégé<br>**donnée requise**||domicile<br>etablissement<br>etablissement_conservation_domicile|
|type_etablissement|string|Si établissement<br>**donnée requise**||etablissement_handicapes<br>etablissement_personne_agee<br>autre_etablissement_s_ms<br>etablissement_hospitalier<br>etablissement_psychiatrique|
|etablissement_siret|string|Si établissement, SIRET de l'établissement|`^\d{14}$`||
