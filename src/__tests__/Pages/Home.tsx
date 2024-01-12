import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Home } from '../../Pages/Home'

test('Render App Page', () => {
    render(<Home />)
    const linkElement = screen.getByText(/Home/i)
    expect(linkElement).toBeDefined()
})
