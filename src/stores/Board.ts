import { get, writable } from "svelte/store";

export function CreateBoard(initial?: string) {
    let board = writable(Array<string>(9).fill(' '))
    if (initial) board.set(initial.split(''))

    function setCell(index: number, player: 'X' | 'O') {
        const state = get(board)
        if (state[index] !== ' ') return false

        board.update((state) => {
            state[index] = player
            return state
        })
        return true
    }

    function hasWinner() {
        const state = get(board)
        const winningXPatterns = '^(XXX|...XXX|......XXX|X..X..X..|.X..X..X.|..X..X..X|X...X...X|..X.X.X..)'
        const winningOPatterns = winningXPatterns.replaceAll('X', 'O')

        if (state.join('').match(winningXPatterns))
            return 'X'
        if (state.join('').match(winningOPatterns))
            return 'O'
        return undefined
    }

    return { ...board, setCell, hasWinner };
}