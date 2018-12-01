const bcrypt = require('bcrypt');
const saltRounds = 12;

module.exports = {
    register: (req,res)=>{
        const db = req.app.get('db');
        const { username, password, firstName, lastName, email, phone, gender, about, locale, userPhoto, dateJoined } = req.body;
        bcrypt.hash(password, saltRounds).then(hash=>{
            // make sure db sql file is called create_user as below
            db.create_user([username, hash, firstName, lastName, email, phone, gender, about, locale, userPhoto, dateJoined]).then(() => {
                req.session.user = { username };
                res.json({ user: req.session.user })
            }).catch(error => {
                console.log('error', error);
                res.status(500).json({ message: 'Registration Failed'})
            });
        })
    },
    login: (req, res) => {
        const db = req.app.get('db');
        const { username, password } = req.body;
        // make sure db sql file is called find_user as below
        db.find_user([username]).then(users => {
          if (users.length) {
            bcrypt.compare(password, users[0].password).then(passwordsMatch=>{
              if (passwordsMatch) {
                req.session.user = { username: users[0].username };
                res.json({ user: req.session.user });
              } else {
                res.status(403).json({ message: 'Wrong password' })
              }
            })
          } else {
            res.status(403).json({ message: "User is not registered" })
          }
        });
    },
    logout: (req, res) => {
        req.session.destroy();
        res.status(200).send();
    },
}