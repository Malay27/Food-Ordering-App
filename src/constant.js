import { v4 as uuidv4 } from 'uuid';

export const restaurantList=[
    {
      "id": uuidv4(),
      "image_link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLbuN38lotdnj89kfeaqHsVvkIl8kuwu6qyA&usqp=CAU",
      "name": "TORITOS Restaurant",
      "cuisines": "American, Italian, Mexican",
      "rating": "4.0"
    },
    {
      "id": uuidv4(),
      "image_link": "https://d4t7t8y8xqo0t.cloudfront.net/resized/292X204/restaurant%2F642236%2F0.jpg",
      "name": "Just Live Restaurant",
      "cuisines": "American, Chinese, Italian, Mexican",
      "rating": "4.2"
    },
    {
      "id": uuidv4(),
      "image_link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZz5GnhDtlbAvyTbPN2lgC_TE3QwfPoU5Mig&usqp=CAU",
      "name": "The Big Texan",
      "cuisines": "American",
      "rating": "4.5"
    },
    {
      "id": uuidv4(),
      "image_link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdssKuO3X-R0TJHL06oF5CGuDK8NdytXgrbA&usqp=CAU",
      "name": "China Garden",
      "cuisines": "Chinese",
      "rating": "4.7"
    },
    {
      "id": uuidv4(),
      "image_link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF50K9q2dfg-uV3-nbrMxbJkV6CbcY2Ln3wA&usqp=CAU",
      "name": "Little Italy",
      "cuisines": "Italian",
      "rating": "4.8"
    },
    {
      "id": uuidv4(),
      "image_link": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvPlsXNT0cZixgcB5iZobs9XM3sj8oN5p-Hg&usqp=CAU",
      "name": "Mexico City Restaurant",
      "cuisines": "Mexican",
      "rating": "4.9"
    },
    {
      "id": uuidv4(),
      "image_link": "https://d1ralsognjng37.cloudfront.net/6ec4ca38-fb73-479b-865f-3464fbdb5ab3.webp",
      "name": "The Yellow Chilli",
      "cuisines": "North Indian, Chinese",
      "rating": "4.3"
    },
    {
      "id": uuidv4(),
      "image_link": "https://media-cdn.tripadvisor.com/media/photo-s/17/e2/fa/74/img20190610224410-largejpg.jpg",
      "name": "Zaika",
      "cuisines": "Mughlai, Chinese",
      "rating": "4.4"
    },
    {
      "id": uuidv4(),
      "image_link": "https://b.zmtcdn.com/data/pictures/chains/3/3001723/206973b45e3e43636e10ea448b814d48.jpg",
      "name": "The Great Kebab Factory",
      "cuisines": "Indian, Continental, Chinese",
      "rating": "4.5"
    },
    {
      "id": uuidv4(),
      "image_link": "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/9/h/n/p95-16444959626205045ab0b43.jpg?w=400",
      "name": "Barbeque Nation",
      "cuisines": "Indian, Chinese, Continental",
      "rating": "4.6"
    }  
];

export const IMG_CDN_URL = "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"