import React, {useState, useEffect} from "react"
import { Template } from "../__generated__/graphql"
import { useSelector, useDispatch } from 'react-redux';
import { RootState, addTemplate } from "./TemplateReducer";
import "./TemplateEntry.scss"

const TemplateEntry = () => {
  const newTemplate = useSelector((state: RootState) => state.template.newTemplate)

  const [currentNewTemplate, setNewTemplate] = useState<Template>({
    id: '',
    title: '',
    cost: '',
    description: '',
    thumbnail: '',
    image: ''
  });

  useEffect(() => {
    if(newTemplate.id !== '')
      console.log(newTemplate)
  }, [newTemplate])

  const dispatch = useDispatch();

  const handleChange = ( e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const nextTemplate = {
      ...currentNewTemplate
    } as Template;

    if(e.target.name === 'id')
      nextTemplate.id = e.target.value;
    else if(e.target.name === 'cost')
      nextTemplate.cost = e.target.value;
    else if(e.target.name === 'title')
      nextTemplate.title = e.target.value;
    else if(e.target.name === 'description')
      nextTemplate.description = e.target.value;
    else if(e.target.name === 'thumbnail')
      nextTemplate.thumbnail = e.target.value;
    else if(e.target.name === 'image')
      nextTemplate.image = e.target.value;

    setNewTemplate(nextTemplate)
  };

  return <form className = "TemplateEntry" onSubmit={(e) => {e.preventDefault(); dispatch(addTemplate(currentNewTemplate))}}>
    <div><label>ID</label><input type="text" name="id" onChange={(e) => handleChange(e)}/></div>
    <div><label>Title</label><input type="text" name="title" onChange={(e) => handleChange(e)}/></div>
    <div><label>Cost</label><input type="text" name="cost"  onChange={(e) => handleChange(e)}/></div>
    <div><label>Description</label><input type="text" name="description"  onChange={(e) => handleChange(e)}/></div>
    <div><label>Thumbnail</label><input type="text" name="thumbnail"  onChange={(e) => handleChange(e)}/></div>
    <div><label>Image</label><input type="text" name="image"  onChange={(e) => handleChange(e)}/></div>
    <button>Add Template</button>
  </form>
}

export default TemplateEntry;