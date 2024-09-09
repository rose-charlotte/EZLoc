module.exports.signInUser = async (req, res) => {
    const userDb = {
        userName: "toto@toto.fr",
        password: "toto",
    };

    const foundUser = userDB.userName === req.body.userName;

    if (!foundUser) {
        return res.status(400).json({ message: "pas bon" });
    }

    return res.status(200).json({ message: "ca marche" });
};
