import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from '@/Pages/Home/components/Hero'

test('Render App Page', () => {
  render(<Hero />)
  const h3Element = screen.getByText(
    /Transforme sua visão em realidade digital/i,
  )
  expect(h3Element).toBeDefined()
})
