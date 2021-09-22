/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Pushkar's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Pushkar R. Jain Portfolio",
    type: "website",
    url: "#",
  },
};

//Home Page
const greeting = {
  title: "Pushkar R. Jain",
  logo_name: "PushkarRJain",
  subTitle:
    "Acquiring knowledge in the fields of ML and Datascience. Skilled in Full Stack Developer. Look forward to work on real-world projects which will have a practical impact, especially in the fields of finance, healthcare, education and transportation",
  resumeLink:
    "https://drive.google.com/file/d/1LDDfnocJD9TJoCJlihGYBCkbW14Z3jJz/view?usp=sharing",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/PushkarRJain",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/pushkar-jain-3280581b0/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:pushrjain@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/__pushkar_jain__/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website front end using React-Redux",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
    {
      title: "Database Deployment",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "#",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "#",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "#",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "#",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "#",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Pune Institute of Computer Technology",
      subtitle: "B.E. in Computer Engineering",
      logo_path: "pict_logo.png",
      alt_name: "IIITDM Kurnool",
      duration: "2019 - Present",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, and Full Stack Development and Cloud Computing.",
        "⚡ I have also worked on a college sponsored project.",
      ],
      website_link: "https://pict.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link: "#",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Neural Networks and Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/VQZNGCSNHLK7",
      alt_name: "deeplearning.ai",
      color_code: "#f7f7f7",
    },
    {
      title:
        "Improving Deep Neural Networks: Hyperparameter tuning, Regularization and Optimization",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/C4EHRFSC7ZGB",
      alt_name: "deeplearning.ai",
      color_code: "#f7f7f7",
    },
    {
      title: "Structuring Machine Learning Projects",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/GZWML9LH8D8R",
      alt_name: "deeplearning.ai",
      color_code: "#f7f7f7",
    },
    {
      title: "Introduction to Cloud Computing",
      subtitle: "- Raj Ahuja",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/4JUUWZLYQF6C",
      alt_name: "IBM",
      color_code: "#f7f7f7",
    },

    {
      title: "The Web Developer Bootcamp 2021",
      subtitle: "- Colt Steele",
      logo_path: "udemy_logo.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-504b2385-1e2a-49d6-a399-f9efaf6a2e54/",
      alt_name: "Udemy",
      color_code: "#f7f7f7",
    },
    {
      title: "Crash Course on C++ Standard Template  Library",
      subtitle: "- Harshit Jain",
      logo_path: "udemy_logo.png",
      certificate_link:
        "http://ude.my/UC-e15d2b32-f2ef-49fb-8d37-2adc608dcc13/",
      alt_name: "Udemy",
      color_code: "#f7f7f7",
    },
    {
      title: "Everyday Excel, Part 1",
      subtitle: "- Charlie Nuttleman",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/8X8WEUXTNZH9",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Internship and Volunteership",
  description:
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      experiences: [
        {
          title: "Machine Learning Research Intern",
          company: "SCAAI - Symbiosis Centre for Applied AI",
          company_url: "https://www.scaai.edu.in/",
          logo_path: "scaai_logo.jpg",
          duration: "Feb 2021 - PRESENT",
          location: "Pune, Maharashtra",
          description: "Currently working on Graph Neural Networks.",
          color: "#0879bf",
        },
        {
          title: "Project Intern",
          company: "OptAIOT",
          company_url: "https://www.optaiot.com/",
          logo_path: "optaiot_logo.png",
          duration: "August 2021 - Present",
          location: "Pune, Maharashtra",
          description:
            "Working on an Industry 4.0 project to create gateway for sending data to Cognito Cloud. Technologies used - SCADA systems, OPC UA, Rest APIs",
          color: "#9b1578",
        },
        {
          title: "Full Stack Web Development Intern",
          company: "Solapur Police",
          company_url: "https://solapurcitypolice.gov.in/",
          logo_path: "sola_logo.png",
          duration: "May 2021 - July 2021",
          location: "Remote",
          description:
            "Worked on creation of website for the transfer process of the entire Solapur Police Force. Technologies used - React JS , Firebase, Material UI .",
          color: "#fc1f20",
        },
        {
          title: "Product Development Intern",
          company: "Pune Institute of Computer Technology",
          company_url: "https://pict.edu/",
          logo_path: "pict_logo.png",
          duration: "Novement 2019 - Feb 2020",
          location: "Remote",
          description:
            "Worked on the Smart Helmet System Project. Project appreciated by Principal of PICT and was then sponsored by college. This project will help to reduce accidents and increase safety of two wheeler riders",
          color: "#fc1f20",
        },
      ],
    },

    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Machine Learning Vice Head",
          company: "PICT Computer Society of India (CSI)",
          company_url: "https://www.pictcsi.com/",
          logo_path: "csi_logo.jpg",
          duration: "Nov 2020 - Feb 2021",
          location: "Pune, Maharashtra",
          description:
            "Headed PICT CSI flagship machine learning event DataCup",
          color: "#4285F4",
        },
        {
          title: "Student Volunteer",
          company: "PICT IEEE Student Branch (PISB)",
          company_url: "https://www.pictieee.in/",
          logo_path: "ieee_logo.png",
          duration: "Nov 2019 - Present",
          location: "Pune, Maharashtra",
          description:
            "Worked on IEEE website on the Gallery Page and was part of the part of the organising team of Datawiz - the club's Machine Learning event",
          color: "#D83B01",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "pj.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can come handy in ML, AI, React, Cloud.",
  },
  addressSection: {
    title: "Address",
    subtitle: "Bhagwati Maestros, Bavdhan, Pune-411021, Maharashtra",
    avatar_image_path: "address_image.svg",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 9860224038",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  contactPageData,
};
