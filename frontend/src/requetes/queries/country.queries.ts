import { gql } from "@apollo/client";

export const LIST_COUNTRY = gql`
  query ListCountry {
    countries {
      id
      name
      emoji
      code
    }
  }
`;