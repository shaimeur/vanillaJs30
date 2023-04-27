const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
const cities = [];
const search = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

const fetchEndPoint = async () => {
  const response = await fetch(endpoint, {
    method: "GET",
  });
  const data = await response.json();
  return data;
};

const displayCountries = async () => {
  const data = await fetchEndPoint();
  cities.push(...data);
};
const findMatch = (wordMatch, cities) => {
  return cities.filter((item) => {
    // I need to figure out if the city or state match the searched word
    const regex = new RegExp(wordMatch, "gi");
    return item.city.match(regex) || item.state.match(regex);
  });
};
const displayMatch = (e) => {
  const matchArr = findMatch(e.currentTarget.value, cities);
  const html = matchArr
    .map((item) => {
      const regex = new RegExp(e.currentTarget.value, "gi");

      const citiName = item.city.replace(
        regex,
        `<span class="hl">${e.currentTarget.value}</span>`
      );
      const stateName = item.state.replace(
        regex,
        `<span class="hl">${e.currentTarget.value}</span>`
      );
      return `<li>
                <span class = "h1"> ${citiName}  , ${stateName}</span>
                <span class = "population"> ${item.population}</span>
            </li>`;
    })
    .join("");

  suggestions.innerHTML = html;
};

displayCountries().then(() => {
  search.addEventListener("change", displayMatch);
  search.addEventListener("keyup", displayMatch);
});
