'use strict'
const Datastore = require('nedb');
const Bcrypt = require('bcrypt');

class User {

    constructor(id) {
        this.db = new Datastore({ filename: 'db/users.db', autoload: true });
    }

    get() {
    }

    set() {
    }

    update() {  
    }

    create(arg) {
        this.data = arg;
        this.data.password = Bcrypt.hashSync(this.data.password, Bcrypt.genSaltSync(10));
        // Add Validation by Schema
        this.data.id = this.db.insert( this.data, ( err, res ) => {
            this.data.id = res._id;
        });
    }

    login() {
    }
}

module.exports = User;