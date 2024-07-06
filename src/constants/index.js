import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";

export const HERO_CONTENT = `I'm a pre-final year student, pursuing B.Tech. in Computer Science and Engineering at Indira Gandhi Delhi Technical University for Women. I am an enthusiastic learner skilled in programming languages such as C, C++, and Python.`;

export const ABOUT_TEXT = `It's amazing to realise how tech makes the way for solutions of the real-world problems. This is something what excites me about the technical domains. I am passionate about Front-end Web Development, Machine Learning, UI/UX Designing along with Graphic Designing. Currently delving into Data Structures and Algorithms, coding the optimisations have become a daily task. As an enthusiastic learner and a team-worker, I'm venturing as Creative Head at Finivesta, IGDTUW.
Let's Connect for the insights together towards the Tech World :))`;

export const PROJECTS = [
  {
    title: "Portfolio Website",
    image: project1,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React"],
    website: "", // Replace with your actual website URL
  },
  {
    title: "Over-The-Top Customer Churn Prediction",
    image: project2,
    description:
      "A comprehensive study implemented on the dataset using Machine Learning models and Exploratory Data Analysis.",
    technologies: ["Python", "Google Colab", "Numpy", "Pandas", "Matplotlib"],
    website:
      "https://colab.research.google.com/drive/1yqhfObvmKvLeO5SzY2Y-jV8i0vEoHEYD?authuser=0#scrollTo=fWjNQsB0Yg-C", // Replace with your actual website URL
  },
  {
    title: "Iris Flower Classification",
    image: project3,
    description:
      "A classification model trained over the dataset to classify Iris flower species based on its features.",
    technologies: ["Python", "Google Colab", "Numpy", "Pandas", "Matplotlib"],
    website:
      "https://colab.research.google.com/drive/1itUwu3NwVSgQMxBkSXZnvkMDYOCNhqXs?usp=sharing", // Replace with your actual website URL
  },
  {
    title: "E-Waste Facility Locator",
    image: project4,
    description:
      "A prototype developed for the website and idea of ReDhatu: An E-Waste Facility Locator.",
    technologies: ["Figma", "Canva"],
    website: "https://bit.ly/redhatuprototype", // Replace with your actual website URL
  },
  {
    title: "Luminous Labyrinth",
    image: project5,
    description:
      "A 3-D version of nostalgic Pacman game with some latest twists and experiences.",
    technologies: ["Unity", "C#", "Canva"],
    website:
      "https://drive.google.com/file/d/1Ed9_iPMbSM6ax8L4N_3lZvQLErGI6UGj/view?usp=drivesdk", // Replace with your actual website URL
  },
];
