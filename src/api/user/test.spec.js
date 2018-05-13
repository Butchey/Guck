import chai from 'chai';
import chaiHttp from 'chai-http';

import server from '../../index';
import User from './model';

const should = chai.should();

chai.use(chaiHttp);
describe('User', () => {
  beforeEach((done) => { // Empty database before each Test
    User.remove({}, (err) => {
      done();
    });
  });

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

  describe('/POST User', () => {
    it('it should Create a User', (done) => {
      const req = {
        username: 'johndoe',
        password: 'test123',
        email: 'test@johndoe.com',
      };
      chai.request(server)
        .post('/api/user')
        .send(req)
        .end((err, res) => {
          console.log(res.body);
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });
  });
});
