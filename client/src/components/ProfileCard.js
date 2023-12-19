import React from 'react';
import '../app.css';

class UserProfileCard extends React.Component {
  render() {
    const { name, age, height, goal } = this.props;

    return (
      <div className="container mt-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-7">
            <div className="card p-3 py-4">
              <div className="text-center">
                <img src="https://images.unsplash.com/photo-1527856263669-12c3a0af2aa6?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                 width="100" className="rounded-circle" alt="Profile" />
              </div>
              <div className="text-center mt-3">
                <h5 className="mt-2 mb-0">{name}</h5>
                <span>{age}</span>

                <div className="px-4 mt-1">
                  <p className="fonts">{height}</p>
                </div>

                <ul className="social-list">
                  {socialLinks.map((link, index) => (
                    <li key={goal}>
                      <a href={link.url} target="_blank" rel="noopener noreferrer">
                        <i className={`fa fa-${link.icon}`}></i>
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="buttons">
                  <button className="btn btn-outline-primary px-4">Work-Outs</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfileCard;
