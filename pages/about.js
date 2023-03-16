import { useState } from "react";
import { CldImage } from "next-cloudinary";
import Head from "next/head";

export default function About() {
  const [photoFocused, setPhotoFocused] = useState(false);

  const handlePhotoClick = () => {
    setPhotoFocused(true);

    setTimeout(() => {
      setPhotoFocused(false);
    }, 700);
  };

  return (
    <div>
      <Head>
        <title>About – Thomas Kilgour</title>
        <meta name="description" content="It's me." />
      </Head>

      <h1 className="sr-only">About Thomas Kilgour</h1>

      <div className="flex flex-col items-center sm:flex-row gap-6">
        <button
          className={`${
            photoFocused && "-rotate-12 -translate-x-4"
          } flex-shrink-0 group transition-transform ease-in-out rounded-full overflow-hidden ring ring-offset-4 outline-none ring-red-400 focus-visible:ring-blue-400 focus-visible:ring-4 `}
          onClick={handlePhotoClick}
          aria-label="Click to poke me!"
        >
          {photoFocused ? (
            <CldImage
              width={200}
              height={200}
              src="v1678993416/B6E03D97-FBBE-40ED-93FA-DB95E3450A8A_1_201_a.heic"
              rawTransformations={["c_fill,g_face,h_400,w_400"]}
              alt="Ouch! Don't poke me!"
              className="w-48"
            />
          ) : (
            <CldImage
              width={400}
              height={400}
              src="v1678991899/IMG_1433.jpg"
              rawTransformations={["c_fill,g_face,h_400,w_400"]}
              alt="A picture of me, Thomas Kilgour"
              priority={true}
              className="border w-48"
            />
          )}
        </button>

        <div>
          <p className="mb-4">
            Hello! <em>I&rsquo;m Thomas.</em>
          </p>
          <p className="mb-4">
            I&rsquo;m a professional web developer with over six years of
            experience. I work primarily with front end tech, but like to tinker
            with all sorts of things. I care a lot about the end user
            experience, and firmly believe that focusing on accessibile,
            performant applications is the best way to create a better
            experience for everyone!
          </p>
          <p>
            When I&rsquo;m not sitting at a desk, you&rsquo;ll likely find me outside with my kids, biking around and exploring new places.
          </p>
        </div>
      </div>
    </div>
  );
}
