import * as React from 'react';
import _ from 'underscore';
import { RouteComponentProps } from 'react-router';
import PageContainer from './components/PageContainer'
import { RecipeType, RestaurantType } from './types';
import foodRecipesData from '../../data/recipes.json';
import drinkRecipesData from '../../data/drinks.json';
import restaurantData from '../../data/restaurants.json'

const recipesData = foodRecipesData.concat(drinkRecipesData);

const recipeLookup = _.indexBy(recipesData, 'id');
const restaurantLookup = _.indexBy(restaurantData, 'id');

interface Props extends RouteComponentProps<any> {
}

interface State {
  recipe: RecipeType,
  restaurant: RestaurantType,
}

export default class RestaurantHomePage extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    const recipe = recipeLookup[props.match.params.recipeId];

    this.state = {
      recipe: recipe,
      restaurant: restaurantLookup[recipe.restaurant_id]
    }
  }
  render() {
    return (
      <PageContainer noPadding>
        <div className="recipe-page">
          {this.renderVideoPlayer()}
          <div className="recipe-page-body row">
            {this.renderPageInfo()}
            {this.renderRecipe()}
          </div>
        </div>
      </PageContainer>
    );
  }

  renderVideoPlayer = (): React.ReactElement => {
    const { recipe } = this.state;
    return (
      <div className="recipe-page-video-container">
        <iframe
          id="ytplayer"
          width="100%"
          height="600px"
          src={`https://www.youtube.com/embed/${recipe.yt_video_id}`}
          frameBorder="0"></iframe>
      </div>
    )
  }

  renderPageInfo = (): React.ReactElement => {
    const { recipe, restaurant } = this.state;

    return (
      <div className="recipe-page-info col-md-4">
        <div className="recipe-page-info-name">
          {recipe.name}
        </div>
        <div className="recipe-page-info-description">
          {recipe.description}
        </div>
        <div className="recipe-page-info-restaurant-name">
          {restaurant.name}
        </div>
      </div>
    )
  }

  renderRecipe = (): React.ReactElement => {
    const { recipe } = this.state;

    return (
      <div className="recipe-page-recipe col-md-8">
        <div className="recipe-page-recipe-header">
          Ingredients
        </div>
        <div className="recipe-page-recipe-ingredients-list">
          {recipe.ingredients.map(ingredient =>
            <div
              key={ingredient}
              className="recipe-page-recipe-ingredients-list-ingredient">
              {ingredient}
            </div>
          )}
        </div>
        <div className="recipe-page-recipe-header">
          Instructions
        </div>
        <div className="recipe-page-recipe-instructions">
          {recipe.instructions.map((step, index) =>
            <div className="recipe-page-recipe-instructions-step">
              <div className="recipe-page-recipe-instructions-step-index">
                {index + 1}
              </div>
              <div
                key={_.uniqueId('instruction-step-')}
                className="recipe-page-recipe-instructions-step-text">
                {step}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

