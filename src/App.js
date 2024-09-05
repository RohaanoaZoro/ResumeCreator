import './App.css';
import React,{useState} from 'react';
// import TabChanger from './TabChanger/TabChanger';

import Portfolio from './Portfolio/Portfolio';
import SettingsPop from './SettingsPop/SettingsPop'


function App() {

  const MissingKeywords = [ 
    "Amsterdam",
    "Websockets",
    "robust", "scalable features",
    "high-quality software",
    "GitHub Actions",
    "RESTful APIs",
    "GraphQL",
    "Code Reviews",
    "Dynamic Fast-paced environment",
    "virtualization",
    "Web Service", "API", "Rest",
    "Agile", "Scrum",
    "centric", "pragmatic", "transparent", "speedy", "open",
    "Sass", "Git", "NPM", "Unit Testing",
    "Identity Management",
    "Domain-Driven Design",
    "Extract, Transform, Load",
    "startup mindset",
    "System Architecture",
    "SOLID Principles",
    "think outside the box ",
    "Continuous Delivery", "CI/CD Practices",
    "strong analytical skills", "problem-solving",
    "nterest in complex problems",
    "Linux Scripting",
    "International start-up experience",
    "fluency in English",
    "Ownership", "decision-making"
  ]

  const [Technologies, setTechnologies] = useState({
    MainFrontEnd: ["React"],
    OtherFrontEnd: ["Vue.js", "Next.JS", "Angular", "CSS3", "OAuth", "TypeScript"],
    MainBackEnd: ["Python", "Node.js"],
    OtherBackEnd: [ "C#",  "Java", "PHP", "Node.js", "Django", "Go-Lang"],
    MainCloud: ["Azure"],
    OtherCloud: ["AWS", "GCP"],
    DBTechnologies: ["NoSQL", "MySQL"],
    OtherDbTechnologies:["SQLAlchemy"],
    MainDevOpsTools: ["Kubernetes", "Jenkins", "Docker"],
    OtherDevOpsTools: ["Docker", "GitHub Actions", "Ansible"],
    CodingLanguages: ["Java", "Python", "C#", "C++", "Kotlin"],
    OtherLanguages: ["React Native", "Android", "RabbitMQ", "Redis", "Kafka", "GraphQL"],
    MissingKeywords: MissingKeywords,
    Ishighlight: false,
  })


  return (
    <div className="App">
      <SettingsPop Technologies={Technologies} setTechnologies={setTechnologies}/>
      <Portfolio Technologies={Technologies}/>
      {/* <TabChanger/> */}
    </div>
  );
}

export default App;
