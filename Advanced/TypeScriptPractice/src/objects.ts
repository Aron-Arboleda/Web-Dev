let employee: {
    readonly id: number, //does not allow id to change.
    name: string,
    retire: (date: Date) => void
} = {
    id: 1, 
    name: 'Aron', 
    retire: (date: Date) => {
        console.log(date);
    }
}
employee.name = 'Aron';