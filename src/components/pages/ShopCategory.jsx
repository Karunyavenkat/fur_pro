import React, { useContext } from "react";
import './ShopCategory.css';
import { ShopContext } from "../Context/ShopContext";
import Item from "../Items/Item";
import Chair_product from "../assets/chairData";
const ShopCategory=(props)=>
{
    useContext(ShopContext)
    return(
        <div className="shop-category">
           <img className="shopcategory-banner"  src={props.banner} alt="" /> 
           <div className="shopcategory-indexSort">
            <p>
                <span>Showing 1-16</span> out of 36 products
            </p>
          
            </div>
            {/* <div className="shopcategory-products">
                {all_product.map((Item,i)=>{
                    if(props.category===Item.category){
                        return <Item key={i} id={Item.id} name={Item.name} image={Item.image} new_price={Item.new_price} old_price={Item.old_price}/>
                    }
                    else{
                        return null;
                    }
                })}
            </div> */}
            <div className="chair-item">
            {Chair_product.map((item)=>{
                return <Item key={item} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
            <div className="shopcategory-loadmore">
                Explore More
            </div>
        </div>
    );
}
export default ShopCategory;