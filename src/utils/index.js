export const fetchRequest = async (endpoint, payload, httpVerb) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_REST_API}${endpoint}`,
      {
        method: httpVerb,
        headers: { "Content-Type": "application/json" },
        body: payload,
      }
    );

    const data = await response.json();

    if (data) {
      return data;
    } else {
      throw new Error(`${response.status}, ${response.message}`);
    }
  } catch (error) {
    console.log(error);
  }
};

export const tokenizedFetch = async (endpoint, payload, httpVerb) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_REST_API}${endpoint}`,
      {
        method: httpVerb,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("m34Token")}`,
        },
        body: payload,
      }
    );
    const data = await response.json();
    if (data) {
      return data;
    } else {
      throw new Error(`${response.status}, ${response.message}`);
    }
  } catch (error) {
    console.log(error);
  }
};

// --------- Static functions below ---------------

export const tokenLogin = async (setter) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
      method: "GET",
      headers: { Authorization: `Bearer ${localStorage.getItem("m34Token")}` },
    });
    const data = await response.json();

    setter(data.user);
  } catch (error) {
    console.log(error);
  }
};

export const createUser = async (username, email, password, setter) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    });

    const data = await response.json();
    setter(data.user);
    localStorage.setItem("m34Token", data.token);
  } catch (error) {
    console.log(error);
  }
};

export const login = async (username, password, setter) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    const data = await response.json();
    setter(data.user);
    localStorage.setItem("m34Token", data.token);
  } catch (error) {
    console.log(error);
  }
};
