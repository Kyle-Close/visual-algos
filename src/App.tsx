import './App.css';
import anime from 'animejs';
import { Graph } from './components/graph';

function App() {
  anime({
    targets: '.test',
    translateY: '900',
    duration: 2000,
  });
  return (
    <div className='flex grow h-full justify-center items-center'>
      <Graph maxSize={10} barCount={5} />
    </div>
  );
}

export default App;
