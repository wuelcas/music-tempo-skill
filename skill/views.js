'use strict';

const views = (function views() {
  return {
    Launch: {
      StartResponse: {
        ask: 'What\'s the name of the song you like to know the BPM from?',
        reprompt: 'What\'s the name of the song you like to know the BPM from?',
      },
    },
    SongInfo: {
      TempoResponse: {
        tell: 'The Tempo of {Song} by {Artist} from the album {Album} is {BPM} BPM',
        card: {
          type: 'Standard',
          title: 'Song BPM',
          text: 'The Tempo of {Song} by {Artist} from the album {Album} is {BPM} BPM',
        },
      },
      NotFoundResponse: {
        ask: 'I couldn\'t find that song. Try again',
        reprompt: 'I couldn\'t find that song. Try again',
      },
      RepeatBPMOfTheSong: {
        ask: 'The Tempo of {Song} by {Artist} from the album {Album} is {BPM} BPM. Try with another song',
        reprompt: 'The Tempo of {Song} by {Artist} from the album {Album} is {BPM} BPM. Try with another song',
      },
      YouHaveNotSearchAnySong: {
        ask: 'You haven\'t search for any song. Try saying the name of the song with it\'s artist\'s name. You can specify the name of the album too.',
        reprompt: 'You haven\'t search for any song. Try saying the name of the song with it\'s artist\'s name. You can specify the name of the album too.',
      },
    },
    Help: {
      InstructionsMessage: {
        ask: 'It\'s simple. Say the name of the song and I\'ll tell you the BPM. You can also specify the name of the artist. ' +
        'What\'s the name of the song you like to know the BPM from?',
        reprompt: 'What\'s the name of the song you like to know the BPM from?',
      },
    },
    Exit: {
      GoodbyeMessage: {
        say: 'Ok, Goodbye',
      },
    },
  };
}());
module.exports = views;
