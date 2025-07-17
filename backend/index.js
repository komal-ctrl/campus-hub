const express = require('express')
const cors=require('cors');
const app = express()
const port = 3000

app.use(express.json());
app.use(cors());
app.use(cors({ origin: 'http://localhost:5173' }))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/register',(req,res)=>{
    const{name,email,password}=req.body;
    res.json({message:'Register successfull'})
});
app.post('/login' ,(req,res)=>{
    const{name,email}=req.body;
    res.json({message:"Successfully Login"})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
