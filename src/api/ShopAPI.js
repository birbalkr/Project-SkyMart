import axios from "axios";

let API_URL = "https://dummyjson.com/products"

export const GetProduct = async () => {
    const resp = await axios.get(`${API_URL}`);
    console.log(resp.data.products);
};

export const GetCategoryList = async () => {
    const resp = await axios.get(`${API_URL}/category-list`);
    return resp.data;
}
// const GetProductById = (id) => { };

// const GetProductByCategory = (category) => { };

// const GetProductBySearch = (search) => { };