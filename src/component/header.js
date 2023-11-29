'use client';
import Link from "next/link";
import { useState } from "react";

export default function Header({ style }) {
    const [menuIsOpened, setMenuIsOpened] = useState(false)
    function toggleMenu() {
        if (menuIsOpened === false) {
            setMenuIsOpened(true);
        }
        else {
            setMenuIsOpened(false);
        }
    }
    return (
        <header className={style.header}>
            <div>permaAgro</div>
            <div className={`${style.header_links_wrapper} ${menuIsOpened ? style.open : style.hidden}`}>
                <div>
                    <button className={style.close_btn} aria-label='close menu' onClick={toggleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" className={style.close_icon} viewBox="0 0 24 24"><title>close</title><path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" /></svg>
                    </button>
                    <nav className={style.site_nav}>
                        <ul>
                            <li>
                                <Link href='/'>Home</Link>
                            </li>
                            <li>
                                <Link href='/about'>About</Link>
                            </li>
                            <li>
                                <Link href='/farmland_listing'>Farmland Listing</Link>
                            </li>
                            <li>
                                <Link href='/'>Resources</Link>
                            </li>
                            <li>
                                <Link href='/contact'>Contact</Link>
                            </li>
                        </ul>
                    </nav>
                    <nav className={style.sign_in_nav}>
                        <div>
                            <Link href='/signup'>
                                <span>Sign Up</span>
                            </Link>
                        </div>
                        <div>
                            <Link href='/login'>
                                <span>Login</span>
                            </Link>
                        </div>
                    </nav>
                </div>
            </div>
            <button className={style.menu_btn} onClick={toggleMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>menu</title>
                    <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
                </svg>
            </button>
        </header>
    )
}