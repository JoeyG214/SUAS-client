
import React from 'react';
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar"
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/list" element={<ExercisesList />} />
        <Route path="/edit/:id" element={<EditExercise />} />
        <Route path="/create" element={<CreateExercise />} />
        <Route path="/user" element={<CreateUser />} />
      </Routes>
    </div>
  );
}

export default App;