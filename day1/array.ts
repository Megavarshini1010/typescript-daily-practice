//===============
// ARRAY IN TS
//===============
let family_name: string[] = ["mega", "devi", "dhinesh", "dhivagar", "ramesh"];
let age: number[] = [22, 50, 18, 18, 56];
//===============
// INDEX-BASED ACCESS
//===============
console.log(family_name[0]); //mega
console.log(family_name[3]); //dhivagar
console.log(family_name[5]); //undefined
//===============
// ARRAY- METHODS
//===============
//PUSH
let fruits: string[] = ["apple", "orange", "pineapple"];
fruits.push("mango");
console.log(fruits);
//LENGTH
console.log(fruits.length); //4
//POP
console.log(fruits.pop());
//LENGTH after
console.log(fruits.length); //3
//================
//LOOP THROUGH ARRAY
//================
for (let i = 0; i <= fruits.length-1; i++) {
  console.log(fruits[i]);
}
//================
//ARRAY OF OBJECTS
//================
let programming: { name: string; level: number }[] = [
  { name: "python", level: 4 },
  { name: "java", level: 6 },
  { name: "javascript", level: 9 },
];
console.log(programming);
