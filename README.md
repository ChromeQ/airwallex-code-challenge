This is the coding challenge completed by [Dav Hill](https://www.linkedin.com/in/dafydd-hill-55a32555/)

## Quick start

In the root dir run `npm install` to install dependencies  
To run the app in dev mode use `npm start`  
Or build with `npm run build` and then you can view in a simple HTTP server such as: `python -m SimpleHTTPServer` from within the `build` dir  
Tests can be run using `npm test`

## The App

The app is a single page React app which was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The app is a fully responsive down to a small mobile screen and up to large desktop screens.

I decided to use Material UI as an alternative to Bootstrap as it brings a consistent look and feel to native apps, particularly for Android users. The theme is the default theme with only the primary colour overridden to match the green for Broccoli.

## UI/UX Extras

Although the app brief was a very simple one, I decided to use a few small extras to give it a more polished look and attention to detail.

These include optimizations such as code splitting using React Suspense/Lazy, although not entirely necessary in this small app you can see a "skeleton" of the form whilst it is loading (Tip: Try throttling Chrome Network speed to Slow 3G before clicking the main home page button to see the skeleton loading page)

There is also an indeterminate Loading spinner when waiting for the form to respond after submit.

Live validation is built in to the form, and become "active" only after form submit or once a field's validation state changes from valid -> invalid. This means the input is not shown as invalid as soon as the user touches/types (or blurs out) an input. This is intentional as I believe it is bad UX to show errors whilst the user is still entering the current input.

## Tests

There are a variety of tests in the `src/component/tests` folder. They include some snapshot tests, some basic unit tests and some integration tests.  
Tests are written using Jest and Enzyme.  
Although the app is not completely covered in tests and is not exhausive I hope the tests available demonstrate a thorough understanding of front end testing.
