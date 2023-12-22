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

  if (!fitnessInfo) {
    return <h1>Loading</h1>;
  }

  const fitnessFormatted = fitnessInfo.map((fitness) => (
    <div className="col-sm-6" key={fitness.fitnessId}>
      <h2>{fitness.name}</h2>
      <p className="text-center">Age: {fitness.age}</p>
      <p className="text-center">Weight: {fitness.weight} kg</p>
      <p className="text-center">Height: {fitness.height} cm</p>
      <p className="text-center">Fitness Goal: {fitness.fitness_goal}</p>
      <p className="text-center">Activity Level: {fitness.activity_level}</p>
      <button onClick={() => history.push(`/fitness/edit/${fitness.fitnessId}`)}>
        Edit
      </button>
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
