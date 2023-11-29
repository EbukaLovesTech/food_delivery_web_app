import Link from "next/link"
import style from './layout.module.css'
export default function DashboardLayout({ children }) {
    return (
        <main>
            <div className={style.layout_wrapper}>
                <aside className={style.aside}>
                    <div>
                        <Link href='/'>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <title>view-dashboard-outline</title>
                                    <path d="M19,5V7H15V5H19M9,5V11H5V5H9M19,13V19H15V13H19M9,17V19H5V17H9M21,3H13V9H21V3M11,3H3V13H11V3M21,11H13V21H21V11M11,15H3V21H11V15Z" />
                                </svg>
                            </span>
                            <span>Dashboard</span>
                        </Link>
                    </div>
                    <div>
                        <Link href='/'>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <title>hand-coin-outline</title>
                                    <path d="M16 2C13.24 2 11 4.24 11 7S13.24 12 16 12 21 9.76 21 7 18.76 2 16 2M16 10C14.34 10 13 8.66 13 7S14.34 4 16 4 19 5.34 19 7 17.66 10 16 10M19 16H17C17 14.8 16.25 13.72 15.13 13.3L8.97 11H1V22H7V20.56L14 22.5L22 20V19C22 17.34 20.66 16 19 16M5 20H3V13H5V20M13.97 20.41L7 18.5V13H8.61L14.43 15.17C14.77 15.3 15 15.63 15 16C15 16 13 15.95 12.7 15.85L10.32 15.06L9.69 16.96L12.07 17.75C12.58 17.92 13.11 18 13.65 18H19C19.39 18 19.74 18.24 19.9 18.57L13.97 20.41Z" />
                                </svg>
                            </span>
                            <span>Manage Your Investment</span>
                        </Link>
                    </div>
                    <div>
                        <Link href='/'>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <title>sprout-outline</title>
                                    <path d="M23,4.1V2.3L21.2,2.1C21.1,2.1 20.5,2 19.5,2C15.4,2 12.4,3.2 10.7,5.3C9.4,4.5 7.6,4 5.5,4C4.5,4 3.8,4.1 3.8,4.1L1.9,4.4L2,6.1C2.1,9.1 3.6,14.8 8.8,14.8C8.9,14.8 8.9,14.8 9,14.8V18.2C5.2,18.7 2,20 2,20V22H22V20C22,20 18.8,18.7 15,18.2V15C21.3,14.9 23,7.8 23,4.1M12,18C11.7,18 11.3,18 11,18V12.4C11,12.4 10.8,9 8,9C8,9 9.5,9.8 9.9,12.7C9.5,12.8 9.1,12.8 8.8,12.8C4.2,12.8 4,6.1 4,6.1C4,6.1 4.6,6 5.5,6C7.4,6 10.5,6.4 11.4,9.1C11.9,4.6 17,4 19.5,4C20.4,4 21,4.1 21,4.1C21,4.1 21,13.1 14.7,13.1C14.5,13.1 14.2,13.1 14,13.1C14,11.1 16,8.1 16,8.1C13,9.1 13,13 13,13V18C12.7,18 12.3,18 12,18Z" />
                                </svg>
                            </span>
                            <span>Manage Your Farm</span>
                        </Link>
                    </div>
                    <div>
                        <Link href='/'>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <title>help-circle-outline</title>
                                    <path d="M11,18H13V16H11V18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,6A4,4 0 0,0 8,10H10A2,2 0 0,1 12,8A2,2 0 0,1 14,10C14,12 11,11.75 11,15H13C13,12.75 16,12.5 16,10A4,4 0 0,0 12,6Z" />
                                </svg>
                            </span>
                            <span>Help</span>
                        </Link>
                    </div>
                    <div>
                        <Link href='/'>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <title>logout</title>
                                    <path d="M17 8L15.6 9.4L17.2 11H9V13H17.2L15.6 14.6L17 16L21 12L17 8M5 5H12V3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H12V19H5V5Z" />
                                </svg>
                            </span>
                            <span>Logout</span>
                        </Link>
                    </div>
                </aside>
                {children}
            </div>
        </main>
    )
}