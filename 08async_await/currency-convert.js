const axios = require('axios');

// USD, CAD, 20
//20 USD is worth 27.2 CAD You can spend these in the following countries: Canada

const getExchangeRate = async (from, to) => {
  const response = await axios.get('http://data.fixer.io/api/latest?access_key=bb270f5f971f180e1ec579063536b6b4');
  const euro = 1 / response.data.rates[from];
  const rate = euro * response.data.rates[to];
  return rate;
};

const getCountries = async (currencyCode) => {
  const response = await axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`);
  const countries = response.data.map((country) => country.name);
  return countries;
};

const convertCurrency = async (from, to, amount) => {
  const exchangeRate = await getExchangeRate(from, to);
  const countries = await getCountries(to);
  const convertedAmount = (amount * exchangeRate).toFixed(2);

  return `${amount} ${from} is worth ${convertedAmount} ${to} You can spend these in the follow countries: ${countries}`;
}

convertCurrency('USD', 'GBP', 1).then((response) => {
  console.log(response);
}).catch((e) => console.log(e));
