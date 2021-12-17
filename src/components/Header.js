import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import mealImg from "../imgs/mealimage.jpg";
import classes from "./header.module.css";

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>React Meals</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={classes["main-image"]}>
                <img src={mealImg} alt="Food" />
            </div>
        </Fragment>
    );
};

export default Header;
