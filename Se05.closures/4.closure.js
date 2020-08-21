//////////////////////////////////////////
// Closure
//////////////////////////////////////////
function a() {
    let grandpa = 'grandpa'
    return function b() {
        let father = 'father'
        return function c() {
            let son = 'son'
            return `${grandpa} > ${father} > ${son}`
        }
    }
}

console.log(a()()())
const one = a();

const boo = (string) => (name) => (name2) => console.log(`${string} ${name} ${name2}`)
boo('hi')('tim')('becca')

const booString = boo('hi')
const booStringName = booString()


// Exercise
function callMeMaybe(){
    const callMe = 'Hi! I am now here!';
    setTimeout(function(){
        console.log('callMe',callMe);
        console.log('callMeAlso',callMeAlso);
    }, 4000);
    const callMeAlso = 'Also! I am now here!';
}
callMeMaybe();

/////////////////////////////////////
// Memory efficient
////////////////////////////////////
function heavyDuty(){
    const bigArray = new Array(7000).fill('Smile');
    console.log('created!');
    return (index) => bigArray[index];
}
const heavyDutyIndex = heavyDuty();
console.log(heavyDutyIndex(687));
console.log(heavyDutyIndex(688));
console.log(heavyDutyIndex(689));
console.log(heavyDutyIndex(686));

///////////////////////////////////////////
// Encapsulation
//////////////////////////////////////////
const makeNuclearButton = () => {
    let timeWithoutDestruction = 0;
    const passTime = () => timeWithoutDestruction++;
    const totalPeaceTime = () => timeWithoutDestruction;
    const launch = () => { 
        timeWithoutDestruction = -1;
        return 'Boom!';
    }
    setInterval(passTime, 1000);
    return {
        launch: launch,
        totalPeaceTime: totalPeaceTime
    }
}

const ohno = makeNuclearButton();
ohno.totalPeaceTime();