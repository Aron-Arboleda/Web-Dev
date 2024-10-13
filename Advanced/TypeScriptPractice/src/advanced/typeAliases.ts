type Employee = {
    readonly id: number, //does not allow id to change.
    name: string,
    retire: (date: Date) => void
}

let employee1: Employee = {
    id: 1, 
    name: 'Aron', 
    retire: (date: Date) => {
        console.log(date);
    }
}
employee1.name = 'Aron';