import Image from "next/image";
import styles from "./About.module.scss";
import Headings from "components/headings/Headings";
import photo from "assets/images/photos/photo.jpg";

const About = () => {
  return (
    <div id="about" className={styles.about}>
      <div className={styles.content}>
        <div className={styles.textual}>
          <Headings h2={"About"} h3={"Let me introduce myself 🤘🏼"} />
          <div className={styles.bio}>
            <Image
              className={styles.photo}
              src={photo}
              alt="Foto de Yago tocando contrabaixo"
            />
            <div className={styles.depict}>
              <p>
                Systems analyst and software engineer in training with solid
                experience in backend and frontend development. I currently work
                as a Software Developer at FIEA (Federation of Industries of the
                State of Alagoas) and as a self-employed fullstack developer,
                with my current professional focus centered on Java and Spring
                Boot for backend development.
                <br />
                <br />
                I have hands-on experience building RESTful APIs using Java
                (Spring Boot), as well as working with Node.js and Express. On
                the front end, I develop modern web interfaces with React +
                Next.js and Vue + Nuxt.js. For data persistence, I work with
                relational databases such as PostgreSQL and SQL Server, and
                non-relational databases like MongoDB, always prioritizing
                scalability, performance, and data integrity.
                <br />
                <br />
                Alongside my technical journey, I am also a musician and have
                experience as a teacher. These experiences have contributed to a
                creative and analytical mindset, as well as strong communication
                and interpersonal skills that I consistently bring to the
                projects I work on.
                <br />
                <br />
                <strong className={styles.catchphrase}>
                  I believe that both music and programming require passion,
                  discipline, and creativity to create something truly
                  exceptional
                </strong>
                . ✨
                <br />
                <br />
                If you’re looking for a dedicated fullstack developer with
                attention to project requirements, and a thoughtful, creative
                approach, I’d be happy to connect and help bring your idea to
                life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
