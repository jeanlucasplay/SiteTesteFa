// Importando Módulos express e router
const express = require('express');
const router = express.Router();

// Configurando Rotas
    // Rota para acessar página do administrador
    router.get('/cadastro', (req, res) => {
        res.render("pages", {title: 'cadastro'})
    });

    router.get('/login', (req, res) => {
        res.render("pages", {title: 'login'})
    });

    router.get('/', (req, res) => {
        res.render("pages", {title: 'edição'})
    });

    router.get('/', (req, res) => {
        res.render("pages", {title: 'fórmulario'})
    })


// Exportando router (Rotas)
module.exports = router;