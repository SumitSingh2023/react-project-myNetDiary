const BASE_URL = `http://localhost:8080`;

export const postRequest = (path, formData) => {
  try {
    return fetch(`${BASE_URL}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
  } catch (error) {
    console.log(error);
  }
};

export const getUserData = () => {
  return fetch(`${BASE_URL}/signupUsers`).then((res) => {
    return res.json();
  });
};
