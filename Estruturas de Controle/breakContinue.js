const nums = [4, 5, 6, 7, 8, 9]

for(x in nums){
    if(x == 3){
        break
    }
    console.log(`${x} = ${nums[x]}`)
}

for(y in nums){

    if(y == 3){
        // nao printa o indice 3 e seu respectivo elemento
        continue 
    }

    console.log(`${y} = ${nums[y]}`)
}