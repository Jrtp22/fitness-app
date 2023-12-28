import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

function FitnessProfile() {
  const history = useHistory();
  const [fitnessInfo, setFitnessInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/fitness`);
      const resData = await response.json();
      setFitnessInfo(resData);
    };
    fetchData();
  }, []);

  const handleEdit = (fitnessId) => {
    history.push(`/edit-fitness/${fitnessId}`);
  };
  

  const handleDelete = async (fitnessId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this fitness profile?");
    
    if (confirmDelete) {
      await fetch(`${process.env.REACT_APP_SERVER_URL}/fitness/${fitnessId}`, {
        method: "DELETE",
      });
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/fitness`);
      const resData = await response.json();
      setFitnessInfo(resData);
    }
  };

  if (!fitnessInfo) {
    return <h1>Loading</h1>;
  }

  const fitnessFormatted = fitnessInfo.map((fitness) => (
    <div className="fitness-item" key={fitness.fitnessId}>
      
      <div className="fitness-details">
      <h1>{fitness.name}</h1>
        <p className="text-center">Age: {fitness.age}</p>
        <p className="text-center">Weight: {fitness.weight} kg</p>
        <p className="text-center">Height: {fitness.height} cm</p>
        <p className="text-center">Fitness Goal: {fitness.fitness_goal}</p>
        <p className="text-center">Activity Level: {fitness.activity_level}</p>
        <div className="button-group">
          <button className="edit-btn" onClick={() => handleEdit(fitness.fitnessId)}>Edit</button>
          <button className="delete-btn" onClick={() => handleDelete(fitness.fitnessId)}>Delete</button>
        </div>
      </div>
    </div>
  ));

  return (
    <main>
      <h1>Fitness Profile</h1>
      <div className="row">{fitnessFormatted}</div>
    </main>
  );
}

export default FitnessProfile;
