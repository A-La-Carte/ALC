import * as React from 'react';
import PageContainer from './components/PageContainer'
import RestaurantTopSection from './components/RestaurantTopSection'
import RestaurantBottomSection from './components/RestaurantBottomSection'

interface Props {
}
interface State { }

export default class RestaurantHomePage extends React.PureComponent<Props, State> {
  render() {
    return (
      <PageContainer>

        <RestaurantTopSection
          restaurant="Momofuku Kawi" />
        <RestaurantBottomSection
          restaurant="Momofuku Kawi" />
      </PageContainer>
    );
  }
}

