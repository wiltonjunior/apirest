const app = require("./src/express/app");

app.listen(app.get('port'), () => {
    console.log(`Server Running on Port ${app.get('port')}`);    
});