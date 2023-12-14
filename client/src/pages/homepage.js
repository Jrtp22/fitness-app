
import React from 'react';
import '../app.css';


function HomePage() {
  return (
<main>
      <div className='home-page-container'>
        <br>
        </br>
        <div className='app'>
          <h1>FITNESS APP</h1>
        </div>

        <div className='join'>
          <h2>Welcome to our Fitness App – your go-to companion for a healthier lifestyle!</h2>
          <p>Unleash your full potential with a diverse range of workouts designed to elevate your fitness journey.</p>

          <a href="/logIn">
            <button className="btn-primary">Log-In</button>
          </a>
        </div>

        <div className='footer'>
          <p>&copy; 2023 Fitness App. All rights reserved.</p>
        </div>
      </div>
    </main>
  );
}

export default HomePage;
