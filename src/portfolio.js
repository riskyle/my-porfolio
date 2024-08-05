const header = {
    // all the properties are optional - can be left empty or deleted
    homepage: 'https://github.com/riskyle/my-portfolio.git',
    title: 'KYLE.',
}

const about = {
    // all the properties are optional - can be left empty or deleted
    name: 'Christian Kyle',
    role: 'Software Developer Student',
    description:
        'I\'m an IT student from the Philippines. With a comprehensive grasp of my responsibilities and a keen eye for improvement, I am committed to streamlining processes and finding innovative ways to enhance efficiency. The education I have received provides me with a solid foundation in technical knowledge and problem-solving skills, which I leverage in my pursuit of excellence.',
    resume: 'https://drive.google.com/file/d/1UFIEcwmwFC8NdCOV-ZOjDphbGMKEBdqk/view?usp=sharing',
    social: {
        linkedin: 'https://www.linkedin.com/in/riskyle',
        github: 'https://github.com/riskyle',
    },
}

const projects = [
    // projects can be added an removed
    // if there are no projects, Projects section won't show up
    {
        name: 'Cy Vega Electronic Shop',
        description:
            'Cy Vega Electronic Shop is a dynamic and user-friendly e-commerce platform designed to provide customers with a seamless and enjoyable shopping experience for all their electronic needs. The platform offers a wide range of high-quality electronic products, including the latest gadgets, accessories, and home electronics, all at competitive prices',
        stack: ['CSS', 'Bootstrap', 'PHP', 'JavaScript', 'MySql', 'PhpMyAdmin'],
        sourceCode: 'https://github.com/riskyle/cy-vega-electronic-shop',
        livePreview: 'https://vega-shop.wuaze.com/',
    },
    {
        name: 'Furniture Shop',
        description:
            'Furniture Shop is an online platform dedicated to offering a wide range of high-quality furniture and home decor solutions. Catering to various styles and preferences, this website provides a user-friendly shopping experience for customers looking to enhance their living spaces',
        stack: ['CSS', 'PHP', 'JavaScript', 'MySql', 'PhpMyAdmin'],
        sourceCode: 'https://github.com/riskyle/furniture-shop.git',
        livePreview: 'https://furniture.is-best.net/user/index.php',
    },
]

const skills = [
    // skills can be added or removed
    // if there are no skills, Skills section won't show up
    "PHP",
    "Laravel",
    "Python",
    "Django",
    "HTML",
    "Javascript",
    "JQuery",
    "Back end coding",
    "Problem-Solving",
    'Git',
]

const contact = {
    // email is optional - if left empty Contact section won't show up
    email: 'cautor3@gmail.com',
}

export { header, about, projects, skills, contact }