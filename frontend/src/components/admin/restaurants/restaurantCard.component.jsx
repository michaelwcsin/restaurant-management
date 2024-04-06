import * as Dialog from "@radix-ui/react-dialog";
import { Link } from "react-router-dom";
import { useRestaurant } from "../../contextAPI/RestaurantContext";

const RestaurantCard = ({ restaurant }) => {
  const { setSelectedRestaurant } = useRestaurant();
  const { _id, name, address, phone } = restaurant;

  const handleClick = () => {
    setSelectedRestaurant(restaurant);
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Link to="/admin" className="Button violet" onClick={handleClick}>
          <h1>{name}</h1>
          <p>{address}</p>
          <p>{phone}</p>
        </Link>
      </Dialog.Trigger>
    </Dialog.Root>
  );
};

export default RestaurantCard;
