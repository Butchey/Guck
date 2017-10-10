'use strict'
const Datastore = require('nedb');

class User {

    constructor(id) {
        this.db = new Datastore({ filename: 'db/users.db', autoload: true });
    }

    get() {
    }

    set() {

    }

    create(data) {
        this.data = data;
        this.data.id = this.db.insert( this.data, function( err, res ) {
            console.log(res._id); 
            return res._id;
        });
        console.log(this.data);
    }

    login() {

    }
}

module.exports = User;