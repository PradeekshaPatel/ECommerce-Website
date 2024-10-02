import React from 'react';
import './DescriptionBox.css'

const DescriptionBox = () => {
   return (
      <div className="descriptionbox">
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>An eCommerce website is a digital platform that enables businesses to sell products and services online.  
                The homepage serves as the main entry point,often showcasing featured products, promotions, and links to various categories.
                Each product has a dedicated page that provides detailed information, including images, descriptions,
                prices, and customer reviews, along with an "Add to Cart" button. The shopping cart allows users to review their
                selected items, adjust quantities, and proceed to checkout. The checkout process typically involves multiple 
                steps where customers enter their shipping details, choose payment methods, and finalize their purchase.
                Additionally, eCommerce websites often offer user accounts, enabling customers to create profiles, track orders, 
                save wishlists, and view their purchase history.
                These components work together to provide a seamless and efficient online shopping experience.</p>
                <p>The homepage typically acts as the main entry point, showcasing featured products, promotions,
                    and navigation links to various categories, ensuring easy access to different sections of the site. 
                    Each product is presented on a detailed product page, which includes high-quality images, 
                    comprehensive descriptions, prices, and customer reviews to help users make informed purchasing decisions. 
                    A key feature of eCommerce websites is the shopping cart,
                    where users can review their selected items, adjust quantities, and proceed to the checkout.</p>
        </div>
      </div>
   )
}


export default DescriptionBox