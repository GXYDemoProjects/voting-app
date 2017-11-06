const app = require('./app');
require('dotenv').config();
// require('./test');

 
app.listen(process.env.PORT || 5000, (err) => {
  if (err) {
    throw err;
  } else { 
    console.log(
			`
    Server is running on port: ${process.env.PORT || 5000}
    ---
    Running on ${process.env.NODE_ENV}.
    `,
		);
  }
});
