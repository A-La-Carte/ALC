import Navbar from './Navbar'
import * as React from 'react';
import cx from 'classnames';

interface Props {
  children: React.ReactNode,
  noPadding?: boolean,
}
interface State { }

export default class HomePage extends React.PureComponent<Props, State> {
  render() {
    return (
      <div className="alc-page">
        <Navbar />
        <div className={cx('alc-page-body', { 'no-padding': this.props.noPadding })} >
          {this.props.children}
        </div>
      </div>
    );
  }
}
