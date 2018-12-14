const moviesController = require("./moviesController");
const testInit = require("../../test/init");
const movieData = require("../lib/movieData");
const sinon = require("sinon");
const sandbox = sinon.createSandbox();
describe("integration tests", () => {
  let db;
  function clearDatabase() {
    return db.query("DELETE FROM movies");
  }

  beforeAll(() => {
    // This hides the error when we console log in the code called from the
    // test named "responds with an error on a duplicate movie name".
    sandbox.stub(console, "error");

    return testInit.initDb().then(database => {
      db = database;
    });
  });

  afterAll(() => {
    sandbox.restore();
  });

  beforeEach(() => {
    return clearDatabase();
  });

  describe("getAvailDates", () => {
    it("responds with success", done => {
      const momentName = "Tigers";
      const req = {
        app: {
          get: () => db
        },
        body: { name: momentName }
      };
      const res = {
        json: function(data) {
          expect(data).toMatchObject({
            name: momentName,
            created_at: expect.any(Date)
          });
          done();
        }
      };
      momentController.getAvailDates(req, res);
    });

    it("responds with an error on a duplicate movie name", done => {
      const momentName = "Test Movie Name";
      // First, force a single movie in the database.
      movieData.create(db, { name: momentName }).then(() => {
        // Now use the controller to create it again.
        const req = {
          app: {
            get: () => db
          },
          body: { name: movieName }
        };
        const res = {
          status(num) {
            expect(num).toBe(500);
            return {
              json(data) {
                expect(data).toEqual({
                  message: "There was an error on the server"
                });
                done();
              }
            };
          }
        };
        moviesController.create(req, res);
      });
    });
  });
});
