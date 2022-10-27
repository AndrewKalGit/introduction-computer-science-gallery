import logo from './logo.svg';
import './App.css';
import Basics from './Basics';
import RoadRace from './RoadRace';
import WhileLoop from './WhileLoop';
import ForLoop from './ForLoop';
import TowerOfHanoi from './TowerOfHanoi';
import Arrays from './Arrays';
import Function from './Function';
import OOP from './OOP';
import About from './About';

function App() {
  return (
    <div>
      <h1 class="text-4xl font-bold m-4 text-white text-center underline"> <span class="bg-gray-800"> Introductory Computer Science Gallery </span> </h1>
      <div class="grid grid-cols-4 m-4 h-96">
        <Basics/>
        <RoadRace/>
        <WhileLoop/>
        <ForLoop/>
        <TowerOfHanoi/>
        <Arrays/>
        <Function/>
        <OOP/>
      </div>
      <About/>
    </div>
  );
}

export default App;
