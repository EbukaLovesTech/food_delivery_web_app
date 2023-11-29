import Image from 'next/image'
import Link from 'next/link'
import farmLand from '../../public/pexels-tomas-anunziata-3876417.jpg'
import verifyIcon from '../../public/🦆 icon _verified_.svg'
import bookmarkIcon from '../../public/🦆 icon _bookmark_.svg'
import './farmWrapper.css';

export default function Farmland() {
    return (
        <section className='farm_section'>
            <div className='farm_wrapper'>
                <div>
                    <div className='farm_img_wrapper'>
                        <Image src={farmLand} alt='' />
                    </div>
                    <div>
                        <div>
                            <Image src={verifyIcon} alt='' />
                            <span>Open</span>
                        </div>
                        <div>
                            <Image src={bookmarkIcon} alt='' />
                        </div>
                    </div>
                </div>
                <div className='farm_details'>
                    <div>
                        <p>Price</p>
                        <p>N300,000</p>
                    </div>
                    <div>
                        <p>Size</p>
                        <p>1 Acre</p>
                    </div>
                    <div>
                        <p>Location</p>
                        <p>Ogbaru,Anambra</p>
                    </div>
                    <Link href='/listing_detail'>View Details</Link>
                </div>
            </div>
        </section>
    )
}