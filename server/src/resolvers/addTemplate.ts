import { Template } from "../schema/graphql";
import templateData from "./../data/templates.json";
import fs from "fs"
import path from "path"

export const addTemplate = (args): Template => {
  const {template} = args
  const newTemplates = [
    ...templateData,
    template
  ];

  fs.writeFileSync(path.join(__dirname, "./../data/templates.json"), JSON.stringify(newTemplates));
  return template;
};
