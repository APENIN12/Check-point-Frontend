import { useRouter } from 'next/router';
import { useQuery, gql } from '@apollo/client';

const GET_COUNTRY_BY_ID = gql`
  query GetCountryById($code: code!) {
    country(code: $code) {
        code
        emoji
        id
        name
      }
  }
`;

function CountryDetails() {
  const router = useRouter();
  const { code } = router.query;

  const { loading, error, data } = useQuery(GET_COUNTRY_BY_ID, {
    variables: { code },
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const country = data.country;

  return (
    <div>
      <h1>{country.name}</h1>
      <p>ID: {country.id}</p>
      <p>Emoji: {country.emoji}</p>
    
    </div>
  );
}

export default CountryDetails;
