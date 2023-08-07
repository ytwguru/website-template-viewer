import { createSlice, PayloadAction, configureStore } from "@reduxjs/toolkit";
import { Template } from "../__generated__/graphql"

export interface TemplateState {
  currentTemplate: string
  newTemplate: Template
}

const initialState: TemplateState = {
  currentTemplate: '',
  newTemplate: {
    id: '',
    title: '',
    cost: '',
    description: '',
    thumbnail: '',
    image: ''
  }
}

export const templateSlice = createSlice({
  name: 'template',
  initialState,
  reducers : {
    setTemplate : (state: TemplateState, action: PayloadAction<string>) => {
      state.currentTemplate = action.payload
    },
    addTemplate : (state: TemplateState, action: PayloadAction<Template>) => {
      state.newTemplate = action.payload
    }
  }
})

export const { setTemplate, addTemplate } = templateSlice.actions;
export const store = configureStore({
  reducer: {
    template: templateSlice.reducer
  }
}); 
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export default templateSlice.reducer;