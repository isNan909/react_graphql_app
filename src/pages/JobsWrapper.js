import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Jobslist } from '../components/joblist';
import GET_JOBLIST from '../graphql/get-joblist';

function JobsWrapper() {
  const { data: { jobs = [] } = {} } = useQuery(GET_JOBLIST);

  return (
    <div>
      {jobs.map((jobs) => <Jobslist key={jobs.id} jobs={jobs} />)}
      <Jobslist jobs={jobs} />
    </div>
  );
}

export default JobsWrapper;
