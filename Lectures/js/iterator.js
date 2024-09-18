let arr = [1,2,3,4,5];
console.log(arr[Symbol.iterator]);

for(i in arr)
{
  console.log(i);
  console.log(arr[i]);
}

let obj = {name:"yashvi"};
for(i in obj)
{
  console.log(obj[Symbol.iterator]);
  console.log(i);
  console.log(obj.name);
}