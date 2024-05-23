"use client"
// Import necessary components
import Head from 'next/head';
import styles from '../styles/Resume.module.css';

export default function Resume() {
    return (
        <>
            <br/>
            <Head>
                <title>Curtis Liu's Resume</title>
                <meta name="description" content="Resume of Curtis Liu - Software Developer" />
            </Head>

            <div className={styles.resumeContainer}>
                <header>
                    <h1 className={styles.title}>Curtis Liu</h1>
                    <p>Software Engineer</p>
                    <p><a href="mailto:curtisliu4@gmail.com">curtisliu4@gmail.com</a> | <a href="https://linktr.ee/curtisliu">https://linktr.ee/curtisliu</a></p>
                </header>

                <section>
                    <h2 className={styles.subTitle}>Skills</h2>
                    <p><span className={styles.underline}>Coding:</span> Java, Python, C#, CSS, C++, Kotlin, HTML, JavaScript, Git, Bash, JetBrains</p>
                    <p><span className={styles.underline}>Data:</span> Jupyter Notebook, MongoDB and Atlas, MySQL</p>
                    <p><span className={styles.underline}>Web/App Dev:</span> TypeScript, Angular.js, React.js, Next.js, Android Studio, Django, Firebase, Figma, Jetpack Compose, Restful API</p>
                    <p><span className={styles.underline}>Misc:</span> MatLab, LaTeX, Adobe Creative Suite, Unix, Windows</p>
                </section>

                <br/>

                <section>
                    <h2 className={styles.subTitle}>Projects</h2>
                    <div>
                        <h3 className={styles.h3}>Cmfrt</h3>
                        <p><span className={styles.underline}>Summary:</span> Mobile application that delivers motivational/inspirational messages via push notifications.</p>
                        <p><span className={styles.underline}>Technical Highlights:</span> Android Studio, Java</p>
                    </div>
                    <div>
                        <h3 className={styles.h3}>Song Share</h3>
                        <p><span className={styles.underline}>Summary:</span> Full-Stack social media platform for sharing music with friends. Also developed an equivalent Mobile version.</p>
                        <p><span className={styles.underline}>Technical Highlights:</span> React.JS, Vite.JS, connected to Spotify API & Google Geolocation API, Android Studio, Kotlin</p>
                    </div>
                    <div>
                        <h3 className={styles.h3}>Dan’s Frap Shop</h3>
                        <p><span className={styles.underline}>Summary:</span> Full-Stack Coffee Shop web app.</p>
                        <p><span className={styles.underline}>Technical Highlights:</span> AngularJS, JavaScript, MongoDB Atlas, utilized SCRUM Agile Software Development methodologies while collaborating with a team.</p>
                    </div>
                    <div>
                        <h3 className={styles.h3}>Non-Immigrant Visa Analysis</h3>
                        <p><span className={styles.underline}>Summary:</span> Performed an analysis on non-immigrant visas using data web-scraping and data blending</p>
                        <p><span className={styles.underline}>Technical Highlights:</span> Highlights: Built a web scraper using Python’s beautifulsoup and Jupyter Notebook, parsed through multiple data sets, and blended data using SQL commands, and MongoDB.</p>
                    </div>
                </section>

                <br/>

                <section>
                    <h2 className={styles.subTitle}>Work Experience</h2>
                    <div>
                        <h3 className={styles.h3}>BEST BUY — Sales Advisor</h3>
                        <p>May 2021 - Present</p>
                        <ul>
                            <li>Answered customer questions and navigated them through solutions for their daily tech needs.</li>
                            <li>Received training from companies like HP, Lenovo, and many other leading vendors to keep abreast of the latest technologies.</li>
                        </ul>
                    </div>
                </section>

                <br/>

                <section>
                    <h2 className={styles.subTitle}>Education</h2>
                    <div>
                        <h3 className={styles.h3}>Utah State University</h3>
                        <p>B.S. Computer Science  May 2024</p>
                        <ul>
                            <li>Cum Laude</li>
                            <li>USU Esports Executive Council Member, Valorant Game Admin</li>
                        </ul>
                    </div>
                </section>

            </div>
        </>
    );
}
