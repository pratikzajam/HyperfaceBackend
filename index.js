import express from 'express';
import router from './src/routes.js'

let app = express();

app.use(express.json())
app.use("/api/v1", router)

let PORT = 3000



app.listen(PORT, () => {
    console.log(`app is running on ${PORT}`)
})


