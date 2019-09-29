import * as React from 'react';

interface Props {
  img: string,
  title: string,
  restaurant: string,
}
interface State { }

export default class SearchResult extends React.PureComponent<Props, State> {
  render() {
    return (
      <div className="search-result-elem col-md-6 col-sm-12 col-xs-12">
        <a className="search-result" href="#">
          <div className="search-result-container" style={{ backgroundImage: `url(${this.props.img})` }}>
            <div className="search-result-overlay"></div>
            <div className="search-result-info">
              <div className="search-result-info-subtitle">
                {this.props.restaurant}
              </div>
              <div className="search-result-info-title">
                {this.props.title}
              </div>
            </div>
          </div>
        </a>
      </div>
    );
  }
}
