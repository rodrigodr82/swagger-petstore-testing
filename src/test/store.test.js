const axios = require('axios')



describe("Test PetStore endpoint", () => {
    // we can setup base url dinamically
    const baseUrl = 'https://petstore.swagger.io/v2/pet/'
    const baseUlrLocal = 'https:localhost:8080'
    test("Validate POST - Place an order for a pet endpoint", async () => {
        const requestOrderPet = {
        method: 'post',
        url: `https://petstore.swagger.io/v2/store/order`,
        data:
        {
            "id": 0,
            "petId": 0,
            "quantity": 0,
            "shipDate": "2022-06-27T20:13:38.503Z",
            "status": "placed",
            "complete": true
          },
      };
      try{
          const response = await axios(requestOrderPet);
          expect(response.status).toEqual(200);
          const resp = response.data;
          expect(resp).toHaveProperty("id");
          expect(resp).toHaveProperty("petId");
          expect(resp).toHaveProperty("quantity");
          expect(resp).toHaveProperty("shipDate");
          expect(resp).toHaveProperty("status");
          expect(resp).toHaveProperty("complete");
          expect(resp.complete).toBe(true);
      }catch (error) {
          console.log('the error is', error);
          error();
      }
    })
    // This test case it's for negative scenario
    test("Validate GET - Find purchase ordr by Id endpoint with invlaid id", async () => {
        let errorMessage;
        let resultCode = 0;
        const requestOrderPet = {
            method: 'get',
            url: `https://petstore.swagger.io/v2/store/order/0`,
        };

        await axios(requestOrderPet)
            .then((resp) => {
            resultCode = resp.status;
            errorMessage = resp.data.errors;
        })
        .catch((err) => {
            resultCode = err.response.status;
            errorMessage = err.response.data.message;
        });
        
        try {
            expect(resultCode).toBe(404);
        } catch (error) {
            error();
        }

    })

})