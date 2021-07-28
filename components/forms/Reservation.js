import { useRef, useState } from "react";

export default function Reservation(props) {
  const NameRef = useRef();
  const EmailRef = useRef();
  const PhoneRef = useRef();

  const [NameError, setNameError] = useState("");
  const [EmailError, setEmailError] = useState("");
  const [PhoneError, setPhoneError] = useState("");

  function onFormSubmit() {
    setNameError("");
    setEmailError("");
    setPhoneError("");

    const name = NameRef.current.value;
    const email = EmailRef.current.value;
    const phone = PhoneRef.current.value;

    const registrationData = {
      name: name,
      email: email,
      phone: phone,
      regSrc: props.registrationFrom,
    };

    if (name === "") {
      setNameError("Please fill in your name");
    } else {
      if (email === "") {
        setEmailError("Please fill in your email");
      } else {
        if (!validateEmail(email)) {
          setEmailError("Please enter a valid email");
        } else {
          addRegistration(registrationData);
          fetch(
            "https://jcc-membership-default-rtdb.firebaseio.com/registrations.json",
            {
              method: "POST",
              body: JSON.stringify(registrationData),
              headers: {
                "Content-Type": "application/json",
              },
            }
          ).then(() => {
            NameRef.current.value = "";
            EmailRef.current.value = "";
            PhoneRef.current.value = "";
            props.onSuccessReservation();
          });
        }
      }
    }
  }

  function addRegistration(data) {}

  function validateEmail(input) {
    var validRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (input.match(validRegex)) {
      return true;
    } else {
      return false;
    }
  }

  function isNumber(event) {
    const phone = PhoneRef.current.value;
    var newPhone = phone;

    if (event.key >= 0 && event.key <= 9) {
      let value = newPhone.replaceAll("-", "");

      if (value.length > 2 && value.length <= 5)
        value = value.slice(0, 3) + "-" + value.slice(3);
      else if (value.length > 5)
        value =
          value.slice(0, 3) + "-" + value.slice(3, 6) + "-" + value.slice(6);

      PhoneRef.current.value = value;

      return true;
    }

    event.preventDefault();

    return false;
  }

  function formatPhoneNumber(inp) {}

  return (
    <form className="max-w-1530px mx-auto mt-5 lg:mt-14" id="reserve_form">
      <div className="flex flex-wrap text-left mb-4">
        <div className="w-full lg:w-1/3 px-2 mb-2 lg:mb-0">
          <div className="flex flex-col">
            <label className="text-30px mb-2">Name*</label>
            <input
              ref={NameRef}
              type="text"
              className="bg-grayish-2 border-1 border-grayish-1 rounded py-3 px-4"
            />
            <div className="text-red-700 text-center">{NameError}&nbsp;</div>
          </div>
        </div>
        <div className="w-full lg:w-1/3 px-2 mb-2 lg:mb-0">
          <div className="flex flex-col">
            <label className="text-30px mb-2">Email*</label>
            <input
              ref={EmailRef}
              type="email"
              className="bg-grayish-2 border-1 border-grayish-1 rounded py-3 px-4"
            />
            <div className="text-red-700 text-center">{EmailError}&nbsp;</div>
          </div>
        </div>
        <div className="w-full lg:w-1/3 px-2 mb-2 lg:mb-0">
          <div className="flex flex-col">
            <label className="text-30px mb-2">Phone</label>
            <input
              ref={PhoneRef}
              type="email"
              className="bg-grayish-2 border-1 border-grayish-1 rounded py-3 px-4"
              maxLength="12"
              onKeyPress={isNumber}
              onPaste={isNumber}
            />
            <div className="text-red-700 text-center">{PhoneError}&nbsp;</div>
          </div>
        </div>
      </div>
      <div className="my-16 lg:my-24 px-2">
        <a
          onClick={onFormSubmit}
          href="#reserve_form"
          className="text-18px lg:text-29px bg-blueish-1 rounded text-white px-12 py-4 w-full lg:w-max block lg:inline text-center"
        >
          {props.btnText}
        </a>
      </div>
    </form>
  );
}
