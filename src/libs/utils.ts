/**
 * @param {...string} classnames
 * @returns {string}
 * @description classnames 배열의 모든 요소들을 공백(" ")으로 구분하여 하나의 문자열로 합쳐서 반환하는 함수
 */
export function cls(...classnames: string[]) {
  return classnames.join(" ");
}
