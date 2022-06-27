const axios = require('axios')

describe("Test PetStore endpoint", () => {
    // we can setup base url dinamically
    const baseUrl = 'https://petstore.swagger.io/v2/pet/'
    const baseUlrLocal = 'https:localhost:8080'
    
    test("Validate GET - List pets by id endpoint", async () => {
      const options = {
        method: 'get',
        url: `https://petstore.swagger.io/v2/pet/findByStatus?status=available`,
      };
      try{
      const response = await axios(options);
      expect(response.status).toEqual(200);
      expect(response.data[0]).toHaveProperty('id');
      expect(response.data[0]).toHaveProperty('name');
      expect(response.data[0]).toHaveProperty('status');
      expect(response.data[0].status).toEqual('available');
      }catch (error) {
        console.log('the error is', error);
        error();
      }

    })    
   
    test("Validate POST - Add a new pet to the store endpoint", async () => {
          const requestAddPet = {
          method: 'post',
          url: `https://petstore.swagger.io/v2/pet`,
          data:{ "id": 0,
                 "category": {
                     "id": 0,
                     "name": "string"
                 },
                "name": "Test Pet",
                "photoUrls": [
                "string"
                ],
                "tags": [
                  {
                    "id": 0,
                    "name": "QA Automation"
                  }
                ],
                "status": "available"
              },
        };
        try{
        const response = await axios(requestAddPet);
        expect(response.status).toEqual(200);
        expect(response.data).toHaveProperty('id');
        expect(response.data).toHaveProperty('category');
        expect(response.data).toHaveProperty('name');
        expect(response.data).toHaveProperty('photoUrls');
        expect(response.data).toHaveProperty('tags');
        expect(response.data).toHaveProperty('status');
        }catch (error) {
          console.log('the error is', error);
          error();
        }
    })


    test("Validate PUT - Update an existing pet endpoint", async () => {
        const requestUpdatePet = {
        method: 'put',
        url: `https://petstore.swagger.io/v2/pet`,
        data:{ "id": 0,
               "category": {
                   "id": 9223372036854101355,
                   "name": "string"
               },
              "name": "Test Pet", //update name
              "photoUrls": [
              "string"
              ],
              "tags": [
                {
                  "id": 0,
                  "name": "QA Automation" // upate tags.name
                }
              ],
              "status": "available"
            },
      };
      try{
          const response = await axios(requestUpdatePet);
          expect(response.status).toEqual(200);
          const resp = response.data;
          expect(resp).toHaveProperty('id');
          expect(resp.name).toEqual('Test Pet');
          expect(resp.tags[0].name).toBe('QA Automation');
      }catch (error) {
          console.log('the error is', error);
          error();
      }
  })


  
})