import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../index';
import User from './model';

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
    it('it should not POST a user without username field', (done) => {
      const req = {
        password: 'test123',
        email: 'test@johndoe.com',
      };
      chai.request(server)
        .post('/api/user')
        .send(req)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('errors');
          res.body.errors.username.should.have.property('message');
          res.body.errors.username.should.have.property('kind').eql('required');
          done();
        });
    });
    it('it should POST a User', (done) => {
      const req = {
        username: 'johndoe',
        password: 'test123',
        email: 'test@johndoe.com',
      };
      chai.request(server)
        .post('/api/user')
        .send(req)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });
  });
});
