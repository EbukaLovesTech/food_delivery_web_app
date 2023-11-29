import Image from "next/image"
import pageImage from '../../../public/Vegetablespatterns06_generated.jpg';
import Link from "next/link";
import style from './page.module.css';
export default function Login() {
    return (
        <main className={style.main}>
            <div className={style.login_wrapper}>
                <div className={style.img_wrapper}>
                    <Image src={pageImage} alt='' />
                </div>
                <section>
                    <h1>Login</h1>
                    <div className={style.social_media}>
                        <span>F</span>
                        <span>G</span>
                        <span>In</span>
                    </div>
                    <span>Or Login with your email</span>
                    <form className={style.form}>
                        <div>
                            <label htmlFor='mail'>Email</label>
                            <input type='email' name='user_name' id='mail' placeholder='e.g johndoe@gmail.com' />
                        </div>
                        <div>
                            <label htmlFor='password'>Password</label>
                            <input type='password' name='pass_word' id='password' />
                        </div>
                        <div>
                            <Link href='/' className={style.forgot}>Forgot your password?</Link>
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