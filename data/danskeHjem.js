import house from "../src/assets/house.svg"
import home from "../src/assets/home.svg"
import property from "../src/assets/property.svg"
import map from "../src/assets/maps.svg"
import customer from "../src/assets/customer.svg"

export const danskeHjemData = {
  title: "Vi har fulgt danskerne hjem i snart 4 årtier",
  subtitle: "Det synes vi siger noget om os!",
  descriptionOne: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has normal distribution.",
  descriptionTwo: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",

  stats: [
    { id: 1, number: "4829", label: "Boliger solgt", image: house },
    { id: 2, number: "158", label: "boliger til salg", image: home }
  ],
  butikInfos: [
    { id: 1, 
      name: "Bestil et salgstjek", 
      title: "Med et Din Mægler Salgstjek bliver du opdateret på værdien af din bolig.", 
      image: property
    },
    { id: 2, 
      name: "74 butikker", 
      title: "Hos Din Mægler er din bolig til salg i alle vores 74 butikker, som er fordelt rundt om i Danmark.", 
      image: map
    },
    { id: 3, 
      name: "Tilmeld køberkartotek", 
      title: "Når du er tilmeldt vores køberkartotek, bliver du kontaktet inden en ny bolig bliver annonceret.", 
      image: customer
    }
  ]
};
