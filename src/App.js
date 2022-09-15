import logo from './logo.svg';
import './App.css';
import CreateWorkspace from './Pages/createWorkspace/CreateWorkspace';
import WorkSpaceInfo from './Pages/workspaceInfo/WorkSpaceInfo';

function App() {
  return (
    <div className="App">
      <CreateWorkspace />
      <WorkSpaceInfo />
    </div>
  );
}

export default App;
