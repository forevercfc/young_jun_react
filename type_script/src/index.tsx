import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//타입스크립트 연습
//String 으로 지정
let srt: string = "A";
// str = "10"

//number타입으로 지정
let num: number = 0;
num = 10;
// num = "10";

//boolean타입으로 지정
let bool: boolean = true;
bool = false;
//bool =10;

//Array타입
const arr1: Array<number> = [0, 1, 2];
let arr2: number[] = [0, 2, 3];

arr1.push(10);
arr2.push(10);
// arr1.push("10")
// arr2.push("10")

//null타입
let null1: null = null;
null1 = null;
// null1=100

//undefined 타입
let undefined1: undefined = undefined;
undefined1 = undefined;
//undefined1="10"

//any타입
let any1: any;
any1 = false;
any1 = 10;
any1 = undefined;
any1 = null;
console.log(arr1);

//====함수타입지정====

//void타입으로 반환
const funcA = (num: number): void => {
  //동작구문
};
funcA(10);
// funcA("10")
// funcA()

//객체타입
const obj: { str: string; num: number } = {
  str: "A",
  num: 10,
};
obj.str = "B";
// obj.str=20
obj.num = 20;
// obj.num="20"
// obj.num=null

//복합타입 : 타입 & 타입으로 지정
const obj1: { str: string } & { num: number } = {
  str: "A",
  num: 10,
};

type TypeA = {
  str: string;
  num: number;
};

type TypeB = {
  str: string;
  bool: boolean;
};

type TypeC = TypeA & TypeB;
const obj2: TypeC = {
  str: "A",
  num: 10,
  bool: false,
};

//복합타입: 타입 | 타입
let val1: string | number = "";
val1 = "A";
val1 = 10;
// val1 = undefined;
// val1 = [];

//타입스크립트에서 generic정의가능
type CustomType<T> = {
  val: T;
};
const srtObj: CustomType<string> = { val: "A" };
// const srtObj2: CustomType<string> = { val: 10 };

//useState정의시 제네릭 이용
// const [str2, setStr] = useState<string>("A");
// const [str3, setStr2] = useState<string>(5);