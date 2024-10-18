export default function handleResponseFromAPI(promise) {
  console.log('Got a response from the API');
  promise.then((response) => ({ status: 200, body: 'Success' })).catch((error) => Error());
}
