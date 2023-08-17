const app = require("./app.js");

const PORT = process.env.PORT || 3004;

app.listen(PORT, () => {
    console.log(`server running on port: ${PORT}`)
});