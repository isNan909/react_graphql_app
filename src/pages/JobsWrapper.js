import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Jobslist } from '../components/joblist';
import GET_JOBLIST from '../graphql/get-joblist';

import Appheader from '../components/appheader';

function JobsWrapper() {
  const { data: { jobs = [] } = {} } = useQuery(GET_JOBLIST);

  return (
    <div>
      <Appheader />
      <section className="jobsWrapper">
        {jobs.length < 1 ? (
          <>Loading ...</>
        ) : (
          <>
            {' '}
            {jobs.map((jobs) => (
              <Jobslist key={jobs.id} jobs={jobs} />
            ))}
          </>
        )}
      </section>
    </div>
  );
}

export default JobsWrapper;
