import React from 'react';

export default () => {
    return <div className="bg-light intro">
      <div className="container pt-5">
        <div className="row justify-content-around">
          <div className="col-md-7 align-self-center">
            <div>
              <h2 className="lead">Hello <span className="hand-wave" role="img" aria-label="hand">👋</span></h2>
              <h1 className="name-container">My name is <span className="font-weight-bold">Sahith Vibudhi</span></h1>
              <h2 className="lead">I am a <span className="text-primary">Software Engineer</span></h2>
              <p className="pt-4">
                <a href='https://docs.google.com/document/d/1hWvaeUdtxt4e2S4dkr2ct_87WjaAP1frqQVblBWNdh8/edit?usp=sharing' target='_blank'>
                  <button type="button" className="btn btn-primary">Resume</button>
                </a>
              </p>
            </div>
          </div>
          <div className="col-md-5 pt-2 img-container">
            <img alt="profile pic" width="100%" src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/coding_6mjf.svg"/>
          </div>
        </div>
      </div>
    </div>;
}