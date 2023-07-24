import { getTemplateById } from "../getTemplateById";

describe("getTemplateById test", () => {


  it('Should return a default template when no id is specified', () => {
    const template = getTemplateById({})
    const expected = {
      "title": "Business Site Template - 7111",
      "cost": "45.00",
      "id": "7111",
      "description": "Lorem ipsum dolor sit amet, dictum et quisque aliquet malesuada at, rutrum ac nullam, elit massa facilisis",
      "thumbnail": "7111-m.jpg",
      "image": "7111-b.jpg"
    };
    expect(template).toMatchObject(expected);
  })

  it('Should return a template what a valid id is specified', () => {
    const template = getTemplateById({id:"7112"})
    const expected = {
      "title": "Business Site Template - 7112",
      "cost": "55.00",
      "id": "7112",
      "description": "Laoreet eu amet soluta error a nulla, sed maecenas est risus augue turpis varius, torquent fermentum diam in augue.",
      "thumbnail": "7112-m.jpg",
      "image": "7112-b.jpg"
    };
    expect(template).toMatchObject(expected);
  })
})