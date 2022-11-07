export default function Footer() {
  return (
    <footer className="mt-auto">
      <div className="flex justify-center gap-2">
        <a
          href="https://www.linkedin.com/in/ignacio-gea-0abaa6b6/"
          className="hover:underline"
        >
          linkedin
        </a>
        <span> | </span>
        <a href="https://github.com/igeagonz" className="hover:underline">
          github
        </a>
        <span> | </span>
        <a href="https://twitter.com/iggylooo" className="hover:underline">
          twitter
        </a>
      </div>
      <div className="flex justify-center text-xs">
        Copyright © 2022 Ignacio Gea
      </div>
    </footer>
  );
}
