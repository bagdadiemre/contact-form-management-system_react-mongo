import axios from "axios";

const API_BASE_URL = "http://localhost:5165/api";

export const addNewMessage = async (name, message, gender, country) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/message/add`, {
      name,
      message,
      gender,
      country,
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getMessages = async (token) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/messages`, {
      headers: { token },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getMessageById = async (id, token) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/message/${id}`, {
      headers: { token },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const readMessageById = async (id, token) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/message/read/${id}`,
      null,
      {
        headers: { token },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const deleteMessageById = async (id, token) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/message/delete/${id}`,
      null,
      {
        headers: { token },
      }
    );
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
