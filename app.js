import express from 'express'
import guruTranslate from './helpers/translator.js'

const app = express()
const PORT = 3000

app.use(express.static('public'))
app.use(express.json())

app.post('/api', (req, res) => {
  const { body } = req
  const translatedString = guruTranslate(body.text)
  res.status(200).json({ response: translatedString })
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})