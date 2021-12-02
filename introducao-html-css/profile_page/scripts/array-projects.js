var projects = [
    {
        image: "./images/projetos/5.png",
        name: "Imersão DEV_ 2021)",
        description: "Projetos desenvolvidos na Imersão DEV_ da Alura, utilizando HTML, CSS Javascript e a ferramente Online Figma para construção de interfaces." ,
        link: "https://octacilio-dev.netlify.app/"
    },
    {
        image: "./images/projetos/1.png",
        name: "AluraQuiz",
        description: "Projeto desenvolvido na Imersão Next.js, evento promovido pela Alura Cursos Online",
        link: "https://aluraquiz-octa-fdg68mufy.vercel.app"
    },
    {
        image: "./images/projetos/2.png",
        name: "Ajude sua ONG (WEB/Desktop)",
        description: "Projeto desenvolvido na Imersão Next.js, evento promovido pela Alura Cursos Online",
        link: "https://www.figma.com/proto/69XniHqaVpXdwpFGd9ciUO/Plataforma-de-financiamento?node-id=1%3A2&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A2&show-proto-sidebar=1"
    },
    {
        image: "./images/projetos/2.png",
        name: "Ajude sua ONG (WEB/Mobile)",
        description: "Projeto desenvolvido na Imersão Next.js, evento promovido pela Alura Cursos Online",
        link: "https://www.figma.com/proto/pLtYeRKIjoyOmXJ87JGzax/platFinanci-(mobile)?node-id=1%3A2&scaling=scale-down&page-id=0%3A1&starting-point-node-id=4%3A172&show-proto-sidebar=1"
    },
    {
        image: "./images/projetos/4.png",
        name: "DS Vendas (Dev Superior)",
        description: "Projeto desenvolvido na Semana Spring React 0.4, evento oferecido pela DevSuperior",
        link: "https://octa-spring-week-project.netlify.app"
    },

]

function listProjects() {
    var listProjects = document.getElementById('list-projects')

    projects.map((project) => {
        var newProject = `
        <section class="project">
            <img class="img-project" src="${project.image}" alt="">
            <div class="project-content">
                <header>
                    <h2>${project.name}</h2>
                </header>
                <article>
                    ${project.description}
                </article>
            </div>
                <a target="_blank" class="link-project" href="${project.link}">Acessar site</a>
        </section>
        `

        listProjects.innerHTML += newProject;
    })
}