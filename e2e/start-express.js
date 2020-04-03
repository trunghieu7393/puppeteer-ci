import express from 'express'
import path from 'path'
const app = express()
const port = 3333
const __dirname = path.resolve();
console.log(__dirname);

app.use('/emoji-search/static', express.static(path.join(__dirname, '/build/static')))
app.get('/emoji-search', (req, res) => res.sendFile(path.join(__dirname,'/build/index.html')))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))