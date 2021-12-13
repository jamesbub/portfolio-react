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
    title: 'WebRTC App',
    description: "This is a code repository for the corresponding YouTube video. In this tutorial, we're going to build and deploy a React Video Chat Application using WebRTC.",
      image: '/images/3.jpg',
      tags: ['React', 'WebRTC'],
    source: 'https://google.com',
    visit: 'https://google.com',
    id: 2,
  },
  {
    title: 'Unichat',
    description: "This is a code repository for the corresponding video tutorial. In this video, we will create a full Realtime Chat Application",
    image: '/images/4.jpg',
    tags: ['React', 'ChatEngine', 'Firebase'],
    source: 'https://google.com',
    visit: 'https://google.com',
    id: 3,
  },
];

export const TimeLineData = [
  { year: 2016, text: 'Joined Tech Mahindra as Jr. Software Developer', },
  { year: 2017, text: 'Promoted as Software Developer', },
  { year: 2018, text: 'Joined Verizon as Software Developer', },
  { year: 2019, text: 'Promoted as Sr. Software Developer', },
  { year: 2020, text: 'Mordenized DTIx UI using React', },
  { year: 2021, text: 'Planned, Designed, and Developed the EMS view solely using NextJs', },
];