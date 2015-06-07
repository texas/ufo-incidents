var ES_URL = 'localhost:9200';
var ES_URL = '45.55.233.185:9200';
var ES_URL= 'https://ik44vn6o9c:q2jynmlzrj@texplorer-4276945103.us-west-2.bonsai.io';

var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
  host: ES_URL,
  //log: 'trace'
});


function search(latLng, distance) {
  latLng = latLng || [30, -97];  // DEBUG
  distance = distance || '16km';  // DEBUG
  return client.search({
    // index: 'thc',
    // type: 'markers',
    body: {
      query:{
        filtered: {
          query: {match_all: {}},
          filter: {
            geo_distance: {
              distance: distance,
              'marker.location': {
                lat: latLng[0],
                lon: latLng[1]
              }
            }
          }
        }
      }
    }
  })
}


module.exports = search;
