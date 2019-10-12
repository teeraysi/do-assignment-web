import * as express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import app from './nextapp';

const port = 3000;
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  const staticDir = path.resolve(__dirname, '..', '.next/static');
  server.use('/_next/static', express.static(staticDir));

  // form parser.
  server.use(
    bodyParser.urlencoded({
      extended: true,
    }),
  );
  // Body parser.
  server.use(bodyParser.json());


  server.all('*', (req, res) => {  
    handle(req, res)
  });

  server.use(function (err, req, res, next) {
    if (err.code !== 'EBADCSRFTOKEN') {
      return next(err);
    }

    // handle CSRF token errors here
    res.status(500)
    res.send('form tampered with')
  });

  server.listen(port, err => {
    if (err) {
      console.error(err);
      return;
    }

    console.log(`${'\u2705'}  Server starting http://localhost:${port}`);
  })

})