import React from 'react';
import { useSelector } from 'react-redux';
import { Template } from './__generated__/graphql';
import { DocumentNode, useQuery } from '@apollo/react-hooks';
import { RootState } from "./TemplateReducer";
import { gql } from './__generated__/gql';

import './SelectedTemplate.css';

interface SelectedTemplateProps {
  cdnUrl: string;
}

const GET_TEMPLATE_BY_ID = gql( /* GraphQL */ `
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

const SelectedTemplate = ({ cdnUrl}: SelectedTemplateProps) => {

  const selectedTemplate = useSelector((state: RootState) => state.template.currentTemplate)

  const { loading, data } = useQuery(
    GET_TEMPLATE_BY_ID as DocumentNode,
    { variables : { id : selectedTemplate } }
  );

  const {
    templateById : entry
  } = data as {templateById:Template} || {};

  return <div className="SelectedTemplate">
      <div id="large">
        <div className="group">
          {loading && <div>loading ...</div>} 
          {entry && <>
            <img src={`${cdnUrl}/large/${entry.image}`} alt="Large Image" width="430" height="360" />
            <div className="details">
              <p><strong>Title</strong> {entry.title}</p>
              <p><strong>Description</strong> {entry.description}</p>
              <p><strong>Cost</strong> {entry.cost}</p>
              <p><strong>ID #</strong> {entry.id}</p>
              <p><strong>Thumbnail File</strong> {entry.thumbnail}</p>
              <p><strong>Large Image File</strong> {entry.image}</p>
            </div>
          </>
          }
        </div>
      </div>
    </div>
}

export default SelectedTemplate;
