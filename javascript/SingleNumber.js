/** SingleNumber.js 설명
 * 정수 nums의 비어 있지 않은 배열이 주어지면 모든 요소는 하나를 제외하고 두 번 나타납니다. 그 하나를 찾으십시오.
 *
 * 선형 런타임 복잡성이 있는 솔루션을 구현하고 일정한 추가 공간만 사용해야 합니다.
 */

const newNum = nums.find((element, idx, arr) => {
  const found = arr.filter((foundEl) => foundEl === element);
  return found.length === 1;
});

return newNum;
