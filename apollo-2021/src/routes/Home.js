import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import React from "react";

const GET_MOVIES = gql`
  query {
    movies {
      id
      medium_cover_image
    }
  }
`;

export const Home = () => {
  const { loading, error, data } = useQuery(GET_MOVIES);
  if (error) return `Error! : ${error}`;
  if (loading) return "Loading...";
  if (data && data.movies) return data.movies.map((m) => <h1>{m.id}</h1>);
  console.log(data);
  return <div>Home</div>;
};
