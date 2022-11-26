import styles from "./about.module.css";
import profilePic from "../../public/images.png";
import Image from "next/image";
// pages\components\About.js

export default function About(){
    return(
        <div className={styles.CTA}>

        <footer className={styles.main}>
        <div className={styles.footer1}>
            <div className={styles.wrapper1_footer1}>
            <span className={styles.intro_header}>
            We will write you a letter!
            </span>
            <small className={styles.introHeader_desc}>
            Newsletter subscribers will receive specially selected content, hear about the news and get a dose of inspiration every month.
            </small>
            </div>
        </div>
        <div className={styles.footer2}>
            <form className={styles.form}>
                <input className={styles.name_form} type="name" maxlength="16" />
                <br />
                <input className={styles.email_form} type="email" />
                <br />
                <button type="submit" className={styles.button}>Send</button>
            </form>
        </div>
       
      </footer>
      <div className={styles.footer3}>
        <header className={styles.header}>
        AroundYou
        <Image
          src={profilePic}
          alt="Picture of the author"
          width={60}
          height={60}
          className={styles.logo}
        />
      </header>
        </div>
      </div>

    )
}