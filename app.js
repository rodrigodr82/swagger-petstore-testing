const axios = require('axios')

function getPetData(){
    let response:  any;
    axios.get('https://dummy.restapiexample.com/api/v1/employees')
    .then(response => console.log(respose.data))
    .catch(error => console.log(error));
}

module.exports = {getPetData}
