const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({extended: true}))
mongoose.connect("mongodb+srv://devilfish:agua1175@cluster0.5zioa.mongodb.net/myFirstDatabase", {useNewUrlParser: true}, {useUnifiedTopology: true})


const formSchema = {
    title: String,
    content: String,

}
const Form = mongoose.model('Form', formSchema)

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})
app.post("/", (req, res) =>{
    let newForm = new Form({
        title: req.body.title,
        content: req.body.content
    })
    newForm.save()
    res.redirect('/')
})

app.listen(3000)