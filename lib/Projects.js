import Furniking from "../public/Assets/furniking.jpg"
import Food from "../public/Assets/food.jpg"
import Travel from "../public/Assets/travel.jpg"
import Newcast from "../public/Assets/newcast.jpg"
import Blog from "../public/Assets/blog.jpg"
import Cmp from "../public/Assets/cmp.jpg"
import Imprium from "../public/Assets/imperium.jpg"
import MY from "../public/Assets/my.jpg"
import TaxPal from "../public/Assets/TaxPal.png"

export let data = [
  {
    id: 1,
    title: "My Portifolio",
    bacImg: MY,
    projectUrl: "/portifolio",
    skill: "Next.js"
  },
  {
    id: 9,
    title: "TaxPal",
    bacImg: TaxPal,
    projectUrl: "/taxpal",
    skill: "Apline.js"
  },
  {
    id: 2,
    title: "furniking",
    bacImg: Furniking,
    projectUrl: "/furniking",
    skill: "javascript"
  },
  {
    id: 3,
    title: "Food",
    bacImg: Food,
    projectUrl: "/food",
    skill: "React.js"
  },
  {
    id: 4,
    title: "travel",
    bacImg: Travel,
    projectUrl: "/travel",
    skill: "Next.js"
  },
  {
    id: 5,
    title: "Newcast",
    bacImg: Newcast,
    projectUrl: "/newcast",
    skill: "javascript"
  },
  {
    id: 6,
    title: "Bobur Blog",
    bacImg: Blog,
    projectUrl: "/blog",
    skill: "React.js"
  },
  {
    id: 7,
    title: "CMP",
    bacImg: Cmp,
    projectUrl: "/cmp",
    skill: "Next.js"
  },
  {
    id: 8,
    title: "IMPERIUM",
    bacImg: Imprium,
    projectUrl: "/imperium",
    skill: "React.js"
  },
]

export const Project = [
  {
    id: 1,
    title: "My Portifolio",
    route: "portifolio",
    subTitle: "Next js / Taillwind css / API",
    bacImg: MY,
    skills: ["Next.js", "javascript ES6", "Tailwind css", "SCSS", "AOS"],
    description: ["Welcome to my website! This site has been created using Alpine.js, Tailwind CSS, and HTML to provide an interactive and visually appealing experience. With a range of special effects and sliders, this website is designed to captivate and engage visitors.", "Alpine.js is a lightweight JavaScript framework that enables dynamic interactivity on web pages. It allows for the creation of various effects such as animations, transitions, and data-driven interactions, enhancing the overall user experience.", "Tailwind CSS is a utility-first CSS framework that provides a collection of pre-designed classes for rapid and efficient styling. It offers a wide range of customizable components and responsive layouts, ensuring that your website looks great on any device.", "Combining Alpine.js and Tailwind CSS, this website achieves seamless integration between interactivity and design. Whether you're looking for eye-catching animations or smooth transitions between elements, this website has it all.", "Furthermore, this website features sliders that allow for intuitive navigation and content presentation. Sliders are an excellent way to showcase images, products, or any other content that can be organized into a visually appealing and interactive format.", "In summary, this website showcases the power of Alpine.js, Tailwind CSS, and HTML in creating an engaging and visually stunning web experience. Explore the site to discover the captivating effects and sliders that make this website truly unique."],
    demo: "https://sb-beryl.vercel.app/",
    code: "https://github.com/baxriddin0317/SB"
  },
  {
    id: 9,
    title: "TaxPal",
    route: "taxpal",
    subTitle: "Alpine js / Taillwind css / HTML%",
    bacImg: TaxPal,
    skills: ["Alpine.js", "javascript ES6", "Tailwind css", "SCSS", "HTML5"],
    description: ["I have created a personal portfolio website using Next.js and Tailwind CSS, showcasing information about myself, my background, and the projects I have worked on.", "My portfolio website offers a visually appealing and interactive platform for visitors to learn more about me and my professional journey. The use of Next.js ensures efficient rendering and seamless navigation throughout the website.", "The website incorporates a clean and modern design aesthetic with the help of Tailwind CSS. Thoughtfully chosen color schemes, typography, and layout contribute to a visually cohesive and engaging user experience. The responsive design ensures that the website is accessible and optimized across various devices and screen sizes.", "The homepage of my portfolio website presents an introduction about myself, highlighting my skills, experiences, and areas of expertise. It provides an overview of my background, education, and professional achievements, giving visitors a clear understanding of who I am as a professional.", "The projects section showcases the work I have done. It includes descriptions and details of various projects I have completed, highlighting the technologies used, my role, and the outcomes achieved. Visitors can explore each project and view screenshots or demos to get a better sense of my capabilities and the quality of my work.", "The portfolio website is developed using Next.js, which offers server-side rendering capabilities, allowing for fast and optimized page loading. This ensures a smooth and efficient browsing experience for visitors.", "Overall, my portfolio website, built with Next.js and Tailwind CSS, provides an impressive platform for showcasing my skills, experiences, and projects. The combination of these technologies creates a visually appealing and responsive website that effectively communicates my professional profile to potential clients or employers."],
    demo: "https://taxpal-kohl.vercel.app/",
    code: "https://github.com/baxriddin0317/taxpal"
  },
  {
    id: 2,
    title: "furniking",
    route: "furniking",
    subTitle: "Javascript / SCSS / HTML5",
    bacImg: Furniking,
    skills: ["javascript ES6", "SCSS", "HTML5", "CSS",],
    description: ["I have created a responsive and intuitive website using the technologies of Furniking, including JavaScript, CSS, SCSS, and HTML. Furniking is providing a collaborative and quality work environment.", "Furniking is optimized to function seamlessly on various devices and browsers, regardless of their size or type. The website enables users to search for different types of accommodations, such as hotels and apartments, manage their bookings, and request services.", "With its responsive design, Furniking ensures that the website adapts well to both large screens and mobile devices, allowing users to access and navigate the site easily from any device.", "JavaScript and CSS have been utilized to create an interactive and visually appealing experience. The website incorporates various animations, transitions, and interactive elements to offer an engaging user experience.", "Furniking has been developed using SCSS (Sass) and CSS, enabling efficient styling and customization. The use of these technologies ensures a visually appealing and user-friendly design for the website."],
    demo: "https://furniking-xoja.netlify.app/",
    code: "https://github.com/baxriddin0317/furniking"
  },
  {
    id: 3,
    title: "food",
    route: "food",
    subTitle: "React js / Javascript / API",
    bacImg: Food,
    skills: ["React.js", "javascript ES6", "SCSS", "HTML5", "CSS",],
    description: ["I have developed a Food website using the technologies of React.js, JavaScript, CSS, and HTML. The website serves as an online platform for food enthusiasts, offering a variety of features and functionalities.", "With its dynamic and interactive design, the Food website provides users with a seamless browsing experience. The use of React.js allows for efficient rendering and updating of content, ensuring fast and responsive navigation.", "The website showcases a wide range of culinary options, including recipes, cooking tips, restaurant recommendations, and food-related articles. Users can explore different categories, search for specific recipes, and save their favorite dishes for future reference.", "The intuitive user interface, designed using CSS and HTML, offers a visually appealing layout with carefully selected color schemes, typography, and imagery. The website's responsive design ensures compatibility across different devices, enabling users to access the platform from desktop computers, laptops, tablets, and mobile phones.", "In summary, the Food website, developed using React.js, JavaScript, CSS, and HTML, provides food enthusiasts with a comprehensive platform to explore, discover, and engage with a wide range of culinary content."],
    demo: "https://food-xoja.netlify.app/",
    code: "https://github.com/baxriddin0317/Food"
  },
  {
    id: 4,
    title: "travel",
    route: "travel",
    subTitle: "React js / Swipper js / Javascript",
    bacImg: Travel,
    skills: ["React.js", "javascript ES6", "Swipper.js", "Tailwind css", "CSS",],
    description: ["I have developed a Travel website using React.js, JavaScript, CSS, and HTML, with the added feature of language selection. The website offers a seamless browsing experience for users interested in travel and exploration.", "With its dynamic and interactive design powered by React.js, the Travel website ensures efficient rendering and updating of content, providing users with a smooth and responsive navigation experience.","One of the notable features of the Travel website is the language selection option. Users can choose their preferred language to enhance their browsing experience and access content in their native language. This feature adds a personalized touch and improves user engagement.","The website's visually appealing layout, created using CSS and HTML, combines attractive design elements, intuitive navigation menus, and captivating imagery to provide an immersive travel experience. The responsive design ensures that the website is accessible across various devices, including desktop computers, laptops, tablets, and mobile phones.","JavaScript has been utilized to enhance interactivity throughout the website. It enables features such as interactive maps, photo galleries, user reviews, and integrated booking functionalities, ensuring an engaging user experience.","In summary, the Travel website, developed using React.js, JavaScript, CSS, and HTML, offers travel enthusiasts a comprehensive platform to explore, plan, and book their travel experiences. With the added feature of language selection, users can enjoy the website's content in their preferred language, further enhancing their travel journey."],
    demo: "https://xoja-turism.netlify.app/",
    code: "https://github.com/baxriddin0317/turism"
  },
  {
    id: 5,
    title: "Newcast",
    route: "newcast",
    subTitle: "React js / Swipperjs / API",
    bacImg: Newcast,
    skills: ["React.js", "javascript ES6", "Swipper.js", "CSS",],
    description: ["I have developed a News website using React.js, JavaScript, CSS, and HTML, incorporating a rich carousel experience using Swiper.js. The website offers an immersive and visually engaging platform for users to stay updated with the latest news and information.", "One of the prominent features of the website is the implementation of Swiper.js, which enables the creation of multiple carousels throughout the site. These carousels showcase a variety of news articles, images, videos, and other media elements, providing users with an intuitive and visually appealing way to navigate and explore the content.", "The News website offers a diverse range of news categories, including politics, sports, entertainment, technology, and more. Users can easily navigate through these categories, access detailed articles, view related multimedia content, and share articles on social media platforms.", "With its advanced search functionality, users can quickly find specific news articles or topics of interest. The website also incorporates features like personalized user profiles, bookmarking articles, and subscribing to newsletters, enhancing user engagement and customization.", "In summary, the News website, developed using React.js, JavaScript, CSS, and HTML, provides users with an immersive and interactive platform to stay informed about the latest news. The integration of Swiper.js adds a visually captivating element with multiple carousels, enhancing the user experience and making the browsing journey more engaging."],
    demo: "https://newscast-xoja.netlify.app/",
    code: "https://github.com/baxriddin0317/Newscast"
  },
  {
    id: 6,
    title: "Bobur Blog",
    route: "blog",
    subTitle: "React js / HTML / API",
    bacImg: Blog,
    skills: ["React.js", "javascript ES6", "SCSS", "CSS",],
    description: ["I have developed a Blog website called 'Bobur Blog' using React.js, JavaScript, CSS, and HTML. The website is designed to provide an intuitive and user-friendly platform for blogging and content discovery.", "Bobur Blog features a powerful search system specifically tailored for blogs. Users can easily search for specific articles or topics of interest using keywords, tags, or categories. The search functionality ensures efficient and accurate results, allowing users to find relevant blog posts quickly.","With its dynamic and interactive design powered by React.js, the Bobur Blog website offers a seamless browsing experience. The website efficiently renders and updates content, ensuring fast and responsive navigation for users.", "In summary, Bobur Blog, developed using React.js, JavaScript, CSS, and HTML, offers users a user-friendly and engaging platform for blogging and content discovery. With its advanced search system and interactive features, users can easily explore, read, and interact with blog posts in a seamless manner."],
    demo: "https://blog-xoja.netlify.app/",
    code: "https://github.com/baxriddin0317/blog"
  },
  {
    id: 7,
    title: "CMP",
    route: "cmp",
    subTitle: "React js / HTML / HTML",
    bacImg: Cmp,
    skills: ["React.js", "javascript ES6", "Tailwind css", "CSS", "AOS"],
    description: ["I have developed a Creative Marketing website using React.js, Tailwind CSS, and the AOS (Animate On Scroll) library, incorporating beautiful effects and animations. The website provides a visually appealing and engaging platform for showcasing creative marketing services.", "Tailwind CSS is employed for streamlined and efficient styling, providing a clean and modern design aesthetic. The website's layout and visual elements are thoughtfully designed to create a visually appealing and professional look. Tailwind CSS allows for rapid development and easy customization, ensuring a consistent and visually cohesive user experience.", "The AOS library adds captivating and eye-catching effects to the website. AOS enables beautiful animations and transitions triggered by scrolling, enhancing the overall visual experience and making the content more engaging. These effects can include fade-ins, slide-ins, and other dynamic animations that add a touch of creativity to the website's elements.", "In summary, the Creative Marketing website, developed using React.js, Tailwind CSS, and the AOS library, offers a visually captivating and user-friendly platform for showcasing marketing services. The combination of these technologies ensures a seamless browsing experience with visually appealing effects and animations that capture the attention of visitors."],
    demo: "https://xoja-cmp.netlify.app/",
    code: "https://github.com/baxriddin0317/cmp"
  },
  {
    id: 8,
    title: "Imperium",
    route: "imperium",
    subTitle: "React js / Javascript / API",
    bacImg: Imprium,
    skills: ["Next.js", "javascript ES6", "Tailwind css", "SCSS", "AOS"],
    description: ["I have developed an Imperium website featuring user registration functionality and a visually stunning admin panel. This website is built using React.js and SCSS (Sass) technologies, providing an immersive and dynamic platform for Imperium.", "The Imperium website offers a seamless user registration process. Users can easily create an account by providing their essential information, such as name, email, and password. The registration feature ensures a secure and personalized experience, allowing users to access additional features and interact with the website's content.", "In addition, the website incorporates a beautifully designed admin panel. The admin panel serves as a centralized hub for authorized users, empowering them to manage various aspects of the website efficiently. With the admin panel, administrators can handle user accounts, update content, monitor analytics, and perform other administrative tasks effortlessly.", "The Imperium website showcases a range of features and services, such as product listings, portfolio showcases, and client testimonials. Users can explore the website's content, access detailed information, and interact with the provided functionalities.", "With its visually stunning design, seamless user registration, and intuitive admin panel, the Imperium website offers a comprehensive and engaging platform for users and administrators alike.", "Overall, the Imperium website, developed using React.js and SCSS, provides an immersive experience for users, offering user registration capabilities and an aesthetically pleasing admin panel for efficient website management."],
    demo: "https://xoja-imperium.netlify.app/",
    code: "https://github.com/baxriddin0317/Imperium"
  }
]