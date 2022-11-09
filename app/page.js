import Image from "next/image";
import Link from "next/link";
import IgnacioPersonalPhoto from "../public/IgnacioPersonalPhoto.jpg";
import styles from "./About.module.css";

export default function Home() {
  return (
    <>
      <section>
        <div className={`text-2xl text-center ${styles.typewriter}`}>
          Hola 👋, mi nombre es Ignacio
        </div>
        <Image
          className="rounded-full mx-auto my-2"
          src={IgnacioPersonalPhoto}
          height={300}
          alt="photo of ignacio"
        />
      </section>

      <section className="border-2 border-black bg-black rounded-md p-2 w-full md:w-1/2 mx-auto">
        <p className="text-white">
          <span className="text-green-500">~ mini bio:</span> software engineer
          based out of austin, tx. fluent in both english and spanish.
          passionate about my family, technology, travel, and culture. enjoy
          music, youtube, fitness, good food, beer, and cocktails.
        </p>
      </section>

      <section className="flex justify-center mt-12 gap-12">
        <Link
          href="/soft-skills"
          className="p-4 text-white bg-black hover:bg-gray-700 rounded-md"
        >
          soft skills
        </Link>
        <Link
          href="hard-skills"
          className="p-4 text-white bg-black hover:bg-gray-700 rounded-md"
        >
          hard skills
        </Link>
      </section>
    </>
  );
}
