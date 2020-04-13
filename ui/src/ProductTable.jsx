/* globals React */

import 'babel-polyfill';
import React, { Component } from 'react';
import '../public/css/app.css';
import ReactDOM from 'react-dom';
import { Link, NavLink, withRouter } from 'react-router-dom';
// import React from 'react';

// class ProductRow extends Component {
//     render() {
//         const product = this.props.product;
const ProductRow = withRouter(({
    product, location: { search }, closeproduct, index,})=>{
        const selectLocation = { pathname: `/products/${product.Product_id}`, search };
        return (
            <tr>
                <td>{product.Product_id}</td>
                <td>{product.status}</td>
                <td>{product.Product_name}</td>
                <td>{product.Category}</td>
                <td>${product.Price}</td>
                <td><a href={product.Image} target="_blank">{product.Image}</a></td>
                <td><Link to={`/edit/${product.Product_id}`}>Edit</Link>
                {' | '}
                <NavLink to={selectLocation}>Select</NavLink></td>
                {' | '}
                <button type="button" onClick={() => { closeproduct(index); }}>
                Close
                </button>
                {' | '}
                <button type="button" onClick={() => { deleteProduct(index); }}>
                Delete
                </button>
            </tr>
        );
    });


    export default function ProductTable({ products, closeProduct, deleteProduct }) {
    
        const productRows = products.map((product, index) => (
            <ProductRow
              key={product.Product_id}
              product={product}
              closeProduct={closeProduct}
              deleteProduct={deleteProduct}
              index={index}
            />
          ));
        return (
            <table className="bordered-table">
                <thead>
                    <tr>
                        <th>Product_id</th>
                        <th>status</th>
                        <th>Product_name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {productRows}
                </tbody>
            </table>
        );
    }
