import farmImage from '../../../../public/pexels-tomas-anunziata-3876417.jpg';
import style from './page.module.css';
import Image from 'next/image';

export default function () {
    return (
        <section className={style.investment_section}>
            <h1>Farm1</h1>
            <div className={style.wrapper}>
                <div className={style.img_wrapper}>
                    <Image src={farmImage} alt='' className={style.img} />
                </div>
                <div className={style.details_wrapper}>
                    <div>
                        <p>Price</p>
                        <p>N300,000</p>
                    </div>
                    <div>
                        <p>Size</p>
                        <p>1 Acre</p>
                    </div>
                    <div>
                        <p>Crop</p>
                        <p>Pepper</p>
                    </div>
                    <div>
                        <p>Farm Profit</p>
                        <p>0</p>
                    </div>
                    <div>
                        <p>Location</p>
                        <p>Ogbaru,Anambra State</p>
                    </div>
                </div>
            </div>
        </section>
    )
}