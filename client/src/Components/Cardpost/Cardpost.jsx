import React from "react";
import './Cardpost.css'

const Cardpost = () => {
  return (
    <div>
      <div className="row">
          <div className="card">
            <div className="card-content white-text">
              <span className="card-title">Dr Strange</span>
              <p>
              Dormammu, I've Come To Bargain!!!
              </p>
            </div>
            <div className="card-action">
              <a href="/">Save</a>
              <a href="/">Delete</a>
              <a href="/">Update</a>
            </div>
          </div>
      </div>

      <div className="row">
          <div className="card">
            <div className="card-content white-text">
              <span className="card-title">the Ancient One</span>
              <p>
              Have you seen that before in a gift shop?
              </p>
            </div>
            <div className="card-action">
              <a href="/">Save</a>
              <a href="/">Delete</a>
              <a href="/">Update</a>
            </div>
          </div>
      </div>

      <div className="row">
          <div className="card">
            <div className="card-content white-text">
              <span className="card-title">Kaecilius</span>
              <p>
              Mister Doctor...
              </p>
            </div>
            <div className="card-action">
              <a href="/">Save</a>
              <a href="/">Delete</a>
              <a href="/">Update</a>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Cardpost;
