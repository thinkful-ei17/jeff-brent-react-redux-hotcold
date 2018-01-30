import React from 'react';

import './guess-form.css';

export default class GuessForm extends React.Component {
  onSubmit(event) {
    event.preventDefault();
    console.log(this.props);

    if (this.props.onMakeGuess) {
      const { value } = this.input;
      this.props.onMakeGuess(value);
    }
    this.input.value = '';
    this.input.focus();
  }


  render() {
    return (
      <form onSubmit={e => this.onSubmit(e)}>
        <input
          ref={(input) => { this.input = input; }}
          type="number"
          name="userGuess"
          id="userGuess"
          className="text"
          min="1"
          max="100"
          autoComplete="off"
          aria-labelledby="feedback"
          required
        />
        <button
          type="submit"
          name="submit"
          id="guessButton"
          className="button"
        >
          Guess
        </button>
      </form>
    );
  }
}
