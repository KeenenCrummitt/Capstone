import { Carousel } from "@material-tailwind/react";

export function CarouselTransition() {
  return (
    <Carousel transition={{ duration: 2 }} className="rounded-xl">
      <img
        src="/public/Home-Page-5.png"
        alt="Plumber-Tom Homepage"
        className="h-full w-full object-cover"
      />
      <img
        src="/public/YouTube-Page.png"
        alt="Plumber-Tom YouTube Page"
        className="h-full w-full object-cover"
      />
      <img
        src="/public/Study-Resources.png"
        alt="Plumber-Tom Study Resources Page"
        className="h-full w-full object-cover"
      />
      <img
        src="/public/About_Page.png"
        alt="Plumber-Tom About Page"
        className="h-full w-full object-cover"
      />
      <img
        src="/public/Homepage-1.png"
        alt="YellowStone Homepage 1"
        className="h-full w-full object-cover"
      />
      <img
        src="/public/Homepage-2.png"
        alt="YellowStone Homepage 2"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}
