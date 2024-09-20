// Challenge: finish the object type definition

// Note: without Person type there is no errors with isStudent and isstudent, but when we add Person type we must be consistent and write isStudent same for person 1 and person 2

type Person = {
    name: string
    age: number
    isStudent: boolean
}

let person1: Person = {
    name: "Joe",
    age: 42,
    isStudent: true
}

let person2: Person = {
    name: "Jill",
    age: 66,
    // isstudent: false /// gives us this error -> 'isstudent' does not exist in type 'Person'
    isStudent: false
}