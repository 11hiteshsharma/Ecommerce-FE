"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowDown } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import { CiSearch } from "react-icons/ci";
import styled from "styled-components";
import { IoCartOutline } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { setCartItems } from "@/lib/Features/Cart/cartSlice";

const NavContainer = styled.div`
  position: relative;
  z-index: 1000; /* Ensure the navbar stays on top of other content */
  transition: top 0.3s ease; /* Add smooth transition when changing position */
  @media (min-width: 640px) {
    justify-content: center;
  }

  @media (min-width: 768px) {
    padding: 40px;
  }

  @media (min-width: 1024px) {
    padding: 50px 80px;
    display: flex;
    justify-content: space-around;
  }

  /* Sticky class */
  &.sticky {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Add shadow when sticky */
    padding: 30px 0;
  }
`;

const List = styled.li`
  position: relative;
  &:hover::before {
    width: 100%;
  }

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1px;
    transition: all 0.3s ease-in-out;
    background-color: #000;
  }
`;

const SubMenu = styled.div`
  position: absolute;
  top: calc(100% + 5px);
  left: 50%;
  transform: translateX(-50%);
  background: #fff;
  padding: 20px;
  border: 1px solid #ccc;
  min-width: 170px;
  z-index: 999;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  flex-direction: column;
  gap: 10px;
`;

const Nav = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [subMenuIndex, setSubMenuIndex] = useState(null);
  const dispatch = useDispatch();
  const navItems = [
    {
      name: "SS'24 Collection",
      link: "/home",
      submenu: [],
    },
    {
      name: "Deals",
      link: "/deals",
      submenu: [],
    },
    {
      name: "Topwear",
      link: "#",
      submenu: [
        {
          name: "Service 1",
          link: "/services/service1",
        },
        {
          name: "Service 2",
          link: "/services/service2",
        },
      ],
    },
    {
      name: "Bottomwear",
      link: "/bottomwear",
      submenu: [],
    },
    {
      name: "Accessories",
      link: "/accessories",
      submenu: [
        {
          name: "Service 1",
          link: "/services/service1",
        },
        {
          name: "Service 2",
          link: "/services/service2",
        },
      ],
    },
  ];

  const handleSubMenuToggle = (index) => {
    setIsOpen(!isOpen);
    setSubMenuIndex(index);
  };

  const handleSubMenuClose = () => {
    setIsOpen(false);
    setSubMenuIndex(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const cartItems = useSelector((state) => state.cart.cartItems);
  const itemsInCart = cartItems.length;

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart"));
    console.log(cartData, "CartData");
    if (cartData) {
      dispatch(setCartItems(cartData));
    }
  }, []);

  return (
    <NavContainer
      className={`sm:flex-row items-center px-4 bg-[#eeedeb] lg:px-0 py-11 flex flex-col ${
        isSticky ? "sticky lg: py-8" : ""
      }`}
    >
      <Link href="/">
        <Image
          src="https://desiminimals.com/cdn/shop/files/dm_full_1_shopify_black_ss24.png?v=1708239740&width=110"
          alt="Desi Minimals"
          width={110}
          height={110}
        />
      </Link>
      <div className="hidden md:block">
        <ul className="flex gap-8 text-lg flex-wrap items-center justify-center">
          {navItems.map((nav, index) => (
            <List
              key={nav.name}
              className="line relative"
              onMouseEnter={() => handleSubMenuToggle(index)}
              onMouseLeave={handleSubMenuClose}
            >
              <Link
                href={nav.link}
                className="flex justify-center items-center gap-3"
              >
                {nav.name}{" "}
                {nav.submenu.length > 0 && (
                  <span className="">
                    {" "}
                    <MdKeyboardArrowDown fontSize={25} />{" "}
                  </span>
                )}
              </Link>
              {nav.submenu.length > 0 && subMenuIndex === index && (
                <SubMenu isOpen={isOpen}>
                  {nav.submenu.map((sub) => (
                    <Link key={sub.link} href={sub.link}>
                      {sub.name}
                    </Link>
                  ))}
                </SubMenu>
              )}
            </List>
          ))}
        </ul>
      </div>
      <div className="hidden md:flex gap-7">
        <Link href="/account">
          <VscAccount fontSize={25} />
        </Link>
        <Link href="/search">
          <CiSearch fontSize={25} />
        </Link>
        <Link href="/cart">
          <div className="relative">
            <IoCartOutline className="text-3xl cursor-pointer" />
            {itemsInCart > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
                {itemsInCart}
              </span>
            )}
          </div>
        </Link>
      </div>
    </NavContainer>
  );
};

export default Nav;
