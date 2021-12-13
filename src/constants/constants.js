export const projects = [
  {
    title: 'DTIx',
    description: "DTIx(DELPHI Troubleshooting Interface Express) is mostly used by the Field Technicians as well as by the Support Center Technicians to troubleshoot different issues/ faults in the network/ network equipment for various customers. This application supports troubleshooting for different domains provided by Verizon such as FIOS, VBI, HSI, POTS, SPECIALS, OPTICAL. The technicians are allowed to view the Network topology for the Customer by entering the CID, which helps the technicians to understand/ troubleshoot the fault by running the commands on the faulty equipment. This application is also used for the activation and deactivation of customer devices. The front-end side of the application has been developed using ReactJs, supported by the Springboot microservice. DTIx interacts with the backend application DELPHI in order to interact with the real network equipment. This application is also exported as React component which is used by other teams like OMEGA and Optix",
    image: '/images/dtix.jpg',
    tags: ['React', 'Redux', 'Java', 'Springboot', 'SQL'],
    id: 0,
  },
  {
    title: 'EMS View',
    description:"The Element Management System (EMS) helps Verizon to troubleshoot/ diagnose the equipment (E9 system by Calix). The application gives the user a hierarchical view of the system starting from the OLT (Optical Line Terminal) all the way to the ONT (Optical Network Terminal). This application is used by the Network Technicians where they can manage the Equipment. I have developed this application using the client-side framework of NextJs and reusing Dtix as the Backend, which talks to the equipment. This application is specially designed to achieve faster loading time by using the \"Code-splitting and Bundling\" and \"Automatic Static Optimization\" feature of NextJs. In order to avoid long polling, we have introduced SSE (Server-Sent Events). Redis Cache has been introduced to cache the responses for failover scenarios. Using wisely selected technologies combined with Docker and Kubernetes we have achieved Zero Downtime for the application.",
    image: '/images/oltview.png',
    tags: ['NextJs', 'Redux', 'Axios', 'SSE', 'Java', 'SpringBoot', 'Redis', 'Docker', 'EKS'],
    id: 1,
  },
  {
    title: 'SCO',
    description: "SCO (Scotia Connect Online), is the online banking application for the business account holders for The Bank of Nova Scotia. I worked on different technologies like JSF, Spring, Spring Web Services, Hibernate, Apache Active MQ, BIRT reporting tool and DB2, etc.",
      image: '/images/scotia.jpg',
      tags: ['JSF', 'Java', 'Spring', 'Hibernate', 'Apache ActiveMQ', 'BIRT'],
    source: 'https://www1.scotiaconnect.scotiabank.com/',
    id: 2,
  },
  {
    title: 'LEAP',
    description: "LEAP (Leading Edge Application Platform)is the application is the online banking platform for customers. Bank uses this application for different countries like Mexico, Panama, Chile, and other Caribbean region. The UI pages were developed by the JSF tag library. The middleware was plain java code used to apply different business logics and validations. The back-end was Sybase Database, where the communication of the application was through the Stored Procedures.",
    image: '/images/scotia2.png',
    tags: ['JSF', 'java', 'PL/SQL'],
    source: 'https://www.scotiabank.com/',
    id: 3,
  },
  {
    title: 'e-Teller',
    description: "e-Teller is a teller application used by the internal employees of the bank. The UI of this application is a static web application and written on Angular Js 1.x. Also, I have worked on RESTful Web Services for the back-end integration of Angular Js. For the purpose of fetching and storing the data, there were host systems as well as databases. The eSOA Architecture (written on top of SOAP) to fetch the data from the Data Power. The host machines were IBM Mainframe, and the Database was of Microsoft SQL Server. The application was deployed in IBM WebSphere Application Server.",
    image: '/images/scotia2.png',
    tags: ['AngularJs 1', 'java', 'RESTFul', 'SOAP'],
    id: 4,
  }
];

export const TimeLineData = [
  { year: 2016, text: 'Joined Tech Mahindra as Jr. Software Developer', },
  { year: 2017, text: 'Promoted as Software Developer', },
  { year: 2018, text: 'Joined Verizon as Software Developer', },
  { year: 2019, text: 'Promoted as Sr. Software Developer', },
  { year: 2020, text: 'Mordenized DTIx UI using React', },
  { year: 2021, text: 'Planned, Designed, and Developed the EMS view solely using NextJs', },
];