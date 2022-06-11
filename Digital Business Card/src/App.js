
import Introduction from './Components/Introduction';
import About from './Components/About';
import Footer from './Components/Footer';
import Interests from './Components/Interest';
import { Particles } from '@blackbox-vision/react-particles';
import './App.css';

const ParticlesJs = () => (
    <Particles
        style={{
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: '-1',
      }}
      params={{
        particles: {
          number: {
            value: 250,
          },
          size: {
            value: 3,
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: 'repulse',
            },
          },
        },
      }}
    />
  );  

function App() {
    return (
           <div>
           <ParticlesJs className='particles'/>
                <Introduction />
                <About />
                <Interests/>
                <Footer/>
           </div>
    )
};
export default App;
