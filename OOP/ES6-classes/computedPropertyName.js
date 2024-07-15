const propName = "dynamicProp";

const myObj = {
    name: "John",
    [propName]: "something worthless",
    [propName + "DYNAMIC"]: "result of an expression",
    [10 / 3 > 2]: "result of an expression",
    [10 / 3 ]: "result of an expression division",
    [10 / 3 > 2]: "result of an expression the fourth time",
}

console.log(myObj)