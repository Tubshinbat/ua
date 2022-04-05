import Head from "next/head";
import { useCookies } from "react-cookie";
import React, { Fragment, useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import { useRouter } from "next/router";

import FooterPartners from "components/footer-partners";
import Footer from "components/footer";
import HomeHeader from "components/home-header";
import PageHeader from "components/page-header";

import cssNews from "styles/News.module.css";
import css from "styles/Page.module.css";

import {
  maxLength,
  minLength,
  onlyNumber,
  regEmail,
  requiredCheck,
} from "lib/inputRegex";

import { sendData } from "lib/contact";
import { useInfo } from "hooks/use-info";
import { getInfo } from "lib/webinfo";

const Contact = ({ info }) => {
  const router = useRouter();
  const [cookies] = useCookies(["language"]);
  const [infoLang, setinfoLang] = useState();
  const [formData, setForm] = useState({});
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
    phoneNumber: false,
  });

  const AnyReactComponent = ({ text }) => <div>{text}</div>;
  const [lang, setLang] = useState();

  //CHECK FORM FUNCTION
  const checkName = (el, name) => {
    return name === el;
  };

  const checkFrom = (name, val) => {
    // Шалгах формуудаа энд тодорхойлоно
    const valueErrors = Object.keys(errors);
    let result;
    if (valueErrors.find((el) => checkName(el, name))) {
      result = requiredCheck(val);

      if (name === "name" && result === true) {
        result = minLength(val, 2);
        result === true && (result = maxLength(val, 300));
      }
      if (name === "email" && result === true) result = regEmail(val);
      if (name === "phoneNumber" && result === true) result = onlyNumber(val);
      setErrors((bfError) => ({ ...bfError, [name]: result }));
    }
  };

  const checkTrue = () => {
    let errorCount = 0;
    let errorsValues = Object.values(errors);
    errorsValues.map((el) => {
      el === true && errorCount++;
    });
    return errorsValues.length === errorCount;
  };

  const allCheck = () => {
    Object.keys(errors).map((el) => {
      checkFrom(el, formData[el] === undefined ? "" : formData[el]);
    });
    return checkTrue();
  };

  // -- HANDLE CHANGE INPUT
  const handleChange = (event) => {
    let { name, value } = event.target;
    setForm((bf) => ({ ...bf, [name]: value }));
    checkFrom(event.target.name, event.target.value);
  };

  const send = () => {
    if (allCheck()) {
      sendData(formData);
      alert("Таны санал хүсэлтийг хүлээж авлаа");
      setForm(() => ({
        name: "",
      }));
    }
  };

  return (
    <Fragment>
      <Head>
        <title>
          {cookies.language === "mn" ? "Холбоо барих" : "Contact us"} -{" "}
          {info[infoLang] && info[infoLang].name}
        </title>
      </Head>
      <HomeHeader />
      <PageHeader
        pageTitle={cookies.language === "mn" ? "Холбоо барих" : "Contact us"}
      />
      <div className={`${cssNews.Page} animate__animated animate__fadeIn`}>
        <div className="container">
          <div className="row">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className={cssNews.NewsList}>
                    <div className={css.PageInfo}>
                      <div
                        style={{
                          height: "400px",
                          width: "100%",
                          padding: "10px",
                          boxShadow: "0px 0px 15px rgb(0 0 0 / 8%)",
                        }}
                        className={`wow animate__animated animate__fadeInDown`}
                        data-wow-delay={`0.5s`}
                      >
                        <GoogleMapReact
                          bootstrapURLKeys={{
                            key: "AIzaSyBVbaukknpuyvHnYSK_MmpI-5pcBwz83kw",
                          }}
                          defaultZoom={16}
                          defaultCenter={{
                            lat: 47.89591117918217,
                            lng: 106.91511278045269,
                          }}
                        >
                          <AnyReactComponent
                            lat={47.89591117918217}
                            lng={106.91511278045269}
                            text={<img src="/favicon.ico" />}
                          />
                        </GoogleMapReact>
                      </div>
                      <section className={css.ContactForm}>
                        <div className="row">
                          <div className="col-md-9 mb-md-0 mb-5">
                            <div className="row">
                              <div
                                className={`${css.Form__el} col-md-6 form-group`}
                              >
                                <label htmlFor="name" className>
                                  Таны овог нэр
                                </label>
                                <div className=" mb-0">
                                  <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="form-control"
                                    value={formData.name || ""}
                                    onChange={handleChange}
                                  />
                                  {errors.name && (
                                    <span className={`litleError`}>
                                      {errors.name}
                                    </span>
                                  )}
                                </div>
                              </div>

                              <div
                                className={`${css.Form__el} col-md-6 form-group`}
                              >
                                <label htmlFor="email" className>
                                  Имэйл хаяг
                                </label>
                                <div className=" mb-0">
                                  <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    value={formData.email || ""}
                                    className="form-control"
                                    onChange={handleChange}
                                  />
                                  {errors.email && (
                                    <span className={`litleError`}>
                                      {errors.email}
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>

                            <div className="row">
                              <div
                                className={`${css.Form__el} col-md-12 form-group`}
                              >
                                <div className=" mb-0">
                                  <label htmlFor="subject" className>
                                    Утасны дугаар
                                  </label>
                                  <input
                                    type="number"
                                    name="phoneNumber"
                                    className="form-control"
                                    value={formData.phoneNumber || ""}
                                    onChange={handleChange}
                                  />
                                  {errors.phoneNumber && (
                                    <span className={`litleError`}>
                                      {errors.phoneNumber}
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>

                            <div className="row">
                              <div
                                className={`${css.Form__el} col-md-12 form-group`}
                              >
                                <div className="">
                                  <label htmlFor="message">Санал хүсэлт</label>
                                  <textarea
                                    type="text"
                                    id="message"
                                    name="message"
                                    value={formData.message || ""}
                                    rows={3}
                                    className="form-control md-textarea"
                                    onChange={handleChange}
                                  />
                                  {errors.message && (
                                    <span className={`litleError`}>
                                      {errors.message}
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>

                            <div className="text-center text-md-left">
                              <button
                                className="btn btn-primary sendBtn"
                                onClick={send}
                              >
                                Илгээх
                              </button>
                            </div>
                            <div className="status" />
                          </div>

                          <div className="col-md-3 text-center">
                            <ul className="list-unstyled ">
                              <li>
                                <i className="fas fa-map-marker-alt fa-2x" />
                                <p>{info.mn.address}</p>
                              </li>
                              <li>
                                <i className="fas fa-phone mt-4 fa-2x" />
                                <p>{info.phone}</p>
                              </li>
                              <li>
                                <i className="fas fa-envelope mt-4 fa-2x" />
                                <p>{info.email}</p>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterPartners />
      <Footer />
    </Fragment>
  );
};

export const getStaticProps = async ({ params }) => {
  const { info } = await getInfo();

  return {
    props: {
      info,
    },
    revalidate: 10,
  };
};

export default Contact;
