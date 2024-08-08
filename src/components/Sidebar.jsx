// import React from 'react'
import AppNav from "./AppNav"
import Logo from "./Logo"
import styles from "./sidebar.module.css"

export default function Sidebar() {
  return (
    <div className={styles.Sidebar}>
        <Logo/>
        <AppNav/>
        <p>List of cities</p>
        <footer className={styles.footer}>
            <p className={styles.copyright}>
              

            </p>

        </footer>
    </div>
  )
}
