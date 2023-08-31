export default class LeaderBoard {
    static instance: LeaderBoard;
    #table: { [key:number]: string } = {} // making this table private so that it can not be modified outside
    constructor(){
        if(LeaderBoard.instance){
            return LeaderBoard.instance
        }
        LeaderBoard.instance = this;
    }

    addWinner(position: number, name: string): void {
        if(this.#table[position]){
            throw new Error(`${position} already occupied by ${this.#table[position]}`);
        }
        this.#table[position] = name;
    }

    print():void{
        console.log('--------------Leaderboard--------------------')
        for(const key in this.#table){
            console.log(`|\t${key}\t|\t${this.#table[key]}\t`)
        }
    }

}