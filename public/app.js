const $ = querySelector => document.querySelector(querySelector)
const $$ = querySelector => document.querySelectorAll(querySelector)

const displayElement = element => {
  element.classList.remove('hidden')
  element.classList.add('block')
}

const hideElement = element => {
  element.classList.remove('block')
  element.classList.add('hidden')
}

const getGuruTranslation = async text => {
  const request = fetch(`/api/short/${text}`)
  const response = await request
  if (!response.ok) {
    translationParagraph.innerHTML = 'quedo la cagá'
    return
  }
  const textData = await response.text()
  return textData
}

const copyToClipboard = text => {
  navigator.clipboard.writeText(text).then(
    () => alert('Text Copied!'), 
    () => alert('Error on copy')
  )
}

const form = $('#guru-form')
const translationParagraph = $('#translation')
const codeShortString = $('#short-string-example')
const codeLongString = $('#long-string-example')
const copyCodeButton = $('#copy-code')
const copyTranslationButtonn = $('#copy-translation')
const spansText = $$('.span-text')

form.addEventListener('submit', async event => {
  event.preventDefault()
  const submitterId = event.submitter.id
  if (submitterId === 'short-submit') {
    displayElement(codeShortString)
    hideElement(codeLongString)
  } else {
    displayElement(codeLongString)
    hideElement(codeShortString)
  }  
  const data = Object.fromEntries(new FormData(event.target))
  const { text } = data
  spansText.forEach(span => { span.innerText = text })
  translationParagraph.textContent = await getGuruTranslation(text)
})

copyCodeButton.addEventListener('click', () => {
  const text = codeShortString.innerText
  copyToClipboard(text)
})

copyTranslationButtonn.addEventListener('click', () => {
  const text = translationParagraph.innerText
  copyToClipboard(text)
})