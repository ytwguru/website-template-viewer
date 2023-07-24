import { Template } from "../schema/graphql";
import templateData from "./../data/templates.json";

export const getTemplates = (args): Template[] => {
  const { start = 0, limit = 4} = args;
  return templateData.slice(start, start+limit);
};
