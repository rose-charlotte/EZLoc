const signInUser = {
    async get(req, res) {
        console.log(req.body);
        const email = req.body.email;
        console.log(email);
        res.status(200).json({ message: "tu es connecté" });
    },
};

module.exports = signInUser;
