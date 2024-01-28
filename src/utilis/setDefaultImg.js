const defaultImage = 'https://images.unsplash.com/photo-1561715276-a2d087060f1d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const setDefaultImg = (id, setData) => {
  setData((prevData) => (
    prevData.map((product) => (product.id === id ? { ...product, img: defaultImage } : product))
  ));
};

export default setDefaultImg;
