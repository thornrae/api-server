'use strict';

const server = require('../src/server.js');

// const supertest = require('supertest');

const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(server.app);


describe('***** API SERVER *****', () => {
  //404 route test
  // it('should return a 404 if no route found', () => {
  //   mockRequest.get('/not-a-route')
  //     .then(results => {
  //       expect(results.status).toBe(404);
  //     });
  // })

  // //500 route test
  // it('should return a 500 - broken', () => {
  //   mockRequest.get('/not-a-route')
  //     .then(results => {
  //       expect(results.status).toBe(404);
  //     })
  // })

  it('can create a new record in the db', async () => {
    let testThing = { name: 'test name', calories: 500, type: 'SWEET'}
    let response = await mockRequest.post('/food').send(testThing)
    console.log('response....', response)
    expect(response.status).toBe(201);
    expect(response.body._id).toBeDefined();
  })


})