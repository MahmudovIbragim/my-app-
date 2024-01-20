import { useState } from 'react';
import './App.css';
import Form from './components/form/Form';
import List from './components/list/List';

function App() {
  const [texts, setTexts] = useState([])

  return (
    <div className="App">
      <header className='App-header'>
        <div>dsfsfsdfsd</div>
        <Form texts={texts} setTexts={setTexts}/>
        <List texts={texts}/>
      </header>
    </div>
  );
}

export default App;
