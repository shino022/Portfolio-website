import Hero from './components/Hero.js';
import "./App.css";

const App = () => {
  const colors = {
    primary: 'black',
    secondary: 'grey', 
    accent: 'rgb(113, 249, 140)',
    accent2: 'green', 
    content: 'white'
  };
  return (
    <div className="App">
      <Hero colors={colors}/>
    </div>
  );
};

export default App;
