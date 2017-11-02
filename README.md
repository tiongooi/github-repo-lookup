![Bilue](src/components/logo.svg)

# Bilue Take-Home Test

_Tiong Ooi_

## Running This Project

```shell
# Clone the project
$ git clone git@github.com:BilueCandidates/react-take-home-test-tiong.git

# Install npm dependencies
$ npm install

# Start the development server
$ npm start
```

## The Task

Your task is to take this starter project and build it into an app that uses the GitHub Search API to list repositories based on a user's search term. The app should display a search field that allows a user to enter a search term, and a list beneath this listing repositories that matched that term.

The assignment itself is a fairly simple one, but you shouldn't be afraid to over-engineer it. Remember the point of this test is to evaluate how you'd work on much larger projects, so treat this project as such.

## The Starter Project

This starter repo is set up with some of the libraries we often employ when building React projects at Bilue. Out of the box we've got the following:

- A basic webpack + Babel setup with support for ES2015, image assets and stylesheets.
- Jest set up to run unit tests. Create a file with a .test.js extension or inside a __test__/ directory to have the test runner pick it up.
- A folder layout similar to what we'll often use for our own projects.
- An App component that renders this README, with basic stylesheets and tests.

However, these are all just recommendations. If you're more comfortable using another testing library, or state management library, or approach to writing stylesheets, and so on, feel free to swap out parts of this starter project. You can also scrap this starter project and use Create React App, React Native, Next.js or whatever you're comfortable with.

### NPM Tasks

| Command         | Description                  |
|:----------------|:-----------------------------|
| `npm start`     | Start the webpack dev server |
| `npm test`      | Start the Jest test runner   |
| `npm run build` | Bundle a production build    |

## Bonus Points

- Write unit tests for your code - here at Bilue we put a big emphasis on testing. This project is set up out the box with Jest, but feel free to pull that out and use whichever testing setup you're familiar with.
- Cleanly seperate out business logic from presentational concerns. This can mean a full blown state management solution like Redux or MobX, or simply splitting logic and state out into container components.
- Clean, well commented / documented code is appreciated. Tools like Prettier and ESLint can help with this.
- Use a tool like Flow or TypeScript to statically type your code.
