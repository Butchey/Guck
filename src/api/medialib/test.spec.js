import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../index';
import Medialib from './model';

chai.use(chaiHttp);
describe('Library', () => {
  beforeEach((done) => { // Empty database before each Test
    Medialib.remove({}, (err) => {
      done();
    });
  });

  describe('/GET Library', () => {
    it('it should GET all the Libraries', (done) => {
      chai.request(server)
        .get('/api/library')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(0);
          done();
        });
    });
  });

  describe('/POST Library', () => {
    it('it should not POST a Library without module field', (done) => {
      const req = {
        password: 'test123',
        email: 'test@johndoe.com',
      };
      chai.request(server)
        .post('/api/library')
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
    it('it should POST a Library', (done) => {
      const req = {
        username: 'johndoe',
        password: 'test123',
        email: 'test@johndoe.com',
      };
      chai.request(server)
        .post('/api/library')
        .send(req)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          console.log(res.body);
          done();
        });
    });
  });
});