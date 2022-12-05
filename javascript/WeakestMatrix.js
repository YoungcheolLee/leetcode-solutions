/** WeakestMatrix.js 설명
 * 1337. The K Weakest Rows in a Matrix
 *
 * 1(군인을 나타냄)과 0(민간인을 나타냄)의 m x n 이진 행렬
 * 매트가 제공됩니다. 군인들은 민간인 앞에 배치됩니다.
 * 즉, 모든 1은 각 행의 모든 0 왼쪽에 나타납니다.
 *
 * 다음 중 하나가 참인 경우 행 i는 행 j보다 약합니다.
 *
 * i행의 군인 수는 j행의 군인 수보다 적습니다.
 * 두 행 모두 군인 수가 같고 i < j입니다.
 * 가장 약한 것부터 가장 강한 것으로 정렬된 행렬에서 가장 약한
 * k 행의 인덱스를 반환합니다.
 */

const WeakesMatrix = (mat, k) => {
  let newMat = mat.map(
    (element) => element.filter((item) => item === 1).length
  );

  const sortedArr = newMat.slice().sort((a, b) => a - b);
  const resultArr = [];

  for (let i = 0; i < k; i++) {
    const index = newMat.indexOf(sortedArr[i]);
    resultArr.push(index);
    newMat.splice(index, 1, "nan");
  }

  return resultArr;
};
