const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('./index'); // Assuming this is your server file
const expect = chai.expect;

chai.use(chaiHttp);

let app;

before((done) => {
    app = server.listen(3000, () => {
        console.log('Test server running on port 3000');
        done();
    });
});

after((done) => {
    app.close(() => {
        console.log('Test server closed');
        done();
    });
});

describe('GET /', () => {
    it('should return Hello World', (done) => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                expect(res.text).to.equal('Hello World');
                done();
            });
    });
});
