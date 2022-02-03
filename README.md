# metadataTest
Take home test to metadata 
+++++

Important folders and files : 

elements/pages : Folder to store all page objects:  

Current page objects:  
++++++++++++++++++++++
cart.js   - All objects related to the cart functionality and functionality 
homepage.js - Collects objects for the homepage itself, several methods with functionality regarding anything that happens in the homepage
products.js - All the objects related to product pages 

+++++++++++++++++++++++
fixtures 

Current fixtures: 
++++++++++++++++
testData.json  - testData for some scenarios (login and client data for purchases)
++++++++++++++++

Tests

Current tests 
+++++++++++++++++
Divided by functionality : 

login.js - all tests related to login in the application 
signin.js -  all tests related to signing in the application 
cart.js - all tests related to administering objects in the cart and make purchases 
products_spec.js - all tests related validating products in the app


+++++++++++++++++
Installation
+++++++++++++++++

npm install 

+++++++++++++++++
Executing test:
+++++++++++++++++

To open the cypress test runner : npx cypress open 

To run the tests via command line  : npx cypress run

To run an specific test : npx cypress run --spec "cypress/integration/my-spec.js"