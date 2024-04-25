const RecommendedItems = ({ items, startItem, endItem, navigate }) => {
  const carouselImages = () => {
    return (
      <>
        {items &&
          items.map((elem, index) => {
            if (index >= startItem && index < endItem) {
              return (
                <img
                  key={elem._id}
                  src={elem.image}
                  style={{
                    width: "160px",
                    height: "250px",
                    objectFit: "cover",
                    border: "1px solid white",
                  }}
                  onClick={() => {
                    navigate(elem._id);
                  }}
                />
              );
            }
          })}
      </>
    );
  };

  return <>{carouselImages()}</>;
};

export default RecommendedItems;
