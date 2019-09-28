import * as React from 'react';
import { Link } from 'react-router-dom';

interface Props {}
interface State {}

export default class HomePage extends React.PureComponent<Props, State> {
  render() {
    return (
      <div className="container mt-4">
        <h1>A la carte</h1>
      </div>
    );
  }
}
