import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setLanguage } from '../redux/slice'
import { AppDispatch, RootState } from '../redux/store'

interface StateProps {
  language: string;
}

interface DispatchProps {
  setLanguage: (language: string) => void;
}

type Props = StateProps & DispatchProps;

class Selector extends Component<Props> {
  handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.props.setLanguage(event.target.value);
  }

  render() {
    return (
      <select value={this.props.language} onChange={this.handleChange} className='header_select'>
        <option value="en">English</option>
        <option value="ru">Русский</option>
      </select>
    );
  }
}

const mapStateToProps = (state: RootState): StateProps => ({
  language: state.reviews.language
});

const mapDispatchToProps = (dispatch: AppDispatch): DispatchProps => ({
  setLanguage: (language: string) => dispatch(setLanguage(language))
});

const ConnectedSelector = connect(mapStateToProps, mapDispatchToProps)(Selector);
export default ConnectedSelector;