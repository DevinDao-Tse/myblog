// import './App.css';
import './styles/App.css'
import SimpleCard from './components/UI/SimpleCard'
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  return (
    <div className="App">
      <MainHeader />
      <main>
        <SimpleCard />
      </main>

    </div>
  );
}

export default App;
