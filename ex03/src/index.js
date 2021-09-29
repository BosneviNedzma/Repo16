// Only change code below this line
   class Person {
        static display() {
            return "Static method is invoked from Person class";
       }

       show() {
            console.log(Person.display());

       }
   }

// Only change code above this line
var message = new Person();
message.show();
module.exports = Person;