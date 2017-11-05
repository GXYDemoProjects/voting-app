const OneLoadNums = 3;
let ROOT_URL = '';
console.log('process.env.NODE_ENV:', process.env.NODE_ENV);
if(process.env.NODE_ENV === 'development') {
  ROOT_URL = 'http://localhost:5000/api';
}
if(process.env.NODE_ENV === 'production') {
  ROOT_URL = '/api';
}
export { ROOT_URL, OneLoadNums };
