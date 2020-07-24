const express = require('express')
const app = express()

const PORT = process.eventNames.PORT || 8080;


app.use(express.static(__dirname + '/dist/AnyCalculator'));

app.get('/*', (req, res)=>{
  res.sendFile(__dirname + '/dist/AnyCalculator/index.html')
});


app.listen(PORT,() =>{
  console.log("Servidor iniciando na porta " + PORT);
})