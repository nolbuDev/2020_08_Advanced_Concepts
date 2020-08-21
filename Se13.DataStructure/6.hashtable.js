class HashTable{
    constructor(size){
        this.data = new Array(size);
    }

    _hash(key){
        let hash = 0;
        for(let i=0 ; i<key.length ; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    get(key){
        return this.data[this._hash(key)][1];
    }

    set(key, value){
        this.data[this._hash(key)] = [key, value];
    }
}

const myHashTable = new HashTable(50);
// [['grapes', 10000]]
myHashTable.set('grapes', 10000);
console.log(myHashTable.get('grapes'));


class HashTableTeacher{
    constructor(size){
        this.data = new Array(size);
    }

    _hash(key){
        let hash = 0;
        for(let i=0 ; i<key.length ; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    get(key){
        return this.data[this._hash(key)][1];
    }

    set(key, value){
        let address = this._hash(key);
        if(!this.data[address]){
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
        console.log(this.data);
    }

    get(key) {
        let address = this._hash(key);
        const currentBucket = this.data[address];
        console.log(currentBucket);
        if(currentBucket.length){
            for(let arr of currentBucket){
                if(arr[0] === key) return arr[1];
            }
        }
        return searchValue;
    }

    keys(){
        const keysArray = [];
        for(let i=0; i < this.data.length ; i++){
            if(this.data[i]){
                keysArray.push(this.data[i][0][0])
            }
        }
        return keysArray;
    }
}


const myHashTableTeacher = new HashTableTeacher(50);
// [['grapes', 10000]]
myHashTableTeacher.set('grapes', 10000);
myHashTableTeacher.set('apples', 54);
console.log(myHashTableTeacher.get('grapes'));
console.log(myHashTableTeacher.keys());
