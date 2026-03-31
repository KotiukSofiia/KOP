import WordDisplay from './WordDisplay';

export default {
  title: 'Components/Basic/WordDisplay',
  component: WordDisplay,
  tags: ['autodocs'],

  argTypes: {
    wordToGuess: { control: 'text', description: 'Слово, яке потрібно відгадати' },
    guessedLetters: { control: 'object', description: 'Масив відгаданих літер' },
  },
};

export const Default = {
  args: {
    wordToGuess: 'REACT',
    guessedLetters: [],
  },
};

export const PartiallyGuessed = {
  args: {
    wordToGuess: 'JAVASCRIPT',
    guessedLetters: ['A', 'S', 'T'],
  },
};

export const FullyRevealed = {
  args: {
    wordToGuess: 'COMPONENT',
    guessedLetters: ['C', 'O', 'M', 'P', 'N', 'E', 'T'],
  },
};