import * as React from 'react';
import { Link } from 'react-router-dom';

interface Props {}
interface State {}

export default class HomePage extends React.PureComponent<Props, State> {
  render() {
    return (
      <div className="container mt-4">
        <h1>Travelchime interview project</h1>
        <p>Thanks for your interest in working at Travelchime!</p>
        <p>
          Back when Travelchime started, it really was just a search box asking
          you where you wanted to go and a document. You'll help us build the
          same.
        </p>

        <p>
          Your task is to build the part of Travelchime that travelers interact
          with when they first get to the site:
        </p>

        <ol>
          <li>
            <strong>We'll ask travelers where they want to go.</strong>{' '}
            Travelers see an autocomplete text box where they can enter the
            city, country, or region where they're thinking of going, and can
            submit the form once they're done.
          </li>
          <li>
            <p>
              <strong>We'll create their document</strong> in the database, and
              take them to a page with their newly-created document. The user
              should be able to use the same URL to come back to this page in
              the future.
            </p>
            <p>The page should have:</p>
            <ul>
              <li>
                A title based on the trip they entered (e.g., "Your trip to
                Paris")
              </li>
              <li>
                An empty, not-wired-up document text area that doesn't do
                anything but let them enter some text.{' '}
                <strong className="text-muted">
                  Note: you don't have to connect this to the back-end or allow
                  saving the document.
                </strong>
              </li>
            </ul>
          </li>
        </ol>

        <p>
          To help you get started, we've provided a sample end-to-end
          implementation of a form that saves and retrieves text snippets. It
          shows how to navigate between pages, read and write to the database,
          and use React.
        </p>

        <p>
          <strong>
            <Link to="/sample">
              Check out the sample end-to-end form implementation
            </Link>
          </strong>
        </p>

        <p>
          For reference, our repository uses{' '}
          <a href="https://reactjs.org/">React</a> (front-end framework),{' '}
          <a href="http://www.typescriptlang.org/">Typescript</a> (language),{' '}
          <a href="https://getbootstrap.com/">Bootstrap 4</a> (front-end
          styling), <a href="https://expressjs.com/">Express</a> (back-end
          framework), and <a href="http://docs.sequelizejs.com/">Sequelize</a>{' '}
          (database ORM).
        </p>

        <p>
          <strong>
            <a href="https://docs.google.com/document/d/19Yrn7rISAsb0uNaFr0BqUOGV_Xw6HrTVywCjzFO-hXg/edit">
              Read our Google Doc for more detailed instructions.
            </a>
          </strong>
        </p>

        <hr />

        <p>
          Once you're ready to dive in, you can start by implementing the page
          linked to below!
        </p>

        <Link to="/create" className="btn btn-primary btn-block">
          Create a new trip doc
        </Link>
      </div>
    );
  }
}
