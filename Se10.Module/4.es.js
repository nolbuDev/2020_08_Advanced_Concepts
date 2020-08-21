var harry = 'potter';
var voldemort = 'He who must not be named'

export function jump(){
    console.log('jump');
}

export default function fight(char1, char2){
    var attack1 = Math.floor(Math.random * char1.length);
    var attack2 = Math.floor(Math.random * char2.length);
    return attack1 > attack2 ? `${char1} wins` : `${char2} wins`;
}
