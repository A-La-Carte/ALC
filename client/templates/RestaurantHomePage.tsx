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
          restaurant="Momofuku Kawi"
          youtube_link="https://www.youtube.com/embed/XMWgzIGs3zw"
          street="20 Hudson Yards, Fifth Floor"
          city_state="New York, NY 10001"
          phone_number="646.517.2699"
          description="Kawi is a dope place and this is a dope description.Kawi is a dope place and this is a dope description.Kawi is a dope place and this is a dope description."
          reservation_link="https://resy.com/cities/ny/kawi" />
        <RestaurantBottomSection
          restaurant="Momofuku Kawi" />
      </PageContainer>
    );
  }
}

