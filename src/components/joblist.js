import React from 'react';
import pin from '../assets/pin.svg';

export function Jobslist({ jobs }) {
  return (
    <>
      <div className="JoblistCard flexContainer fullFlex">
        <div className="flexContainer JoblistCard_tip">
          <div className="JoblistCard_logo flexConatiner">
            {!jobs.company.logoUrl ? (
              <span className="nologo">NA</span>
            ) : (
              <img className="brandLogo" src={jobs.company.logoUrl} alt="logo" />
            )}
          </div>
          <div className="JoblistCard_title">
            <p>{jobs.title}</p>
            <span>{jobs.company.name}</span>
          </div>
        </div>
        <div className="flexContainer JoblistCard_tags">
          <ul className="flexContainer">
            {jobs.tags.map((tags) => (
              <li className="jobTag" key={tags.id}>{tags.name}</li>
            ))}
          </ul>
        </div>
        <div className="flexContainer JoblistCard_loc">
          <img src={pin} alt="pin" />
          <ul>
            {jobs.cities.map((cities) => (
              <li key={cities.id}>{cities.name}</li>
            ))}
          </ul>
          <ul className="remote">
            {jobs.remotes.map((remotes) => (
              <li key={remotes.id}>{remotes.type}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
