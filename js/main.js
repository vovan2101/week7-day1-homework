// exercise 1 homework

let exerciseOneArr = [1,2,3,5,6,7];

for (let i in exerciseOneArr){
    if (exerciseOneArr[i] - exerciseOneArr[i-1] > 1){
        console.log(i);
};
};