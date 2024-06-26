import "./recommendedItems.css";

const RecommendedItems = ({ getItem, items, startItem, endItem, navigate }) => {
  const carouselImages = () => {
    return (
      <>
        {items &&
          items.map((elem, index) => {
            if (index >= startItem && index < endItem) {
              return (
                <img
                  key={elem._id}
                  className="carouselImages"
                  src={elem.image}
                  onClick={() => {
                    navigate(elem._id);
                    getItem(elem._id);
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
