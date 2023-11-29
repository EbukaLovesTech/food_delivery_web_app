import Image from "next/image"
import listing_image from '../../../public/pexels-tom-fisk-4211849.jpg'
import Farmland from "@/component/farmWrapper"
import style from './page.module.css'
export default function Listing_details() {
    return (
        <main className={style.main}>
            <section>
                <div className={style.img_wrapper}>
                    <Image src={listing_image} alt='' />
                </div>
                <div className={style.listing_details}>
                    <div>
                        <p>Availability</p>
                        <p>Opened</p>
                    </div>
                    <div>
                        <p>Price</p>
                        <p>N300,000</p>
                    </div>
                    <div>
                        <p>Lease Duration</p>
                        <p>6 Months</p>
                    </div>
                    <div>
                        <p>Soil Quality</p>
                        <p>Great</p>
                    </div>
                    <div>
                        <p>Profit Percentage</p>
                        <p>80%</p>
                    </div>
                    <div>
                        <label>Choose Crop</label>
                        <select>
                            <option>Pepper</option>
                            <option>Green Bean</option>
                            <option>Spinach</option>
                            <option>Cassava</option>
                        </select>
                    </div>
                </div>
            </section>
            <section className={style.farmlands}>
                <h2>Similar Farmlands</h2>
                <div className={style.farm_grid}>
                    <Farmland />
                    <Farmland />
                    <Farmland />
                </div>
            </section>
        </main>
    )
}