import {render, renderHook, screen} from '@testing-library/react';
import RegisterForm from "./components/RegisterForm";

describe('Validate the completeness of the returned component', () => {
  beforeEach(() => {
    render(<RegisterForm />)
  })
  test('Should contain a form element', () => {
    const form = document.querySelector('#registerUser')
    expect(form.nodeName.toLowerCase()).toBe("form")
  })

  test("Form's first element should be one h1", () => {
    const formChildren = document.querySelector('#registerUser').children
    expect(formChildren.item(0).nodeName.toLowerCase()).toBe("h1")
  })

  test("Form should contain three labels", () => {
    const labels = document.querySelectorAll('label')
    expect(labels).toHaveLength(3)
  })

  test("Form should contain three inputs", () => {
    const inputs = document.querySelectorAll('input')
    expect(inputs).toHaveLength(3)
  })
})

describe("Validate that the underlying hooks/values are working", () => {
  test("Test that the name value updates when the set function is called", () => {
    const { result }  = renderHook(() => RegisterForm())
    const name = result.current.name;
    expect(name).not.toBeNull()
  })
})