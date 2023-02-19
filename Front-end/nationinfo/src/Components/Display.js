import { useQuery, gql } from "@apollo/client";
import { useContext } from "react";
import { Context } from "../context";
import Card from "./UI/Card";
import "./Display.css";
import Loading from "./Loading";
const GET_COUNTRY = gql`
  query GET_COUNTRY($userCountry: String!) {
    Country(userCountry: $userCountry) {
      name {
        common
        official
      }
      flag
      population
      capital
      continents
    }
  }
`;

const Display = ({ userinput }) => {
  const ctx = useContext(Context);
  //  const userinput =ctx.countryValue

  const { loading, error, data } = useQuery(GET_COUNTRY, {
    variables: { userCountry: `${userinput}` },
  });

 let content;
  if (loading) {
    return <Loading/>
  }
  // if (error) {
  //   return content = <p>An error has occured {error.status}!</p>
  // }

  return data.Country.map(({ name, flag, capital, continents, population }) => (
    <Card key={name.official} className="display">
      <div>
        <h3>
          {flag}
          {name.common}
        </h3>
      </div>
      <div>Official Name:{name.official}</div>
      <div>Capital:{capital === null ? <p>N/A</p> : capital[0]}</div>
      <div>Continent:{continents}</div>
      <div>Population:{population}</div>
    </Card>
  ));
};
export default Display;
