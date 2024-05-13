import React from 'react';
import { useQuery} from '@apollo/client';
import Header from "@/components/Header";
import { Country } from '@/types/country';
import { LIST_COUNTRY } from '@/requetes/queries/country.queries';
import CountryForm from '@/components/form';
import Card from '@/components/Card';
import styles from '@/styles/index.module.css'


export default function Home() {
  const { loading, error, data } = useQuery(LIST_COUNTRY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <Header />
    
       <div className={styles.blocform}>
        <CountryForm/>
       </div>

        <div>
          <ul className={styles.blocCountry}>
            {data.countries.map((country: Country, index: number) => (
              <Card key={index} id={country.id} name={country.name} emoji={country.emoji} code={country.code}/>
            ))}
          </ul>
        </div>
    </div>
  );
}

 