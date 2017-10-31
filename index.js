const app = require('./app');
require('dotenv').config();


 
app.listen(process.env.SERVER_PORT || 5000, (err) => {
  if (err) {
    throw err;
  } else { 
    console.log(
			`
    Server is running on port: ${process.env.SERVER_PORT || 5000}
    ---
    Running on ${process.env.NODE_ENV}.
    `,
		);
  }
});
