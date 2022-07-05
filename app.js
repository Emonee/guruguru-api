import express from 'express'
import cors from 'cors'

import guruTranslate from './helpers/translator.js'

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors({ methods: ['POST', 'GET'] }))
app.use(express.static('public'))
app.use(express.json())

app.get('/api/short/:text', (req, res) => {
  const { text } = req.params
  const translation = guruTranslate(text)
  res.status(200).send(translation)
})

app.post('/api/long', (req, res) => {
  const { body } = req
  const translatedString = guruTranslate(body.text)
  res.status(200).json({ response: translatedString })
})

app.use('*', (req, res) => res.sendStatus(404))

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
