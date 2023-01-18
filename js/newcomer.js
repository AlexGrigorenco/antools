{

const data = [
    {
        img: './images/newcomer/icon-zeplin.svg',
        title: 'Zeplin',
        cost: 'Free & Paid',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        href: 'https://zeplin.io/',
        download: 'https://zeplin.io/',
    },
    {
        img: './images/newcomer/icon-phpstorm.svg',
        title: 'PHPStorm',
        cost: 'Free',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        href: 'https://www.jetbrains.com/ru-ru/phpstorm/',
        download: 'https://www.jetbrains.com/ru-ru/phpstorm/download/',
    },
    {
        img: './images/newcomer/icon-toolbox.svg',
        title: 'Toolbox',
        cost: 'Free',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        href: 'https://www.jetbrains.com/',
        download: 'https://www.jetbrains.com/toolbox-app/',
    },
    {
        img: './images/newcomer/icon-procreate.svg',
        title: 'Procreate',
        cost: 'Paid',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        href: 'https://procreate.com/',
        download: 'https://procreate.com/ipad',
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

document.querySelector('.newcomer .cards-wrapper').innerHTML = htmlString}