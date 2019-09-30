import * as React from 'react';

interface Props {
  img: string,
  name: string,
  href?: string,
}
interface State { }

export default class SisterRestaurantBlock extends React.PureComponent<Props, State> {
  render() {
    console.log(this.props.img);
    return (
      <div className="col-md-12 col-sm-12 col-xs-12">
        <a className="sister-restaurant" href={this.props.href || '#'}>
          <div className="sister-restaurant-container" style={{ backgroundImage: `url(${this.props.img})` }}>
            <div className="sister-restaurant-overlay"></div>
            <div className="sister-restaurant-info">
              <div className="sister-restaurant-info-title">
                {this.props.name}
              </div>
            </div>
          </div>
        </a>
      </div >
    );
  }
}
