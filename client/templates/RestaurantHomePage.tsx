import * as React from 'react';
import PageContainer from './components/PageContainer'

interface Props {
}
interface State { }

export default class RestaurantHomePage extends React.PureComponent<Props, State> {
  render() {
    return (
      <PageContainer>
        <div className="restaurant-home-page">
          Test!
        </div>
      </PageContainer>
    );
  }
}

