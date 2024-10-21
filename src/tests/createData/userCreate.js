const User = require("../../models/User")

const userCreate = async () => {

    const user = {
        firstName: "Vicent",
        lastName: "Duarte",
        email: "vicentduarte70@gmail.com",
        password: "12640330",
        phone: "+182935820707"
    }

    await User.create(user)
}

module.exports =  userCreate;