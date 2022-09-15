import React from "react";
import { Route, Routes } from "react-router-dom";
import CreateWorkspace from "../Pages/createWorkspace/CreateWorkspace";
import EdenPlan from "../Pages/edenPlan/EdenPlan";
import LastPage from "../Pages/lastPage/LastPage";
import WorkSpaceInfo from "../Pages/workspaceInfo/WorkSpaceInfo";


const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<CreateWorkspace />} />
        <Route path="/workSpaceInfo" element={<WorkSpaceInfo />} />
        <Route path="/EdenPlan" element={<EdenPlan />} />
        <Route path="/LastPage" element={<LastPage />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
