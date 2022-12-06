/**
 * 문장은 선행 또는 후행 공백 없이 하나의 공백으로 구분된 단어
 * 목록입니다.
 * 각 sentence[i]가 단일 문장을 나타내는 문자열 문장의 배열이
 * 제공됩니다.
 *
 * 단일 문장에 나타나는 최대 단어 수를 반환합니다.
 */

var mostWordsFound = (sentences) => {
  let exceptSpace = sentences.map((element) => {
    return element.split(" ").length;
  });
  let maxValue = Math.max(...exceptSpace);

  return maxValue;
};
