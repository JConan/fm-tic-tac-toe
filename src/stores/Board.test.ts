import { get } from "svelte/store"
import { CreateBoard } from "./Board"


describe('Game board store and function', () => {

    it('should be empty at initial state', () => {
        const board = CreateBoard()

        const state = get<string[]>(board)
        expect(state).toHaveLength(9)
        expect(state.filter(cell => cell !== '')).toHaveLength(0)
    })

})