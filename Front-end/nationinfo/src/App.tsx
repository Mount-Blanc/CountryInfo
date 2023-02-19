import './App.css';
import Video from './Components/media/Video'
import Search from './Components/Search';
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
