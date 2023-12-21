import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function NewFitnessForm() {
  const history = useHistory();

  const [fitnessInfo, setFitnessInfo] = useState({
    name: "",
    age: "",
    weight: "",
    height: "",
    fitness_goal: "weight_loss",
    activity_level: "sedentary"
  });

  const handleSubmit = async (e) => {
    e.preventDefault();


    // Assuming you have an endpoint for updating fitness information
    await fetch(`${process.env.REACT_APP_SERVER_URL}/fitness`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fitnessInfo),
    });

    history.push("/fitness"); 
  };

  return (
    <main>
      <h1>Edit Fitness Information</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={fitnessInfo.name}
          onChange={(e) => setFitnessInfo({ ...fitnessInfo, name: e.target.value })}
        />

        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          value={fitnessInfo.age}
          onChange={(e) => setFitnessInfo({ ...fitnessInfo, age: e.target.value })}
        />

        <label htmlFor="weight">Weight (in kg):</label>
        <input
          type="number"
          id="weight"
          name="weight"
          value={fitnessInfo.weight}
          onChange={(e) => setFitnessInfo({ ...fitnessInfo, weight: e.target.value })}
        />

        <label htmlFor="height">Height (in cm):</label>
        <input
          type="number"
          id="height"
          name="height"
          value={fitnessInfo.height}
          onChange={(e) => setFitnessInfo({ ...fitnessInfo, height: e.target.value })}
        />

        <label htmlFor="fitness_goal">Fitness Goal:</label>
        <select
          id="fitness_goal"
          name="fitness_goal"
          value={fitnessInfo.fitness_goal}
          onChange={(e) => setFitnessInfo({ ...fitnessInfo, fitness_goal: e.target.value })}
        >
          <option value="weight_loss">Weight Loss</option>
          <option value="muscle_gain">Muscle Gain</option>
          <option value="fitness_maintenance">Fitness Maintenance</option>
        </select>

        <label htmlFor="activity_level">Activity Level:</label>
        <select
          id="activity_level"
          name="activity_level"
          value={fitnessInfo.activity_level}
          onChange={(e) => setFitnessInfo({ ...fitnessInfo, activity_level: e.target.value })}
        >
          <option value="sedentary">Sedentary (little to no exercise)</option>
          <option value="lightly_active">Lightly Active (light exercise/sports 1-3 days/week)</option>
          <option value="moderately_active">Moderately Active (moderate exercise/sports 3-5 days/week)</option>
          <option value="very_active">Very Active (hard exercise/sports 6-7 days a week)</option>
          <option value="super_active">Super Active (very hard exercise & physical job)</option>
        </select>

        <input type="submit" value="Update" />
      </form>
    </main>
  );
}

export default NewFitnessForm;
