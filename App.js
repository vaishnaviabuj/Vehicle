import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dash from "./component/Dashbroad/Dash";
import Login from "./component/Login";
import ModifyName from "./component/Profile/ModifyName";
import ModifyPassword from "./component/Profile/ModifyPassword";
import ProfilePage from "./component/Profile/ProfilePage";
import RegistrationForm from "./component/RegistrationForm";
import AssignVehicle from "./component/Vehicles/AssignVehicle";
import ModifyVehicle from "./component/Vehicles/ModifyVehicle";
import NewVehicle from "./component/Vehicles/NewVehicle";
import RegisteredUsersTable from "./component/Vehicles/RegisteredUsersTable";
import RegisteredVehiclesTable from "./component/Vehicles/RegisteredVehiclesTable";
import RemoveAssignedVehicle from "./component/Vehicles/RemoveAssignedVehicle";
import VehiclesCar from "./component/Vehicles/VehiclesCar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/RegistrationForm" element={<RegistrationForm />}></Route>
        <Route path="/Dash" element={<Dash />}></Route>
        <Route exact path="/VehiclesCar" element={<VehiclesCar />} />
        <Route exact path="/new-vehicle" element={<NewVehicle />} />
        <Route exact path="/modify-vehicle" element={<ModifyVehicle />} />
        <Route exact path="/assign-vehicle" element={<AssignVehicle />} />
        <Route
          exact
          path="/remove-assigned-vehicle"
          element={<RemoveAssignedVehicle />}
        />
        <Route
          exact
          path="/registered-users"
          element={<RegisteredUsersTable />}
        />
        <Route
          exact
          path="/registered-vehicles"
          element={<RegisteredVehiclesTable />}
        />
        <Route
          exact
          path="/remove-assigned-vehicle"
          element={<RemoveAssignedVehicle />}
        />
        <Route
          exact
          path="/registered-users"
          element={<RegisteredUsersTable />}
        />
        <Route
          exact
          path="/registered-vehicles"
          element={<RegisteredVehiclesTable />}
        />
        <Route exact path="/ProfilePage" element={<ProfilePage />} />
        <Route exact path="/ModifyName" element={<ModifyName />} />
        <Route exact path="/ModifyPassword" element={<ModifyPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
