function fetchCountries (nameCountries) {
  return fetch(
    `https://restcountries.com/v3.1/name/${nameCountries}?fields=name,capital,population,flags,languages`,
  )
    .then(response => {
    //   if (!response.ok) {
    //     throw new Error(response.status);
    //   }
      return response.json();
    })
    .catch(error => console.log('error', error));
};

export {fetchCountries}