
"use client"

import React, { useState } from "react";
import styles from "../css/productsection.module.css";



const categories = [
  { key: "BABY THREE", label: "BABY THREE" },
  { key: "KIMMON", label: "KIMMON" },
  { key: "BLINDBOX KHÁC", label: "BLINDBOX KHÁC" },
];

// Sample Kimmon products matching your screenshot
const productData = {
  "KIMMON": [
    {
      img: "img/image28.png",
      name: "Blindbox Kimmon V5 Bông Hoa",
      price: "220.000",
      discount: "",
      oldPrice: "",
      tag: "",
    },
    {
      img: "img/image28.png",
      name: "Blindbox Kimmon Túi Đựng Tai Nghe",
      price: "231.000",
      discount: "-30%",
      oldPrice: "330.000",
      tag: "kimmon",
    },
    {
      img: "img/image28.png",
      name: "Blindbox Kimmon V6 Mimon",
      price: "224.000",
      discount: "-30%",
      oldPrice: "320.000",
      tag: "kimmon",
    },
    {
      img: "img/image28.png",
      name: "Blindbox Kimmon Trái Cây",
      price: "203.000",
      discount: "-30%",
      oldPrice: "290.000",
      tag: "kimmon",
    }
  ],
    "BABY THREE": [
    {
      img: "img/gau-bong-teddy-logo-baby.png",
      name: "Blindbox Kimmon V5 Bông Hoa",
      price: "220.000",
      discount: "",
      oldPrice: "",
      tag: "",
    },
    {
      img: "img/gau-bong-teddy-logo-baby.png",
      name: "Blindbox Kimmon Túi Đựng Tai Nghe",
      price: "231.000",
      discount: "-30%",
      oldPrice: "330.000",
      tag: "kimmon",
    },
    {
      img: "img/gau-bong-teddy-logo-baby.png",
      name: "Blindbox Kimmon V6 Mimon",
      price: "224.000",
      discount: "-30%",
      oldPrice: "320.000",
      tag: "kimmon",
    },
    {
      img: "img/gau-bong-teddy-logo-baby.png",
      name: "Blindbox Kimmon Trái Cây",
      price: "203.000",
      discount: "-30%",
      oldPrice: "290.000",
      tag: "kimmon",
    }
  ],
};

const bannerImage = "img/kimmon.webp"; // Thay bằng banner thực tế của từng tab

export default function ProductSection() {
  const [selectedTab, setSelectedTab] = useState("KIMMON");

  return (
    <div className={styles.section}>
      <h2 className={styles.title}>BLINDBOX CORNER</h2>
      <div className={styles.tabs}>
        {categories.map((cat) => (
          <button
            key={cat.key}
            className={`${styles.tabBtn} ${selectedTab === cat.key ? styles.active : ""}`}
            onClick={() => setSelectedTab(cat.key)}
            type="button"
          >
            {cat.label}
          </button>
        ))}
      </div>
      <div className={styles.bannerWrapper}>
        <img src={bannerImage} alt="Blindbox Banner" className={styles.bannerImg} />
      </div>
      <div className={styles.grid}>
        {(productData[selectedTab] || []).map((sp, idx) => (
          <div className={styles.productCard} key={idx}>
            <div className={styles.productImgWrapper}>
              <img src={sp.img} alt={sp.name} className={styles.productImg} />
              {sp.discount && (
                <span className={styles.discountTag}>{sp.discount}</span>
              )}
              {sp.tag && (
                <span className={styles.brandTag}>kimmon</span>
              )}
            </div>
            <div className={styles.productName}>{sp.name}</div>
            <div className={styles.productPriceRow}>
              <span className={styles.productPrice}>{sp.price} đ</span>
              {sp.oldPrice && <span className={styles.oldPrice}>{sp.oldPrice} đ</span>}
            </div>
          </div>
        ))}
      </div>
        <div className={styles.bottomMore}>
        <a href="#">XEM THÊM &gt;</a>
        </div>
    </div>
  );
}