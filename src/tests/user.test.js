const request  = require("supertest");
const app = require("../app");

const BASE_URL = '/api/v1/users'
let TOKEN

beforeAll(async () => {
  const user = {
    email: "juan@gmail.com",
    password: "juan1234"
  }
  const res = await request(app)
    .post(`${BASE_URL}/login`)
    .send(user)
  TOKEN = res.body.token
  console.log(TOKEN);
})

const user = {
    firstName: "Vicent",
    lastName: "Duarte",
    email: "vicentduarte@gmail.com",
    password: "12640330",
    phone: "+18293587070"
}

test("POST -> BASE_URL , should return statusCode 201, and res.body. firstName === user.firstName", async () => {
    // const columns = ["firstName, lastName, email, password, phone"]
    const res = await request(app)

        .post(BASE_URL)
        .send(user)

    expect(res.statusCode).toBe(201);
    expect(res.body).toBeDefined();

    // columns.forEach((columns) => {
    //     expect(res.body).toHaveProperty(columns);
    // })

    expect(res.body.firstName).toBe(user.firstName);
})

test("POST -> BASE_URL/LOGIN , should return statusCode 200, and res.body.user.email === hits.email", async () => {
    const hits = {
        email: "vicentduarte@gmail.com",
        password: "12640330"
    }
    const res = await request(app)
     .post(`${BASE_URL}/login`)
     .send(hits)

     expect(res.statusCode).toBe(200);
     expect(res.body).toBeDefined();
     expect(res.body.token).toBeDefined();
     expect(res.body.hits.email).toBe(hits.email);
})