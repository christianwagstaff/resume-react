async function fetchResumeInfo() {
  let results = await fetch(
    "https://whispering-springs-24965.herokuapp.com/api"
  );
  let json = await results.json();
  return json;
}

export default fetchResumeInfo;
