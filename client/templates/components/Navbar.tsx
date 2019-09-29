import * as React from 'react';
import cx from 'classnames';

interface Props {
  whiteNavbar?: boolean,
}
interface State { }

export default class Navbar extends React.PureComponent<Props, State> {
  render() {
    return (
      <div className={cx('alc-navbar', { white: this.props.whiteNavbar })}>
        <div className="alc-navbar-left">
          <div className="alc-navbar-main"><a href="/">A La Carte</a></div>
        </div>
        <div className="alc-navbar-right">
          <div className="alc-navbar-link"><a href="/restaurants">Restaurants</a></div>
          <div className="alc-navbar-link"><a href="/recipes">Recipes</a></div>
        </div>
      </div >
    );
  }
}
