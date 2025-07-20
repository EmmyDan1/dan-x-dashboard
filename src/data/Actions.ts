import { AiOutlineProduct } from "react-icons/ai";
import { FiChevronRight } from "react-icons/fi";
import { MdOutlineCollectionsBookmark } from "react-icons/md";
import { TbRosetteDiscount } from "react-icons/tb";
import type { IconType } from "react-icons"; 



export type Action = {
  id: number;
  icon: IconType;  
  title: string;
  text: string;
  icon2: IconType;
}

export const ActionsData: Action[] = [
  {
    id: 1,
    icon: AiOutlineProduct,          
    title: "Product",
    text: "create a new product",
    icon2: FiChevronRight,
  },
  {
    id: 2,
    icon: MdOutlineCollectionsBookmark,
    title: "Collection",
    text: "create a new collection",
    icon2: FiChevronRight,
  },
  {
    id: 3,
    icon: TbRosetteDiscount,
    title: "Discount",
    text: "create a new discount",
    icon2: FiChevronRight,
  },
];
