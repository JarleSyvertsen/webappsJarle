import {fireEvent, render, renderHook} from '@testing-library/react';
import RegisterForm from "./components/RegisterForm";
import useFormValues from "./components/useFormValues";
import {act} from "react-dom/test-utils";
import {rest} from 'msw'
import {setupServer} from 'msw/node'
import userEvent from "@testing-library/user-event";

describe('Validate the completeness of the returned component', () => {
    beforeEach(() => {
        render(<RegisterForm/>)
    })
    test('Should contain a form element', () => {
        const form = document.querySelector('#registerUser')
        expect(form.nodeName.toLowerCase()).toBe("form")
    })

    test("Form's first element should be a single h1", () => {
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
        const {result} = renderHook(() => useFormValues())
        act(() => {
            result.current.setFormData({name: "Test Doe", password: "", address: ""})
        })

        const name = result.current.formData.name
        expect(name).toBe("Test Doe")
    })

    test("Test that the address value updates when the set function is called", () => {
        const {result} = renderHook(() => useFormValues())

        act(() => {
            result.current.setFormData({name: "", password: "", address: "Test Address"})
        })

        const name = result.current.formData.address
        expect(name).toBe("Test Address")
    })

    test("Test that the password value updates when the set function is called", () => {
        const {result} = renderHook(() => useFormValues())

        act(() => {
            result.current.setFormData({name: "", password: "Test Password", address: ""})
        })

        const name = result.current.formData.password
        expect(name).toBe("Test Password")
    })
})
// Legger til et par ekstra felt eksempler senere, viktig å bare vise mocking+user-events

describe("Validate functions should prevent unaccepted form values from being sent", () => {
    test("Test that validate doesn't accept form with too short of a name", async () => {
        const handler = jest.fn();

        render(<RegisterForm submitHandler={handler}/>)

        const form = document.querySelector('#registerUser')
        const nameField = form.querySelector('#name')
        const button = form.querySelector('#submitButton')

        await act(async () => {
            userEvent.clear(nameField)
            userEvent.type(nameField, 'øe')
            userEvent.click(button)
        })

        expect(handler).toHaveBeenCalledTimes(0)
    })
    test("Test that validate doesn't accept empty forms", async () => {
        const handler = jest.fn();

        render(<RegisterForm submitHandler={handler}/>)

        const form = document.querySelector('#registerUser')
        const button = form.querySelector('#submitButton')

        await act(async () => {
            userEvent.click(button)
        })

        expect(handler).toHaveBeenCalledTimes(0)
    })

    test("Test that it validates a correct form", async () => {
        const handler = jest.fn();

        render(<RegisterForm submitHandler={handler}/>)

        const form = document.querySelector('#registerUser')

        const nameField = form.querySelector('#name')
        const addressField = form.querySelector('#address')
        const passwordField = form.querySelector('#password')

        const button = form.querySelector('#submitButton')

        await act(async () => {
            userEvent.type(nameField, 'John Doe')
            userEvent.type(addressField, 'John Doe Field 820E')
            userEvent.type(passwordField, 'Notthatsecurepassword')
            userEvent.click(button)
        })

        expect(handler).toHaveBeenCalledTimes(1)
    })


})

describe("Validate that the form submits and with correct values", () => {
    const server = setupServer()

    beforeAll(() => {
        server.listen()

    })
    afterEach(() => {
        server.resetHandlers()
    })

    afterAll(() =>{
        server.close()
    })

    test("Test that the form should be sent when submit is invoked.", async () => {
        const {result} = renderHook(() => useFormValues())

        server.use(
            rest.post('https://fakeAPInoresponseplease.org',
                (req, res, ctx) => {
                    return res(ctx.json("User registered successfully."))
                }))

        act(() => {
            result.current.setFormData({
                name: "John Doe",
                address: "John Doe Field 820E",
                password: 'Notthatsecurepassword'
            })
        })

        const appResponse = await result.current.submit()

        expect(appResponse).toBeTruthy()
    })
    // Eksempel på hvordan jeg tenkte å teste både HTML element helt til server siden
    // Får ikke det rendra elementet til å benytte den mockede serveren, ser det går å teste jest direkte
    // men det blir veldig mange forskjellige pakker fort

    // Vi kunne tillate funksjonen å få en mock i stedet for å se at den blir,
    // men har lite lyst til å endre hovedkoden for testingens skyld.
    // Det optimale hadde vært å få vite at en click leder til en post mot det gitte API punktet.

    test.skip("Test that an API point is reached when the submit button is pressed.", async () => {
        const resolver = jest.fn();
        server.use(rest.post('https://fakeAPInoresponseplease.org', resolver))

        render(<RegisterForm/>)
        const form = document.querySelector('#registerUser')
        const button = form.querySelector('#submitButton')

        await act(async () => {
            fireEvent(button, new MouseEvent('click'))
        })

        expect(resolver).toHaveBeenCalledTimes(1)
    })


    test("Test should send a proper object with the given keys to the API point.", async () => {
        const {result} = renderHook(() => useFormValues())

        server.use(
            rest.post('https://fakeAPInoresponseplease.org',
                (req, res, ctx) => {
                    const request = JSON.parse(req.body)
                    if ('name' in request
                        && 'address' in request
                        && 'password' in request) {
                        return res(ctx.json(req.body))
                    }
                }
            ))

        act(() => {
            result.current.setFormData({
                name: "John Doe",
                address: "John Doe Field 820E",
                password: 'Notthatsecurepassword'
            })
        })

        const appResponse = await result.current.submit()

        expect(appResponse).toBeTruthy()
    })
})