import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Jobslist } from '../components/joblist';
import GET_JOBLIST from '../graphql/get-joblist';

import Appheader from '../components/appheader';

function JobsWrapper() {
  const { data: { jobs = [] } = {} } = useQuery(GET_JOBLIST);
  console.log(jobs);

  return (
    <div>
      <Appheader />
      {jobs.map((jobs) => (
        <Jobslist key={jobs.id} jobs={jobs} />
      ))}
    </div>
  );
}

export default JobsWrapper;
