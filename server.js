const express = require('express');
const PORT = process.env.PORT || 8080;

const app = express();

require('./setupServer')(app);

app.listen({ port: PORT }, () => console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`));
