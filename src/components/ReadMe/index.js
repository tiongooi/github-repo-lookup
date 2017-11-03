import React from 'react'
import logo from '../../images/logo.svg'
import './ReadMe.css'

const ReadMe = (props) => {
  return(
    <div className='read-me'>
      <header className="App__header">
        <img className="App__logo" alt="Bilue" src={logo} />
        <div className="App__titles">
          <h1 className="App__title">Take-Home Test</h1>
          <h2 className="App__subtitle">Tiong Ooi</h2>
        </div>
      </header>
      <div className="App__info">
        <p>
          This code lives in <code>./src/components/App.js</code>
        </p>
      </div>
      <div className="App__instructions">
        <h2>The Task</h2>

        <p>
          Your task is to take this starter project and build it into an app
          that uses the{' '}
          <a href="https://developer.github.com/v3/search/">
            GitHub Search API
          </a>{' '}
          to list repositories based on a user's search term. The app should
          display a search field that allows a user to enter a search term,
          and a list beneath this listing repositories that matched that term.
        </p>

        <p>
          The assignment itself is a fairly simple one, but you shouldn't be
          afraid to over-engineer it. Remember the point of this test is to
          evaluate how you'd work on much larger projects, so treat this
          project as such.
        </p>

        <h2>The Starter Project</h2>

        <p>
          This starter repo is set up with some of the libraries we often
          employ when building React projects at Bilue. Out of the box we've
          got the following:
        </p>

        <ul>
          <li>
            A basic webpack + Babel setup with support for ES2015, image
            assets and stylesheets.
          </li>
          <li>
            Jest set up to run unit tests. Create a file with a{' '}
            <code>.test.js</code> extension or inside a <code>__test__/</code>{' '}
            directory to have the test runner pick it up.
          </li>
          <li>
            A folder layout similar to what we'll often use for our own
            projects.
          </li>
          <li>
            The <code>App</code> component that renders this page, with basic
            stylesheets and tests.
          </li>
        </ul>

        <p>
          However, these are all just recommendations. If you're more
          comfortable using another testing library, or state management
          library, or approach to writing stylesheets, and so on, feel free to
          swap out parts of this starter project.
        </p>

        <h3>NPM Tasks</h3>

        <table>
          <thead>
            <tr>
              <td>Command</td>
              <td>Description</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>npm start</code>
              </td>
              <td>Start the webpack dev server</td>
            </tr>
            <tr>
              <td>
                <code>npm test</code>
              </td>
              <td>Start the Jest test runner</td>
            </tr>
            <tr>
              <td>
                <code>npm run build</code>
              </td>
              <td>Bundle a production build</td>
            </tr>
          </tbody>
        </table>

        <h2>Bonus Points</h2>

        <ul>
          <li>
            Write unit tests for your code - here at Bilue we put a big
            emphasis on testing. This project is set up out the box with{' '}
            <a href="http://facebook.github.io/jest/">Jest</a>, but feel free
            to pull that out and use whichever testing setup you're familiar
            with.
          </li>
          <li>
            Cleanly seperate out business logic from presentational concerns.
            This can mean a full blown state management solution like Redux or
            MobX, or simply splitting logic and state out into container
            components.
          </li>
          <li>
            Clean, well commented / documented code is appreciated. Tools like
            Prettier and ESLint can help with this.
          </li>
          <li>
            Use a tool like Flow or TypeScript to statically type your code.
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ReadMe
