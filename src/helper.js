 import superagent from 'superagent';
 
 //handler function that makes requests
 export const makeRequests = async (obj) => {
  let reqUrl = `${obj.url}/${obj.resource}`;
  console.log('url', reqUrl);
  return  await superagent.get(reqUrl).query({ data: obj.data});
}