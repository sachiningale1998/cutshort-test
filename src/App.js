import logo from './logo.svg';
import './App.css';
import CreateWorkspace from './Pages/createWorkspace/CreateWorkspace';
import WorkSpaceInfo from './Pages/workspaceInfo/WorkSpaceInfo';
import EdenPlan from './Pages/edenPlan/EdenPlan';

function App() {
  return (
    <div className="App">
      <CreateWorkspace />
      <WorkSpaceInfo />
      <EdenPlan />
    </div>
  );
}

export default App;
