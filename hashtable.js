//simple (not optimized, doesn't account for collisions)

// function hash(key, arrayLen){
//     let total = 0; 
//     for(let char of key){
//         let value = char.charCodeAt(0) - 96
//         total = (total + value) % arrayLen
//     }
//     return total
// }

//using prime numbers helps with distribution; doesn't take collisions into account
// function hash(key, arrayLen){
//     let total = 0; 
//     let prime = 31; 
//     for(let i = 0; i < Math.min(key.length, 100); i++){
//         let char = key[i]
//         let value = char.charCodeAt(0) - 96
//         total = (total * prime + value) % arrayLen
//     }
//     return total
// }


//linear probing: store one thing at each posistion 
//separate chaining: store two+ things at each posistions


class HashTable {
    constructor(size = 53){
        this.keyMap = new Array(size)
    }

    _hash(key){
        let total = 0
        let prime = 31 
        for (let i = 0; i < Math.min(key.length, 100); i++){
            let char = key[i]
            let value = char.charCodeAt(0) - 96
            total = (total * prime + value) % this.keyMap.length;
        }
        return total
    }

    set(key, value){
        let index = this._hash(key)
        return index;
        if(!this.keyMap[index]){
            this.keyMap[index] = []; 
        }
        this.keyMap[index].push([key, value])
    }

    get(key){
        let index = this._hash(key)
        if(this.keyMap[index]){
            for(let i = 0; i < this.keyMap[index].length; i++){
                if(this.keyMap[index][i][0]===key){
                    return this.keyMap[index][i][1]
                }
            }
        }
        return undefined
    }   

    keys(){
        let keys = []
        for(let i = 0; i < this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j = 0; this.keyMap[i].length; j++){
                    if(!keys.includes(this.keyMap[i][j][1])){
                        keys.push(this.keyMap[i][j][1])
                    }
                }
            }
        }
        return keys
    }

    values(){
        let values = []
        for(let i = 0; i < this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j = 0; this.keyMap[i].length; j++){
                    if(!values.includes(this.keyMap[i][j][1])){
                        values.push(this.keyMap[i][j][1])
                    }
                }
            }
        }
        return values
    }
}