import axios from 'axios';

export const getUsers = async (URL) => {
  try {
    const res = await axios.get(URL + 'users');
    const data = res.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const postUser = async (URL, data) => {
  try {
    await axios.post(URL + 'users/', data);
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (URL, id) => {
  try {
    await axios.delete(URL + `users/${id}`, id);
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async (URL, userUpdated, userId) => {
  try {
    await axios.put(URL + `users/${userId}/`, userUpdated);
  } catch (error) {
    console.log(error);
  }
};
