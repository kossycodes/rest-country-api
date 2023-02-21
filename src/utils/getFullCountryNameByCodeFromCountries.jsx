const getFullCountryNameByCodeFromCountries = (countries, countryCode) => {
  const targetCountry = countries.find((countryItem) => countryItem.countryCode === countryCode);
  return targetCountry.name;
};

export default getFullCountryNameByCodeFromCountries;
