import cors from 'cors'
import express from 'express'
import { agent } from './agent.js'

const port = process.env.PORT || 3000

const app = express()
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.post('/generate', async (req, res) => {
  try {
    const { query, video_id, thread_id } = req.body;

    const result = await agent.invoke({
      messages: [
        {
          role: 'user',
          content: query,
        },
      ],
    }, {
      configurable: { thread_id, video_id }
    })
    const data = result.messages.at(-1)?.content;

    res.json(data)
  } catch (error) {
    console.error('Failed to handle /generate request:', error);
    res.status(500).json({
      error: 'Failed to generate response. Please try again.'
    });
  }
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

