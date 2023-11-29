import './newsletter.css';

export default function NewsletterSection() {
    return (
        <div className='newsletter_wrapper'>
            <section className='newsletter_section'>
                <p>Subscribe to our newsletter</p>
                <form className='newsletter_form'>
                    <input type='email' placeholder='example@gmail.com' />
                    <button className='subscribe_btn'>Subscribe</button>
                </form>
            </section>
        </div>
    )
}