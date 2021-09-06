import PropTypes from "prop-types";
import React, { Fragment, useEffect, useState } from "react";
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery";
import Swiper from "react-id-swiper";

import { Row, Col } from "antd";

import { ExpandOutlined } from "@ant-design/icons";

const BASE = "http://127.0.0.1:8000";

const ProductImageGalleryLeftThumb = ({ product, thumbPosition }) => {
  const [gallerySwiper, getGallerySwiper] = useState(null);
  const [thumbnailSwiper, getThumbnailSwiper] = useState(null);

  // effect for swiper slider synchronize
  useEffect(() => {
    if (
      gallerySwiper !== null &&
      gallerySwiper.controller &&
      thumbnailSwiper !== null &&
      thumbnailSwiper.controller
    ) {
      gallerySwiper.controller.control = thumbnailSwiper;
      thumbnailSwiper.controller.control = gallerySwiper;
    }
  }, [gallerySwiper, thumbnailSwiper]);

  // swiper slider settings
  const gallerySwiperParams = {
    getSwiper: getGallerySwiper,
    spaceBetween: 1,
    loopedSlides: 3,
    loop: true,
    effect: "fade",
  };

  const thumbnailSwiperParams = {
    getSwiper: getThumbnailSwiper,
    spaceBetween: 1,
    innerHeight: "auto",
    slidesPerView: 3,
    loopedSlides: 3,
    touchRatio: 0.2,
    loop: true,
    slideToClickedSlide: true,
    direction: "vertical",
    breakpoints: {
      1200: {
        slidesPerView: 3,
        direction: "vertical",
      },
      992: {
        slidesPerView: 3,
        direction: "vertical",
      },
      768: {
        slidesPerView: 3,
        direction: "vertical",
      },
      640: {
        slidesPerView: 3,
        direction: "horizontal",
      },
      320: {
        slidesPerView: 3,
        direction: "horizontal",
      },
    },
  };

  return (
    <Fragment>
      <Row className="row row-5">
        <Col span={20} className={"col-xl-10"}>
          <div className="product-large-image-wrapper">
            {product.discount || product.new ? (
              <div className="product-img-badges">
                {product.discount ? (
                  <span className="pink">-{product.discount}%</span>
                ) : (
                  ""
                )}
                {product.new ? <span className="purple">New</span> : ""}
              </div>
            ) : (
              ""
            )}
            <LightgalleryProvider>
              <Swiper {...gallerySwiperParams}>
                {product.image &&
                  product.image.map((single, key) => {
                    return (
                      <div key={key}>
                        <LightgalleryItem group="any" src={BASE + single}>
                          <button>
                            <ExpandOutlined />
                          </button>
                        </LightgalleryItem>
                        <div className="single-image">
                          <img
                            src={BASE + single}
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                      </div>
                    );
                  })}
              </Swiper>
            </LightgalleryProvider>
          </div>
        </Col>
        <Col
          span={4}
          className={` ${
            thumbPosition && thumbPosition === "left"
              ? "col-xl-2 order-2 order-xl-1"
              : "col-xl-2"
          }`}
        >
          <div className="product-small-image-wrapper product-small-image-wrapper--side-thumb">
            <Swiper {...thumbnailSwiperParams}>
              {product.image &&
                product.image.map((single, key) => {
                  return (
                    <div key={key}>
                      <div className="single-image">
                        <img src={BASE + single} className="img-fluid" alt="" />
                      </div>
                    </div>
                  );
                })}
            </Swiper>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

ProductImageGalleryLeftThumb.propTypes = {
  product: PropTypes.object,
  thumbPosition: PropTypes.string,
};

export default ProductImageGalleryLeftThumb;
