const express = require("express");                             // require express

const app = express()                                     // create an express object

app.use(express.json())

const dbConnection = require("./src/utils/DBConnection")
dbConnection()

// const userRoutesDummy = require("./src/routes/UserRoutesDummy")           // require routes
// app.use(userRoutesDummy)                                             // use routes in express

// const employeeRoutes = require("./src/routes/EmployeeRoutes")           
// app.use(employeeRoutes) 

const employeeRoutes = require("./src/routes/EmployeeRoutes")
app.use("/employee",employeeRoutes)

const userRoutes = require("./src/routes/UserRoutes")
app.use("/user",userRoutes)

const productRoutes = require("./src/routes/ProductRoutes")
app.use("/product",productRoutes)

const bookRoutes = require("./src/routes/BookRoutes")
app.use("/book",bookRoutes)

const cityRoutes = require("./src/routes/CityRoutes")
app.use("/city",cityRoutes)

const stateRoutes = require("./src/routes/StateRoutes")
app.use("/state",stateRoutes)

const categoryRoutes = require("./src/routes/CategoryRoutes")
app.use("/category",categoryRoutes)

const PORT = 5000;
app.listen(PORT, () =>{                                         // server creation
    console.log(`server started on PORT ${PORT}`);
})