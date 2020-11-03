const shortid = require('shortid');

class User {
    constructor(db, id = shortid.generate()) {
        // Check exist users
        if (!db.has('users').value()) {
            db.set('users', []).write();
        }

        this.id = id;
    }
}

module.exports = User;