import { getTemplates } from "./resolvers/getTemplates";
import { getTemplateById } from "./resolvers/getTemplateById";
import { Template } from "./schema/graphql";

export default ({
  Query: {
    templates(_: void, args: void): Template[] {
      return getTemplates(args);
    },
    templateById(_: void, args: void): Template {
      return getTemplateById(args);
    },
  },
});