import React from 'react';
import SelectedTemplate from './components/SelectedTemplate';
import TemplateList from './components/TemplateList';
import TemplateEntry from './components/TemplateEntry';
import {Provider} from 'react-redux';
import { store } from "./components/TemplateReducer"

import './App.scss';
interface AppProps {
  cdnUrl: string;
}

const App:React.FC<AppProps> = ({cdnUrl}: AppProps) => {
  return <div className="App">
      <Provider store={store}>
        <header>
        Code Development Project
        </header>
        <div id="main" role="main"></div>
        <SelectedTemplate cdnUrl={cdnUrl} />
        <TemplateList cdnUrl={cdnUrl} start={0} limit={4} />
        <TemplateEntry />
      </Provider>
    </div>
}

export default App;
