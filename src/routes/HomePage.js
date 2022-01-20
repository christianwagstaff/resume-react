import React, { useEffect, useState } from "react";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const HomePage = () => {
  const [data, setData] = useState({});
  useEffect(async () => {
    const response = await fetch(
      `https://whispering-springs-24965.herokuapp.com/api`
    );
    const results = await response.json();
    setData(results);
  }, []);
  return (
    <main>
      <About info={data.about} />
      <Contact info={data.contact} />
      <Projects info={data.projects} />
    </main>
  );
};

export default HomePage;
