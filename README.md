This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `Implementation and Assumptions`

According to problem statement, initially to begin with need to figures out.
-> looks for photo api ( found unsplash free api)
-> use react.js with react hooks and bootstrap ( because working on this react.js and redux from few years)
->For Saving Pins and Removing and Hiding acc. to user preference i need to store them temporarily and then make selection on collected data(i.e photos) as per user preferences for which store was created with photo and pin data objects. 
# pin is used fro showing user saved pins whereas photos are used to make decision to show user searched data or automatically fetched data whosoever comes first/available.
to handle these action created redux action and dispatch them on need.

### for handling unnecessarily api calls implement debouncing from my own npm-package.







