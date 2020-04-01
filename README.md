## Schéma de données

### Mesure de protection

**Règles**

- Une mesure de protection est identifiée par un `uuid`.
- Le `uuid` est retourné par l'API d'eMJPM en retour d'une création de mesure de protection
- Le `uuid` est associé à une mesure de protection et un mandataire
- Une mesure de protection a une liste d'états. Au sein d'une mesure de protection, un état est identifié par la date de début de cet état.
- Une mesure de protection a une liste de ressources. Au sein d'une mesure de protection, une resource est identifiée par l'année correspondante aux informations au 31/12.

**Tables**

- [Mesure de protection](./schemas/mesure_protection.md)
- [Mesure de protection - états](./schemas/mesure_protection_etat.md)
- [Mesure de protection - ressource](./schemas/mesure_protection_ressource.md)

**Données de référence**
- [Causes de sortie](./datas/cause-sortie.csv)
- [Champs de la mesure](./datas/champs-mesure.csv)
- [Lieux d'exercice d'un MJPM](./datas/lieu-exercice-mjpm.csv)
- [Lieux de vie d'un majeur](./datas/lieu-vie-majeur.csv)
- [Natures d'une mesure](./datas/nature-mesure.csv)
- [Prestations sociales](./datas/prestation-sociale.csv)
- [Résultats d'une révision d'une mesure](./datas/resultat-revision-mesure.csv)
- [Types d'établissement](./datas/type-etablissement.csv)


### Mandataire individuel

**Tables**

- [Mandataire individuel](./schemas/mandataire_individuel.md)
- [Mandataire individuel - agrément](./schemas/mandataire_individuel_agrement.md)
- [Mandataire individuel - modalités d'exercice](./schemas/mandataire_individuel_exercice.md)
- [Mandataire individuel - formation et niveau de qualification](./schemas/mandataire_individuel_formation.md)

**Données de référence**
- [Intervalle ETP](./datas/intervalle-etp.csv)
- [Forme juridique](./datas/forme-juridique.csv)

### Service mandataire

**Tables**

- [Service mandataire](./schemas/service_mandataire.md)
- [Service mandataire - information sur le personnel](./schemas/service_mandataire_info_personnel.md)

**Données de référence**
- [Convention collective](./datas/convention-collective.csv)
- [Fédérations des services mandataires](./datas/federation-service.csv)
- [Organismes gestionnaires](./datas/organisme-gestionnaire.csv)


