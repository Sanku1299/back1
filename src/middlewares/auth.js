const adminAuth = (req, res, next) => {
    const token = 'xyza';
    const AdminValid = token === 'xyz';
    if(!AdminValid) {
        res.status(401).send("Error in authentication");
    } else {
        next();
    }
}

const userAuth = (req, res, next) => {
    const token = 'xyza';
    const AdminValid = token === 'xyz';
    if(!AdminValid) {
        res.status(401).send("Error in authentication");
    } else {
        next();
    }
}

module.exports = {
    adminAuth,userAuth
}