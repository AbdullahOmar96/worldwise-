// import React from 'react'
import { Outlet } from "react-router-dom"
import AppNav from "./AppNav"
import Logo from "./Logo"
import styles from "./sidebar.module.css"

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
        <Logo/>
        <AppNav/>
        {/* <Outlet /> */}
        <Outlet/>
        <footer className={styles.footer}>
            <p className={styles.copyright}>
              &copy; Copyright {new Date().getFullYear()} by WorldWise Inc.

            </p>


        </footer>
    </div>
  )
}
