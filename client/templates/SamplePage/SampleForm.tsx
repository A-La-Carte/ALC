import * as React from 'react';

export interface SampleFormData {
  myNumber: number;
  myShortString: string;
  myLongText: string;
}

interface Props {
  showLongTextField: boolean;
  buttonText: string;
  onSubmit: (formData: SampleFormData) => unknown;
}

interface Errors {
  [field: string]: string;
}

interface State {
  myNumber: string;
  myShortString: string;
  myLongText: string;
  errors: Errors;
}

export default class SampleForm extends React.PureComponent<Props, State> {
  emptyState: State = {
    myNumber: '',
    myShortString: '',
    myLongText: '',
    errors: {},
  };

  state: State = this.emptyState;

  resetState() {
    this.setState(this.emptyState);
  }

  /**
   * We have a random ID so we can assign unique ID's to elements, even if
   * there are multiple `SampleForm` instances on a page
   */
  randomId = Math.floor(Math.random() * 1e9);

  handleMyNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ myNumber: event.target.value });
  };

  handleMyShortStringChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ myShortString: event.target.value });
  };

  handleMyLongTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ myLongText: event.target.value });
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { onSubmit } = this.props;
    const { myNumber, myShortString, myLongText } = this.state;
    const errors: Errors = {};
    const myNumberInt = parseInt(myNumber, 10);
    if (isNaN(myNumberInt)) {
      errors.myNumber = 'The number must be an integer';
    }
    if (myShortString.length > 32) {
      errors.myShortString = 'The maximum length is 32';
    }

    if (Object.keys(errors).length) {
      return;
    }

    onSubmit({ myNumber: myNumberInt, myShortString, myLongText });
  };

  render() {
    const { showLongTextField, buttonText } = this.props;
    const { myNumber, myShortString, myLongText, errors } = this.state;
    const myNumberId = `SampleForm__myNumber${this.randomId}`;
    const myShortStringId = `SampleForm__myShortString${this.randomId}`;
    const myLongTextId = `SampleForm__myLongText${this.randomId}`;

    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor={myNumberId}>ID number</label>
          <input
            id={myNumberId}
            type="number"
            className="form-control"
            value={myNumber}
            onChange={this.handleMyNumberChange}
          />
          {errors.myNumber ? errors.myNumber : false}
          <p className="help-block text-muted">
            You can use your ID number and snippet title together to save or
            retrieve text snippets.
          </p>
        </div>
        <div className="form-group">
          <label htmlFor={myShortStringId}>Snippet title</label>
          <input
            id={myShortStringId}
            type="text"
            className="form-control"
            value={myShortString}
            onChange={this.handleMyShortStringChange}
          />
          {errors.myShortString ? errors.myShortString : false}
        </div>
        {showLongTextField && (
          <div className="form-group">
            <label htmlFor={myLongTextId}>
              Text snippet to store for safe-keeping
            </label>
            <input
              id={myLongTextId}
              type="text"
              className="form-control"
              value={myLongText}
              onChange={this.handleMyLongTextChange}
            />
          </div>
        )}
        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            {buttonText}
          </button>
        </div>
      </form>
    );
  }
}
