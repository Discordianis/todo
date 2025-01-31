import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage.tsx";
import Background from "./features/Background/Background.tsx";
import Header from "./features/Header/Header.tsx";
import TasksPage from "./pages/TasksPage/TasksPage.tsx";

function App() {

  return (
    <>
      <BrowserRouter>
          <Background />
          <Header />
          <div className={'root'}>
              <Routes>
                  <Route path={'/'} Component={ProjectsPage}/>
                  <Route path={'/project/:id'} Component={TasksPage} />
              </Routes>
          </div>
      </BrowserRouter>
    </>
  )
}

export default App
