import * as React from 'react';

interface Props {
}
interface State { }

export default class Navbar extends React.PureComponent<Props, State> {
  render() {
    return (
      <div className="alc-navbar">
        <div className="alc-navbar-left">
          <div className="alc-navbar-main">A La Carte</div>
        </div>
        <div className="alc-navbar-right">
          <div className="alc-navbar-link">Restaurants</div>
          <div className="alc-navbar-link">Recipes</div>
        </div>
      </div>
    );
  }
}
