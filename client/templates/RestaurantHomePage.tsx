import * as React from 'react';
import _ from 'underscore';

import { RouteComponentProps } from 'react-router';
import { RestaurantType } from './types';
import PageContainer from './components/PageContainer'
import RestaurantTopSection from './components/RestaurantTopSection'
import RestaurantBottomSection from './components/RestaurantBottomSection'
import restaurantData from '../../data/restaurants.json'

const restaurantLookup = _.indexBy(restaurantData, 'id');


interface Props extends RouteComponentProps<any> {
}

interface State {
  restaurant: RestaurantType,
}

export default class RestaurantHomePage extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    const restaurant = restaurantLookup[props.match.params.restaurantId];

    this.state = {
      restaurant: restaurant,
    }
  }

  render() {
    const { restaurant } = this.state;
    return (
      <PageContainer>
        <RestaurantTopSection
          restaurant={restaurant.name}
          youtube_link={restaurant.yt_overview_video}
          street={restaurant.address_street}
          city_state={restaurant.address_city_state}
          phone_number={restaurant.phone_number}
          description={restaurant.description}
          reservation_link={restaurant.reservation_link} />
        <RestaurantBottomSection
          restaurant={restaurant.name} />
      </PageContainer>
    );
  }
}

