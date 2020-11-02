### Etat d'une mesure de protection

|nom|type|description|format|enum|
|-|-|-|-|-|
|date_changement_etat|date|Date de changement d'état de la protection *(exemple: 2020-02-01)*<br>**donnée requise**|`yyyy-MM-dd`||
|nature_mesure|string|Nature de la mesure de protection<br>**donnée requise**||curatelle_simple<br>curatelle_renforcee<br>tutelle<br>sauvegarde_justice<br>mesure_accompagnement_judiciaire<br>subroge_curateur<br>subroge_tuteur<br>mandat_protection_future<br>mesure_ad_hoc|
|champ_mesure|string|Champ de la mesure de protection<br>**donnée requise**||protection_bien<br>protection_personne<br>protection_bien_personne|
|lieu_vie|string|Lieu de vie du majeur protégé<br>**donnée requise**||domicile<br>etablissement<br>etablissement_conservation_domicile<br>sdf|
|pays|string|Code pays (ISO 3166-1 alpha-2) du lieu de vie du majeur protégé<br>**donnée requise**|||
|code_postal|string|Code postal du lieu de vie du majeur protégé<br>**donnée requise**|||
|ville|string|Ville du lieu de vie du majeur protégé<br>**donnée requise**|||
|type_etablissement|string|Si établissement<br>**donnée requise**||etablissement_handicapes<br>etablissement_personne_agee<br>autre_etablissement_s_ms<br>etablissement_hospitalier<br>etablissement_psychiatrique<br>autre_etablissement|
