import React from 'react';
import SelectedTemplate from './SelectedTemplate';
import TemplateList from './TemplateList';
import {Provider} from 'react-redux';
import { store } from "./TemplateReducer"

import './App.css';
interface AppProps {
  cdnUrl: string;
}

const App = ({cdnUrl}: AppProps) => {
  return <div className="App">
      <Provider store={store}>
        <header>
        Code Development Project
        </header>
        <div id="main" role="main"></div>
        <SelectedTemplate cdnUrl={cdnUrl} />
        <TemplateList cdnUrl={cdnUrl} start={0} limit={4} />
      </Provider>
    </div>
}

export default App;
