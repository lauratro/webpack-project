import { wizard } from "./wizard";
import { barbarian } from "./barbarian";
import getClasses from "./getClasses";
console.log("test");
console.log(wizard);
console.log(barbarian);
getClasses();

const obj = { a: "alpha", b: "bravo" };
const newObj = { ...obj, c: "charlie" };
console.log(newObj);
