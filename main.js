let arr =[];
let n = +prompt('Введите количество элементов массива')
for(i=0;i<n;i++){
    arr[i] = +prompt('Введите любое число', +i);
        if(arr[i] === null) { 
            alert('Отмена');
            
}}
console.log(arr)
let sortedArr = arr.sort((a, b) => a - b);
let removed = sortedArr.splice(1, 3);
alert(`Массив отсортирован по возростанию без 2/3/4 элементов: ${removed}`)