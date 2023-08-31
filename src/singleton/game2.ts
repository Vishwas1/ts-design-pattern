import IGame from "./iGame";
import LeaderBoard from "./leaderboard";
export default class Game2 implements IGame {
    leaderBoard: LeaderBoard = new LeaderBoard();
    gameName: string = 'Game2';

    addWinner(position: number, name: string): void {
        this.leaderBoard.addWinner(position, name);
    }
}


