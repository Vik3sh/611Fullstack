//  console.log("FizzBuzz");
const n=prompt("Please enter the number you would like to FizzBuzz up to: ");

console.log("n = " + n);
const arr=[];

for(let i=0;i<n;i++){

    arr.push(prompt(`Enter value ${i+1}: `));
}
console.log(arr);
for(let i=0;i<n;i++){
    if(arr[i]%3===0 && arr[i]%5===0){
        arr[i]="fizzfuzz";
    }
    if(arr[i]%3==0){
    arr[i]="fizz";
    }
    if(arr[i]%5==0){
        arr[i]="fuzz";
    }
}
console.log(arr);