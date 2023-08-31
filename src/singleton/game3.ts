import IGame from "./iGame";
import LeaderBoard from "./leaderboard";
export default class Game1 implements IGame {
    leaderBoard: LeaderBoard = new LeaderBoard();
    gameName: string = 'Game3';

    addWinner(position: number, name: string): void {
        this.leaderBoard.addWinner(position, name);
    }
}


