import { getTemplates } from "../getTemplates";

describe("getTemplates test", () => {

  const start = 0;
  const limit = 4

  it('Should return a range of templates from start to limit', () => {
    const templates = getTemplates({start, limit})
    expect(templates.length).toEqual(4);
  })
})