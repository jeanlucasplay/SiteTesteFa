// Importando Módulos express e router
const express = require('express');
const router = express.Router();

// Configurando Rotas
    // Rota para acessar página do administrador
    router.get('/', (req, res) => {
        res.render("pages", {title: 'cadastro'})
    });

    router.get('/home', (req, res) => {
        res.render("pages/home", {title: 'cadastro'})
    });

    router.get('/cadastro', (req, res) => {
        res.render("pages/cadastro", {title: 'cadastro'})
    });

    router.get('/login', (req, res) => {
        res.render("pages/login", {title: 'cadastro'})
    });

    router.get('/edicaocb', (req, res) => {
        res.render("pages/edicaocb", {title: 'login'})
    });

    router.get('/from-sub', (req, res) => {
        res.render("pages/from-sub", {title: 'edição'})
    });


// Exportando router (Rotas)
module.exports = router;