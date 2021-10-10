# Zeller Coding Challenge

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.\

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Approach
 * Uses functional components, React hooks to set state and fetch data, styled components to use component-level styles
 * Main App fetches data with Effect hook, updates the state with State hook based on the radio button selection, passed the data to the component 'Customer' to display the name and role of the customer
 * Created a component 'Customer' to display the name and role of the customer