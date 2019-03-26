# sequelizedBurger

**App Link** https://damp-plains-34136.herokuapp.com/

* Burger app is a restaurant app that lets users input the names of burgers they'd like to eat.
* Whenever a user submits a burger's name, the app will display the burger on the left side of the page    along with a text box for user name entry-- waiting to   be devoured.
* Each burger in the waiting area also has a `devour It!` button. When the user clicks it, the burger      will move to the right side of the page.
* App has a Customer association table. This involved creating one new Customer model and connecting it    with the Burger model.
* The app will store every burger in a database, whether devoured or not along with user associations.
* This app uses Sequelize, Sequelize associations, Node, Express and Handlebars. 
* It follows the MVC design pattern and uses Node and Sequelize to query and route data in the app, and    Handlebars to generate the HTML.



* Validations to the models:

  * A burger's name cannot be null
  * A burger's devoured status is false by default
  * A Customer's name cannot be null