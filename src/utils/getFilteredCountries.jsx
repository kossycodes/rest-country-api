const getFilteredCountries = (countries, filters) => {
  let result = countries;
  filters.map((filter) => {
    if (filter.query !== '') {
      result = result.filter((country) => country[filter.name]
        .toLowerCase()
        .includes(filter.query.toLowerCase()));
    }
  });

  return result;
};

export default getFilteredCountries;
