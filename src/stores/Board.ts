import { get, writable } from "svelte/store";

export function CreateBoard(initial?: string) {
    let board = writable(Array<string>(9).fill(' '))
    if (initial) board.set(initial.split(''))

    function setCell(index: number, player: 'X' | 'O') {
        const state = get(board)
        if (state[index] !== ' ') return false

        state[index] = player
        board.set(state)
        return true
    }

    return { ...board, setCell };
}