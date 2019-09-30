import * as React from 'react';

interface Props {
  img: string,
  name: string,
}
interface State { }

export default class SearchResult extends React.PureComponent<Props, State> {
  render() {
    console.log(this.props.img);
    return (
      <div className="col-md-12 col-sm-12 col-xs-12">
        <div className="sister-restaurant-block" style={{ backgroundImage: `url(${this.props.img})` }}>
        </div>
        <div className="sister-restaurant-info-title">
          {this.props.name}
        </div>
      </div>
    );
  }
}
