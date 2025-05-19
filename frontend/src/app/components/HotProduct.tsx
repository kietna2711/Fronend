"use client";

import React, { useState, useEffect } from "react";
import styles from "../css/hotproduct.module.css";

const PRODUCTS = [
  {
    title: "Gấu Bông Baby Three Thỏ Macaron",
    price: "132.500 đ",
    oldprice: "265.000 đ",
    sizes: ["40cm", "50cm", "70cm"],
    sale: "-50%",
    brandImg: "/img/logoXP.png",
    img: "/img/blindbox-baby-three-tho-macaron.png",
  },
  {
    title: "Gấu Bông Capybara Đội Vịt Đeo Túi",
    price: "122.500 đ",
    oldprice: "245.000 đ",
    sizes: ["35cm", "45cm", "55cm", "+1 More"],
    sale: "-50%",
    brandImg: "/img/logoXP.png",
    img: "/img/chuot-capybara-doi-vit-deo-tui.png",
  },
  {
    title: "Gấu Bông Teddy Angel Hồng",
    price: "199.000 đ",
    oldprice: "399.000 đ",
    sizes: ["40cm", "60cm", "80cm"],
    sale: "-50%",
    brandImg: "/img/logoXP.png",
    img: "/img/gau-bong-teddy-angel-thinh.png",
  },
];

export default function HotProducts() {
  const [active, setActive] = useState(0);

  // Auto slide (tự chạy)
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev === PRODUCTS.length - 1 ? 0 : prev + 1));
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  const product = PRODUCTS[active];

  return (
    <section className={styles.hotWrapper}>
      <div className={styles.hotHeaderLine}>
        <div className={styles.line}></div>
        <span className={styles.hotTitle}>GẤU BÔNG HOT</span>
        <div className={styles.line}></div>
      </div>
      <div className={styles.hotMainContent}>
        {/* Bên trái */}
        <div className={styles.hotLeft}>
          <div className={styles.hotSectionTitle}>
            <span className={styles.italic}>Sản phẩm</span>
            <br />
            <span className={styles.bold}>BÁN CHẠY</span>
          </div>
          <div className={styles.hotDesc}>
            MiMiBear tự hào khi những chú gấu bông mà chúng tôi tạo ra mang đến sự ấm áp,
            dễ thương và niềm vui trong từng khoảnh khắc của bạn.
          </div>
          <div key={active} className={styles.productInfo}>
            <div className={styles.productTitle}>{product.title}</div>
            <div>
              <span className={styles.productPrice}>{product.price}</span>
              <span className={styles.productOldprice}>{product.oldprice}</span>
            </div>
            <div className={styles.productSizes}>
              {product.sizes.map((size, i) =>
                size.toLowerCase().includes("more") ? (
                  <span className={styles.moreSize} key={i}>{size}</span>
                ) : (
                  <span className={styles.sizeTag} key={i}>{size}</span>
                )
              )}
            </div>
          </div>
        </div>
        {/* Bên phải: sản phẩm */}
        <div className={styles.hotRight}>
          <div className={styles.productCarousel}>
            <button
              className={`${styles.carouselArrow} ${styles.prev}`}
              onClick={() => setActive((old) => (old === 0 ? PRODUCTS.length - 1 : old - 1))}
              aria-label="Sản phẩm trước"
            >
              <span>←</span>
            </button>
            <div className={styles.item + " " + styles.activeItem}>
              <div className={styles.productImgWrap}>
                <span className={styles.productBrand}>
                  <img src={product.brandImg} alt="Brand" />
                </span>
                <img src={product.img} alt={product.title} />
                <span className={styles.saleTag}>{product.sale}</span>
              </div>
            </div>
            <button
              className={`${styles.carouselArrow} ${styles.next}`}
              onClick={() => setActive((old) => (old === PRODUCTS.length - 1 ? 0 : old + 1))}
              aria-label="Sản phẩm tiếp theo"
            >
              <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}