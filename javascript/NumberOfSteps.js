/** NumberOfSteps.js 설명
 * 1342. Number of Steps to Reduce a Number to Zero
 * 정수 숫자가 주어지면 0으로 줄이기 위한 단계 수를 반환합니다.
 * 한 단계에서 현재 숫자가 짝수이면 2로 나누고 그렇지 않으면 1을 빼야 합니다.
 */

const numberOfSteps = (num) => {
  let step = 0;
  while (num !== 0) {
    if (num % 2 === 0) {
      num = num / 2;
    } else {
      num--;
    }
    step++;
  }
  return step;
};
