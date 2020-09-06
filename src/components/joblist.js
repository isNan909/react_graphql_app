import React from 'react';
import pin from '../assets/pin.svg';

export function Jobslist({ jobs }) {
  return (
    <>
      <div className="JoblistCard flexContainer">
        <div className="flexConatiner">
          <div className="JoblistCard_logo">
            {jobs.company.logoUrl}
            {!jobs.company.logoUrl ? (
              <div>
                <span className="nologo">no logo</span>
              </div>
            ) : (
              <img src={jobs.company.logoUrl} alt="logo" />
            )}
          </div>
          <div className="JoblistCard_title">
            {jobs.title}
            <span>{jobs.company.name}</span>
          </div>
        </div>
        <div className="flexConatiner JoblistCard_tags">
          <ul>
            {jobs.tags.map((tags) => (
              <li key={tags.id}>{tags.name}</li>
            ))}
          </ul>
        </div>
        <div className="flexConatiner JoblistCard_loc">
          <img src={pin} alt="pin" />
          <ul>
            {jobs.cities.map((cities) => (
              <li key={cities.id}>{cities.name}</li>
            ))}
          </ul>
          <ul>
            {jobs.remotes.map((remotes) => (
              <li key={remotes.id}>{remotes.type}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
