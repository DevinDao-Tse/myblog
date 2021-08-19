// import './App.css';
import './styles/App.css'
import SimpleCard from './components/UI/SimpleCard'
import MainHeader from './components/MainHeader/MainHeader';
import Content from './components/contents/Contents';

function App() {
  return (
    <div className="App">
      <MainHeader />
      <main>
        <SimpleCard>
          <Content />
        </SimpleCard>
      </main>
    </div>
  );
}

export default App;
