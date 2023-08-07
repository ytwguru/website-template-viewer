import { GET_TEMPLATES, GET_TEMPLATE_BY_ID } from './../lib/queries'

export default [
  {
    request: {
      query: GET_TEMPLATES,
      variables: {
        limit: 4
      }
    },
    result: {
      "data": {
          "templates": [
              {
                  "id": "7111",
                  "thumbnail": "7111-m.jpg",
                  "__typename": "Template"
              },
              {
                  "id": "7112",
                  "thumbnail": "7112-m.jpg",
                  "__typename": "Template"
              },
              {
                  "id": "7118",
                  "thumbnail": "7118-m.jpg",
                  "__typename": "Template"
              },
              {
                  "id": "7124",
                  "thumbnail": "7124-m.jpg",
                  "__typename": "Template"
              }
          ]
      }
    }
  },
  {
    request: {
      query: GET_TEMPLATES,
      variables: {
        currentPage:0,
        limit: 4,
        start: 4
      }
    },
    result: {
      "data": {
          "templates": [
              {
                  "id": "7111",
                  "thumbnail": "7111-m.jpg",
                  "__typename": "Template"
              },
              {
                  "id": "7112",
                  "thumbnail": "7112-m.jpg",
                  "__typename": "Template"
              },
              {
                  "id": "7118",
                  "thumbnail": "7118-m.jpg",
                  "__typename": "Template"
              },
              {
                  "id": "7124",
                  "thumbnail": "7124-m.jpg",
                  "__typename": "Template"
              }
          ]
      }
    }
  },
  {
    request: {
      query: GET_TEMPLATE_BY_ID,
      variables: {
        id: ""
      }
    },
    result: {
      "data": {
          "templateById": {
              "title": "Business Site Template - 7111",
              "cost": "45.00",
              "id": "7111",
              "description": "Lorem ipsum dolor sit amet, dictum et quisque aliquet malesuada at, rutrum ac nullam, elit massa facilisis",
              "thumbnail": "7111-m.jpg",
              "image": "7111-b.jpg",
              "__typename": "Template"
          }
      }
    }
  }
];