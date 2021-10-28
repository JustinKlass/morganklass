import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Card from './components/Card/Card'
import Landing from './components/Landing/Landing'
import NavigationBar from './components/Navbar/Navbar';

const App = () => {
  return (
    <div className="App">
      <NavigationBar />
      <Landing />
      <Card />
    </div>
  );
}

export default App;
