import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Calculator from '../components/Calculator';

class Home extends Component {

  render() {
    return (
        <div className="container mt-5">
        <h1 className="text-center mb-4">Calculator App</h1>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <Calculator />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;