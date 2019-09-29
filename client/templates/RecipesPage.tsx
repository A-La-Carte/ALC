import * as React from 'react';
import _ from 'underscore';
import PageContainer from './components/PageContainer'
import SearchResult from './components/SearchResult'
import recipesData from '../../data/recipes.json';
import restaurantData from '../../data/restaurants.json'

const restaurantLookup = _.indexBy(restaurantData, 'id')

interface Props {
}
interface State { }

export default class RecipesPage extends React.PureComponent<Props, State> {
  render() {
    return (
      <PageContainer>
        <div className="search-results-section row">
          {recipesData.map(recipe =>
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

