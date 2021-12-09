import { Fragment } from "react";

import MealsSum from "./MealSum";
import AvailableMeals from "./AvailableMeals";

const Meals = () => {
    return (
        <Fragment>
            <MealsSum />
            <AvailableMeals />
        </Fragment>
    );
};

export default Meals;
