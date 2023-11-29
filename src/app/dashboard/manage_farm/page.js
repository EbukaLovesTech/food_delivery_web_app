import farmImage from '../../../../public/pexels-tomas-anunziata-3876417.jpg';
import style from './page.module.css';
import Image from 'next/image';

export default function ManageFarm() {
    return (
        <section className={style.section_wrapper}>
            <h1>Farm1</h1>
            <div className={style.wrapper}>
                <div className={style.img_wrapper}>
                    <Image src={farmImage} alt='' className={style.img} />
                </div>
                <div className={style.details_wrapper}>
                    <div>
                        <p>Crop Type</p>
                        <p>Pepper</p>
                    </div>
                    <div>
                        <p>Sow Date</p>
                        <p>11 april, 2023</p>
                    </div>
                    <div>
                        <p>Maturity</p>
                        <p>Horticultural</p>
                    </div>
                    <div>
                        <p>Harvest Date</p>
                        <p>20 may, 2023</p>
                    </div>
                    <div>
                        <p>Irrigation Type</p>
                        <p>Sprinkler</p>
                    </div>
                    <div>
                        <p>Target Yield</p>
                        <p>100 Yields</p>
                    </div>
                </div>
            </div>
        </section>
    )
}