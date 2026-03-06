import Work from 'components/work/Work';
import styles from './Works.module.scss';
import Headings from 'components/headings/Headings';
import senai from 'assets/images/works/senai.png';
import hidrauteky from 'assets/images/works/hidrauteky.png';
import tugonn from 'assets/images/works/tugonn.png';

const Works = () => {
  return (
    <div id="works" className={styles.works}>
      <div className={styles.content}>
        <div className={styles.textual}>
          <Headings h2={'Works'} h3={'Some projects I’ve worked on'} />
          <Work
            href={'https://www.hidrauteky.com'}
            image={hidrauteky}
            title={'Hidrauteky'}
            description={`A modern business website built for a local leak detection company, designed to deliver speed, scalability, and a seamless user experience.
                            Developed with Next.js, the project features an integrated backend that streamlines email communication, ensuring efficient customer interactions and smooth business operations.
                            `}
            tags={[
              'React.js',
              'Next.js',
              'Node.js',
              'JavaScript',
              'Tailwind CSS',
            ]}
          />
          <Work
            href={'https://www.tugonn.com'}
            image={tugonn}
            title={'TugOnn'}
            description={`Social networking platform designed to connect people and strengthen local communities through collaboration and shared initiatives. The project focuses on encouraging meaningful interactions, community engagement, and the organization of positive local activities, demonstrating the development of a web application centered on social interaction and user experience.`}
            tags={[
              'React.js',
              'Next.js',
              'Node.js',
              'Express.js',
              'JavaScript',
              'TypeScript',
              'Tailwind CSS',
              'MongoDB',
              'Swagger',
            ]}
          />
          <Work
            href={'https://sobre-senai.vercel.app'}
            image={senai}
            title={'About SENAI'}
            description={`
                            Presentation page for SENAI/AL and its local units, developed as part of a challenge for the internship selection process at FIEA.
                            This project focused on creating a clean, responsive, and informative web experience that highlights the institution’s structure and impact while showcasing both technical skill and attention to design detail.
                            `}
            tags={['Vue.js', 'Nuxt.js', 'JavaScript', 'SCSS']}
          />
        </div>
      </div>
    </div>
  );
};

export default Works;
