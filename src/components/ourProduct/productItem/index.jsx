const ProductItem = ({ img, text = "Wears" }) => {
  const divStyle = {
    backgroundImage: `url(${img})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    width: "180px",
    display: "flex",
    alignItems: "flex-end",
  };

  return (
    <div role="product image" style={divStyle}>
      <div
        style={{
          backgroundColor: "#090909",
          height: "40px",
          color: "white",
          flex: "1",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ProductItem;
