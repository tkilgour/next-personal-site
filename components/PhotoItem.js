import { CldImage } from "next-cloudinary";

export default function PhotoItem({ photoItem }) {
  return (
    <div>
      <div className={photoItem.pano ? "" : "md:mx-40 lg:mx-48"}>
        <CldImage
          src={photoItem.src}
          width={1152}
          height={1536}
          alt={photoItem.alt}
        />
      </div>
      <p className="mt-2 text-center">
        {photoItem.date} · {photoItem.location} · {photoItem.camera}
      </p>
    </div>
  );
}
