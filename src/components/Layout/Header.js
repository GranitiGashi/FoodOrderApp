import React, {Fragment} from "react";

import banner from '../../assets/meals.jpg';
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return <Fragment>
      <header className={classes.header}>
          <h1>ReactMeals</h1>
          <HeaderCartButton onClickG={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
          <img  src={banner} alt="Banner"/>
      </div>
  </Fragment>;
};

export default Header;
