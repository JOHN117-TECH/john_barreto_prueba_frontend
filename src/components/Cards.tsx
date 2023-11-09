import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
const Cards = () => {
  const contentCards = [
    {
      img: 'https://cdn.pixabay.com/photo/2017/01/25/17/35/picture-2008484_1280.png',
      title: 'Lorem ipsum',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quae nobis voluptates voluptatum magni, inventore dolor praesentium est, voluptatem libero ullam perferendis illo minima explicabo esse repellat, recusandae consectetur assumenda dolorum quis iste iure. Asperiores sit iste error, nostrum nulla, sint voluptatibus modi, nihil placeat sed magni. Adipisci, quisquam libero!',
    },
    {
      img: 'https://cdn.pixabay.com/photo/2017/01/25/17/35/picture-2008484_1280.png',
      title: 'Lorem ipsum',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quae nobis voluptates voluptatum magni, Adipisci, quisquam libero!',
    },
    {
      img: 'https://cdn.pixabay.com/photo/2017/01/25/17/35/picture-2008484_1280.png',
      title: 'Lorem ipsum',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quae nobis voluptates voluptatum magni, inventore dolor praesentium est, voluptatem libero ullam perferendis illo minima explicabo esse repellat, recusandae consectetur assumenda dolorum quis iste iure. Asperiores sit iste error, nostrum nulla, sint voluptatibus modi, nihil placeat sed magni. Adipisci, quisquam libero!',
    },
    {
      img: 'https://cdn.pixabay.com/photo/2017/01/25/17/35/picture-2008484_1280.png',
      title: 'Lorem ipsum',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit.inventore dolor praesentium est, voluptatem libero ullam perferendis illo minima explicabo esse repellat, recusandae consectetur assumenda dolorum quis iste iure. Asperiores sit iste error, nostrum nulla, sint voluptatibus modi, nihil placeat sed magni. Adipisci, quisquam libero!',
    },
    {
      img: 'https://cdn.pixabay.com/photo/2017/01/25/17/35/picture-2008484_1280.png',
      title: 'Lorem ipsum',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quae nobis voluptates voluptatum magni, inventore dolor praesentium est, voluptatem libero ullam perferendis illo minima explicabo esse repellat, recusandae consectetur assumenda dolorum quis iste iure. Asperiores sit iste error, nostrum nulla, sint voluptatibus modi, nihil placeat sed magni. Adipisci, quisquam libero!',
    },
    {
      img: 'https://cdn.pixabay.com/photo/2017/01/25/17/35/picture-2008484_1280.png',
      title: 'Lorem ipsum',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quisquam libero!',
    },
    {
      img: 'https://cdn.pixabay.com/photo/2017/01/25/17/35/picture-2008484_1280.png',
      title: 'Lorem ipsum',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quae nobis voluptates voluptatum magni, inventore dolor praesentium est, voluptatem libero ullam perferendis illo minima explicabo esse repellat, recusandae consectetur assumenda dolorum quis iste iure. Asperiores sit iste error, nostrum nulla, sint voluptatibus modi, nihil placeat sed magni. Adipisci, quisquam libero!',
    },
    {
      img: 'https://cdn.pixabay.com/photo/2017/01/25/17/35/picture-2008484_1280.png',
      title: 'Lorem ipsum',
      content:
        'Aspernatur quae nobis voluptates voluptatum magni, inventore dolor praesentium est, voluptatem libero ullam perferendis illo minima explicabo esse repellat, recusandae consectetur assumenda dolorum quis iste iure. Asperiores sit iste error, nostrum nulla, sint voluptatibus modi, nihil placeat sed magni. Adipisci, quisquam libero!',
    },
  ];

  return (
    <div className="ContainerCards">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        navigation={true}
        centeredSlides={true}
        loop={true}
        modules={[Navigation]}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1440: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
        }}
        className="mySwiper"
      >
        {contentCards.map((card) => (
          <SwiperSlide key={card.title} className="mySwiper__card">
            <img className="mySwiper__card--img" src={card.img} alt="" />
            <h2 className="mySwiper__card--title">{card.title}</h2>
            <p className="mySwiper__card--content">{card.content}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Cards;
