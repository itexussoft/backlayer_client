
## Features

* [Redux](http://redux.js.org/)
* [Redux Saga](https://redux-saga.js.org/)
* [Redux Persist](https://github.com/rt2zz/redux-persist/)
* [React Navigation](https://reactnavigation.org/) 
* [React Native Gesture Handler](https://github.com/kmagiera/react-native-gesture-handler) 
* [Jest](https://facebook.github.io/jest/)
* [Eslint](http://eslint.org/) ([Airbnb config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb))

## Prerequisites

* [Node](https://nodejs.org) v8.10 (it is recommended to install it via [NVM](https://github.com/creationix/nvm))
* [Yarn](https://yarnpkg.com/)
* A development machine set up for React Native by following [these instructions](https://facebook.github.io/react-native/docs/getting-started.html)

## Getting Started

1. Run `yarn` or `npm install` to install dependencies

2. Run `react-native eject` to upgrade and add iOS & Android Folders.
  
3. Run `react-native link`

4.  Start the packager with `npm start`
5.  Connect a mobile device to your development machine
6.  Change `ApiConstants.BASE_URL` value in `app/api/ApiConstants.js` on your server URL
7.  Run the test application:
  * On Android:
    * Run `react-native run-android`
  * On iOS:
    * Open `ios/Backlayer.xcodeproj` in Xcode
    * Hit `Run` after selecting the desired device
14. Enjoy!!!
