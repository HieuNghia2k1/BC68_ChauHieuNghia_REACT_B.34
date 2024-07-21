import React from "react";
//  FontAwesome 6.2.0 CSS -->
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css"
  integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A=="
  crossorigin="anonymous"
  referrerpolicy="no-referrer"
/>;

const Shoe = (props) => {
  console.log(props);

  return (
    <div className="container">
      {/*  */}
      <div className="grid grid-cols-3  gap-4  ">
        {props.arrSanPham.map((item, index) => {
          return (
            <div className="product-item">
              <img src={item.image} alt="" />
              <div className="product-bottom">
                <h3>{item.name}</h3>
                <p>Price: {item.price} $</p>
                <p>Quantity: {item.quantity} items</p>
                <button
                  onClick={() => {
                    props.getDataShoe(item);
                  }}
                  className="bg-blue-500 text-white py-2 px-5 rounded-md"
                >
                  Xem chi tiết{" "}
                </button>

                <a class="add-to-cart" href="#" tabindex="-1">
                  <i className="" class="fa fa-shopping-cart"></i>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shoe;
