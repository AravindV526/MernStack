
import './App.css';
import Title from './components/Title';
import Card from './components/Card';
import Tariff from './components/Tariff';

function App() {
  return (
    <>
    <Title text="Quicker"/>
    <Card title="Find Skilled Workers Near You" para=" Quicker connects you with trusted professionals in your area for all your home service needs. From plumbing and electrical work to painting and carpentry, find the right expert for your project."
       src="https://cdn-icons-png.flaticon.com/512/5246/5246195.png"/>
    <Title />
      <Card />
      <Tariff/>
    </>
  );
}

export default App;