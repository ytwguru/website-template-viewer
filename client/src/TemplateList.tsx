import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Template } from './__generated__/graphql';
import { DocumentNode, useQuery } from '@apollo/client';
import { gql } from './__generated__/gql';
import { RootState, setTemplate } from "./TemplateReducer";
import './TemplateList.css';


interface TemplateListProps {
  start: number;
  limit: number;
  cdnUrl: string;
}

const GET_TEMPLATES = gql( /* GraphQL */ `
  query GetTemplates($start:Int, $limit:Int) {
    templates(start: $start, limit: $limit) {
      id
      thumbnail
    }
  }
`)

const TemplateList = ({ start, limit, cdnUrl }: TemplateListProps) => {

  const [currentPage, setPage ] = useState(start);
  const [currentIncr, setIncr] = useState(limit);
  const [loadedPages, setLoaded] = useState(0);
  const selectedTemplate = useSelector((state: RootState) => state.template.currentTemplate)
  const dispatch = useDispatch();

  const { loading, data, fetchMore } = useQuery(
    GET_TEMPLATES as DocumentNode,
    { variables: { currentPage, limit } }
  );

  const loadMore = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, incr: number = limit) => {
    e.preventDefault()
    setIncr(incr);
    setPage(currentPage + incr);
  };

  const updateQuery = (previousResult: {[key:string]:Template[]}, { fetchMoreResult } : any) => {
    if(!fetchMoreResult)
      return previousResult

    if(fetchMoreResult.templates && previousResult.templates)
      fetchMoreResult.templates = [...previousResult.templates, ...fetchMoreResult.templates]
    setLoaded(fetchMoreResult.templates.length)
    return { ...fetchMoreResult }
  };

  const getIsActiveFlag = (incr: number, entry: Template) => {
    if(!selectedTemplate && incr === 0 && currentPage === 0 || selectedTemplate === entry.id) 
      return 'active';
    return ''
  }

  const getNextLink = (entries: Template[]) => {
    if(entries && entries.length >= limit )
      return  <a href="#" className="next" title="Next" style={{ backgroundImage: `url(${cdnUrl}/next.png)` }} onClick={(e) => loadMore(e, limit)}>Next</a>
    return  <span className="next disabled" title="Next" style={{ backgroundImage: `url(${cdnUrl}/next.png)` }}>Next</span>
  }

  const getPrevLink = (entries: Template[]) => {
    if(entries && data?.templates[0]?.id === entries[0]?.id )
      return  <span className="previous disabled" title="Previous" style={{ backgroundImage: `url(${cdnUrl}/previous.png)` }}>Next</span>
    return  <a href="#" className="previous" title="Previous" style={{ backgroundImage: `url(${cdnUrl}/previous.png)` }} onClick={() => setPage(currentPage - limit)}>Previous</a>
  }

  useEffect(() => {
    if(currentPage >= loadedPages){
      fetchMore({
        updateQuery,
        variables: {
          start: currentPage+currentIncr, limit
        }
      });
    }
  }, [currentPage])

  const entries =  data?.templates?.slice(currentPage, currentPage+limit);

  return <div className="TemplateList">
    <div className="thumbnails">
      <div className="group">
        {loading && <div>loading ...</div>}
        {entries && entries.map((entry: Template, incr: number) => 
        <a 
          onClick={() => dispatch(setTemplate(entry.id))} 
          href="#" 
          title={entry.id} 
          key={entry.id} 
          className={getIsActiveFlag(incr, entry)}
        >
          <img src={`${cdnUrl}/thumbnails/${entry.thumbnail}`} alt={entry.thumbnail.replace(/\.+/, '')} width="145" height="121" />
          <span>{entry.id}</span>
        </a>)}
        
        {getPrevLink(entries)}
        {getNextLink(entries)}
      </div>
    </div>
  </div>
}

export default TemplateList;
