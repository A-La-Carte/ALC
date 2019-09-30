import * as React from 'react';
import _ from 'underscore';
import PageContainer from './components/PageContainer'
import SearchResult from './components/SearchResult'
import drinkRecipesData from '../../data/drinks.json';
import restaurantData from '../../data/restaurants.json'

const restaurantLookup = _.indexBy(restaurantData, 'id')

interface Props {
}
interface State { }

export default class RecipesPage extends React.PureComponent<Props, State> {
  render() {
    return (
      <PageContainer selectedRoute="drinks">
        <div className="search-results-section row">
          {drinkRecipesData.map(recipe =>
            <SearchResult
              href={`/recipes/${recipe.id}`}
              key={recipe.id}
              restaurant={restaurantLookup[recipe.restaurant_id].name}
              title={recipe.name}
              img={recipe.main_image} />
          )}
        </div>
      </PageContainer>
    );
  }
}

