import { BsBagFill, BsFillBagPlusFill } from "react-icons/bs";
import { RiProductHuntLine } from "react-icons/ri";

const icons = [
  {
    name: "bag",
    icon: BsBagFill,
  },
  {
    name: "addToBag",
    icon: BsFillBagPlusFill,
  },
  {
    name: "product",
    icon: RiProductHuntLine,
  },
];

export const Icon = (name, size = 16) => {
  let searchedIcon = icons.filter((i) => i.name === name)[0] ?? false;

  if (searchedIcon) {
    return <searchedIcon.icon size={size} />;
  }

  return <></>;
};
