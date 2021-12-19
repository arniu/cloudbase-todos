import { SWRConfig } from 'swr';

import Todos from './components/todos';

import './App.css';

function App() {
  return (
    <SWRConfig>
      <Todos />
    </SWRConfig>
  );
}

export default App;
