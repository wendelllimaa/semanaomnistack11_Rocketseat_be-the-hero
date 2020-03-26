const express = require ('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


const routes = express.Router();

/** Rota para Login */

routes.post ('/sessions', SessionController.create);

/** Rota para listagem e Cadastro das Ongs */

routes.get('/ongs', OngController.index);
routes.post ('/ongs', OngController.create);

routes.get ('/profile', ProfileController.index);

/** Rota para listagem, Cadastro e delete dos casos */

routes.get ('/incidents', IncidentController.index);
routes.post ('/incidents', IncidentController.create);
routes.delete ('/incidents/:id', IncidentController.delete);

module.exports = routes;
