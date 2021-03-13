'use strict';

const server = require('../src/server.js');

// const supertest = require('supertest');

const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(server.app);

let id = 0;

describe('***** API SERVER *****', () => {
  // 404 route test
  it('should return a 404 if no route found', () => {
    mockRequest.get('/not-a-route')
      .then(results => {
        expect(results.status).toBe(404);
      });
  })

  //500 route test
  it('should return a 500 - broken', () => {
    mockRequest.get('/not-a-route')
      .then(results => {
        expect(results.status).toBe(404);
      })
  })

  it('can create a new record in the db', async () => {
    let testThing = { name: 'test name', calories: 500, type: 'SWEET'}
    let response = await mockRequest.post('/food').send(testThing)
    id = response.body._id;
    console.log('this is saved id: ', id);
    // console.log('response....', response)
    expect(response.status).toBe(201);
    expect(response.body._id).toBeDefined();
  })

  it('can update a record in the db', async () => {
    let testThing = {name: 'test'}
    // let testId = testId;

    let response  = await mockRequest.put(`/food/${id}`).send(testThing);

    expect(response.status).toBe(200);
    expect(response.body.name).toBe('test')
  })

  it('can get one record', async () => {
    // let testId = testId;
    let response = await mockRequest.get(`/food/${id}`)

    expect(response.status).toBe(200)
    expect(response.body._id).toBeDefined();
  })

  it('can get all records', async () => {
    // let testId = testId;
    let response = await mockRequest.get(`/food`)

    expect(response.status).toBe(200)
    expect(response.body[0]._id).toBeDefined();
  })

  it('can get delete one record', async () => {
    // let testId = testId;
    let response = await mockRequest.delete(`/food/${id}`)
    // console.log('delete response..', response)

    expect(response.status).toBe(200);
    expect(response.body.name).toBe('test');
  })
})