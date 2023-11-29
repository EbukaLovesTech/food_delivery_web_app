import Image from "next/image"
import heroImg from '../../../public/pexels-tom-fisk-4211849.jpg'
import missionImg from '../../../public/pexels-quang-nguyen-vinh-6131321.jpg'
import NewsletterSection from "@/component/newsletter"
import style from './page.module.css'

export default function About() {
    return (
        <main className={style.main}>
            <section className={style.first_section}>
                <h1>About Us</h1>
                <div>
                    <p className={style.about_us_info}>
                        Lorem ipsum dolor amet consecteur on god i nara ka oj
                        me ji ka shd dnsjs ans dnsj dns djsj dhd djs asd ajs
                        dk hdd nigga i came from the trenches ion know cos we
                        are periodic ogg sjd aki na pawpaw ap nigga kill switch
                        on god i no go settle for mediocre what&#39;s your name
                        ion know jdjdi duuu dhu sjai djiios sjs sa sji mwio djio
                        slad jdi dind sgd wbjd sna dbsh dn bussing down the e
                        way with my benz ok oko k ok ok amg gt 63s na my dream
                        car on god no cap broski u need people like me ok ok
                        i try to hit the road dem try to lock me  she get crazy
                        i ion take percs daily finding pumps sunset suspect i am hatian scarface.
                    </p>
                    <div>
                        <Image src={heroImg} alt='on god' className={style.hero_img} />
                    </div>
                </div>
            </section>
            <section className={style.second_section}>
                <h2>Our Mission</h2>
                <div className={style.mission_wrapper}>
                    <div className={style.mission}>
                        <p className={style.number}>01.</p>
                        <p>
                            Lorem ipsum dolor amet consecteur on god i nara ka oj me ji
                            ka shd dnsjs ans dnsj dns djsj dhd djs asd ajs dk hdd nigga i came from the trenches
                            ion know cos we are periodic
                        </p>
                    </div>
                    <div className={style.mission}>
                        <p className={style.number}>02.</p>
                        <p>
                            Lorem ipsum dolor amet consecteur on god i nara ka oj me ji
                            ka shd dnsjs ans dnsj dns djsj dhd djs asd ajs dk hdd nigga i came from the trenches
                            ion know cos we are periodic
                        </p>
                    </div>
                    <div className={style.mission}>
                        <p className={style.number}>03.</p>
                        <p>
                            Lorem ipsum dolor amet consecteur on god i nara ka oj me ji
                            ka shd dnsjs ans dnsj dns djsj dhd djs asd ajs dk hdd nigga i came from the trenches
                            ion know cos we are periodic
                        </p>
                    </div>
                    <div className={style.mission}>
                        <p className={style.number}>04.</p>
                        <p>
                            Lorem ipsum dolor amet consecteur on god i nara ka oj me ji
                            ka shd dnsjs ans dnsj dns djsj dhd djs asd ajs dk hdd nigga i came from the trenches
                            ion know cos we are periodic
                        </p>
                    </div>
                </div>
                <div>
                    <Image src={missionImg} alt='' />
                </div>
            </section>
            <div className={style.subscribe_wrapper}>
                <NewsletterSection />
            </div>
        </main>
    )
}