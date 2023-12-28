import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import './Form.css';

function EditFitnessForm() {
  const history = useHistory();
  const { fitnessId } = useParams();

  const [fitnessInfo, setFitnessInfo] = useState({
    name: "",
    age: "",
    weight: "",
    height: "",
    fitness_goal: "",
    activity_level: ""
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/fitness/${fitnessId}`);
        const resData = await response.json();
        setFitnessInfo(resData);
      } catch (error) {
        console.error('Error fetching fitness data:', error);
      }
    };
  
    fetchData();
  }, [fitnessId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch(`${process.env.REACT_APP_SERVER_URL}/fitness/${fitnessInfo.fitnessId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(fitnessInfo),
        credentials: 'include',
      });

      history.push(`/profile`);
    } catch (error) {
      console.error('Error updating fitness data:', error);
    }
  };

  return (
    <main class='form-container'>
      
      <form onSubmit={handleSubmit}>
      <h1>Edit Fitness Information</h1>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={fitnessInfo.name}
          onChange={(e) => setFitnessInfo((prevFitnessInfo) => ({ ...prevFitnessInfo, name: e.target.value }))}
        />

        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          value={fitnessInfo.age}
          onChange={(e) => setFitnessInfo((prevFitnessInfo) => ({ ...prevFitnessInfo, age: e.target.value }))}
        />

        <label htmlFor="weight">Weight (in kg):</label>
        <input
          type="number"
          id="weight"
          name="weight"
          value={fitnessInfo.weight}
          onChange={(e) => setFitnessInfo((prevFitnessInfo) => ({ ...prevFitnessInfo, weight: e.target.value }))}
        />

        <label htmlFor="height">Height (in cm):</label>
        <input
          type="number"
          id="height"
          name="height"
          value={fitnessInfo.height}
          onChange={(e) => setFitnessInfo((prevFitnessInfo) => ({ ...prevFitnessInfo, height: e.target.value }))}
        />

        <label htmlFor="fitness_goal">Fitness Goal:</label>
        <select
          id="fitness_goal"
          name="fitness_goal"
          value={fitnessInfo.fitness_goal}
          onChange={(e) => setFitnessInfo((prevFitnessInfo) => ({ ...prevFitnessInfo, fitness_goal: e.target.value }))}
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
          onChange={(e) => setFitnessInfo((prevFitnessInfo) => ({ ...prevFitnessInfo, activity_level: e.target.value }))}
        >
          <option value="sedentary">Sedentary (little to no exercise)</option>
          <option value="lightly_active">Lightly Active (light exercise/sports 1-3 days/week)</option>
          <option value="moderately_active">Moderately Active (moderate exercise/sports 3-5 days/week)</option>
          <option value="very_active">Very Active (hard exercise/sports 6-7 days a week)</option>
          <option value="super_active">Super Active (very hard exercise & physical job)</option>
        </select>
        <input type="submit" value="Save" />
      </form>
    </main>
  );
}

export default EditFitnessForm;
