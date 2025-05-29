import Board from './board';
import './style.css';

const container = document.querySelector('.container');
const board = new Board(container);
board.init();
