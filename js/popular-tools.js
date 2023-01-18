


{const data = [
    {
        img: './images/popular-tools/icon-figma.svg',
        title: 'FIGMA',
        cost: 'Free',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        href: 'https://www.figma.com/',
        download: 'https://www.figma.com/downloads/',
    },
    {
        img: './images/popular-tools/icon-sketch.svg',
        title: 'Sketch',
        cost: 'Trial & Paid',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        href: 'https://www.sketch.com/',
        download: 'https://www.sketch.com/apps/',
    },
    {
        img: './images/popular-tools/icon-vscode.svg',
        title: 'Visual Studio Code',
        cost: 'Free',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        href: 'https://www.figma.com/',
        download: 'https://www.figma.com/downloads/',
    },
    {
        img: './images/popular-tools/icon-notion.svg',
        title: 'Notion',
        cost: 'Free & Paid',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        href: 'https://www.notion.so/',
        download: 'https://www.notion.so/desktop',
    },
    {
        img: './images/popular-tools/icon-slack.svg',
        title: 'Slack',
        cost: 'Free & Paid',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        href: 'https://slack.com/',
        download: 'https://slack.com/downloads/',
    },
    {
        img: './images/popular-tools/icon-invision.svg',
        title: 'Invision',
        cost: 'Free & Paid',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        href: 'https://www.invisionapp.com/',
        download: 'https://www.invisionapp.com/',
    },
]

const htmlString = data.map(item => `<div class="card">

                                    <div class="title-wrapper">
                                    <div class="img-wrapper">
                                        <img src=${item.img} alt="icon">
                                    </div>
                                    <div class="title">
                                        <h3>
                                        ${item.title}
                                        </h3>
                                        <p class="cost">
                                        ${item.cost}
                                        </p>
                                    </div>
                                    </div>

                                    <p class="descripton">
                                    ${item.description}
                                    </p>

                                    <div class="bottom-block">
                                    <div class="images-wrapper">
                                        <div class="img-wrapper">
                                        <svg onclick="toggleLike(event)" width="26" height="22" viewBox="0 0 26 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.8333 0.25C16.3833 0.25 14.225 1.475 13 3.4C11.775 1.475 9.61667 0.25 7.16667 0.25C3.31667 0.25 0.166672 3.4 0.166672 7.25C0.166672 14.1917 13 21.25 13 21.25C13 21.25 25.8333 14.25 25.8333 7.25C25.8333 3.4 22.6833 0.25 18.8333 0.25Z" />
                                            </svg>
                                        </div>
                                        <div class="img-wrapper">
                                        <a href=${item.download} target="_blank"><img src="./images/popular-tools/icon-folder.svg" alt="folder"></a>
                                        </div>
                                    </div>

                                    <div>
                                        <a class="button" href=${item.href} target="_blank">Visit</a>
                                    </div>

                                    </div>

                                    </div>
`).join('')

document.querySelector('.popular-tools .cards-wrapper').innerHTML = htmlString}


function toggleLike(event) {

    event.target.closest('svg').classList.toggle('like')
    
}