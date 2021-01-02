import './App.css';
import GreetingClass from './greeting-classs';
import GreetingFunc from './greeting-func';
import GreetingArrowFunc from './greeting-arrow-func';

function App() {
  return (
    <div className="App">
      <div className="row">
        <GreetingClass/>
        <GreetingFunc/>
        <GreetingArrowFunc />
      </div>
    </div>
  );
}

export default App;
