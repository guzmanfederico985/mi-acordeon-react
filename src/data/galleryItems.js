const base = process.env.PUBLIC_URL;

const galleryItems = [
  {
    id: 1,
    type: "img",
    src: `${base}/img/yo-acordeon-1.jpg`,
    alt: "Yo tocando el acordeón 1",
  },
  {
    id: 2,
    type: "img",
    src: `${base}/img/yo-acordeon-2.jpg`,
    alt: "Yo tocando el acordeón 2",
  },
  {
    id: 3,
    type: "img",
    src: `${base}/img/yo-acordeon-3.jpg`,
    alt: "Yo tocando el acordeón 3",
  },
  {
    id: 4,
    type: "video",
    src: `${base}/video/yo-tocando.mp4`,
    alt: "Video tocando el acordeón",
  },
];

export default galleryItems;
