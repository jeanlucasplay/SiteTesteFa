// Importando Módulo Express
const express = require('express');
const app = express();

// Importando Módulo Router
const admin = require('./routes/admin');

// Importando Módulo Handlebars
const handlebars = require('express-handlebars');

// Importando Módulo Path
const path = require('path');

// Configurando Módulo
    // Handlebars e Path
    app.engine('handlebars', handlebars.engine({
        defaultLayout: 'main',
        layoutsDir: path.join(__dirname, 'views/layouts')
    }));
    app.set('view engine', 'handlebars');


// Configurando Rotas
app.use("/admin", admin)

// Configurando Porta Server
app.listen(8080, () => {
    console.log("Conectado na porta 8080");
})