const axios = require("axios");

module.exports = {
  getAllCharacters() {
    return axios.get("https://swapi.co/api/people").then(person => {
      return person.data;
    });
  },
  getLukeSkywalker() {
    return axios.get("https://swapi.co/api/people/2").then(person => {
      return person.data;
    });
  },
  getAllCards() {
    return axios.get("https://api.pokemontcg.io/v1/cards").then(pokemon => {
      return pokemon.data;
    });
  },
  getPikachu() {
    return axios
      .get("https://api.pokemontcg.io/v1/cards?name=pikachu")
      .then(pikachu => {
        return pikachu.data.cards[0];
      });
  },
  getMagicCard1() {
    return axios
      .get("https://api.magicthegathering.io/v1/cards")
      .then(magic => {
        return magic.data.cards[0];
      });
  },
  getAllMagicCards() {
    return axios
      .get("https://api.magicthegathering.io/v1/cards")
      .then(magicAll => {
        return magicAll.data.cards;
      });
  }
};
