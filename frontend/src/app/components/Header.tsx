'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Layout, Menu, Input, Drawer, Button, Grid, Row, Col } from 'antd';
import { MenuOutlined, ShoppingOutlined, HeartOutlined, UserOutlined, SearchOutlined } from '@ant-design/icons';
import styles from '../css/header.module.css';

const { Header: AntHeader } = Layout;
const { useBreakpoint } = Grid;

export default function Header() {
  const [open, setOpen] = useState(false);
  const [menuItems, setMenuItems] = useState([]);
  const screens = useBreakpoint();

  useEffect(() => {
    async function fetchMenu() {
      try {
        const res = await fetch('http://localhost:3000/categories');
        const data = await res.json();

        // Format lại menu để phù hợp với Antd Menu & Link Next.js
        const formatItems = (items) =>
          items.map((item) => ({
            key: item.id,
            label: (
              <Link href={`/category/${item.id}`}>
                {item.name}
              </Link>
            ),
            children: item.children ? formatItems(item.children) : undefined,
          }));

        setMenuItems(formatItems(data));
      } catch (error) {
        console.error('Failed to fetch menu:', error);
      }
    }
    fetchMenu();
  }, []);

  return (
    <AntHeader className={styles.header}>
      <div className={styles.container}>
        <Row
          gutter={20}
          align="middle"
          justify="space-between"
          style={{ minHeight: 64, maxWidth: 1200, margin: '0 auto', width: '100%' }}
        >
          <Col xs={16} sm={12} md={6}>
            <div className={styles.logo}>
              <Link href="/">
                <img
                  src="/img/logoXP.png"
                  alt="Logo"
                  style={{ height: 60, maxWidth: 60, cursor: 'pointer' }}
                />
              </Link>
              <span>“Gấu bông siêu dễ thương”</span>
            </div>
          </Col>

          {screens.md && (
            <Col md={8}>
              <Input
                placeholder="Nhập sản phẩm cần tìm ?"
                suffix={<SearchOutlined />}
                className={styles.search}
                size="large"
              />
            </Col>
          )}

          {screens.md ? (
            <Col md={6} style={{ textAlign: 'right' }}>
              <div className={styles.rightInfo}>
                {/* Trái tim */}
                <HeartOutlined className={styles.heartIcon} />
                {/* Giỏ hàng */}
                <ShoppingOutlined className={styles.cartIcon} style={{ marginLeft: 16 }} />
                {/* User đăng nhập */}
                <UserOutlined className={styles.userIcon} style={{ marginLeft: 16 }} />


              </div>
            </Col>
          ) : (
            <Col xs={8} style={{ textAlign: 'right' }}>
              <Button
                type="text"
                icon={<MenuOutlined style={{ fontSize: 26, color: '#e91e63' }} />}
                onClick={() => setOpen(true)}
              />
            </Col>
          )}
        </Row>

        {screens.md ? (
          <Menu
            mode="horizontal"
            items={menuItems}
            className={styles.menu}
          />
        ) : (
          <Drawer
            title="Danh mục"
            placement="left"
            onClose={() => setOpen(false)}
            open={open}
            bodyStyle={{ padding: '16px' }}
            width={260}
          >
            <Input
              placeholder="Nhập sản phẩm cần tìm ?"
              suffix={<SearchOutlined />}
              className={styles.searchMobile}
              size="large"
              style={{ marginBottom: 20 }}
            />
            <Menu
              mode="inline"
              items={menuItems}
              onClick={() => setOpen(false)}
            />
          </Drawer>
        )}
      </div>
    </AntHeader>
  );
}