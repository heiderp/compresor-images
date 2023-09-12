import { screen, render } from '@testing-library/vue'
import { describe, it, expect } from 'vitest'
import HelloWorld from '../src/components/HelloWorld.vue'

describe('should render', () => {
  it('HelloWorld', () => {
    render(HelloWorld)
    const element = screen.getByText(/You’ve successfully/i)
    expect(element).toBeTruthy()
  })
})
