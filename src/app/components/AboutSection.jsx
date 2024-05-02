"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>JavaScript</li>
        <li>SQL</li>
        <li>React</li>
        <li>C/C++</li>
        <li>Java</li>
        <li>Spring Boot</li>
        <li>JPA</li>
        <li>ServiceNow</li>
        <li>JellyScript</li>
        <li>Next.js</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2 mb-2">
        <li>
          <b>PwC - Cyber Risk & Reg Associate (ServiceNow Developer)</b>
          <ul>
            <li>Aug, 2023 - Current</li>
            <li>
              Working as a ServiceNow Application developer. Also, currently
              leading a ServiceNow Business Continuity Management Project.
            </li>
            <li>
              {" "}
              Delivered multiple ServiceNow Projects and worked on complex
              scripts using JavaScript and Jelly-Script.
            </li>
            <li>
              {" "}
              Gained hands-on experience in the end-to-end project life-cycle by
              covering development, testing and production phases
            </li>
          </ul>
        </li>
        <li>
        <b>PwC - Cyber Risk & Reg Intern (ServiceNow Developer)</b>
          <ul>
            <li>March, 2023 - Aug, 2023</li>
            <li>Worked as a ServiceNow Application developerfor various GRC modules.</li>
            <li> Gained hands-on experience with the ServiceNow cloud platform by creating
client scripts, business rules, script includes, workflows, scheduled jobs, ACLs,
emails & notifications, creating portals and enhancing workspaces</li>
          </ul>
        </li>
        <li>
        <b>Morgan Stanley - Technology Analyst Intern</b>
          <ul>
            <li>May, 2022 - July, 2022</li>
            <li>Worked on the back-end and made REST APIs for comparison and
manipulation between large databases.</li>
            <li>Prepared and submitted presentation and otherrequired documentation to
assist development team members.</li>
            <li>Tech stack used: Java, Spring Boot, JPA, Jenkins, SQL</li>
          </ul>
        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2 mb-2">
        <li>
          Computer Science and Engineering (B-Tech)
          <ul>
            <li>2019-2023</li>
            <li>Graphic Era University, Dehradun</li>
            <li>CGPA - 9.12/10</li>
          </ul>
        </li>
        <li>
          Higher Secondary (PCM)
          <ul>
            <li>2019</li>
            <li>GGN Public School, Ludhiana</li>
            <li>Percentage - 89%</li>
          </ul>
        </li>
        <li>
          High School
          <ul>
            <li>2017</li>
            <li>GGN Public School, Ludhiana</li>
            <li>CGPA - 10/10</li>
          </ul>
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>ServiceNow Business Continuity Management</li>
        <li>Basic Principles of Design by IBM</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a Software developer with a passion for creating
            interactive and optimal solutions. I have experience
            working with JavaScript, React, Node.js, Java, Spring Boot, C/C++,
            HTML, CSS, Git, SQL, ServiceNow cloud platform. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player
            and I am excited to work with others to create amazing
            applications.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
