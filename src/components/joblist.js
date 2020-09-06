import React from 'react';

export function Jobslist({ jobs }) {
  return (
    <>
      {jobs.title}
      {jobs.cities.map((cities) => (
          <li key={cities.id} >{cities.name}</li>
      ))}
    </>
  );
}
