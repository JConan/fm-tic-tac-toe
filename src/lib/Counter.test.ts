import { fireEvent, render } from '@testing-library/svelte'
import Counter from './Counter.svelte'

describe("hello", () => {
    it('should be thruthy', async () => {
        const { getByRole } = render(Counter)
        const button = getByRole('button')
        expect(button.textContent).toBe('press me')

        await fireEvent.click(button)
        expect(button).toBeInTheDocument()
    })
})