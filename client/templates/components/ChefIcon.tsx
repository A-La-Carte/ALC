import * as React from 'react';

interface Props {
  name: string,
  img: string,
}
interface State { }

export default class ChefIcon extends React.PureComponent<Props, State> {
  render() {
    return (
      <div className="col-md-4 col-sm-4 col-xs-4">
        <div>
          <img className="chef-headshot" src={this.props.img}></img>
          <div className="chef-name">{this.props.name}</div>
        </div>
      </div>
    );
  }
}
