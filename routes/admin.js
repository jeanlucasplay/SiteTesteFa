// Importando Módulos express e router
const express = require('express');
const router = express.Router();

// Configurando Rotas
    // Rota para acessar página do administrador
    router.get('/index', (req, res) => {
        res.render("admin/index", {title: 'Administrador'})
    })

    router.get('/teste', (req, res) => {
        res.render("admin/home", {title: 'Página de teste'})
    })


// Exportando router (Rotas)
module.exports = router;