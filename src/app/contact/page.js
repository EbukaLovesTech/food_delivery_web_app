import Image from "next/image"
import veganImg from '../../../public/Vegetablespatterns06_generated.jpg'
import style from './page.module.css'
export default function Contact() {
    return (
        <main className={style.main}>
            <div className={style.intro_wrapper}>
                <h1>Reach out to us</h1>
                <p>You can contact us by calling us with this number  0826362819173 or you can fill-in information down below</p>
            </div>
            <section>
                <div className={style.contact_wrapper}>
                    <form className={style.form}>
                        <div>
                            <label htmlFor='name'>Name</label>
                            <input type='text' name='user_name' id='name' placeholder='e.g John Doe' />
                        </div>
                        <div>
                            <label htmlFor='email'>Email</label>
                            <input type='email' name='user_email' id='email' placeholder='e.g johndoe@gmail.com' />
                        </div>
                        <div>
                            <label htmlFor='phone_no'>Phone Number</label>
                            <input type='tel' name='user_tel' id='phone_no' placeholder='e.g 08122389198' />
                        </div>
                        <div>
                            <label htmlFor='address'>Address</label>
                            <input type='text' name='user_address' id='address' placeholder='e.g 12 iruka,omagba' />
                        </div>
                        <div>
                            <label htmlFor='message'>Message</label>
                            <textarea></textarea>
                        </div>
                        <div>
                            <button>Submit</button>
                        </div>
                    </form>
                    <div className={style.img_wrapper}>
                        <Image src={veganImg} alt='' />
                    </div>
                </div>
            </section>
        </main>
    )
}