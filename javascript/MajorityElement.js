/** MajorityElement.js 설명
 *
 * 크기 n의 배열 숫자가 주어지면 다수 요소를 반환합니다.
 * 다수 요소는 ⌊n / 2⌋ 번 이상 나타나는 요소입니다. 대부분의 요소가 항상 배열에 존재한다고 가정할 수 있습니다.
 */

const nums = [3, 3, 2, 2, 2, 2, 4, 4, 7, 7];

const MajorityElement = (nums) => {
  const myNum = nums.map((element, idx, arr) => {
    const sameArr = arr.filter((item, idx) => element === item).length;
    return Math.max(sameArr);
  });

  console.log(myNum);
  return myNum;
};

console.log(MajorityElement(nums));

//const newNum = nums.find((element, idx, arr) => {
//const found = arr.filter((foundEl) => foundEl === element);
//return found.length === 1;
