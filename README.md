# Automation assignment
## Configuration

1. Run the following command on the terminal 
    ```sh
    npm install
    ```
2. add a cypress.env.json file with the following contents:
     ```javascript
    {
      "username": "jmbustamante90@gmail.com",
      "password": "Testing123"
    }
    ```
## Runing the tests

1. For running the tests on UI mode, run the following command on the terminal 
    ```sh
    npm run cy:open
    ```
1. For running the tests on headless mode, run the following command on the terminal 
    ```sh
    npm run cy:headless
    ```
## API testing recommendation

1. Perform a CRUD testing for the API in general
2. Compare search results on the search method vs the results being displayed on the UI
3. if the Payment info / Shipping adress is updated it should be validated by retrieving the user info from the API and making sure the new info is present on the response