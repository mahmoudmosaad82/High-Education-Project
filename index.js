const {app} = require('./app.js');

const port = process.env.PORT || 3200;

app.listen(port,()=>  console.log(`listening on port ${port} ...`));
