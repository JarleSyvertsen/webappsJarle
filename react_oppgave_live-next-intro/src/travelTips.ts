const validateAge = (age: number) => {
    if(age < 18) {
        return { allowed: false, data: 'Use bike' }
    }
    if(age === 18) {
        return { allowed: true, data: 'Drive your dads card' }
    }
    if(age < 100) {
        return { allowed: true, data: 'Drive your own car' }
    }
    if(age >= 100) {
        return {allowed: false, data: 'Use the bus!'}
    }

}

export default validateAge