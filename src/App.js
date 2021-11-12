import Styles from "./App.module.scss";
import Header from "./components/Header/Header";
import Wrapper from "./components/Wrapper/Wrapper";
import Content from "./components/Content/Content";
import NewTask from "./components/Content/Types/NewTask/NewTask";
import Dashboard from "./components/Content/Types/Dashboard/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className={Styles.app}>
      <BrowserRouter>
        <Header></Header>
        <Wrapper>
          <Content>
            <Routes>
              <Route exact path="/new-task" element={<NewTask />}></Route>
              <Route exact path="/dashboard" element={<Dashboard />}></Route>
            </Routes>
          </Content>
        </Wrapper>
      </BrowserRouter>
    </div>
  );
}

export default App;
