// call
function a(){
    console.log('hi');
}
a.apply();

const wizard = {
    name: 'Merlin',
    health: 100,
    heal(num1, num2){
        return this.health += num1 + num2;
    }
}
console.log(wizard.heal(10, 10));

const archer = {
    name: 'Robin Hood',
    health: 30
}
console.log(archer.health);
console.log(wizard.heal.call(archer, 50, 30));
console.log(wizard.heal.apply(archer, [50, 30]));
const healArcher = wizard.heal.bind(archer, 70, 35);
console.log(healArcher());
console.log(archer.health);
