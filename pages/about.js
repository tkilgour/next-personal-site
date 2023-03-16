import { useRef } from "react";
import { CldImage } from "next-cloudinary";
import Head from "next/head";

export default function About() {
  const imageRef = useRef(null);
  
  const handlePhotoClick = () => {
    // remove focus from the image after 500ms
    setTimeout(() => {
      imageRef.current.blur();
    }
    , 500);
  };
  
  return (
    <div>
      <Head>
        <title>About – Thomas Kilgour</title>
        <meta name="description" content="It's me." />
      </Head>

      <h1 className="sr-only">About Thomas Kilgour</h1>

      <div className="flex flex-col sm:flex-row items-start gap-6">
        <button
          className="flex-shrink-0 group hover:-rotate-12 focus:-rotate-12 hover:-translate-x-6 focus:-translate-x-6 transition-transform ease-in-out rounded-full overflow-hidden ring ring-offset-4 ring-red-400 outline-none focus:ring-blue-400"
          onClick={handlePhotoClick}
          ref={imageRef}
        >
          <CldImage
            width={200}
            height={200}
            src="v1678991899/IMG_1433.jpg"
            rawTransformations={["c_fill,g_face,h_200,w_200"]}
            alt="A picture of me, Thomas Kilgour"
            className="group-hover:hidden group-focus:hidden border"
          />
          <CldImage
            width={200}
            height={200}
            src="v1678993416/B6E03D97-FBBE-40ED-93FA-DB95E3450A8A_1_201_a.heic"
            rawTransformations={["c_fill,g_face,h_200,w_200"]}
            alt="Ouch! Don't poke me!"
            className="hidden group-hover:block group-focus:block"
          />
        </button>

        <div>
          <p className="mb-4">
            Hello! <em>I&rsquo;m Thomas.</em>
          </p>
          <p>
            I&rsquo;m a professional web developer with over six years of experience.
            I work primarily with front end tech, but like to tinker with all
            sorts of things. I care a lot about the end user experience, and
            firmly believe that focusing on accessibile, performant applications
            is the best way to create a better experience for everyone.
          </p>
        </div>
      </div>
    </div>
  );
}
