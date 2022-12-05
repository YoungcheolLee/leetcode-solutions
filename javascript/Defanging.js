/** Defanging.js 설명
 * 유효한(IPv4) IP 주소가 주어지면 해당 IP 주소의 변형된 버전을
 * 반환합니다.
 * Defanged IP 주소는 모든 마침표 "."를 "[.]" 로 대체합니다.
 */
const defangIPaddr = () => {
  let arr = address.split("");
  let newArr = arr.map((element) => {
    if (element === ".") {
      return "[.]";
    } else {
      return element;
    }
  });
  let str = newArr.join("");
  return str;
};
