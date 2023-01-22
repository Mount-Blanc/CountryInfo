import './App.css';
import Display from './Display';
import Earth from './assets/Earth.mp4'

function App() {
  return (
    <div >
     <video src={Earth} autoPlay loop/>
    </div>
  );
}

export default App;
