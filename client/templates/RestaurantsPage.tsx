import * as React from 'react';
import PageContainer from './components/PageContainer'
import SearchResult from './components/SearchResult'
import restaurantData from '../../data/restaurants.json'


interface Props {
}
interface State { }

export default class RestaurantsPage extends React.PureComponent<Props, State> {
  render() {
    return (
      <PageContainer selectedRoute="restaurants">
        <div className="search-results-section row">
          {restaurantData.map(restaurant =>
            <SearchResult
              href={`/restaurants/${restaurant.id}`}
              restaurant={restaurant.address_city_state}
              title={restaurant.name}
              img={restaurant.main_image}
            />
          )}
        </div>
      </PageContainer>
    );
  }
}

