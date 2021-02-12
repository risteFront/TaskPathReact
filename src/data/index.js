import HeaderIcon from "../assets/paragraph.svg"; // Tell webpack this JS file uses this image
import TextIcon from "../assets/header.svg"; // Tell webpack this JS file uses this image
import Paragraph from "../assets/left-alignment.svg"; // Tell webpack this JS file uses this image
import ImageIcon from "../assets/image.svg"; // Tell webpack this JS file uses this image
import ProductIcon from "../assets/box.svg"; // Tell webpack this JS file uses this image
import ListItemProduct from "../assets/list.svg"; // Tell webpack this JS file uses this image
import PushIcon from "../assets/push.svg"; // Tell webpack this JS file uses this image
import QuotesIcon from "../assets/quotes.svg"; // Tell webpack this JS file uses this image
import FooterIcon from "../assets/footer.svg"; // Tell webpack this JS file uses this image

import { v4 as uuid } from "uuid";

const ITEMS = [
  {
    id: uuid(),
    content: "Header",
    icons: HeaderIcon,
  },
  {
    id: uuid(),
    content: "SubHead",
    icons: TextIcon,
  },
  {
    id: uuid(),
    content: "Paragraph",
    icons: Paragraph,
  },
  {
    id: uuid(),
    content: "Full Wodth Image",
    icons: ImageIcon,
  },
  {
    id: uuid(),
    content: "Product",
    icons: ProductIcon,
  },
  {
    id: uuid(),
    content: "List Item",
    icons: ListItemProduct,
  },
  {
    id: uuid(),
    content: "Button",
    icons: PushIcon,
  },
  {
    id: uuid(),
    content: "Quote Text",
    icons: QuotesIcon,
  },
  {
    id: uuid(),
    content: "Footer",
    icons: FooterIcon,
  },
];
export default ITEMS;
