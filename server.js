const express = require("express");

const PORT = process.env.PORT || 8081;

// Requiring our models for syncing
const db = require("./models");

const app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// // Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
const routes = require("./controllers/burgers_controller.js");

app.use(routes);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
  });
});