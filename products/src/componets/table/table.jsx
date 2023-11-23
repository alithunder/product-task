import React, { useEffect, useState } from "react";
import './table.css'
import { useAppStore } from "../../store";

function Table() {
  const [products, setProducts] = useState([]);
  const { setOpen, setTitle, setPrice, setID } = useAppStore();

  const deleteProduct = async (productID) => {
    try {
      let resp = await fetch(`https://dummyjson.com/products/${productID}`, {
        method: "DELETE",
      });
      let data = await resp.json();
      if (data.isDeleted === true) {
        alert(`${productID} is Deleted`);
        loadProducts(); // Refresh the product list after deletion
      }
    } catch (error) {
      console.log(error);
    }
  };

  const editProduct = (id) => {
    fetch(`https://dummyjson.com/products/${id}`, {
      method: "PUT" /* or PATCH */,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "iphone 15",
        price: "500$",
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setOpen(false);
        alert(`${id} is updated`);
        loadProducts(); // Refresh the product list after update
      });
  };

  const loadProducts = async () => {
    try {
      let resp = await fetch("https://dummyjson.com/products");
      let data = await resp.json();
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <table className='table'>
      <thead>
        <tr>
          <th className='tr1'>ID</th>
          <th className='tr1'>Title</th>
          <th className='tr1'>Description</th>
          <th className='tr1'>Price</th>
          <th className='tr1'>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((el, i) => (
          <tr key={i}>
            <td>{el.id}</td>
            <td>{el.title}</td>
            <td>{el.description}</td>
            <td>{el.price} $</td>
            <td>
              <button onClick={() => editProduct(el.id)}>Edit</button>
              <button onClick={() => deleteProduct(el.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
