import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Router from './routing/Router';
import Header from './routing/Header';


const App=()=> {
  return (
    <div className="App">
      <Header/>
      <Router/>
    </div>
  );
}

export default App;
