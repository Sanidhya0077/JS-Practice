console.log(this);


var user = {
    firstName: 'Sanidhya',
    lastName: 'Vijaivargia',
    role: 'Admin',
    isLoggedIn: true,
    getCourseCount: function () {
        console.log('LINE 10', this);
        function SayHello()
        {
            return console.log("Hello", this)
        }
        SayHello();
    },
}

user.getCourseCount();


function SayHello()
{
    console.log("Hello this is Line 24");
}

SayHello(); // this is a regular function call