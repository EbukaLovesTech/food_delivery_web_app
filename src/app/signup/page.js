import Image from "next/image"
import pageImage from '../../../public/Vegetablespatterns06_generated.jpg';
import style from './page.module.css';
export default function SignUpPage() {
    return (
        <main className={style.main}>
            <div className={style.sign_up_wrapper}>
                <div className={style.img_wrapper}>
                    <Image src={pageImage} alt='' />
                </div>
                <section>
                    <h1>Create Account</h1>
                    <div className={style.social_media}>
                        <span>F</span>
                        <span>G</span>
                        <span>In</span>
                    </div>
                    <span>Or use email for registration</span>
                    <form className={style.form}>
                        <div>
                            <label htmlFor='name'>Name</label>
                            <input type='text' name='user_name' id='name' placeholder='e.g John Doe' />
                        </div>
                        <div>
                            <label htmlFor='mail'>Email</label>
                            <input type='email' name='user_name' id='mail' placeholder='e.g johndoe@gmail.com' />
                        </div>
                        <div>
                            <label htmlFor='password'>Password</label>
                            <input type='password' name='pass_word' id='password' />
                        </div>
                        <div>
                            <button>Submit</button>
                        </div>
                    </form>
                </section>
            </div>
        </main>
    )
}