const fs = require("fs");

const NEW_LINE = "\n";

const logger = fs.createWriteStream("./README.md");

logger.write(`# Schéma de données de la Protection Juridique des Majeurs (PJM)

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

`);

generateMarkdown("./schemas/mandataire_individuel.json", logger);
generateMarkdown("./schemas/service_mandataire.json", logger);

logger.end();

function generateMarkdown(jsonPath, logger) {
  const json = require(jsonPath);

  logger.write(`### ${json.title}`);
  logger.write(NEW_LINE);
  logger.write(NEW_LINE);

  const header = "|nom|description|exemple|type|contrainte|";
  const subHeader = "|-|-|-|-|-|";
  logger.write(header);
  logger.write(NEW_LINE);
  logger.write(subHeader);
  logger.write(NEW_LINE);

  const fields = json.fields;

  for (const field of fields) {
    const name = field.name;
    const description = field.description;
    const example = field.example;
    const type = field.type;

    const constraints = field.constraints;
    const required = constraints.required ? "Obligatoire" : "Optionnel";
    const pattern = constraints.pattern
      ? `format: \`${constraints.pattern}\``
      : null;
    const constraintCell = pattern ? `${required}<br>${pattern}` : required;

    const line = `|${name}|${description}|${example}|${type}|${constraintCell}|`;
    logger.write(line);
    logger.write(NEW_LINE);
  }
  logger.write(NEW_LINE);
}
