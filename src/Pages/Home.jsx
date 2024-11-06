import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import Resources from "../locales/Resources.json";

import { Suspense } from "react";
import { Pagination } from "swiper/modules";
import TopBar from "../components/TopBar";

export default function Home() {
  const isOpen = useSelector((state) => state.layout.navOpen);
  let currentLanguage = localStorage.getItem("language")
    ? localStorage.getItem("language")
    : "en";
  return (
    <main className="home">
      <div className={`custom-container ${isOpen ? "nav-open" : ""}`}>
        <TopBar />
        <header>
          <picture className="top-banner-image">
            <source
              media="(min-width: 1024px)"
              srcSet="/banner/top-banner/HOMEPAGE_DESKTOP.jpeg"
            />
            <source
              media="(min-width: 768px)"
              srcSet="/banner/top-banner/HOMEPAGE_TABLET.jpeg"
            />
            <source
              media="(min-width: 0px)"
              srcSet="/banner/top-banner/HOMEPAGE_MOBILE.jpeg"
            />
            <img
              decoding="async"
              alt="a man in a hat and jacket standing in front of a mirror"
            />
          </picture>
          <div className="buttons">
            <Link href="#">shop men</Link>
          </div>
        </header>
        <section className="new-arrivals">
          <div className="container-fluid px-5 py-4">
            <div className="special-head">
              <h2>Explore New Arrivals</h2>
            </div>

            <div className="filter-by">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <span>Filter by:</span>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="men-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#men-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="men-tab-pane"
                    aria-selected="true"
                  >
                    MEN
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="men-tab-pane"
                  role="tabpanel"
                  aria-labelledby="men-tab"
                  tabIndex="0"
                >
                  <div className="collections">
                    <Suspense fallback={<h1>hello loading</h1>}>
                      <Swiper
                        slidesPerView={5}
                        preloadImages={false}
                        lazy={true}
                        spaceBetween={40}
                        pagination={{
                          clickable: true,
                        }}
                        modules={[Pagination]}
                        breakpoints={{
                          0: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                          },
                          768: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                          },
                          1024: {
                            slidesPerView: 5,
                            spaceBetween: 40,
                          },
                        }}
                      >
                        <SwiperSlide>
                          <div className="collection-box">
                            <img
                              loading="lazy"
                              src="./men/MEN_JEANS.jpeg"
                              alt=""
                            />
                            <div className="link">
                              <a href="#">JEANS</a>
                            </div>
                          </div>
                        </SwiperSlide>

                        <SwiperSlide>
                          <div className="collection-box">
                            <img
                              loading="lazy"
                              src="./men/MEN_T-SHIRTS.jpeg"
                              alt=""
                            />
                            <div className="link">
                              <a href="#">T-SHIRTS & TOPS</a>
                            </div>
                          </div>
                        </SwiperSlide>

                        <SwiperSlide>
                          <div className="collection-box">
                            <img
                              loading="lazy"
                              src="./men/MEN_SHIRTS.jpeg"
                              alt=""
                            />

                            <div className="link">
                              <a href="#">SHIRTS</a>
                            </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="collection-box">
                            <img
                              loading="lazy"
                              src="./men/MEN_SWEATS.jpeg"
                              alt=""
                            />

                            <div className="link">
                              <a href="#">SWEATERS</a>
                            </div>
                          </div>
                        </SwiperSlide>

                        <SwiperSlide>
                          <div className="collection-box">
                            <img
                              loading="lazy"
                              src="./men/MEN_PANTS.jpeg"
                              alt=""
                            />

                            <div className="link">
                              <a href="#">PANTS</a>
                            </div>
                          </div>
                        </SwiperSlide>
                      </Swiper>
                    </Suspense>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="banner-image">
          <div className="grid-container">
            <div className="top-images">
              <div className="grid-item">
                <img
                  src="/banner/mid-banner/MID_HOMEPAGE_DESKTOP_WMN.jpg"
                  alt=""
                />
              </div>
              <div className="grid-item">
                <img
                  src="/banner/mid-banner/MID_HOMEPAGE_DESKTOP_MEN.jpeg"
                  alt=""
                />
              </div>
            </div>
            <div className="bottom-images">
              <div className="grid-item">
                <picture className="one-bottom-banner">
                  <source
                    media="(min-width: 1024px)"
                    srcSet="/banner/mid-banner/HOMEPAGE_DESKTOP_MEN_M.jpeg"
                  />
                  <source
                    media="(min-width: 768px)"
                    srcSet="/banner/mid-banner/HOMEPAGE_TABLET_MEN_M.jpeg"
                  />
                  <source
                    media="(min-width: 0px)"
                    srcSet="/banner/mid-banner/HOMEPAGE_MOBILE_MEN_M.jpeg"
                  />
                  <img
                    decoding="async"
                    alt="a man in a hat and jacket standing in front of a mirror"
                  />
                </picture>
              </div>
              <div className="grid-item">
                <picture className="second-bottom-banner">
                  <source
                    media="(min-width: 1024px)"
                    srcSet="/banner/mid-banner/ECOM-REWEAR-DESKTOP_2.jpeg"
                  />
                  <source
                    media="(min-width: 768px)"
                    srcSet="/banner/mid-banner/ECOM-REWEAR-TABLET-MEN_1.jpeg"
                  />
                  <source
                    media="(min-width: 0px)"
                    srcSet="/banner/mid-banner/ECOM-REWEAR-MOBILE-MEN_1.jpeg"
                  />
                  <img
                    decoding="async"
                    className="contentBlock-picture-image js-contentBlock-picture-image"
                    alt="a man in a hat and jacket standing in front of a mirror"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
        <section className="latest-news">
          <div className="container-fluid px-5 py-4">
            <div className="special-head pb-3 text-center">
              <h2>Latest News</h2>
            </div>

            <Swiper
              slidesPerView={3}
              spaceBetween={20}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
            >
              <SwiperSlide>
                <div className="box-news">
                  <div className="date">
                    <div className="month">مارس</div>
                    <div className="year">2024</div>
                  </div>
                  <div className="image">
                    <img
                      loading="lazy"
                      src="/news/news_card_1.jpeg"
                      alt="news card image"
                    />
                    <div className="name">Responsibility</div>
                  </div>

                  <div className="box-content">
                    <div className="title">
                      <h3>Resell. Rewear. Reduce.</h3>
                    </div>
                    <div className="desc">
                      <p>Introducing our own second-hand platform</p>
                    </div>
                  </div>
                  <span>explore</span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="box-news">
                  <div className="date">
                    <div className="month">فبراير</div>
                    <div className="year">2024</div>
                  </div>
                  <div className="image">
                    <img
                      loading="lazy"
                      src="/news/news_card_2.jpg"
                      alt="news card image"
                    />
                    <div className="name">COLLABORATIONS</div>
                  </div>

                  <div className="box-content">
                    <div className="title">
                      <h3>Burna Boy Energy</h3>
                    </div>
                    <div className="desc">
                      <p>Meet the new face of our brand</p>
                    </div>
                  </div>
                  <span>explore</span>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="box-news">
                  <div className="date">
                    <div className="month">يناير</div>
                    <div className="year">2024</div>
                  </div>
                  <div className="image">
                    <img
                      loading="lazy"
                      src="/news/news_card_3.jpeg"
                      alt="news card image"
                    />
                    <div className="name">Responsibility</div>
                  </div>

                  <div className="box-content">
                    <div className="title">
                      <h3>A Sustainable Certification</h3>
                    </div>
                    <div className="desc">
                      <p>Get to know everything about cradle to cradle</p>
                    </div>
                  </div>
                  <span>explore</span>
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="all-news-btn text-center py-2">
              <button>all news</button>
            </div>
          </div>
        </section>
        <section className="latest-social">
          <div className="wrap-container px-5 py-4">
            <div className="special-head pb-2 ">
              <h2>Latest on Social</h2>
            </div>
            <div className="grid-container">
              <div className="left-top-left-image">
                <img src="/social/top-left-1.webp" alt="Image 1" />
              </div>
              <div className="left-top-right-image">
                <img src="/social/top-left-2.webp" alt="Image 2" />
              </div>
              <div className="center-image">
                <img src="/social/center.webp" alt="Large Image" />
              </div>
              <div className="left-bottom-left-image">
                <img src="/social/bottom-left-1.webp" alt="Image 3" />
              </div>
              <div className="left-bottom-right-image">
                <img src="/social/bottom-left-2.webp" alt="Image 4" />
              </div>
              <div className="right-top-image">
                <img src="/social/right-top.webp" alt="Image 5" />
              </div>
              <div className="right-bottom-image">
                <img src="/social/right-bottom.webp" alt="Image 6" />
              </div>
            </div>
            <div className="view-more-btn">
              <a>view more</a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
