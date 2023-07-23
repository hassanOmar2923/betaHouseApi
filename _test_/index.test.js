const app = require("../app");
const request = require("supertest");
const jwt = require("jsonwebtoken");

describe("wrapping all global ID", () => {
  let userID;
  let houseId;
  let galleryId;
  let serviceId;
  let imageId;


  describe("testing users crud operations", function () {
    let userId;

    it("get users", async () => {
      // let Id;
      const resp = await request(app).get("/users");
      expect(resp.statusCode).toBe(200);
    });
    it("create user", async () => {
      const reqs = await request(app).post("/users").send({
        name: "hassan Omar",
        email: "hassan@gmail.com",
        role: "Admin",
        password: "123",
      });
      expect(reqs.statusCode).toBe(201);
      userId = reqs.body.data._id;
    });
    it("get users by id", async () => {
      // let Id;
      const resp = await request(app).get(`/users/${userId}`);
      expect(resp.statusCode).toBe(200);
    });
    it("update user", async () => {
      const Update = await request(app).put(`/users/${userId}`).send({
        name: "hassan",
        email: "hassan@gmail.com",
        role: "Admin",
        password: "123",
      });

      expect(Update.statusCode).toBe(200);
    });
    // it('delete user',async()=>{
    //     const Delete=await request(app).delete(`/users/${userId}`)
    //     expect(Delete.statusCode).toBe(200)
    // })
  });

  describe("testing login", () => {
    it("login ", async () => {
      const log = await request(app).post("/login").send({
        email: "hassan@gmail.com",
        password: "123",
      });
      const decoded = jwt.decode(log.body.token);
      userID = decoded.id;
    //   console.log(userID);
      expect(log.statusCode).toBe(200);
      // console.log(log.body)
    });
  });

  describe("testing houses crud operations", function () {
    it("get houses", async () => {
      const resp = await request(app).get("/houses");
      expect(resp.statusCode).toBe(200);
    });
    it("create houses", async () => {
      let user = userID;

      const reqs = await request(app).post("/houses").send({
        type: "fillo",
        area: "bar-ubax",
        age: "2mounths",
        rent: 230,
        address: "howl-wadag",
        deposite: 100,
        parking: "no",
        imagePreview: "https://unsplash.com/photos/GXXYkSwndP4",
        isAvailible: "ye",
        rooms: 10,
        bathRooms: 2,
        masterRoom: "yes",
        descreption: "tijaabo",
        user: user,
      });
      expect(reqs.statusCode).toBe(201);
      houseId = reqs.body.data._id;
    });
    it("get houses by id", async () => {
      const resp = await request(app).get(`/houses/${houseId}`);
      expect(resp.statusCode).toBe(200);
    });
    it("update houses", async () => {
      const house = houseId;
      const user = userID;

      const Update = await request(app).put(`/houses/${house}`).send({
        type: "fillo",
        area: "bar-ubax",
        age: "2mounths",
        address: "howl-wadag",
        rent: 230,
        deposite: 100,
        parking: "no",
        imagePreview: "https://unsplash.com/photos/GXXYkSwndP4",
        isAvailible: "ye",
        rooms: 10,
        bathRooms: 2,
        masterRoom: "yes",
        descreption: "tijaabo",
        user: user,
      });

      expect(Update.statusCode).toBe(200);
    });
    // it('delete houses',async()=>{
    //     const house=houseId

    //     const Delete=await request(app).delete(`/houses/${house}`)
    //     expect(Delete.statusCode).toBe(200)
    // })
  });
//   describe("testing images crud operations", function () {
//     it("get images", async () => {
//       // let Id;
//       const resp = await request(app).get("/images");
//       expect(resp.statusCode).toBe(200);
//     });
//     it("create images", async () => {
//         const house=houseId
//       const reqs = await request(app).post("/images").send({
//         house:house,
//         image:"https://unsplash.com/photos/178j8tJrNlc"
//       });
//       expect(reqs.statusCode).toBe(201);
//       imageId =reqs.body.data._id
//       console.log(reqs.body)

     
     
//     });
//     it("get images by id", async () => {
//       const image=imageId;

//       const resp = await request(app).get(`/images/${image}`);
//       expect(resp.statusCode).toBe(200);
//     });
//     it("update images", async () => {
//         const image=imageId;
//         const house=houseId


   

//       const Update = await request(app).put(`/images/${image}`).send({
//         house:house,
//         image:"https://unsplash.com/photos/178j8tJrNlc"
//       });

//       expect(Update.statusCode).toBe(200);
//     });
//     it('delete images',async()=>{
        
//         const image=imageId;


//         const Delete=await request(app).delete(`/images/${image}`)
//         expect(Delete.statusCode).toBe(200)
//     })
  
//   });
  describe("testing gallery crud operations", function () {
    it("get gallery", async () => {
      // let Id;
      const resp = await request(app).get("/gallery");
      expect(resp.statusCode).toBe(200);
    });
    it("create gallery", async () => {
      const reqs = await request(app).post("/gallery").send({
        ImageTitle: "Hasan",
        Image: "11",
      });
      expect(reqs.statusCode).toBe(201);
      galleryId =reqs.body.data._id
     
    });
    it("get gallery by id", async () => {
      const gallery=galleryId;
      const resp = await request(app).get(`/users/${gallery}`);
      expect(resp.statusCode).toBe(200);
    });
    it("update gallery", async () => {
      const gallery=galleryId;

      const Update = await request(app).put(`/gallery/${gallery}`).send({
        ImageTitle: "Hasan",
        Image: "11",
      })
      expect(Update.statusCode).toBe(200);
    });
  //it doesnt have a delete function
  });
 
  describe("testing service crud operations", function () {
    it("get service", async () => {
      // let Id;
      const resp = await request(app).get("/service");
      expect(resp.statusCode).toBe(200);
    });
    it("create service", async () => {
      const reqs = await request(app).post("/service").send({
        Title:"uih",
        Icon:"jiwe093",
        Description:"jeqf"
      });
      expect(reqs.statusCode).toBe(201);
      serviceId =reqs.body.data._id
     
     
    });
    it("get service by id", async () => {
      const service=serviceId;

      const resp = await request(app).get(`/service/${service}`);
      expect(resp.statusCode).toBe(200);
    });
    it("update service", async () => {
      const service=serviceId;
   

      const Update = await request(app).put(`/service/${service}`).send({
        Title:"uih",
        Icon:"jiwe093",
        Description:"jeqf"
      });

      expect(Update.statusCode).toBe(200);
    });
  //it doesnt have a delete function
  });

  describe("testing homeSetting crud operations", function () {
    it("get homeSetting", async () => {
      // let Id;
      const resp = await request(app).get("/homeSetting");
      expect(resp.statusCode).toBe(200);
    });
    it("create homeSetting", async () => {
      const reqs = await request(app).post("/homeSetting").send({
        Title:"uih",
        Icon:"jiwe093",
        Description:"jeqf"
      });
      expect(reqs.statusCode).toBe(201);
      serviceId =reqs.body.data._id
     
     
    });
    it("get homeSetting by id", async () => {
      const service=serviceId;

      const resp = await request(app).get(`/homeSetting/${service}`);
      expect(resp.statusCode).toBe(200);
    });
    it("update homeSetting", async () => {
      const service=serviceId;
   

      const Update = await request(app).put(`/homeSetting/${service}`).send({
        Title:"uih",
        Icon:"jiwe093",
        Description:"jeqf"
      });

      expect(Update.statusCode).toBe(200);
    });
  //it doesnt have a delete function
  });


  ///
});
