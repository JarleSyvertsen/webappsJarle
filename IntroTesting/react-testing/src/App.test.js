import {createEvent, fireEvent, render, renderHook, screen} from '@testing-library/react';
import RegisterForm from "./components/RegisterForm";
import useFormValues from "./components/useFormValues";
import {act} from "react-dom/test-utils";


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
// Hadde vært kult å teste update her, men klarer ikke sende en falsk event uten target
// Og en target ville involvert HTML
describe("Validate that the underlying hooks/values are working", () => {
  test("Test that the name value updates when the set function is called", () => {
    const { result }  = renderHook(() => useFormValues())
    act(() =>  {
      result.current.setFormData({name: "Test Doe", password: "", address: ""})
    })

    const name = result.current.formData.name
    expect(name).toBe("Test Doe")
  })
})

describe("Validate that the underlying hooks/values are working", () => {
  test("Test that the name value updates when the set function is called", () => {
    const { result }  = renderHook(() => useFormValues())

    act(() =>  {
      result.current.setFormData({name: "", password: "", address: "Test Address"})
    })

    const name = result.current.formData.address
    expect(name).toBe("Test Address")
  })
})

describe("Validate that the underlying hooks/values are working", () => {
  test("Test that the name value updates when the set function is called", () => {
    const { result }  = renderHook(() => useFormValues())

    act(() =>  {
      result.current.setFormData({name: "", password: "Test Password", address: ""})
    })

    const name = result.current.formData.password
    expect(name).toBe("Test Password")
  })
})

describe("Validate that the form submits and with correct values", () => {
  test("Test that the form should be sent when submit is clicked", () => {
    const form = document.querySelector('#registerUser')
    const button = form.querySelector('#submitButton')


    console.log(button)
  })
})