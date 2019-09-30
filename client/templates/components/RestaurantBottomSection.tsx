import * as React from 'react';
import SearchResult from './SearchResult'
import ChefIcon from './ChefIcon'
import SisterRestaurantBlock from './SisterRestaurantBlock'

interface Props {
  restaurant: string,
}
interface State { }

export default class RestaurantBottomSection extends React.PureComponent<Props, State> {
  render() {
    return (
      <div className="row restaurant-section-margin">

        <div className="col-md-8 col-sm-12">
          <div className="recipe-text-header">
            Recipes
          </div>
          <div className="search-results-section row">
            <SearchResult
              href="/restaurants/1"
              restaurant="Bestia"
              title="Assa Bucco"
              img="https://bestiala.com/wp-content/uploads/sites/4/2017/01/slider1.jpg" />
            <SearchResult
              restaurant="Momofuku"
              title="Chicken Tikka Masala"
              img="https://momofuku-assets.s3.amazonaws.com/uploads/2019/04/majordomo.jpg" />
            <SearchResult
              restaurant="Bestia"
              title="Pasta Bolognese"
              img="https://bestiala.com/wp-content/uploads/sites/4/2015/07/SMALL-Home-Main-Event-Bottom-Right-.jpg" />
            <SearchResult
              restaurant="Momofuku"
              title="Fried Checkin Burger"
              img="https://momofuku-assets.s3.amazonaws.com/uploads/2016/11/Spicy-Fried-Chicken-Sandwiches-please-credit-Zack-DeZon.jpg" />
          </div>
        </div>

        <div className="col-md-4 col-sm-12">
          <div>
            <div className="chef-text-header">
              Chefs
            </div>
            <div className="row">
              <ChefIcon
                name="Chef Henry"
                img="data:image/jpeg;base64,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" />
              <ChefIcon
                name="Chef Bob"
                img="https://www.potomacpointwinery.com/wp-content/uploads/2019/03/Joe-Square-Headshot-1.jpg" />
              <ChefIcon
                name="Chef Sammy"
                img="http://blog.draperjames.com/wp-content/uploads/2016/01/ChefSeanBrock-Headshot-Andrea-Behrends_SQUARE-1.jpg" />
            </div>
          </div>

          <div>
            <div className="recipe-text-header">
              Sister Restaurants
            </div>
            <div className="">
              <SisterRestaurantBlock
                name="Momofuku Ko"
                img="https://momofuku-assets.s3.amazonaws.com/uploads/sites/11/2015/11/Momofuku-Ko-Interior-Photo-Credit-Gabriele-Stabile.jpg" />
              <SisterRestaurantBlock
                name="Momofuku Ssam Bar "
                img="https://momofuku-assets.s3.amazonaws.com/uploads/sites/10/2015/10/99A5154-1440x590.jpg" />
            </div>
          </div>
        </div>

      </div>
    );
  }
}
