import "./Search.css";
import { useState } from "react";
import Display from "./Display";
import { useContext } from "react";
import { Context } from "../context";
import { useQuery, gql } from "@apollo/client";
import Loading from "./Loading";

const LIST_COUNTRIES = gql`
  query List_COUNTRIES {
    Select {
      common
      official
    }
  }
`;


interface name {
  common:string;
  official:string;
}

function Search() {
  const ctx = useContext(Context);

  const { data, loading, error } = useQuery(LIST_COUNTRIES);
  // {

  //   fetchPolicy: 'network-only', // Used for first execution

  //   nextFetchPolicy: 'cache-first', // Used for subsequent executions

  // });
  const [userinput, setuserinput] = useState("Iceland");
  const [isSubmitted, setisSubmitted] = useState(false);

  const selectHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setuserinput(event.target.value);
  };

  if (loading) {
    return <Loading/>;
  }

  return (
    <>
      <div className="search">
        <select value={userinput} onChange={selectHandler}>
          {data.Select.map(({ common, official }:name) => (
            <option key={official} value={common}>
              {common}
            </option>
          ))}
        </select>
      </div>
      <Display userinput={userinput} />{" "}
    </>
  );
}
export default Search;
