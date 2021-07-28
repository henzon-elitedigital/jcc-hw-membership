import Head from "next/head";
import MainNavigation from "../../../components/pjcc/layout/MainNavigation";
import Hero from "../../../components/pjcc/layout/Hero";
import Footer from "../../../components/pjcc/layout/Footer";
import Reservation from "../../../components/forms/Reservation";
import StickySignup from "../../../components/pjcc/layout/StickySignup";
import { useEffect, useRef, useState } from "react";

export default function Homepage() {
  const [IsReserved, setIsReserved] = useState(false);

  function showSuccessMessage() {
    setIsReserved(true);
  }

  const [ShowSticky, setShowSticky] = useState(true);
  const MyReservation = useRef();
  isInViewport(MyReservation);

  function isInViewport() {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) =>
        setShowSticky(entry.isIntersecting)
      );
      observer.observe(MyReservation.current);
      // Remove the observer as soon as the component is unmounted
      return () => {
        observer.disconnect();
      };
    }, []);
    console.log(ShowSticky);
    return isIntersecting;
  }

  return (
    <>
      <Head>
        <title>JCC Membership | Schwartz/Reisman Centre</title>
        <meta
          name="description"
          content="With a Schwartz/Reisman JCC membership, gain access to a revolutionary
          gym, pools, exciting programming, and so much more. Join
          Schwartz/Reisman JCC today."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainNavigation />

      <Hero />

      <main>
        <div>
          <h1 className="text-22px lg:text-56px text-center text-grayish-1">
            <span className="font-medium">THE PROSSERMAN</span> JCC!
          </h1>
        </div>

        <div className="relative text-18px lg:text-36px text-center font-medium pt-20">
          <img className="hidden lg:block -mt-16" src="/images/Rectangle.png" />
          <img
            className="block lg:hidden -mt-16"
            src="/images/Rectangle-mob.png"
          />
          <div className="absolute w-full mx-auto top-10 lg:top-36 mt-11px lg:-mt-76px transform -skew-y-2 lg:-skew-y-1 text-white">
            Lifetime Discounts are back!
          </div>
        </div>

        <div className="relative -mt-1">
          <img
            className="hidden lg:block w-full"
            src="https://join.prossermanjcc.com/custom/pjcc-reserve-spot/images/PJCC-pool.jpg?ver=1.1"
          />
          <img
            className="block lg:hidden"
            src="https://join.prossermanjcc.com/custom/pjcc-reserve-spot/images/PJCC-pool.jpg?ver=1.1"
          />
          <img
            className="hidden lg:block absolute -bottom-20px left-115px opacity-80"
            src="https://join.prossermanjcc.com/custom/pjcc-reserve-spot/images/rectangle-2.png"
          ></img>

          <div className="hidden lg:block absolute text-white bottom-0 left-145px bottom-80px w-500px text-center">
            <h2 className="font-bold text-24px leading-39px mb-2 mt-5 lg:mt-0">
              Sign up today
            </h2>
            <p className="leading-8">
              to get exclusive lifetime access to our <br /> lowest membership
              prices!
            </p>
            <a
              href="#reserve_sec"
              className="cursor-pointer border-2 border-white text-29px font-medium rounded px-10 py-2 m-2.5 inline-block"
            >
              Reserve your spot now!
            </a>
          </div>
        </div>

        <div className="w-full relative -mt-20px lg:mt-0">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2">
              <img
                className="hidden lg:block relative -mt-12 z-10"
                src="https://join.prossermanjcc.com/custom/pjcc-reserve-spot/images/Family.png"
              ></img>
              <img
                className="block lg:hidden w-full"
                src="https://join.prossermanjcc.com/custom/pjcc-reserve-spot/images/family_mobile.png"
              />
            </div>

            <div className="w-full lg:w-1/2 flex flex-col justify-center pl-0 lg:pl-10 -mt-10 lg: mt-0">
              <h2 className="hidden lg:block text-20px lg:text-36px font-bold -ml-90px mb-7">
                Welcome to the Sheff Family Building <br />
                <span className="font-normal">
                  Expanded Home of the Prosserman JCC
                </span>
              </h2>
              <h2 className="block lg:hidden text-20px lg:text-36px font-bold text-center mb-7">
                Welcome to the <br />
                <span className="font-normal">
                  Schwartz/Reisman <br />
                  Center JCC
                </span>
              </h2>
              <ul className="list-disc pl-10 leading-9 text-48px lg:text-18px leading-10 text-grayish-1">
                <li className="pl-3 lg:pl-0">
                  <span className="font-bold">110,000 sqft</span> expansion
                  surrounded by beautiful conservation land
                </li>
                <li className="pl-3 lg:pl-0">
                  2 indoor <span className="font-bold">saltwater pools</span>
                </li>
                <li className="pl-3 lg:pl-0">
                  <span className="font-bold">Outdoor saltwater pool</span> and
                  a <span className="font-bold">splash pad</span>
                </li>
                <li className="pl-3 lg:pl-0">
                  Spectacular{" "}
                  <span className="font-bold">children’s playground</span>
                </li>
                <li className="pl-3 lg:pl-0">
                  <span className="font-bold">Gymnasium</span> with a running
                  track
                </li>
                <li className="pl-3 lg:pl-0">
                  A state of the art{" "}
                  <span className="font-bold">fitness centre</span> with
                  multiple studios for expanded group exercise
                </li>
                <li className="pl-3 lg:pl-0">
                  300+ seated{" "}
                  <span className="font-bold">multifunctional theatre</span>
                </li>
                <li className="pl-3 lg:pl-0">
                  3 outdoor{" "}
                  <span className="font-bold">multi-sport courts</span>
                </li>
                <li className="pl-3 lg:pl-0">
                  New community <span className="font-bold">outdoor park</span>{" "}
                  and walking path
                </li>
                <li className="pl-3 lg:pl-0">
                  <span className="font-bold">Café and lounge</span>
                </li>
                <li className="pl-3 lg:pl-0">
                  <span className="font-bold">Free underground parking</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="block relative mt-0 lg:-mt-268px z-10">
          <img
            className="hidden lg:block relative w-full"
            src="/images/fit_woman.png"
          ></img>
          <img
            className="block lg:hidden"
            src="/images/fit_woman_mobile2.png"
          />
          <div className="absolute top-485px lg:top-325px px-9 lg:px-0 left-0 lg:left-260px z-10 text-white max-w-3xl text-center lg:text-left">
            <h2 className="hidden lg:block text-24px lg:text-36px font-medium">
              JCC Membership Benefits
            </h2>
            <h3 className="hidden lg:block text-17px lg:text-26px leading-24px lg:leading-41px mb-10">
              Check out all of our awesome member perks: <br />
              We Benefit Together.
            </h3>

            <h2 className="block lg:hidden text-20px lg:text-24px lg:text-36px font-medium">
              Membership Benefits
            </h2>
            <h3 className="block lg:hidden text-17px lg:text-26px leading-24px lg:leading-41px mb-10">
              We are more than <br />
              just a gym!
            </h3>

            <ul className="leading-25px lg:leading-10 mb-4 text-14px lg:text-18px tracking-0.27px lg:tracking-0.35px text-left">
              <li
                className="bg-no-repeat bg-27px lg:bg-42px pl-45px lg:pl-55px min-h-50px"
                style={{
                  backgroundImage: `url("https://join.prossermanjcc.com/custom/pjcc-reserve-spot/images/green_check.png")`,
                }}
              >
                <span className="font-bold">
                  Multi-campus access to Prosserman JCC and all fitness
                  facilities:
                </span>{" "}
                pools, gymnasium, strength training equipment Cardio theatre,
                group exercise classes
              </li>
              <li
                className="bg-no-repeat bg-27px lg:bg-42px pl-45px lg:pl-55px min-h-50px"
                style={{
                  backgroundImage: `url("https://join.prossermanjcc.com/custom/pjcc-reserve-spot/images/orange_check.png")`,
                }}
              >
                <span className="font-bold">
                  Complimentary personal training sessions
                </span>
              </li>
              <li
                className="bg-no-repeat bg-27px lg:bg-42px pl-45px lg:pl-55px min-h-50px"
                style={{
                  backgroundImage: `url("https://join.prossermanjcc.com/custom/pjcc-reserve-spot/images/cyan_check.png")`,
                }}
              >
                Ability to purchase programs at both locations at
                <span className="font-bold"> discounted rates</span>
              </li>
              <li
                className="bg-no-repeat bg-27px lg:bg-42px pl-45px lg:pl-55px min-h-50px"
                style={{
                  backgroundImage: `url("https://join.prossermanjcc.com/custom/pjcc-reserve-spot/images/pink_check.png")`,
                }}
              >
                Full access to a robust monthly
                <span className="font-bold"> calendar of great events</span>
              </li>
              <li
                className="bg-no-repeat bg-27px lg:bg-42px pl-45px lg:pl-55px min-h-50px"
                style={{
                  backgroundImage: `url("https://join.prossermanjcc.com/custom/pjcc-reserve-spot/images/yellow_check.png")`,
                }}
              >
                Program schedule of
                <span className="font-bold"> over 150 weekly classes</span>
              </li>
              <li
                className="bg-no-repeat bg-27px lg:bg-42px pl-45px lg:pl-55px min-h-50px"
                style={{
                  backgroundImage: `url("https://join.prossermanjcc.com/custom/pjcc-reserve-spot/images/purple_check.png")`,
                }}
              >
                <span className="font-bold">Discounts</span> on room rentals
                including a large ballroom for family celebrations
              </li>
              <li
                className="bg-no-repeat bg-27px lg:bg-42px pl-45px lg:pl-55px min-h-50px"
                style={{
                  backgroundImage: `url("https://join.prossermanjcc.com/custom/pjcc-reserve-spot/images/green_check.png")`,
                }}
              >
                Front of the line registration on
                <span className="font-bold"> over 300 JCC Programs</span>
              </li>
              <li
                className="bg-no-repeat bg-27px lg:bg-42px pl-45px lg:pl-55px min-h-50px"
                style={{
                  backgroundImage: `url("https://join.prossermanjcc.com/custom/pjcc-reserve-spot/images/orange_check.png")`,
                }}
              >
                Exclusive{" "}
                <span className="font-bold">Exclusive J-Branded gear</span>
              </li>
              <li
                className="bg-no-repeat bg-27px lg:bg-42px pl-45px lg:pl-55px min-h-50px"
                style={{
                  backgroundImage: `url("https://join.prossermanjcc.com/custom/pjcc-reserve-spot/images/cyan_check.png")`,
                }}
              >
                Personalized
                <span className="font-bold"> access card with lanyard</span>
              </li>
              <li className="pl-45px lg:pl-55px min-h-50px pt-5 lg:pt-0">
                <h3 className="text-17px lg:text-2xl">and much more!</h3>
              </li>
            </ul>
          </div>
        </div>

        <div
          id="reserve_sec"
          className="lg:block relative z-10 text-left lg:text-center pt-24 px-5 lg:px-3.5 pb-14 -mt-24 bg-no-repeat bg-20p bg-center bg-left"
        >
          <img
            className="hidden lg:block absolute left-0 top-131px w-400px"
            src="/images/red_shape.png"
          />
          <img
            className="block lg:hidden absolute left-0 bottom-190px w-130px"
            src="/images/red_shape_mobile.png"
          />
          <h2 className="text-24px lg:text-36px font-bold mb-8 lg:mb-12 mt-10 lg:mt-0 text-grayish-1 -tracking-0.2px lg:tracking-0 leading-28px lg:leading-45px text-center">
            Secure Your Membership Discount <br className="hidden lg:block" />
            and Join The JCC Legacy Today!
          </h2>

          <div className="text-grayish-1 w-full lg:w-955px text-14px lg:text-18px leading-30px tracking-0.15px mx-auto">
            <p>
              When you sign up for this limited-time offer, you will be
              connected with a JCC Membership Associate within 48hrs who will
              provide you with all the information you need.
            </p>
            <br />
            <p>
              Find out more about membership benefits, fitness facilities and
              everything else the Prosserman JCC has to offer you and your
              family.
            </p>
          </div>

          <br />
          <div ref={MyReservation}>
            <Reservation
              onSuccessReservation={showSuccessMessage}
              btnText="Reserve your spot now!"
              registrationFrom="pjcc"
            />
          </div>

          {IsReserved && (
            <div className="w-full lg:w-955px text-36px leading-30px tracking-0.15px mx-auto text-blueish-1 mb-16 text-center">
              <h2>Thank You!</h2>
            </div>
          )}

          <h2 className="text-24px lg:text-36px text-grayish-1 font-bold mb-8 lg:mb-14 -mt-10 text-center">
            Can't wait?
          </h2>
          <div className="max-w-6xl px-2 w-full mx-auto">
            <div className="flex flex-wrap flex-col lg:flex-row items-center">
              <div className="flex-auto flex-grow relative border border-gray-1 rounded text-center p-4 min-h-115px w-full lg:w-max">
                <strong className="text-16px lg:text-18px">
                  Call us today to book your appointment:
                </strong>
                <p>
                  <a href="tel:416-635-5526" className="text-2xl lg:text-3xl">
                    416.635.5526
                  </a>
                </p>
              </div>
              <div className="flex-grow-0 pt-0 lg:pt-4">
                <img
                  className="hidden lg:block"
                  src="https://join.prossermanjcc.com/custom/pjcc-reserve-spot/images/or-1.png"
                />
                <img
                  className="block lg:hidden"
                  src="https://join.prossermanjcc.com/custom/pjcc-reserve-spot/images/or-vertical-1.png"
                />
              </div>
              <div className="flex-auto flex-grow relative border border-gray-1 rounded text-center p-4 min-h-115px w-full lg:w-max">
                <strong className="text-16px lg:text-18px">
                  Visit us today to enroll:
                </strong>
                <p>
                  Sherman Cambus <br />
                  4588 Bathurst Street Toronto ON M2R 1W6
                </p>
              </div>
            </div>
          </div>
          <img
            className="hidden lg:block absolute top-0 right-0 max-w-170px -mt-20"
            src="https://join.prossermanjcc.com/custom/pjcc-reserve-spot/images/yellow_shape.png"
          />
          <img
            className="block lg:hidden absolute top-23px right-0 w-100px"
            src="/images/yellow_shape_mobile.png"
          />
        </div>
      </main>
      {!ShowSticky && <StickySignup />}

      <Footer />
    </>
  );
}
