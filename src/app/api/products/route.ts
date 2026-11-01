import { NextResponse } from 'next/server';

export async function GET() {
  const products = [
    {
      id: 1,
      slug: "western-2pcs-dusty-pink",
      title: "Western 2 Pcs - Dusty Pink",
      shade: "Dusty Pink",
      price: "Rs. 3500",
      fabric: "Premium Georgette",
      image: "/images/products/dusty-pink.jpg", // Aapki bheji hui image
      description: "Western 2 Pcs Premium Georgette in Dusty Pink with cream center panel, front bows with long ribbons, and long flared skirt."
    },
    {
      id: 2,
      slug: "western-2pcs-light-green",
      title: "Western 2 Pcs - Light Green",
      shade: "Light Green",
      price: "Rs. 3500",
      fabric: "Premium Georgette",
      image: "/images/products/light-green.jpg",
      description: "Western 2 Pcs Premium Georgette in Light Green with cream center panel and bow accents."
    },
    {
      id: 3,
      slug: "western-2pcs-dark-teal",
      title: "Western 2 Pcs - Dark Teal",
      shade: "Dark Teal",
      price: "Rs. 3500",
      fabric: "Premium Georgette",
      image: "/images/products/dark-teal.jpg",
      description: "Western 2 Pcs Premium Georgette in Dark Teal with cream center panel and elegant front ribbons."
    },
    {
      id: 4,
      slug: "western-2pcs-mustard-yellow",
      title: "Western 2 Pcs - Mustard Yellow",
      shade: "Mustard Yellow",
      price: "Rs. 3500",
      fabric: "Premium Georgette",
      image: "/images/products/mustard-yellow.jpg",
      description: "Western 2 Pcs Premium Georgette in Mustard Yellow with cream contrast front."
    },
    {
      id: 5,
      slug: "western-2pcs-mauve-pink",
      title: "Western 2 Pcs - Mauve Pink",
      shade: "Mauve Pink",
      price: "Rs. 3500",
      fabric: "Premium Georgette",
      image: "/images/products/mauve-pink.jpg",
      description: "Western 2 Pcs Premium Georgette in Mauve Pink."
    },
    {
      id: 6,
      slug: "western-2pcs-sage-green",
      title: "Western 2 Pcs - Sage Green",
      shade: "Sage Green",
      price: "Rs. 3500",
      fabric: "Premium Georgette",
      image: "/images/products/sage-green.jpg",
      description: "Western 2 Pcs Premium Georgette in Sage Green."
    },
    {
      id: 7,
      slug: "western-2pcs-navy-blue",
      title: "Western 2 Pcs - Navy Blue",
      shade: "Navy Blue",
      price: "Rs. 3500",
      fabric: "Premium Georgette",
      image: "/images/products/navy-blue.jpg",
      description: "Western 2 Pcs Premium Georgette in Navy Blue."
    },
    {
      id: 8,
      slug: "western-2pcs-black",
      title: "Western 2 Pcs - Black",
      shade: "Black",
      price: "Rs. 3500",
      fabric: "Premium Georgette",
      image: "/images/products/black.jpg",
      description: "Western 2 Pcs Premium Georgette in Classic Black."
    },
    {
      id: 9,
      slug: "western-2pcs-lavender-purple",
      title: "Western 2 Pcs - Lavender Purple",
      shade: "Lavender Purple",
      price: "Rs. 3500",
      fabric: "Premium Georgette",
      image: "/images/products/lavender-purple.jpg",
      description: "Western 2 Pcs Premium Georgette in Lavender Purple."
    }
  ];

  return NextResponse.json(products);
}