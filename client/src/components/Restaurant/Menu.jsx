import React, { useState } from "react";

// components
import MenuCollection from "./MenuCollection";

// redux
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getImage } from "../../redux/reducers/image/image.action";

const Menu = () => {
  const [menus, setMenus] = useState([]);

  const dispatch = useDispatch();

  const reduxState = useSelector(
    (globalState) => globalState.restaurant.selectedRestaurant.restaurant
  );

  useEffect(() => {
    if (reduxState) {
      dispatch(getImage(reduxState?.menuImages)).then((data) => {
        const images = [];
        data.payload.images.map(({ location }) => images.push(location));
        setMenus(images);
      });
    }
  }, [reduxState]);
  return (
    <div className="flex flex-wrap gap-3 my-4">
      <MenuCollection menuTitle="Menu" pages={menus.length} images={menus} />
    </div>
  );
};

export default Menu;
