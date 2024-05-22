import axios from 'axios';

export const apiLogginSuccess = (id) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        method: 'post',
        url: 'http://localhost:5000/api/v1/auth/login-success',
        data: { id },
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
