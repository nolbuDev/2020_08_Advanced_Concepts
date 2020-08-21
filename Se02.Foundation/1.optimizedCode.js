////////////////////////
// inline caching
////////////////////////
function findUser(user){
    return `found ${user.firstName} ${user.lastName}`;
}

const userData = {
    firstName: 'Johnson',
    lastName: 'Junior'
}

findUser(userData);

////////////////////////////
// hidden classes
///////////////////////////
function Animal(x,y){
    this.x = x;
    this.y = y;
}

const obj1 = new Animal(1,2);
const obj2 = new Animal(3,4);

// because of different order : compiler thinks there are 2 different object
obj1.a = 30;
obj1.b = 100;
obj2.b = 30;
obj2.z = 100;

// because of deletion
delete obj1.x;


