let path = require('path');
let { addPath } = require('app-module-path');

let repositoryRoot = path.join(__dirname, './');
addPath(repositoryRoot);

let bodyParser = require('body-parser');
let express = require('express');
let cors = require('cors');

let config = require('src/config');
let router = require('src/routes');
let globalErrorHandler = require('src/helpers/globalErrorHandler');
let notFoundHandler = require('src/helpers/notFoundHandler');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use((req, res, next) => {
	res.success = data => res.status(201).json(data);
	res.notFound = () => res.status(404).end();
    res.error = errors => res.status(400).json({ errors });
    
	next();
});

app.use('/api', router);

app.use(notFoundHandler);
app.use(globalErrorHandler);

app.listen(config.port, () => `************Server is started on ${config.port} port************`);
