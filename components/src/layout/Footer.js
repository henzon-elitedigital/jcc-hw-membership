export default function Footer() {
  return (
    <footer>
      {/* Contact */}
      <div className="flex flex-wrap justify-center border-b-2 bg-grayish-3">
        <div className="py-0 lg:py-8">
          <a
            className="py-5 px-3.5 text-white flex flex-col lg:flex-row items-center text-xl hover:underline"
            href="tel:416-635-5526"
          >
            <img
              className="px-5"
              src="https://join.srcentre.ca/custom/membership/images/new-layout-assets/phone-logo.png"
            ></img>
            <p className="text-16px">905-303-1821 ext 3077</p>
          </a>
        </div>
        <div className="py-0 lg:py-8">
          <a
            className="py-5 px-3.5 text-white flex flex-col lg:flex-row items-center text-xl hover:underline"
            href="mailto:membership@srcentre.ca"
          >
            <img
              className="px-5"
              src="https://join.srcentre.ca/custom/membership/images/new-layout-assets/mail-logo.png"
            ></img>
            <p className="text-16px">membership@srcentre.ca</p>
          </a>
        </div>
      </div>
      <div className="bg-grayish-3">
        <div className="hidden lg:flex max-w-6xl flex-wrap justify-between mx-auto py-6">
          <div>
            <a href="https://www.prossermanjcc.com/" target="_blank">
              <img
                className="max-h-10 hover:opacity-70"
                src="https://join.prossermanjcc.com/custom/pjcc-reserve-spot/images/prosserman.png"
              />
            </a>
          </div>
          <div className="flex">
            <a href="https://www.facebook.com/theprossermanjcc/" target="_blank">
              <img className="max-h-10 px-2 hover:opacity-70" src="/images/SRC-LOGO.png" />
            </a>
            <a href="https://www.facebook.com/schwartzreismancentre/" target="_blank">
              <img
                className="max-h-10 px-2 hover:opacity-70"
                src="https://join.prossermanjcc.com/custom/pjcc-reserve-spot/images/facebook.png"
              />
            </a>
            <a href="https://www.instagram.com/jcctoronto/" target="_blank">
              <img
                className="max-h-10 px-2 hover:opacity-70"
                src="https://join.prossermanjcc.com/custom/pjcc-reserve-spot/images/instagram.png"
              />
            </a>
          </div>
          <div>
            <a href="http://www.jewishtoronto.com/" target="_blank">
              <img
                className="max-h-10 hover:opacity-70"
                src="https://join.prossermanjcc.com/custom/pjcc-reserve-spot/images/UJA_Federation_White.png"
              />
            </a>
          </div>
        </div>
        {/* mobile */}
        <div className="block lg:hidden py-6">
          <div className="flex justify-center mb-6">
            <a href="https://www.facebook.com/theprossermanjcc/">
              <img className="max-h-10 px-2" src="/images/SRC-LOGO.png" />
            </a>
            <a href="https://www.facebook.com/theprossermanjcc/">
              <img
                className="max-h-10 px-2"
                src="https://join.prossermanjcc.com/custom/pjcc-reserve-spot/images/facebook.png"
              />
            </a>
            <a href="https://www.instagram.com/prossermanjcc/">
              <img
                className="max-h-10 px-2"
                src="https://join.prossermanjcc.com/custom/pjcc-reserve-spot/images/instagram.png"
              />
            </a>
          </div>
          <div className="flex justify-center">
            <a href="https://www.prossermanjcc.com/">
              <img
                className="max-h-10 px-2"
                src="https://join.prossermanjcc.com/custom/pjcc-reserve-spot/images/prosserman.png"
              />
            </a>
            <a href="http://www.jewishtoronto.com/">
              <img
                className="max-h-10 px-2"
                src="https://join.prossermanjcc.com/custom/pjcc-reserve-spot/images/UJA_Federation_White.png"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
