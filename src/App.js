import logo from './logo.svg';
import './App.css';
import CreateWorkspace from './Pages/createWorkspace/CreateWorkspace';
import WorkSpaceInfo from './Pages/workspaceInfo/WorkSpaceInfo';
import EdenPlan from './Pages/edenPlan/EdenPlan';
import LastPage from './Pages/lastPage/LastPage';

function App() {
  return (
    <div className="App">
      <CreateWorkspace />
      <WorkSpaceInfo />
      <EdenPlan />
      <LastPage />
    </div>
  );
}

export default App;
