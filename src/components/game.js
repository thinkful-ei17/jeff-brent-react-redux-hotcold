import { newGame, submitGuess } from '../actions';
import React from 'react';
import { connect } from 'react-redux';
import GuessSection from './guess-section';
import Header from './header';
import InfoSection from './info-section';
import StatusSection from './status-section';

export class Game extends React.Component {
  render() {
    const { feedback, guesses, auralStatus } = this.props;
    console.log(this.props);
    console.log(guesses);
    const guessCount = guesses.length;

    return (
      <div>
        <Header
          onRestartGame={() => this.restartGame()}
          onGenerateAuralUpdate={() => this.generateAuralUpdate()}
        />
        <main role="main">
          <GuessSection
            feedback={feedback}
            guessCount={guessCount}
            onMakeGuess={guess => this.props.dispatch(submitGuess(guess))}
          />
          <StatusSection
            guesses={guesses}
            auralStatus={auralStatus}
          />
          <InfoSection />
        </main>
      </div>
    );
  }
}


export const mapStateToProps = state => ({
  feedback: state.feedback,
  guesses: [...state.guesses],
});


export default connect(mapStateToProps)(Game);

