import React from "react";

const Shoe = ({ props }) => {
  console.log(props);

  return (
    // <div className="grid grid-cols-4">
    //   {/* Image */}
    //   <img src={item.image} alt="" />
    //   {/* Name item */}
    //   <h3>{item.name}</h3>
    //   <p>Giá sản phẩm {item.price}</p>
    //   <p>Số lượng: {item.quantity}</p>
    //   <button
    //     onClick={() => {
    //       capNhatId(item.id);
    //     }}
    //     className="bg-dark text-white py-2 px-5"
    //   >
    //     Xem chi tiết
    //   </button>
    // </div>

    <div className="grid grid-cols-3">
      {props.arrSanPham.map((item, index) => {
        return (
          <div>
            <img src={item.image} alt="" />
            {/* 1h30 */}
          </div>
        );
      })}
    </div>
  );
};

export default Shoe;
