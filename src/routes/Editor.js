import React from "react";
import AboutEditor from "../components/AboutEditor";
import ContactEditor from "../components/ContactEditor";
import Projects from "../components/ProjectsEditor";
import { useQuery } from "react-query";
import fetchResumeInfo from "../functions/fetchResumeInfo";

const Editor = () => {
  const { isLoading, isError, data, error } = useQuery(
    "resumeInfo",
    fetchResumeInfo,
    { staleTime: 1000 * 60 * 60, cacheTime: Infinity }
  );
  if (isLoading) {
    return <div>Loading</div>;
  }
  if (isError) {
    return <div>Error {error}</div>;
  }

  return (
    <main>
      <AboutEditor info={data.about[0]} />
      <ContactEditor info={data.contact} />
      <Projects info={data.projects} />
    </main>
  );
};

export default Editor;
