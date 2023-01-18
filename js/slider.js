
{

    const data =[
        {
            photo: './images/slider/RonaldRichards.png',
            name: 'Ronald Richards',
            jobtitle: 'Product Manager',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione veritatis repellat aliquam ipsa fugit eos ipsum. Dolorum, quo. Inventore dolore magni vitae, enim officiis iste quo architecto accusamus dignissimos ut?',

        },
        {
            photo: './images/slider/HildaHolmes.png',
            name: 'Hilda Holmes',
            jobtitle: 'Designer',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione veritatis repellat aliquam ipsa fugit eos ipsum. Dolorum, quo. Inventore dolore magni vitae, enim officiis Ratione veritatis repellat aliquam ipsa fugit eos ipsum. Dolorum, quo. Inventore dolore magni vitae, enim officiis iste quo architecto accusamus dignissimos ut?',

        },
        {
            photo: './images/slider/JasonHarris.png',
            name: 'Jason Harris',
            jobtitle: 'CEO',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione veritatis repellat aliquam ipsa fugit eos ipsum. Dolorum, quo. Inventore dolore magni vitae, enim officiis iste quo architecto accusamusadipisicing elit. Ratione veritatis repellat aliquam ipsa fugit eos ipsum. Dolorum, quo. Inventore dolore magni vitae, enim officiis iste quo architecto accusamus dignissimos ut?',

        },
    ]

    const htmlString = data.map(item => `<div class="swiper-slide">
                                        <div class="image-block">
                                        <div class="img-wrapper">
                                            <div class="decor-circle"><img  src="./images/slider/circle.png" alt="decor"></div>
                                            <img src=${item.photo} alt="user">
                                            <div class="info">
                                            <p class="name">
                                                ${item.name}
                                            </p>
                                            <p class="jobtitle">
                                                ${item.jobtitle}
                                            </p>
                                            </div>
                                        </div>

                                        </div>
                                        <div class="text-block">
                                        <p>
                                            ${item.text}
                                        </p>

                                        <div class="img-wrapper">
                                            <img src="./images/slider/decor.svg" alt="decor">
                                        </div>

                                        </div>

                                    </div>
    `).join('')

     

    document.querySelector('.swiper-wrapper').insertAdjacentHTML('afterbegin', htmlString);


const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 1,
    speed: 1500,
    loop: true,
    centeredSlides: true,


    // Navigation arrows
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
  });}