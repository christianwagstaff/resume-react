const fetchAPI = async (param, type, data) => {
  const response = await fetch(
    `https://whispering-springs-24965.herokuapp.com/api/${param}`,
    {
      method: type,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("jwt"),
      },
      body: JSON.stringify(data),
    }
  );
  const result = await response.json();
  return result;
};

export default fetchAPI;
