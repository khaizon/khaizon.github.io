import './BiographyPanel.css';
import PanelTitle from '../../components/PanelTitle';
import Selectable from '../../components/Selectable';
import { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const ABOUT_ME_HTML = (
  <div>
    <p>
      I'm a student and a software engineer. I enjoy building things, such as a couple of web applications you can find in the projects section. Right now, I'm
      finishing my studies at SMU. From time to time I volunteer at Lion Befrienders to help out with vegetable distribution, and help kill time with mahjong
      and "rameo".
    </p>
    <p>
      I recently started coding more seriously and consistenly on{' '}
      <a href="https://leetcode.com/playdespacitoh/" target="_blank">
        leetcode
      </a>{' '}
      to sharpen my craft, by participating in daily coding challenges and weekly contests. I hope to have a lasting career developing software and building
      products to automate and simplify our lives.
    </p>
    Apart from coding, here are some other things I enjoy: <br />
    <div className="hobbies">
      <div className="hobby">
        <img src={`${import.meta.env.BASE_URL}/hobbies/lebron.gif`} alt="Watching the NBA" />
        <div className="hobby-text">NBA</div>
      </div>
      <div className="hobby">
        <img src={`${import.meta.env.BASE_URL}/hobbies/photography.jpeg`} alt="Photography" />
        <div className="hobby-text">Photography</div>
      </div>
      <div className="hobby">
        <img src={`${import.meta.env.BASE_URL}/hobbies/family.jpeg`} alt="Family Time" />
        <img src={`${import.meta.env.BASE_URL}/hobbies/gf.jpeg`} alt="Girlfriend" />
        <div className="hobby-text">Family</div>
      </div>
    </div>
  </div>
);

const educationData = [
  {
    title: 'Singapore Management University',
    subtitle: 'Dual Degree Programme of Technology and Management (Bachelors of Business Management)',
    description: '',
    time: '2019 - 2023',
    image: `${import.meta.env.BASE_URL}/education/SMU.jpeg`,
  },
  {
    title: 'Singapore University of Techonology and Design',
    subtitle: 'Dual Degree Programme of Technology and Management (Bachelors of Engineering - Computer Science & Design)',
    description: 'Member of Marketwatch and SUTD Swimming',
    time: '2019 - 2023',
    image: `${import.meta.env.BASE_URL}/education/SUTD.png`,
  },
  {
    title: 'Victorial Junior College',
    subtitle: 'GCE A Levels - PCME and H3 Mathematics',
    description: 'Orientation Group Head of 2016 Freshmore Orientation',
    time: '2015 - 2016',
    image: `${import.meta.env.BASE_URL}/education/VJC.png`,
  },
  {
    title: 'Chung Cheng High School (Main)',
    subtitle: 'GCE O Levels',
    description: 'Badminton Vice Captain',
    time: '2011 - 2014',
    image: `${import.meta.env.BASE_URL}/education/CCHMS.png`,
  },
];

const EDUCATION_HTML = (
  <div className="timeline-container">
    {educationData.map((data, index) => (
      <div className="timeline" key={index}>
        <div className="timeline-thumb-and-time">
          <div className="timeline-thumb">
            <img src={data.image} alt={data.subtitle} />
          </div>
          <div className="timeline-time">{data.time}</div>
        </div>
        <div className="timeline-content">
          <div className="timeline-title">{data.title}</div>
          <div className="timeline-subtitle">{data.subtitle}</div>
          <div className="timeline-description">{data.description}</div>
        </div>
      </div>
    ))}
  </div>
);

const careerData = [
  {
    title: 'SurerSG (Whitechalk Pte Ltd)',
    subtitle: '(Backend) Software Engineer Intern',
    description: [
      `Developed new API endpoints using Asp.Net Boilerplate (ABP) framework in C# that adopted Domain-Driven Design to serve data to Surer's Web Application`,
      `Supported over 350 insurance intermediaries on a monthly basis.`,
    ],
    time: '2021 - 2022',
    image: `${import.meta.env.BASE_URL}/career/Surer.png`,
  },
  {
    title: 'Singapore Telecommunications Limited (Singtel)',
    subtitle: 'Assistant Engineer in Change & Access Management Intern',
    description: [
      ` Developed a PowerApps application to automate the management and fault-monitoring of spare equipment which were adopted and employed to support Singtel's communication infrastructure`,
      `The deployment of the application automated the monitoring of inventory and faults of more than 100 spare parts`,
    ],
    time: '2021 - 2021',
    image: `${import.meta.env.BASE_URL}/career/Singtel.png`,
  },
  {
    title: 'VASSS Pte Ltd',
    subtitle: 'Software Development Intern',
    description: [
      `Automated the generation of receipts, tracking of monthly sales, and liaison between the maid agency and for overseas partners by creating a PHP and Javascript based web application`,
      `Supervised 2 interns to develop a website which digitized the workflow of a large maid agency with operations of 20 outlets in Singapore`,
    ],
    time: '2019 - 2019',
    image: `${import.meta.env.BASE_URL}/career/VASSS.png`,
  },
];

const CAREER_HTML = (
  <div className="timeline-container">
    {careerData.map((data, index) => (
      <div className="timeline" key={data.title + index}>
        <div className="timeline-thumb-and-time">
          <div className="timeline-thumb">
            <img src={data.image} alt={data.subtitle} />
          </div>
          <div className="timeline-time">{data.time}</div>
        </div>
        <div className="timeline-content">
          <div className="timeline-title">{data.title}</div>
          <div className="timeline-subtitle">{data.subtitle}</div>
          <div className="timeline-description">
            {data.description.map((desc, index) => (
              <p key={index}>{desc}</p>
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>
);

const tabMapper = ['About Me', 'Education', 'Career', 'Resume'];

export default function BiographyPanel() {
  const [currentTab, changeTab] = useState(0);

  const [swiper, updateSwiper] = useState<any | null>(null);

  // SwiperCore.use([Autoplay]);

  return (
    <div className="biography">
      <div className="biography-grid">
        <div className="biography-number">
          <div
            className="panel-number image-text"
            style={{
              backgroundImage: `url(${import.meta.env.BASE_URL}/profilepic.jpeg)`,
            }}
          >
            01
          </div>
        </div>
        <div className="tab-selector">
          {tabMapper.map((tabName, index) => (
            <Selectable
              isSelected={currentTab === index}
              onClick={() => {
                swiper.slideTo(index);
                changeTab(index);
              }}
              key={index}
            >
              {tabName}
            </Selectable>
          ))}
        </div>
        <div className="tabs-view">
          <PanelTitle alignLeft subtitle={tabMapper[currentTab]} title="My Biography" />
          <Swiper
            onSwiper={updateSwiper}
            onSlideChange={(e) => changeTab(e.activeIndex)}
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            <SwiperSlide>
              <div className="biography-text">{ABOUT_ME_HTML}</div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="biography-text">{EDUCATION_HTML}</div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="biography-text">{CAREER_HTML}</div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="biography-text">
                <a className="resume" href={import.meta.env.BASE_URL + 'resume.pdf'} rel="noopener noreferrer" target="_blank">
                  <button>View/download Official Resume</button>
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
