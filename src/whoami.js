import readlineSync from 'readline-sync'
import chalk from 'chalk'

// Player 1 - option to enter 'name'
let player_one_name = readlineSync.question(chalk.green('Enter your name? '))

// Player 1 security for empty string
if (player_one_name.length === 0) {
    process.exit(1)
}

// Player 1 option to play or exit game
if (!readlineSync.keyInYN('Do you want to play?')) {
    console.log(`What a pity! Bye`)
    process.exit(1)
}

// Welcome player 1
let playerone = readlineSync.question(
    `Hi ${player_one_name}, you are PLAYER 1. Press 'Enter.' `
)

// Player 2 - option to enter 'name'
let player_two_name = readlineSync.question(chalk.green('Enter your name? '))

// Player 2 security for empty string
if (player_two_name.length === 0) {
    process.exit(1)
}

// Player 2 security to avoid same names
if (player_two_name === player_one_name) {
    console.log(`Please choose different name `)
}

// Player 2 option to start or exit game
if (!readlineSync.keyInYN('Do you want to play?')) {
    console.log(`What a pity! Bye`)
    process.exit(1)
}

let playertwo = readlineSync.question(
    `Hi ${player_two_name}, you are PLAYER 2. Press 'Enter.' `
)

// Players receives tokens
let player_one_token = 'You are token 0'
let player_two_token = 'You are token X'

// Show player handles (Sofiane > )
let player_one_prompt = readlineSync.setDefaultOptions({
    prompt: `${player_one_name} > `,
})

let player_two_prompt = readlineSync.setDefaultOptions({
    prompt: `${player_two_name} > `,
})

console.log(chalk.magenta(player_one_prompt.prompt, player_one_token))
console.log(chalk.yellow(player_two_prompt.prompt, player_two_token))
