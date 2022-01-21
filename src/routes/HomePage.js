import React from "react";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { useQuery } from "react-query";
import fetchResumeInfo from "../functions/fetchResumeInfo";

const HomePage = () => {
  const { isLoading, isError, data, error } = useQuery(
    "resumeInfo",
    fetchResumeInfo
  );
  if (isLoading) {
    return <div>Loading</div>;
  }
  if (isError) {
    return <div>Error {error}</div>;
  }
  return (
    <main>
      <About info={data.about} />
      <Contact info={data.contact} />
      <Projects info={data.projects} />
    </main>
  );
};

export default HomePage;
