// import logo from './logo.svg';
// import './App.css';
import Styles from './App.module.scss';
import Header from "./components/Header/Header";
import Wrapper from "./components/Wrapper/Wrapper";
import NewTask from "./components/Content/NewTask/NewTask"
function App() {
  return (
    <div className={Styles.app}>
      <Header></Header>
      <Wrapper>
        <NewTask></NewTask>
      </Wrapper>
    </div>
  );
}

export default App;
