import Keyboard from './Keyboard';

export default {
  title: 'Components/Complex/Keyboard',
  component: Keyboard,
  tags: ['autodocs'],
  argTypes: {
    onLetterClick: { action: 'letterClicked', description: 'Функція, що викликається при кліку на літеру' },
    guessedLetters: { control: 'object', description: 'Масив літер, які є у слові (правильні)' },
    wrongLetters: { control: 'object', description: 'Масив літер, яких немає у слові (помилкові)' },
    isGameDisabled: { control: 'boolean', description: 'Чи заблокована клавіатура (кінець гри)' },
  },
};

export const FreshGame = {
  args: {
    guessedLetters: [],
    wrongLetters: [],
    isGameDisabled: false,
  },
};

export const MidGame = {
  args: {
    guessedLetters: ['A', 'E', 'O'], 
    wrongLetters: ['Z', 'X', 'Q'],   
    isGameDisabled: false,
  },
};

export const GameOverDisabled = {
  args: {
    guessedLetters: ['R', 'E', 'A', 'C', 'T'],
    wrongLetters: ['B', 'D', 'F'],
    isGameDisabled: true,
  },
};