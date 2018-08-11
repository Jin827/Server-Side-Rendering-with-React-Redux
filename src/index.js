import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from './client/components/Home';

const app = express();

app.use(express.static('public'));
app.get('/', (req, res) => {
  const content = renderToString(<Home />);
  // script client side bundle.js (public)
  // server side bundle.js (build) which could have a sensitive data is not open to public
  const html = `
    <html>
      <head></head>
      <body>
        <div>${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
  res.send(html);
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});