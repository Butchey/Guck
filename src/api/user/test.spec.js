import chai from 'chai';
import chaiHttp from 'chai-http';

import server from '../../index'
import UserController from './controller';

let should = chai.should();

chai.use(chaiHttp);
//Our parent block
describe('User', () => {
    beforeEach((done) => { //Before each test we empty the database
      chai.request(server)
      .delete('/api/user')
      .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('number');
        done();
      });
    });
/*
  * Test the /GET route
  */
  describe('/GET User', () => {
      it('it should GET all the Users', (done) => {
        chai.request(server)
            .get('/api/user')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(0);
              done();
            });
      });
  });

});