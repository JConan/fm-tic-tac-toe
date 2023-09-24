import { fireEvent, render } from '@testing-library/svelte'
import Board__SvelteComponent_ from './Board.svelte'
import { board } from '$stores/Board'

describe('board component', () => {

    it('should show empty grid', () => {
        board.reset()
        const { getAllByRole } = render(Board__SvelteComponent_)
        const cells = getAllByRole('cell')
        expect(cells).toHaveLength(9)
        expect(cells.map(cell => cell.textContent).join('')).toBe('         ')
    })

    it('should display as the store', () => {
        board.setState('XOX  OXO')
        const { getAllByRole } = render(Board__SvelteComponent_)
        const cells = getAllByRole('cell')

        expect(cells.map(cell => cell.textContent).join('')).toBe('XOX  OXO')
    })

    it('should be updated after a click', async () => {
        board.reset()
        const { getAllByRole } = render(Board__SvelteComponent_)
        const cells = getAllByRole('cell')

        expect(cells[0].textContent).toBe(' ')

        await fireEvent.click(cells[0])
        expect(cells[0].textContent).toBe('X')

        await fireEvent.click(cells[3])
        expect(cells[3].textContent).toBe('O')

        await fireEvent.click(cells[6])
        expect(cells[6].textContent).toBe('X')
    })

})