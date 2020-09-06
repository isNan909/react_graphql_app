import gql from 'graphql-tag';

const GET_JOBLIST = gql`
  query {
    jobs {
      id
      title
      cities {
        name
        country {
          name
        }
      }
    }
  }
`;

export default GET_JOBLIST;
