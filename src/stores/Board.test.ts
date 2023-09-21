import { get } from "svelte/store"
import { CreateBoard } from "./Board"


describe('Game board store and function', () => {

    it('should be empty at initial state', () => {
        const board = CreateBoard()

        const state = get<string[]>(board)
        expect(state).toHaveLength(9)
        expect(state.filter(cell => cell !== '')).toHaveLength(0)
    })

    it('should be able to update a cell', () => {
        const board = CreateBoard()

        expect(board.setCell(5, 'X')).toBe(true)
        const state = get<string[]>(board)

        expect(state[5]).toBe('X')
    })

})