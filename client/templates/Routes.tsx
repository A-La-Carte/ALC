import * as React from 'react';
import {
  Route,
  Switch,
  RouteProps,
  RouteComponentProps,
  withRouter,
} from 'react-router';
import HomePage from './HomePage';
import SamplePage from './SamplePage';
import CreatePage from './CreatePage';
import SearchResultsPage from './SearchResultsPage';
import RecipesPage from './RecipesPage';
import RestaurantsPage from './RestaurantsPage';
import RestaurantHomePage from './RestaurantHomePage';

export const routes: RouteProps[] = [
  { exact: true, path: '/', component: HomePage },
  { path: '/sample', component: SamplePage },
  { path: '/search', component: SearchResultsPage },
  { path: '/recipes', component: RecipesPage },
  { path: '/restaurants/:restaurantId', component: RestaurantHomePage },
  { path: '/restaurants', component: RestaurantsPage },
  { path: '/create', component: CreatePage },
  { path: '/index', component: HomePage },
  { path: '*', component: HomePage },
];

interface Props extends RouteComponentProps<any> { }

class Routes extends React.Component<Props> {
  render() {
    return (
      <Switch>
        {routes.map((route, index) => (
          <Route key={index} {...route} />
        ))}
      </Switch>
    );
  }
}

export default withRouter(Routes);
