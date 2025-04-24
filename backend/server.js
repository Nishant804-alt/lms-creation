import express from 'express'
import cors from 'cors'
import connectDB from './config/db.js'
const port = process.env.PORT || 5000 
const db_url = process.env.MONGO_URI

const app = express();

app.use(express.json())

app.use(cors())

app.get('/', (req, res) => res.send("API working"))
// app.post('/clerk', express.json(), clerkWebhooks)


app.listen(port, async() => {

    try{


        await connectDB(db_url)
        
        console.log(`Server is running on http://localhost:${port}`)
        
        console.log("Connected to database")
        
    }
catch(error){
        console.log("Error connecting to database", error.message)
    }
})
