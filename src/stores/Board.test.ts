import { get } from "svelte/store"
import { createBoard } from "./Board"


describe('Game board store and function', () => {

    it('should be empty at initial state', () => {
        const board = createBoard()

        const state = get<string[]>(board)
        expect(state).toHaveLength(9)
        expect(state.filter(cell => cell !== ' ')).toHaveLength(0)
    })

    it('should be able to reset state', () => {
        const board = createBoard()
        board.setState('XOX   OXO')

        let state = get(board)
        expect(state.join('')).toBe('XOX   OXO')

        board.reset()
        state = get(board)
        expect(state.join('')).toBe('         ')
    })


    it('should be able to update a cell', () => {
        const board = createBoard()

        expect(board.setCell(5, 'X')).toBe(true)
        const state = get<string[]>(board)

        expect(state[5]).toBe('X')
    })

    it('should not be allowed to update cell if already set', () => {
        const board = createBoard()
        board.setState("     X   ")

        const state = get<string[]>(board)
        expect(state[5]).toBe('X')
        expect(board.setCell(5, 'X')).toBe(false)
    })

    it('should be able to detect winning line 0', () => {
        const board = createBoard()
        board.setState("XXX      ")
        expect(board.hasWinner()).toBe('X')
    })

    it('should be able to detect winning line 1', () => {
        const board = createBoard()
        board.setState("   OOO   ")
        expect(board.hasWinner()).toBe('O')
    })

    it('should be able to detect winning line 2', () => {
        const board = createBoard()
        board.setState("      OOO")
        expect(board.hasWinner()).toBe('O')
    })

    it('should be able to detect winning column 0', () => {
        const board = createBoard()
        board.setState("X  X  X  ")
        expect(board.hasWinner()).toBe('X')
    })

    it('should be able to detect winning column 1', () => {
        const board = createBoard()
        board.setState(" X  X  X ")
        expect(board.hasWinner()).toBe('X')
    })

    it('should be able to detect winning column 2', () => {
        const board = createBoard()
        board.setState("  X  X  X")
        expect(board.hasWinner()).toBe('X')
    })

    it('should be able to detect winning \\', () => {
        const board = createBoard()
        board.setState("X   X   X")
        expect(board.hasWinner()).toBe('X')
    })

    it('should be able to detect winning column 2', () => {
        const board = createBoard()
        board.setState("  X X X  ")
        expect(board.hasWinner()).toBe('X')
    })
})