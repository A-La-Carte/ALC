import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import SampleForm, { SampleFormData } from './SamplePage/SampleForm';
import { getSample, updateSample } from '../js/API/Sample';
import { Link } from 'react-router-dom';

enum SaveState {
  unsaved = 'unsaved',
  saving = 'saving',
  done = 'done',
}

interface Props extends RouteComponentProps<any> {}
interface State {
  retrieveFormData: SampleFormData | null;
  retrieveLoading: boolean;
  retrieveResult: string | null | undefined;
  saveFormData: SampleFormData | null;
  saveState: SaveState;
}

/**
 * This page allows the user to save data to the `Sample` table via the
 * `server/app/sample` endpoint, which is called via `client/js/API/Sample.ts`.
 */
class SamplePage extends React.PureComponent<Props, State> {
  state: State = {
    retrieveFormData: null,
    retrieveLoading: false,
    retrieveResult: undefined,
    saveFormData: null,
    saveState: SaveState.unsaved,
  };

  /**
   * We define handlers with `handlerName = () => {}` so that they're bound
   * with the `this` pointing to this class.
   *
   * This is also needed for PureComponent to work well:
   * https://medium.freecodecamp.org/why-arrow-functions-and-bind-in-reacts-render-are-problematic-f1c08b060e36#5609
   */
  handleRetrieveSubmit = async (data: SampleFormData) => {
    const { myNumber, myShortString } = data;
    this.setState({
      retrieveFormData: data,
      retrieveLoading: true,
      retrieveResult: undefined,
    });
    const longText = await getSample(myNumber, myShortString);
    this.setState({ retrieveLoading: false, retrieveResult: longText });
  };

  handleSaveSubmit = async (data: SampleFormData) => {
    const { myNumber, myShortString, myLongText } = data;
    this.setState({
      saveFormData: data,
      saveState: SaveState.saving,
    });
    await updateSample(myNumber, myShortString, myLongText);
    this.setState({ saveState: SaveState.done });
  };

  handleGoHomeClick = () => {
    this.props.history.push('/');
  };

  render() {
    const {
      retrieveFormData,
      retrieveLoading,
      retrieveResult,
      saveFormData,
      saveState,
    } = this.state;

    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-12 my-4">
              <div>
                <Link to="/">One way to go home</Link>
              </div>
              <div>
                <button
                  className="btn btn-link p-0"
                  onClick={this.handleGoHomeClick}
                >
                  Another way to go home
                </button>
              </div>
            </div>
          </div>

          <p>
            This page allows you to save a text snippet identified by a number
            (pick your lucky number!) and a title, and get it back from within
            the database. It's here more as a demo of how to use React, Express,
            and the database than for any real practical use.
          </p>

          <div className="row">
            <div className="col-sm-6 my-4">
              <h2>Save a text snippet</h2>

              <SampleForm
                showLongTextField={true}
                buttonText="Save"
                onSubmit={this.handleSaveSubmit}
              />

              {saveFormData && (
                <React.Fragment>
                  <div className="font-weight-bold">
                    Saving for ({saveFormData.myNumber},{' '}
                    {saveFormData.myShortString})
                  </div>
                  <div>
                    {saveState === SaveState.saving && 'Saving'}
                    {saveState === SaveState.done && 'Saved!'}
                  </div>
                </React.Fragment>
              )}
            </div>

            <div className="col-sm-6 my-4">
              <h2>Retrieve a text snippet</h2>

              <SampleForm
                showLongTextField={false}
                buttonText="Retrieve"
                onSubmit={this.handleRetrieveSubmit}
              />

              {retrieveFormData && (
                <React.Fragment>
                  <div className="font-weight-bold">
                    Data for ({retrieveFormData.myNumber},{' '}
                    {retrieveFormData.myShortString})
                  </div>
                  <div>
                    {retrieveLoading && 'Loading...'}
                    {retrieveResult === '' && '<empty string>'}
                    {retrieveResult === null && '<null>'}
                    {!!retrieveResult && retrieveResult}
                  </div>
                </React.Fragment>
              )}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(SamplePage);
