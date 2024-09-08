import './App.css';
import Page from './Page';
import { initializeStorage } from './utils/initializeStorage';

initializeStorage();


function App() {
  return (
    <Page />
  );
}

export default App;
