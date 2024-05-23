
import React from 'react'; 
import './ExperienceProjects.css';

const ExperienceProjects = () => {
    return (
        <section id="experience-projects" className="experience-projects-section">
            <h2>Experience and Projects</h2>
            <div className="experience">
                <h3>University Project: Autonomous Vehicle Development (2023)</h3>
                <div>
                    <div className="experience-container">
                        <h4>Student Research Assistant - University Carlos III of Madrid (2020-2021)</h4>
                        <p>As a student research assistant at the University Carlos III of Madrid, I had the opportunity to contribute to an exciting project focused on the development of an autonomous vehicle prototype. My role involved collaborating with a multidisciplinary team of engineers and researchers to design and implement software algorithms for navigation, obstacle detection, and control systems.</p>
                        <p>Specifically, I worked on the development and optimization of computer vision algorithms using Python and OpenCV to enable the vehicle to detect and classify objects in its environment. I also participated in simulation studies to test the performance of the autonomous navigation system under various conditions.</p>
                        <p>This project provided me with invaluable hands-on experience in autonomous systems and reinforced my skills in software development, problem-solving, and teamwork. It was a rewarding opportunity to apply classroom knowledge to real-world challenges and contribute to the advancement of autonomous vehicle technology.</p>
                    </div>
                </div>
            </div>
            <div className="projects">
                <h3>Projects</h3>
                <div className="experience-container">
                    <div>
                        <h4>Programmed Mario Bros Game (2023)</h4>
                        <p>For this project, I developed a clone of the popular Mario Bros game using the Python programming language and the Pygame library. The game included implementing basic game mechanics such as character movement, collision detection, interaction with objects and enemies, as well as creating levels using a custom map editor. I utilized object-oriented programming (OOP) techniques to structure the code in a modular way, making it easier to maintain and extend in the future.</p>
                    </div>
                    <div>
                        <h4>Reinforcement Learning Implementation in Pac-Man (2022)</h4>
                        <p>In this project, I applied reinforcement learning techniques to develop an agent capable of playing the classic Pac-Man game autonomously. I implemented learning algorithms such as Q-Learning or Deep Q-Networks (DQN) using machine learning libraries such as TensorFlow or PyTorch. The goal was to train the agent to navigate through the maze, avoiding ghosts, and collecting points without losing lives. I experimented with different hyperparameter configurations and neural network architectures to improve the agent's performance and achieve competitive results.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceProjects;
