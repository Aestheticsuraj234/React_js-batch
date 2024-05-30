import { PRODUCT_CATEGORIES } from "@/config";
import {  useState } from "react";
import NavItem from "./NavItem";

const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="flex gap-4 h-full">
      {PRODUCT_CATEGORIES.map((category, index) => {
        const isOpen = index === activeIndex;

        const onOpen = () => {
          if (isOpen) {
            setActiveIndex(null);
          } else {
            setActiveIndex(index);
          }
        };

        return (
          <NavItem
            category={category}
            onOpen={onOpen}
            isOpen={isOpen}
            key={category.label}
            isAnyOpen={activeIndex !== null}
          />
        );
      })}
    </div>
  );
};

export default NavItems;
