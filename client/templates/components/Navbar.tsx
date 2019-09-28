import * as React from 'react';

interface Props {
}
interface State { }

export default class Navbar extends React.PureComponent<Props, State> {
  render() {
    return (
      <div className="alc-navbar">
        <div className="alc-navbar-left">
          <div className="alc-navbar-main"><div>A La Carte</div></div>
        </div>
        <div className="alc-navbar-right">
          <div className="alc-navbar-link"><div>Restaurants</div></div>
          <div className="alc-navbar-link"><div>Recipes</div></div>
        </div>
      </div>
    );
  }
}
