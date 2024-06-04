import axios from "axios";

// Define your base URL
const baseURL = "https://api.example.com";

// Create an axios instance with the base URL
const instance = axios.create({
  baseURL: baseURL,
  timeout: 10000, // Timeout after 10 seconds
});

// Export functions for making GET and POST requests
export const getRequest = async (url, params = {}) => {
  try {
    const response = await instance.get(url, { params });
    return response.data;
  } catch (error) {
    // Handle errors here
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const postRequest = async (url, data = {}) => {
  try {
    const response = await instance.post(url, data);
    return response.data;
  } catch (error) {
    // Handle errors here
    console.error("Error posting data:", error);
    throw error;
  }
};
