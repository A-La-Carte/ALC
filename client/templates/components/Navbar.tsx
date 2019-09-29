import * as React from 'react';
import cx from 'classnames';

interface Props {
  whiteNavbar?: boolean,
  selectedRoute?: string,
}
interface State { }

export default class Navbar extends React.PureComponent<Props, State> {

  render() {
    const { selectedRoute } = this.props;

    return (
      <div className={cx('alc-navbar', { white: this.props.whiteNavbar })}>
        <div className="alc-navbar-left">
          <div className="alc-navbar-main">
            <div className="alc-navbar-main-logo"></div>
            <a href="/">A La Cook</a>
          </div>
        </div>
        <div className="alc-navbar-right">
          <div className={cx('alc-navbar-link', { selected: selectedRoute === 'restaurants' })}><a href="/restaurants">Restaurants</a></div>
          <div className={cx('alc-navbar-link', { selected: selectedRoute === 'recipes' })}><a href="/recipes">Recipes</a></div>
        </div>
      </div >
    );
  }
}