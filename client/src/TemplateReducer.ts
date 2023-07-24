import { createSlice, PayloadAction, configureStore } from "@reduxjs/toolkit";

export interface TemplateState {
  currentTemplate: string
}

const initialState: TemplateState = {
  currentTemplate: ''
}

export const templateSlice = createSlice({
  name: 'template',
  initialState,
  reducers : {
    setTemplate : (state, action: PayloadAction<string>) => {
      state.currentTemplate = action.payload
    }
  }
})

export const { setTemplate } = templateSlice.actions;
export const store = configureStore({
  reducer: {
    template: templateSlice.reducer
  }
}); 
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export default templateSlice.reducer;