import classNames from "classnames";
import React from "react";
import styles from "./styles.module.scss";

export const Header = () => {
    return (
        <header className={classNames(styles.root, styles.header)}>
            Header
        </header>
    )
}