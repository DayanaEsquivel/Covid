const axios = require('axios');

var CovidService={
  getMexico: function(){
    return axios({
      "method":"GET",
      "url":"https://covid-19-data.p.rapidapi.com/report/country/name",
      "headers":{
      "content-type":"application/octet-stream",
      "x-rapidapi-host":"covid-19-data.p.rapidapi.com",
      "x-rapidapi-key":"7a1e92cd79msh930a17421e2e8e6p18ed88jsn248867bb5320",
      "useQueryString":true
      },"params":{
      "date-format":"YYYY-MM-DD",
      "format":"json",
      "date":"2020-06-08",
      "name":"Mexico"
      }
    })
  }
}

export { CovidService as default };

    