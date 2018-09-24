const app = require("./src/config/express");

app.listen(app.get('port'), () => {
    console.log(`Server Running on Port ${app.get('port')}`);    
});