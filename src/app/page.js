import Image from 'next/image'
import heroImg from '../../public/hero.jpg'
import subImg from '../../public/pexels-irgi-nur-fadil-14232071.jpg'
import howItWorksImg from '../../public/pexels-cottonbro-studio-3584974.jpg'
import ebuka from '../../public/ebuka.jpg'
import farmLand from '../../public/pexels-tomas-anunziata-3876417.jpg'
import styles from './page.module.css'
import Link from 'next/link'
import NewsletterSection from '@/component/newsletter'
import Farmland from "@/component/farmWrapper"
export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.page_intro}>
        <div className={styles.intro}>
          <h1 className={styles.heading}>Invest In <span className={styles.head_span}>Farmland</span> Harvest Your Profit</h1>
          <p>
            Unlock the potential of famland investment with our platform.
            We offer you the opportunity to lease acres of fertile land, and as
            the seasons change, you&#39;ll witness the transformation from seeds
            shown to bountiful harvests.
          </p>
          <Link href='/farmland_listing' className={styles.browse_link}>Browse Listing</Link>
        </div>
        <div className={styles.hero_img_wrapper}>
          <Image
            src={heroImg}
            alt='A tractor landmowning a farmland'
          />
        </div>
      </section>
      <section className={styles.section_2}>
        <h2>What We Believe</h2>
        <div>
          <div>
            <p>
              At our core, we believe in the power of agriculture
              to yield financial growth. Our transparent profit-sharing
              model ensures that you receive 80% of the profits
              when it&#39;s time to reap what you&#39;ve sown.
              with a commitment to sustainability and a focus on the future,
              we&#39;re  dedicated to making farmland investment accessible and rewarding for everyone. come be a part of our mission to cultivate wealth, one acre at a time, and experience the satisfaction of nurturing investments that truly bear fruit.
            </p>
          </div>
          <div>
            <Image src={subImg} alt='farmland' />
          </div>
        </div>
      </section>
      <section className={styles.why_section}>
        <h2>Why Invest In Farmland</h2>
        <div className={styles.grid_wrapper}>
          <div>
            <span>01.</span>
            <div>
              <h3>Reason 1</h3>
              <p>Lorem ipsum dolor amet imakwa o god who are you to judge me i nwuru omo ka i na apu ara</p>
              <Link href='/' className={styles.learn_more}>Learn More</Link>
            </div>
          </div>
          <div>
            <span>02.</span>
            <div>
              <h3>Reason 2</h3>
              <p>Lorem ipsum dolor amet imakwa o god who are you to judge me i nwuru omo ka i na apu ara</p>
              <Link href='/' className={styles.learn_more}>Learn More</Link>
            </div>
          </div>
          <div>
            <span>03.</span>
            <div>
              <h3>Reason 3</h3>
              <p>Lorem ipsum dolor amet imakwa o god who are you to judge me i nwuru omo ka i na apu ara</p>
              <Link href='/' className={styles.learn_more}>Learn More</Link>
            </div>
          </div>
          <div>
            <span>04.</span>
            <div>
              <h3>Reason 4</h3>
              <p>Lorem ipsum dolor amet imakwa o god who are you to judge me i nwuru omo ka i na apu ara</p>
              <Link href='/' className={styles.learn_more}>Learn More</Link>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.how_it_works}>
        <h2>How It Works</h2>
        <div>
          <div>
            <Image src={howItWorksImg} alt='' />
          </div>
          {/* how it works details wrapper */}
          <div>
            <div className={styles.how_it_works_details}>
              <span>01.</span>
              <p>Lorem Ipsum dolor amet imakwa  maka imana mu wa
                abughi ojiri river umu nwa aa ok ok ok</p>
            </div>
            <div className={styles.how_it_works_details}>
              <span>02.</span>
              <p>Lorem Ipsum dolor amet imakwa  maka imana mu wa
                abughi ojiri river umu nwa aa ok ok ok</p>
            </div>
            <div className={styles.how_it_works_details}>
              <span>03.</span>
              <p>Lorem Ipsum dolor amet imakwa  maka imana mu wa
                abughi ojiri river umu nwa aa ok ok ok</p>
            </div>
            <div className={styles.how_it_works_details}>
              <span>04.</span>
              <p>Lorem Ipsum dolor amet imakwa  maka imana mu wa
                abughi ojiri river umu nwa aa ok ok ok</p>
            </div>
            <Link href='/'>Invest Now</Link>
          </div>
        </div>
      </section>
      <section className={styles.testimonial_section}>
        <h2>What Our Clients Says</h2>
        <div>
          {/* testimonial1 */}
          <div className={styles.testimonial_wrapper}>
            <div className={styles.client_profile}>
              <Image src={ebuka} alt='Super Ebuka' width={30} height={30} />
              <div>
                <p>Igwe Imakwa</p>
                <p>Investor and teacher</p>
              </div>
            </div>
            <div className={styles.star_wrapper}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>star</title><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>star</title><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>star</title><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>star</title><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>star</title><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" /></svg>
            </div>
            <p>Lorem ipsum dolor amet consectur
              og nice bt i don&#39;t know what
              those niggas are yagging about
              bitches everywhere that&#39;s my honest review</p>
          </div>
          {/* testimonial2 */}
          <div className={styles.testimonial_wrapper}>
            <div className={styles.client_profile}>
              <Image src={ebuka} alt='Super Ebuka' width={30} height={30} />
              <div>
                <p>Oge Imakwa</p>
                <p>Investor and teacher</p>
              </div>
            </div>
            <div className={styles.star_wrapper}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>star</title><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>star</title><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>star</title><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>star</title><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>star</title><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" /></svg>
            </div>
            <p>Lorem ipsum dolor amet consectur
              og nice bt i don&#39;t know what
              those niggas are yagging about
              bitches everywhere that&#39;s my honest review</p>
          </div>
          {/* testimonial3 */}
          <div className={styles.testimonial_wrapper}>
            <div className={styles.client_profile}>
              <Image src={ebuka} alt='Super Ebuka' width={30} height={30} />
              <div>
                <p>Ogechukwu Imakwa</p>
                <p>Investor and teacher</p>
              </div>
            </div>
            <div className={styles.star_wrapper}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>star</title><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>star</title><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>star</title><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>star</title><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>star</title><path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" /></svg>
            </div>
            <p>Lorem ipsum dolor amet consectur
              og nice bt i don&#39;t know what
              those niggas are yagging about
              bitches everywhere that&#39;s my honest review</p>
          </div>
        </div>
      </section>
      <section className={styles.featured}>
        <h2>Featured Farmland</h2>
        <div>
          <Farmland />
          <Farmland />
          <Farmland />
        </div>
      </section>
      <div>
        <NewsletterSection />
      </div>
    </main>
  )
}
