const OneLoadNums = 3;
let ROOT_URL = '';
if(process.env.NODE_ENV !== 'test') {
  const ROOT_URL = 'http://localhost:5000/api';
}

export { ROOT_URL, OneLoadNums };
