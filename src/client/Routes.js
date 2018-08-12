// The file is shared between both the client and the server side code basis
// Client: BrowserRouter when running in a browser (Browser Router doesn't work at all on the server side)
// Server: StaticRouter when doing SSR

import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';

export default () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/hi" component={() => 'Hi Route'} />
    </div>
  );
};

// Warning: Expected server HTML to contain a matching <div> in <div>
// -> Mismatch in the server versus the browser HTML due to '<div><Route></div>'
// -> Cause: we only set up the router component for the browser before we setup for the server as well 
// -> Solution: Disable Javascript inside of the browser