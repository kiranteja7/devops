import * as chai from 'chai';
import chaiHttp from 'chai-http';
import axios from 'axios';
import app from './index.js'; // Ensure `app` is exported correctly

const { expect } = chai;

chai.use(chaiHttp);

let server;

before(() => {
    server = app.listen(3000, () => {
        console.log('Test server running on port 3000');
    });
});

after(() => {
    server.close(() => {
        console.log('Test server closed');
    });
});

describe('GET /api', () => {
    it('should return status 200', async () => {
        try {
            const res = await axios.get('http://localhost:3000/');
            expect(res.data).to.equal('Hello World');
            expect(res.status).to.equal(200);
          } catch (err) {
            throw err;
          }
    });
  });
  
