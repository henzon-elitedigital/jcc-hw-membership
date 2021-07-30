import Head from "next/head";

import MainNavigation from "../../../components/src/layout/MainNavigation";
import Hero from "../../../components/src/layout/Hero";
import Footer from "../../../components/src/layout/Footer";
import Reservation from "../../../components/forms/Reservation";
import { useState, useRef, useEffect } from "react";
import StickySignup from "../../../components/pjcc/layout/StickySignup";

export default function Homepage() {
  const [IsReserved, setIsReserved] = useState(false);
  const [IsLoading, setIsLoading] = useState(false);
  const [ShowSticky, setShowSticky] = useState(true);
  const MyReservation = useRef();

  function showLoading() {
    setIsLoading(true);
    setIsReserved(false);
  }

  function showSuccessMessage() {
    setIsReserved(true);
    setIsLoading(false);
  }

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

  isInViewport(MyReservation);

  return (
    <>
      <Head>
        <title>JCC Membership | Schwartz/Reisman Centre</title>
        <meta
          name="description"
          content="With a Schwartz/Reisman JCC membership, gain access to a revolutionary gym, pools, exciting programming, and so much more. Join Schwartz/Reisman JCC today."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainNavigation />

      <Hero />

      <main>
        <div>
          <h1 className="text-22px lg:text-56px text-center text-grayish-1">
            <span className="font-medium">
              THE SCHWARTZ/
              <br className="block lg:hidden" />
              REISMAN CENTRE{" "}
            </span>
            JCC!
          </h1>
        </div>

        <div className="relative text-18px lg:text-36px text-center font-medium pt-20">
          <img className="hidden lg:block -mt-16" src="/images/Rectangle.png" />
          <img
            className="block lg:hidden -mt-16"
            src="/images/Rectangle-mob.png"
          />
          <div className="absolute w-full mx-auto top-10 lg:top-36 mt-0 lg:-mt-76px transform skew-y-0 lg:-skew-y-1 text-white">
            Exclusive Offer: <br className="block lg:hidden" />
            10 Day Free Trial*
          </div>
        </div>

        <div className="relative -mt-1">
          <img className="hidden lg:block" src="/images/SRC-POSS.png" />
          <img className="block lg:hidden" src="/images/SRC_POSS-mob.png" />

          <div className="relative lg:absolute bottom-95px lg:-bottom-20px left-45px lg:left-50px w-280px lg:w-1/2">
            <img className="w-279px lg:w-650px" src="/images/trape.png" />
            <div className="absolute top-23px lg:top-24 text-14px lg:text-24px text-white text-center w-255px lg:w-370px left-15px lg:left-125px">
              <h2 className="font-bold text-18px lg:text-36px mb-2 lg:mb-5">
                Sign up today
              </h2>
              <p className="mb-5 lg:mb-8">
                Learn more about becoming a member and our special offers
              </p>
              <a
                href="#reserve_sec"
                className="border-2 border-white py-2 lg:py-3 px-8 lg:px-10 rounded-lg"
              >
                Join the JCC Family
              </a>
            </div>
          </div>
        </div>

        <div className="w-full -mt-65px lg:mt-0">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2">
              <img
                className="hidden lg:block relative -mt-12 z-10"
                src="/images/family.png"
              ></img>
              <img
                className="block lg:hidden relative -mt-6 z-10"
                src="/images/family-mob.png"
              />
            </div>
            <div className="block lg:flex w-full lg:w-1/2 flex-col justify-center px-5 lg:pl-10 -mt-60px lg:mt-0 z-10">
              <h2 className="text-24px lg:text-36px font-medium text-center lg:text-left leading-tight ml-0 lg:-ml-50px mb-7">
                Welcome to the Schwartz/
                <br />
                Reisman Centre JCC <br />
                <span className="font-normal text-17px lg:text-26px tracking-0.5px leading-normal">
                  We Learn Together. We Play Together.{" "}
                  <br className="hidden lg:block" /> We Grow Together.
                </span>
              </h2>
              <div>
                <ul className="list-disc pl-5 lg:pl-10 text-14px lg:text-18px tracking-0.35px leading-22px lg:leading-10 w-full lg:w-500px">
                  <li className="pl-3 lg:pl-0">
                    <span className="font-bold">110,000 sq ft</span> expansion
                    surrounded by beautiful conservation land
                  </li>
                  <li className="pl-3 lg:pl-0">
                    2 indoor <span className="font-bold">saltwater pools</span>
                  </li>
                  <li className="pl-3 lg:pl-0">
                    <span className="font-bold">Outdoor saltwater pool</span>
                  </li>
                  <li className="pl-3 lg:pl-0">
                    <span className="font-bold">2 Full-court gymnasiums</span>
                  </li>
                  <li className="pl-3 lg:pl-0">
                    A state-of-the-art
                    <span className="font-bold"> fitness centre</span> with
                    multiple studios for expanded group exercise
                  </li>
                  <li className="pl-3 lg:pl-0">
                    Luxury changing room facilities with
                    <span className="font-bold"> steam room</span> and
                    <span className="font-bold"> sauna</span> access
                  </li>
                  <li className="pl-3 lg:pl-0">
                    <span className="font-bold">
                      JCC virtual golf simulator
                    </span>
                  </li>
                  <li className="pl-3 lg:pl-0">
                    Relaxing
                    <span className="font-bold"> café and lounge area</span>
                  </li>
                  <li className="pl-3 lg:pl-0">
                    <span className="font-bold">Free underground parking</span>
                  </li>
                </ul>
              </div>
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
          <div className="absolute top-325px px-9 lg:px-0 left-0 lg:left-260px z-10 text-white max-w-3xl text-center lg:text-left">
            <h2 className="text-24px lg:text-36px font-medium">
              JCC Membership Benefits
            </h2>
            <h3 className="text-17px lg:text-26px leading-24px lg:leading-41px mb-10">
              Check out all of our awesome member perks: <br />
              We Benefit Together.
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
                  facilities:{" "}
                </span>
                pools, gymnasium, strength training equipment, cardio theatre
                and group exercise classes
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
                Full access to a jam-packed monthly
                <span className="font-bold"> calendar of great events</span>
              </li>
              <li
                className="bg-no-repeat bg-27px lg:bg-42px pl-45px lg:pl-55px min-h-50px"
                style={{
                  backgroundImage: `url("https://join.prossermanjcc.com/custom/pjcc-reserve-spot/images/yellow_check.png")`,
                }}
              >
                Program schedule of
                <span className="font-bold"> over 100 classes per week</span>
              </li>
              <li
                className="bg-no-repeat bg-27px lg:bg-42px pl-45px lg:pl-55px min-h-50px"
                style={{
                  backgroundImage: `url("https://join.prossermanjcc.com/custom/pjcc-reserve-spot/images/purple_check.png")`,
                }}
              >
                <span className="font-bold">Discounts</span> on room rentals,
                including a large ballroom for fun family celebrations
              </li>
              <li
                className="bg-no-repeat bg-27px lg:bg-42px pl-45px lg:pl-55px min-h-50px"
                style={{
                  backgroundImage: `url("https://join.prossermanjcc.com/custom/pjcc-reserve-spot/images/green_check.png")`,
                }}
              >
                Front-of-the-line registration on
                <span className="font-bold"> over 300 JCC Programs</span>
              </li>
              <li
                className="bg-no-repeat bg-27px lg:bg-42px pl-45px lg:pl-55px min-h-50px"
                style={{
                  backgroundImage: `url("https://join.prossermanjcc.com/custom/pjcc-reserve-spot/images/orange_check.png")`,
                }}
              >
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
                <h3 className="text-26px">And so much more!</h3>
              </li>
            </ul>
          </div>
        </div>

        <div
          id="reserve_sec"
          className="lg:block relative z-10 text-left lg:text-center pt-24 px-5 lg:px-3.5 pb-14 -mt-24 bg-no-repeat bg-20p bg-center bg-left"
        >
          <img
            className="hidden lg:block absolute left-0 top-131px w-400px -z-1"
            src="/images/red_shape.png"
          />
          <img
            className="block lg:hidden absolute left-0 bottom-190px w-130px"
            src="/images/red_shape_mobile.png"
          />
          <h2 className="text-24px lg:text-36px font-bold mb-8 lg:mb-12 mt-10 lg:mt-0 text-grayish-1 -tracking-0.2px lg:tracking-0 leading-28px lg:leading-45px">
            Secure Your Free <br className="block lg:hidden" />
            10-Day Pass* <br className="hidden lg:block" />
            and Join <br className="block lg:hidden" />
            The JCC Legacy Today!
          </h2>

          <div className="text-grayish-1 w-full lg:w-955px text-14px lg:text-18px leading-30px tracking-0.15px mx-auto">
            <p>
              The JCC family is waiting for you! At the SRC, we’re re-opening
              our doors this summer and we want you to be a part of the
              celebration. Discover what it means to be a part of a community
              that cares.
            </p>
            <br />
            <p>
              When you sign up for this limited-time offer, you’ll be connected
              with a JCC Membership Associate within 48 hours who will make sure
              you have all the information you need.
            </p>
            <br />
            <p>
              Find out more about membership benefits, fitness facilities, the
              JCC community and everything else you and your family will love
              about the Schwartz/Reisman Centre. Because it’s time to get back
              to what really matters; <strong>It’s Time for Together</strong>.
            </p>
          </div>

          <br />

          <div ref={MyReservation}>
            <Reservation
              onSuccessReservation={showSuccessMessage}
              onClick={showLoading}
              btnText="Join the JCC Family"
              registrationFrom="src"
            />
          </div>

          {!IsReserved && IsLoading && (
            <img src="/images/spinner.gif" className="mx-auto mb-5 w-10" />
          )}
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
                  <a href="tel:905-303-1821" className="text-2xl lg:text-3xl">
                    905-303-1821
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
                  Lebovic Campus <br /> 9600 Bathurst Street{" "}
                  <br className="block lg:hidden" />
                  Vaughan ON L6A 3Z8
                </p>
              </div>
            </div>
          </div>
          <img
            className="hidden lg:block absolute top-0 right-0 max-w-170px -mt-20"
            src="https://join.prossermanjcc.com/custom/pjcc-reserve-spot/images/yellow_shape.png"
          />
          <img
            className="block lg:hidden absolute top-0 right-0"
            src="/images/yellow_shape_mobile.png"
          />
        </div>
      </main>

      {!ShowSticky && <StickySignup />}

      <Footer />
    </>
  );
}
