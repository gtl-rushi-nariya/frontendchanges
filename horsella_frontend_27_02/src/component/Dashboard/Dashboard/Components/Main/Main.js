import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import StickyTop from "./StickyTop/StickyTop";
import "./Main.css";
import Registration from "../Registration/Registration";
import Training from "../Training/Training";
import AddTrainingCenter from "../Training/AddTrainingCenter";
import EditTrainingCenter from "../Training/EditTrainingCenter";
import DeleteTrainingCenter from "../Training/DeleteTrainingCenter";

import Breeding from "../Breeding/Breeding";
import AddBreedingCenter from "../Breeding/AddBreedingCenter";
import EditBreedingCenter from "../Breeding/EditBreedingCenter";
import DeleteBreedingCenter from "../Breeding/DeleteBreedingCenter";

import Races from "../Races/Races";
import AddRaces from "../Races/AddRaces";



function Main() {
  return (
    <div id="content">
      <StickyTop />
      <div className="main">
        <Route path="/dashboard/register" component={Registration} />
        
        <Route path="/dashboard/breeding" component={Breeding} />
        <Route path="/dashboard/addbreedingcenter" component={AddBreedingCenter} />
        <Route path="/dashboard/editbreedingcenter" component={EditBreedingCenter} />
        <Route path="/dashboard/deletebreedingcenter" component={DeleteBreedingCenter} />
        <Route path="/dashboard/training" component={Training} />
        <Route path="/dashboard/addtrainingcenter" component={AddTrainingCenter} />
        <Route path="/dashboard/edittrainingcenter" component={EditTrainingCenter} />
        <Route path="/dashboard/deletetrainingcenter" component={DeleteTrainingCenter} />
        <Route path="/dashboard/races" component={Races} />
        <Route path="/dashboard/addraces" component={AddRaces} />
      </div>
    </div>
  );
}

export default Main;
