const $ = querySelector => document.querySelector(querySelector)
const form = $('#guru-form')
const para = $('#response')
const spanText = $('#span-text')

const fetchOptions = data => ({
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
})

const postingData = async data => {
  const request = fetch('/api', fetchOptions(data))
  const response = await request
  if (!response.ok) return para.innerHTML = 'quedo la cagá'
  const jsonData = await response.json()
  para.textContent = jsonData.response
}

form.addEventListener("submit", e => {
  e.preventDefault()
  const data = Object.fromEntries(new FormData(e.target))
  spanText.innerText = data.text
  postingData(data)
})