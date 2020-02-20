const fs = require("fs");

const NEW_LINE = "\n";

generateMarkdown("./schemas/mandataire_individuel.json");
generateMarkdown("./schemas/mandataire_individuel_formation.json");
generateMarkdown("./schemas/service_mandataire.json");
generateMarkdown("./schemas/service_mandataire_info_personnel.json");
generateMarkdown("./schemas/mesure_protection.json");

function generateMarkdown(jsonPath) {
  const logger = fs.createWriteStream(jsonPath.replace(".json", ".md"));

  const json = require(jsonPath);

  logger.write(`### ${json.title}`);
  logger.write(NEW_LINE);
  logger.write(NEW_LINE);

  const header = "|nom|type|description|format|enum|";
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
    const required = constraints.required;
    const pattern = constraints.pattern;
    const enumValues = constraints.enum;

    let descriptionCell = description;
    if (example) {
      descriptionCell = descriptionCell + `<br>**example**: ${example}`;
    }

    let formatCell = pattern ? `\`${pattern}\`` : "";

    const enumCell = enumValues ? enumValues.join("<br>") : "";

    const line = `|${name}|${type}|${descriptionCell}|${formatCell}|${enumCell}|`;
    logger.write(line);
    logger.write(NEW_LINE);
  }
  logger.end();
}
