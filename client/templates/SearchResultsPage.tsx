import * as React from 'react';
import PageContainer from './components/PageContainer'
import SearchResult from './components/SearchResult'


interface Props {
}
interface State { }

export default class SearchResultsPage extends React.PureComponent<Props, State> {
  render() {
    return (
      <PageContainer>
        <div className="search-results-section">
          <SearchResult
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
      </PageContainer>
    );
  }
}

