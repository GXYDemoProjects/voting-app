require("babel-register");
const app = require('./app');

 
app.listen(process.env.SERVER_PORT || 3001, (err) => {
  if (err) {
    throw err;
  } else { 
    console.log(
			`
    Server is running on port: ${process.env.SERVER_PORT || 3001}
    ---
    Running on ${process.env.NODE_ENV}
    `,
		);
  }
});
