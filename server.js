const express = require('express')
const app = express();

app.set("view engine", "ejs")

app.get("/", function(req,res){
    
     
     const items = [
          {
               tittle:"D",
               message:"esenvolver aplicações/serviços de forma facil"
               },

               {
               tittle:"E",
               message:"JS usa Javascrip para renderizar HTML"
               },
               {
               tittle:"M",
               message:"uito Facil"
               },
               {
                    tittle:"A",
                    message:"mor"
               },
               {
               tittle:"I",
               message:"nstall ejs"
               },
               {
               tittle:"S",
               message:"intax ejs"
          }
     ];
     const subtittle = " Uma linguagem de modelagem para criação de paginas html utilizando JS"
     res.render("pages/index",{
          qualitys: items,
          subtittle: subtittle
     });
})


app.get("/sobre", function(req,res){
     res.render("pages/about");
})

app.listen(8080);
console.log("Rodando")