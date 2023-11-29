import Farmland from "@/component/farmWrapper"
import style from './page.module.css'
export default function FarmlandListing() {
    return (
        <main className={style.main}>
            <div className={style.intro_wrapper}>
                <h1>Farmland Listing</h1>
            </div>
            <div className={style.farm_grid}>
                <Farmland />
                <Farmland />
                <Farmland />
                <Farmland />
                <Farmland />
                <Farmland />
            </div>
        </main>
    )
}