const intFunctions = require("./init");

describe("intFunction", () => {
  describe("getAllCharacters", () => {
    it("returns 10", async () => {
      const persons = await intFunctions.getAllCharacters();
      expect(persons.results.length).toBe(10);
    });
  });
  describe("getC3PO", () => {
    it("returns C3PO", async () => {
      const persons = await intFunctions.getLukeSkywalker();
      expect(persons.name).toBe("C-3PO");
    });
  });
  describe("getAllPokemon", () => {
    it("returns Pokemon", async () => {
      const pokemon = await intFunctions.getAllCards();
      expect(pokemon.cards.length).toBe(100);
    });
  });
  describe("getPikachu", () => {
    it("returns Pikachu Name", async () => {
      const pikachu = await intFunctions.getPikachu();
      expect(pikachu.name).toBe("Pikachu-EX");
    });
  });
  describe("getMagicCards", () => {
    it("returns magic card 1 name", async () => {
      const magic = await intFunctions.getMagicCard1();
      expect(magic.subtypes.length).toBe(1);
    });
  });
  describe("getAllMagic", () => {
    it("returns all the magic cards", async () => {
      const magicCards = await intFunctions.getAllMagicCards();
      expect(magicCards.length).toBe(100);
    });
  });
});
