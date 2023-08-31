import Game1 from './game1';
import Game2 from './game2';
import Game3 from './game3';

const game1 = new Game1();
game1.addWinner(2, 'vishwas')

const game2 = new Game2();
game2.addWinner(1, 'amit')

const game3 = new Game3();
game3.addWinner(3, 'rohit')

/// See all games are refering to the smae leaderboard because of singleton
game1.leaderBoard.print()
game2.leaderBoard.print()
game3.leaderBoard.print()




