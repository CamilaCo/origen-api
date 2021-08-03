const mongoose = require('mongoose');
const uri = "mongodb+srv://camilacortes:roca753roca@cluster0.0eopa.mongodb.net/origenretryWrites=true&w=majority"
mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});