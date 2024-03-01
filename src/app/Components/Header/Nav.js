"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import { CiSearch } from "react-icons/ci";
import styled from 'styled-components';

const Nav = () => {
    const navItems = [
        {
            name: "SS'24 Collection",
            link: "/home",
            submenu: []
        },
        {
            name: "Deals",
            link: "/deals",
            submenu: []
        },
        {
            name: "Topwear",
            link: "#",
            submenu: [
                {
                    name: "Service 1",
                    link: "/services/service1",
                    submenu: []
                },
                {
                    name: "Service 2",
                    link: "/services/service2",
                    submenu: []
                }
            ]
        },
        {
            name: "Bottomwear",
            link: "/bottomwear",
            submenu: []
        },
        {
            name: "Accessories",
            link: "/accessories",
            submenu: []
        }
    ];

    return (
        <div className='flex justify-around items-center px-[80px] py-12' >
            <Link href = '/'>
                <Image src='https://desiminimals.com/cdn/shop/files/dm_full_1_shopify_black_ss24.png?v=1708239740&width=110' alt='Desi Minimals' width={110} height={110}/>
            </Link>
            <div>
                <ul className='flex gap-8 decoration-[#3c3633] text-lg'>
                    {navItems.map((nav) => (
                        <li key={nav.name}>
                            <Link href={nav.link} className='flex justify-center items-center gap-3'>
                                {nav.name} {nav.submenu.length ? <span className=''> <MdKeyboardArrowDown fontSize={25}/> </span> : null}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='flex gap-7'>
                <Link href='/account'>
                <VscAccount fontSize={25}/>
                </Link>
                <Link href='/search'>
                <CiSearch fontSize={25}/>
                </Link>
                
            </div>
        </div>
    );
};

export default Nav;