const app = require("./app")
const supertest = require("supertest")
const request = supertest(app)

describe("/test succeed", () => {
    it("should return halo dunia", async () => {
        const response = await request.get("/test")
        expect(response.status).toBe(200)
        expect(response.text).toBe("Halo dunia");
    })
})

// describe("/test fail", () => {
//     it("should return hello world", async () => {
//         const response = await request.get("/test")
//         expect(response.status).toBe(200)
//         expect(response.text).toBe("Hello world");
//     })
// })