import React from 'react';

export default class CreatePage extends React.PureComponent<{}> {
  render() {
    return (
      <div className="container mt-4">
        <h1>It's yours to edit!</h1>
        <p>
          This is the page that should ask travelers where they want to go and
          show a button to create a trip doc. Otherwise, it's up to you how to
          lay it out, structure it, etc.
        </p>

        <p>
          You can use the list of places in <kbd>data/places.json</kbd> to
          populate your autocomplete.
        </p>
      </div>
    );
  }
}
