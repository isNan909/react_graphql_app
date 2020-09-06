import gql from 'graphql-tag';

const GET_JOBLIST = gql`
  query {
    jobs {
      id
      title
      tags {
        id
        name
      }
      cities {
        id
        name
        country {
          name
        }
      }
      company {
        name
        logoUrl
      }
      remotes {
        id
        type
      }
    }
  }
`;

export default GET_JOBLIST;
