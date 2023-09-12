import ISwitchCommand from './iswitchcommand'


export default class Switch {
    #commands: { [id: string]: ISwitchCommand } 
    #history: [number, string] []

    constructor(){
        this.#commands = {}
        this.#history = []
    }


    showHistory() {
        this.#history.forEach((row) => {
            console.log(`${row[0]} : ${row[1]}`)
        })
    }

    register(commandName: string, command: ISwitchCommand){
        this.#commands[commandName] = command;
    }

    execute(commandName: string){
        if(commandName in this.#commands){
            this.#commands[commandName].execute()
            this.#history.push([Date.now(), commandName])
        } else {
            console.log(`Command ${commandName} not registered`)
        }
    }

    replayLast(numberOfCommands: number) {
        
        const commnadHistory = this.#history.slice(
            this.#history.length - numberOfCommands,
            this.#history.length
        )

        commnadHistory.forEach(history => {
            this.#commands[history[1]].execute()
        })
    }
}