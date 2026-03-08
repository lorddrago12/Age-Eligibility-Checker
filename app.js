function age_eligibility (name, age) {
    if (age >= 18) {
        return `${name} is eligible to vote`
    } else {
        return `${name} is not eligible to vote`
    }
}

// Tests
console.log(age_eligibility('John', 18)); // John is eligible to vote
console.log(age_eligibility('Jane', 17)); // Jane is not eligible to vote