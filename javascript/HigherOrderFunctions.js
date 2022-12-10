// # problem 1

const numberBox = [0, 1, 2, 3, 4];

// Find number "3" from numberBox and save it as "myNumber".
// numberBox 에서 3을 찾아 해당 숫자를 myNumber라는 변수명으로 저장해주세요. myNumber의 데이터타입은 number 이여야 합니다

const myNumber = numberBox.find((item, idx) => {
  return idx === 3; // false, false, false, true,
});

// # problem 2

const fruitBox = [
  "apple",
  "mango",
  "mango",
  "watermelon",
  "melon",
  "apple",
  "watermelon",
  "mango",
  "grape",
  "melon",
  "mango",
  "melon",
  "melon",
];

// Find all string "melon" from fruitBox and save them as Array of string as "melonBox"
// fruitBox 에 있는 모든  melon을 찾아 melonBox 라는 변수에 넣어주세요. melonBox의 데이터 타입은 string요소를 담은 Array 여야 합니다. 정확히 melon 인 요소만 넣어주세요.

// const melonBox = fruitBox.filter((item) => item === "melon");
const melonBox = fruitBox.filter((item) => item === "melon");

// apple === melon = false
// mango === melon = false
// mango === melon = false
// watermelon === melon ? true ==> 반환돼 o
// melon === melon ? true ==> 반환돼 o
// apple === melon = false
// watermelon === melon ? true ==> 반환돼 o
// mango === melon = false
// grape === melon ? false
// melon === melone ? true ==>  반환돼 o
// mango === melon = false
// melon === melone ? true ==>  반환돼 o
// melon === melone ? true ==>  반환돼 o

// ["melon", "melon", "melon", "melon"] ==> filter ( ===melon)
// ["watermelon", "melon", "watermelon", "melon", "melon", "melon"] ==> filter(item.includes("melon"))
