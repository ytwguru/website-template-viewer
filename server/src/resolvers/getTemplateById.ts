import { Template } from "../schema/graphql";
import templateData from "./../data/templates.json";

export const getTemplateById = (args):Template => {
  const { id } = args;
  if(!id) //default first entry
    return templateData[0];

  return templateData.find((template) => template.id === id) ?? templateData[0]
};

