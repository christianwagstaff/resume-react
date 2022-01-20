const fetchAPI = async (param, type, data) => {
  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL}/api/${param}`,
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
