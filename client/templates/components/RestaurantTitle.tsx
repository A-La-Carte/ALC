import * as React from 'react';

interface Props {
  restaurant: string,
}
interface State { }

export default class SearchResult extends React.PureComponent<Props, State> {
  render() {
    return (
      <div>
        <div className="restaurant-home-title">
          {this.props.restaurant}
        </div>
        <img className="restaurant-home-img" src="https://momofuku-assets.s3.amazonaws.com/uploads/sites/34/2019/03/Kawi2-1440x590.jpg"></img>
      </div>
    );
  }
}
