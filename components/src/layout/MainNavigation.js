import Link from "next/link";

export default function MainNavigation() {
  return (
    <nav className="lg:static relative flex w-full h-64px lg:h-140px bg-grayish-1 py-1.5 px-4 px-4 items-center">
      <div className="flex align-center justify-between lg:max-w-1530px w-full mx-auto lg:px-3.5">
        <Link href="/pjcc/membership">
          <a className="py-1.5">
            <img className="w-48px lg:w-85px h-48px lg:h-85px" src="/images/j_logo.png"></img>
          </a>
        </Link>
        <div className="text-left ml-auto flex lg:flex-grow-0 flex-grow lg:justify-center justify-end items-center">
          <ul className="flex flex-row">
            <li className="px-2">
              <a href="https://www.facebook.com/schwartzreismancentre/" target="_blank">
                <img className="w-36px lg:w-42px h-36px lg:h-42px" src="/images/facebook.png"></img>
              </a>
            </li>
            <li className="px-2">
              <a href="https://www.instagram.com/jcctoronto/" target="_blank">
                <img className="w-36px lg:w-42px h-36px lg:h-42px" src="/images/instagram.png"></img>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
