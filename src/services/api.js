import axios from "axios";
const token = "LtR_5h3oSVCQSdN-YvPH_7XiSDXuoFGLHSz0T_3gvBVQtbYFrw";

const BASE_URL = "https://crudapi.co.uk/api/v1";

const api = {
  get: async (url) => {
    try {
      const response = await axios.get(`${BASE_URL}${url}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.data;
      return data;
    } catch (error) {
      console.log(error);
      throw (
        error?.response?.data || {
          error: error.message,
        }
      );
    }
  },
  put: async (url, data) => {
    try {
      const response = await axios.put(`${BASE_URL}${url}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await response.data;
      return result;
    } catch (error) {
      console.log(error);
      throw (
        error?.response?.data || {
          error: error.message,
        }
      );
    }
  },
  post: async (url, data) => {
    try {
      const response = await axios.post(`${BASE_URL}${url}`, [data], {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await response.data;
      return result;
    } catch (error) {
      console.log(error);
      throw (
        error?.response?.data || {
          error: error.message,
        }
      );
    }
  },
  delete: async (url) => {
    try {
      const response = await axios.delete(`${BASE_URL}${url}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const result = await response.data;
      return result;
    } catch (error) {
      console.log(error);
      throw (
        error?.response?.data || {
          error: error.message,
        }
      );
    }
  },
};

export default api;
