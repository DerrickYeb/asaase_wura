import axios from "axios";
import { env } from "process";


let API_URL =''
  // let API_URL = 'http://localhost:1337/api';

export async function LoginApi(username, password) {
    let payload = {
      identifier : username,
      password: password
    }
    let result = await axios.post(
      `${API_URL}/auth/local`,
        payload,
    );
    return result.data;
  }
  
  export async function getAxios(url) {
    const config = {
      method: "get",
      url: `${API_URL}/${url}`,
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    let { data } = await axios(config);
    return data;
  }

  export async function deleteAxios(url) {
    const config = {
      method: "delete",
      url: `${API_URL}/${url}`,
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    let { data } = await axios(config);
    return data;
  }
  
  export async function postAxios(url, payload) {
    const config = {
      method: "post",
      url: `${url}`,
      data: payload,
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    let { data } = await axios(config);
    return data;
  }
  export async function putAxios(url, payload) {
    const config = {
      method: "put",
      url: `${API_URL}/${url}`,
      data: payload,
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    };
    let { data } = await axios(config);
    return data;
  }

  export async function postAxiosInvoice(payload,url) {
    const config = {
      method: "post",
      port: 443,
      url: `https://api.paystack.co/${url}`,
      data: payload,
      headers: {
        Authorization: `Bearer sk_test_3f9098ba9d670cbe94ba0e47803c88182ca476c9`,
        'Content-Type': 'application/json'
      },
    };
    let { data } = await axios(config);
    return data;
  }
  export async function getAxiosInvoice(url) {
    const config = {
      method: "get",
      port: 443,
      url: `https://api.paystack.co/${url}`,
      headers: {
        Authorization: `Bearer sk_test_3f9098ba9d670cbe94ba0e47803c88182ca476c9`,
        'Content-Type': 'application/json'
      },
    };
    let { data } = await axios(config);
    return data;
  }

  