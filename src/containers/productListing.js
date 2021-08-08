import React,{useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import axios from 'axios'
import ProductComponent from "./productComponent";
import { setProducts } from "../redux/actions/productActions";
import '../App.css'



const ProductListing = ()=>{
    const products = useSelector(state => state)    //mapStateToProps
    const dispatch = useDispatch();                 //mapDispatchToProps

    const fetchProducts = async()=>{
        const   response  = await axios.get('https://fakestoreapi.com/products').catch(err=>console.log("Error : "+err))
        dispatch(setProducts(response.data));
    }

    // console.log(products)

    useEffect(()=>{
        fetchProducts();
    },[]);
    console.log("products : ", products.allProducts.products);
    return(
        <div>
            <ProductComponent />
        </div>
    )
}

export default ProductListing;