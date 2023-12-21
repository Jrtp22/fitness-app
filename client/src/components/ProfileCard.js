import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function UserProfileCard() {
  const { fitnessId } = useParams();
  const history = useHistory();
  const [fitness, setFitness] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/fitness/${fitnessId}`);
      const resData = await response.json();
      setFitness(resData);
    };
    fetchData();
  }, [fitnessId]);

  if (fitness === null) {
    return <h1>Loading</h1>;
  }

  const deleteFitness = async () => {
    await fetch(`${process.env.REACT_APP_SERVER_URL}/fitness/${fitness.fitnessId}`, {
      method: 'DELETE',
    });
    history.push('/fitness');
  };

  return (
    <div className="container mt-5">
      <div className="row d-flex justify-content-center">
        <div className="col-md-7">
          <div className="card p-3 py-4">
            <div className="text-center">
              <img src={fitness.pic} alt={fitness.name} width="100" className="rounded-circle" />
            </div>
            <div className="text-center mt-3">
              <h5 className="mt-2 mb-0">{fitness.name}</h5>
              <span>{fitness.age}</span>

              <div className="px-4 mt-1">
                <p className="fonts">{fitness.height}</p>
              </div>
              <div className="px-4 mt-1">
                <p className="fonts">{fitness.weight}</p>
              </div>
              <div className="px-4 mt-1">
                <p className="fonts">{fitness.fitness_goal}</p>
              </div>
              <div className="px-4 mt-1">
                <p className="fonts">{fitness.activity_level}</p>
              </div>

              <div className="buttons">
                <button className="btn btn-outline-primary px-4">Work-Outs</button>
                <button className="btn btn-danger px-4" onClick={deleteFitness}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfileCard;
