/** RansomNote.js 설명
 * ransomNote와 magazine이라는 두 개의 문자열이 주어지면,
 * magazine의 문자를 사용하여 ransomNote를 구성할 수 있으면
 * true를 반환하고 그렇지 않으면 false를 반환합니다.
 *
 * 잡지의 각 문자는 랜섬노트에서 한 번만 사용할 수 있습니다.
 */

const canConstruct = (ransomNote, magazine) => {
  const ransomArray = ransomNote.split("");
  const magazineArray = magazine.split("");

  const result = ransomArray.filter((ransomWord) => {
    const found = magazineArray.find(
      (magazineWord) => magazineWord === ransomWord
    );

    if (found) {
      magazineArray.splice(magazineArray.indexOf(found), 1);
      return true;
    }
    return false;
  });

  return result.join("") === ransomArray.join("");
};
