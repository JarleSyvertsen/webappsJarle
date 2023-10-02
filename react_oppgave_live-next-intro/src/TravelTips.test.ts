import validateAge from "./travelTips";

describe("Validate Age", () => {
    it("should allow bike if age under 18", () => {
        const result = validateAge(17)
        // Use toStrictEqual to validate object
        expect(result).toStrictEqual({allowed: false, data: 'Use bike'})
    })
    it("should allow to use own car if age between 19 and 100", () => {
        const edgeLeft = validateAge(19)
        const edgeRight = validateAge(99)
        expect(edgeLeft).toStrictEqual({allowed: true, data: 'Drive your own car'})
        expect(edgeRight).toStrictEqual({allowed: true, data: 'Drive your own car'})

    })
    it("should use dads car if 18", () => {
        const result = validateAge(18)
        // Use toStrictEqual to validate object
        expect(result).toStrictEqual({allowed: true, data: 'Drive your dads card'})
    })
    it("should not be allowed if age more than 99", () => {
        const result = validateAge(100)
        expect(result).toHaveProperty('allowed', false)
    })
})