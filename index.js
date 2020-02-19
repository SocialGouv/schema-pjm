const fs = require("fs");
const mandataireIndividuelSchema = require("./schemas/mandataire_individuel.json");

const LINE = "\n";

const logger = fs.createWriteStream("./schemas/mandataire_individuel.md");

const header = "|nom|description|exemple|type|contrainte|";
const subHeader = "|-|-|-|-|-|";
logger.write(header);
logger.write(LINE);
logger.write(subHeader);
logger.write(LINE);

const fields = mandataireIndividuelSchema.fields;

for (const field of fields) {
  const name = field.name;
  const description = field.description;
  const example = field.example;
  const type = field.type;

  const constraints = field.constraints;
  const required = constraints.required ? "Obligatoire" : "Optionnel";
  const pattern = constraints.pattern;

  const line = `|${name}|${description}|${example}|${type}|${required}<br>${pattern}|`;
  logger.write(line);
  logger.write(LINE);
}

logger.end();
