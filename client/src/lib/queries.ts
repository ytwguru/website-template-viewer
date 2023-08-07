

import { gql } from './../__generated__/gql';

export const GET_TEMPLATES = gql( /* GraphQL */ `
  query GetTemplates($start:Int, $limit:Int) {
    templates(start: $start, limit: $limit) {
      id
      thumbnail
    }
  }
`)

export const GET_TEMPLATE_BY_ID = gql( /* GraphQL */ `
  query GetTemplateById($id: ID!) {
    templateById(id: $id) {
      title
      cost
      id
      description
      thumbnail
      image
    }
  }
`)
