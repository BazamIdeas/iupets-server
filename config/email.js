module.exports = env => {

    return {
        production: {
            service: "gmail",
            user: "",
            password: "",
            from: ""
        },
        development: {
            service: "gmail",
            user: "",
            password: "",
            from: ""
        }
    }[env]

}