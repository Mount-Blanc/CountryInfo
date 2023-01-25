import './App.css';
import Video from './Video'
import Search from './Search';
import Display from './Display';
import { Contextprovider } from './context';


function App() {
  return (
    <Contextprovider >
      <Video/>
      <Search/>
    </Contextprovider>
  );
}

export default App;
