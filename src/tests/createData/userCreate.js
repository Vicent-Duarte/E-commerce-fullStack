const User = require("../../models/User")

const userCreate = async () => {

    const user = {
        firstName: "John",
        lastName: "Doe",
        email: "johndoe@gmail.com",
        password: "secret123",
        phone: "+18293580707"
    }

    await User.create(user)
}

module.exports =  userCreate;