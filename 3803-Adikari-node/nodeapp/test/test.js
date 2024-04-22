const request = require('supertest');
const app = require('../index.js');

describe('GET /will', function() {
    it('should respond with a JSON object containing the correct message', function(done) {
        request(app)
            .get('/will') // The endpoint to test
            .expect('Content-Type', /json/) // Check that it's a JSON response
            .expect(200) // HTTP status should be 200
            .expect((res) => {
                // Check that the response body contains the correct object
                if (JSON.stringify(res.body) !== JSON.stringify({ response: "Hello World" })) {
                    throw new Error('Unexpected response body: ' + JSON.stringify(res.body));
                }
            })
            .end(done); // Signal completion of the test
    });
});
