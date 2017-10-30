(function() {
    function Person(name, age) {
        this.name = name;
        this.age = age;
        this.eyeColor = 'brown';
        this.hairColor = 'Blond';
    }
    
    const personsArray = [
        new Person('person1', 20),
        new Person('person2', 22),
        new Person('person3', 25),
        new Person('person4', 28),
        new Person('person5', 31),
        new Person('person6', 34),
        new Person('person7', 38),
        new Person('person8', 40),
        new Person('person9', 43),
        new Person('person10', 55),
    ];

    for (let i=0; i < personsArray.length; i++) {
        const div = document.createElement('div');
        const currentPerson = personsArray[i];
        
        for (let prop in currentPerson) {
            div.innerHTML += prop + ": " + currentPerson[prop] + "<br>";
        }
        document.getElementById('persons').appendChild(div);
    }   
}())
