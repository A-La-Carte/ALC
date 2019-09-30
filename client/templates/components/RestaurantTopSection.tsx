import * as React from 'react';

interface Props {
  restaurant: string,
}
interface State { }

export default class RestaurantTopSection extends React.PureComponent<Props, State> {
  render() {
    return (
      <div className="row">

        <div className="col-md-8">
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/XMWgzIGs3zw" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>

        <div className="col-md-4">
          <div className="restaurant-home-title">
            {this.props.restaurant}
          </div>

          <div className="reservation-button">
            <button type="button" className="btn btn-outline-secondary btn-sm">Reserve on Resy</button>
          </div>

          <div className="col-md-6">
            <ul className="list-group list-group-flush restaurant-bio-list">
              <li className="list-group-item">20 Hudson Yards <br /> Fifth Floor <br /> New York, NY 10001</li>
              <li className="list-group-item">646.517.2699</li>
              <li className="list-group-item">Lunch Daily <br /> 11:30 am – 3:00 pm</li>
              <li className="list-group-item">Dinner Sunday – Thursday <br /> 5:00 pm – 10:00 pm <br /> Friday + Saturday <br /> 5:00 pm – 11:00 pm</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
