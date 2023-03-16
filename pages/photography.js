import Head from "next/head";
import PhotoItem from "../components/PhotoItem";

const photos = [
  {
    src: "v1678938297/9251974A-D9FB-4651-BC6A-51CFD756F38A_1_105_c.jpg",
    alt: "My son, Finn, and my dad laughing at each other while sitting by the window of a cafe.",
    date: "Jan 7, 2023",
    location: "Guelph, ON",
    camera: "iPhone 13 Pro",
  },
  {
    src: "v1678938296/06005D68-1B80-4B4D-8A4E-B93BB35EC3B4_1_105_c.jpg",
    alt: "My son, Finn, with his piercing blue eyes and matching blue winter gear, against a snowy field.",
    date: "Nov 13, 2022",
    location: "Chatsworth, ON",
    camera: "iPhone 13 Pro",
  },
  {
    src: "v1678938298/B540BA25-7103-4AC5-B6F0-6710B95D9C13_1_201_a.jpg",
    alt: "My son, Max, staring through spindles on a bridge with his blue eyes, looking very serious.",
    date: "Dec 13, 2021",
    location: "Guelph, ON",
    camera: "iPhone 13 Pro",
  },
  {
    src: "v1678938297/ED93CCA5-880B-4D68-82FA-473F924BD19C_1_102_o.jpg",
    alt: "Exloring the magical caves of Cave Beach, Taranaki, New Zealand.",
    date: "Dec 10, 2019",
    location: "Taranaki, New Zealand",
    camera: "iPhone XR",
    pano: true,
  },
  // {
  //   src: "v1678938296/0BEE8F3D-257E-40D7-9D6C-38BACFC66304_1_102_o.jpg",
  //   alt: "The texture of the sand at Cave Beach, Taranaki, New Zealand.",
  //   date: "Dec 10, 2019",
  //   location: "Taranaki, New Zealand",
  //   camera: "iPhone XR",
  // },
  {
    src: "v1678938296/16E8211F-87CF-4BFE-82AD-3006F4AB14F1_1_105_c.jpg",
    alt: "My wife and my dad standing on the frozen tundra of Georgian Bay, ON, looking away from the camera.",
    date: "Feb 18, 2018",
    location: "Georgian Bay, ON",
    camera: "iPhone 6s",
  },
  {
    src: "v1678938296/6A57BA51-BBFF-4FB1-8523-9A14C51D8088_1_105_c.jpg",
    alt: "Red train lights over snowy tracks next to Wallace St Bridge, Toronto, ON.",
    date: "March 1, 2016",
    location: "Toronto, ON",
    camera: "Olympus OM-D E-M10 (25mm f/1.7)",
  },
  {
    src: "v1678938296/D58C01E8-9E83-40BC-AC55-71A515113D50_1_102_o.jpg",
    alt: "My boots hanging off the edge of a mountain overlooking Peyto Lake, AB.",
    date: "Aug 2, 2013",
    location: "Peyto Lake, AB",
    camera: "iPhone 4S",
    pano: true,
  },
];

export default function Photography() {
  return (
    <div>
      <Head>
        <title>Photography – Thomas Kilgour</title>
        <meta name="description" content="Some photos I've taken." />
      </Head>

      <div className="flex flex-col gap-12">
        {
          photos.map((photoItem, index) => (
            <PhotoItem key={photoItem.src} photoItem={photoItem} priority={index === 0} />
          ))
        }
      </div>
    </div>
  );
}
