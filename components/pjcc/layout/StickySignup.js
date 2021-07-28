export default function StickySignup() {
  return (
    <div className="hidden lg:block fixed bottom-0 left-0 w-full bg-white z-40">
      <hr className="border-t-8 border-t-grayish-1 mb-2" />
      <img
        className="mx-auto -mt-95px mb-3.5 shadow-signupSticky"
        src="https://join.prossermanjcc.com/custom/pjcc-reserve-spot/images/signup-button.png"
      />
      <a className="text-white text-3xl" href="#reserve_sec">
        <p className="absolute bottom-8 w-full text-center">
          <span>Sign Up</span> today!
        </p>
      </a>
    </div>
  );
}
