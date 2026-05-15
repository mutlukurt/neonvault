export type Artwork = {
  title: string;
  stat: string;
  price: string;
  image: string;
  alt: string;
  featured?: boolean;
};

export const liveBids: Artwork[] = [
  {
    title: "Lily Face",
    stat: "88.4K",
    price: "1.6 ETH",
    image: "/generated/bid-lily-face-trim.webp",
    alt: "Chrome cyberpunk face behind luminous bead veil",
    featured: true
  },
  {
    title: "Skull Sky",
    stat: "72.8K",
    price: "2.5 ETH",
    image: "/generated/bid-skull-sky-trim.webp",
    alt: "Biomechanical skull under a neon storm sky"
  },
  {
    title: "Evil Acid",
    stat: "91.2K",
    price: "7.1 ETH",
    image: "/generated/bid-evil-acid-trim.webp",
    alt: "Acid green robotic creature mask with magenta neon"
  }
];

export const exploreArtworks: Artwork[] = [
  {
    title: "Monocular",
    stat: "54.8K",
    price: "0.82 ETH",
    image: "/generated/art-monocular-final.webp",
    alt: "Neon monocular cyber shrine collectible"
  },
  {
    title: "Horns Mask",
    stat: "32.4K",
    price: "1.11 ETH",
    image: "/generated/art-horns-mask-final.webp",
    alt: "Black horned futuristic mask collectible"
  },
  {
    title: "Light Moon",
    stat: "66.1K",
    price: "1.42 ETH",
    image: "/generated/art-light-moon-trim.webp",
    alt: "Mechanical face lit by a moonlike cyber halo"
  },
  {
    title: "Skull Wire",
    stat: "79.4K",
    price: "1.85 ETH",
    image: "/generated/art-skull-wire-trim.webp",
    alt: "Cyber skull wrapped with neon wire"
  },
  {
    title: "Red Hood",
    stat: "26.8K",
    price: "0.74 ETH",
    image: "/generated/art-red-hood-trim.webp",
    alt: "Red hooded cyber figure with glowing eyes"
  },
  {
    title: "Dead Mirror",
    stat: "59.3K",
    price: "1.27 ETH",
    image: "/generated/art-dead-mirror-trim.webp",
    alt: "Android portrait reflected in a neon mirror"
  },
  {
    title: "White Eye",
    stat: "45.7K",
    price: "2.04 ETH",
    image: "/generated/art-white-eye-trim.webp",
    alt: "Pale cyber mask with one glowing white eye"
  },
  {
    title: "Plastic Spinal",
    stat: "68.4K",
    price: "1.64 ETH",
    image: "/generated/art-plastic-spinal-trim.webp",
    alt: "Translucent plastic skull and spinal cyber form"
  }
];
