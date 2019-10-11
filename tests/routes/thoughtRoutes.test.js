require('dotenv').config();
const request = require('supertest');
const app = require('../../lib/app');
const mongoose = require('mongoose');
const connect = require('../../lib/utils/connect');

beforeAll(() => connect());
beforeEach(() => mongoose.connection.dropDatabase());
afterAll(() => mongoose.connection.close());

function postThought() {
  return request(app)
    .post('/api/v1/thoughts')
    .send({
      message: 'heres my message about things'
    });
}

describe('though route tests', () => {

  it('create a new thought', () => {
    return postThought()
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          message: 'heres my message about things',
          time: expect.any(String)
        });
      });
  });

  it('gets all max 500', () => {
    return postThought()
      .then(() => {
        return request(app)
          .get('/api/v1/thoughts')
          .then(res => {
            expect(res.body).toEqual(expect.any(Array));
            expect(res.body[0]).toEqual({
              _id: expect.any(String), 
              message: 'heres my message about things', 
              time: expect.any(String)
            });
          });
      });
  });

});
