import * as React from 'react';

interface Props {
  restaurant: string,
  youtube_link: string,
  street: string,
  city_state: string,
  phone_number: string,
  description: string,
  reservation_link: string
}
interface State { }

export default class RestaurantTopSection extends React.PureComponent<Props, State> {
  render() {
    return (
      <div className="row" style={{ height: 400 }}>

        <div className="col-md-8">
          <iframe width="100%" height="100%" src={this.props.youtube_link} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>

        <div className="col-md-4">
          <div className="restaurant-home-title">
            {this.props.restaurant}
          </div>

          <div className="reservation-button">
            <a type="button" className="btn btn-outline-secondary btn-sm" href={this.props.reservation_link} target="_blank">Reserve on Resy</a>
          </div>

          <div className="col-md-12">
            <ul className="list-group list-group-flush restaurant-bio-list">
              <li className="list-group-item">{this.props.description}</li>
              <li className="list-group-item" style={{ textAlign: "center" }}>{this.props.phone_number}</li>
              <li className="list-group-item" style={{ textAlign: "center" }}>{this.props.street} <br /> {this.props.city_state} </li>
            </ul>
          </div>
        </div>
      </div >
    );
  }
}
