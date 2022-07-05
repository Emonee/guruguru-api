export default function guruTranslate (string) {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll
  return string
    .replaceAll('ch', 'g')
    .replaceAll('ll', 'g')
    .replaceAll('c', 'g')
    .replaceAll('t', 'k')
    .replaceAll('l', 'j')
    .replaceAll('m', 'g')
    .replaceAll('r', 'gu')
    .replaceAll('gg', 'g')
}
