import classes from "./MealSum.module.css";

const MealsSum = () => {
    return (
        <section className={classes.summary}>
            <h2>Delicious Food Delivered to you</h2>
            <p>
                Choose your favorite meal from our broad selection of available
                mealss and enjoy a delicious lunch or dinner at home.
            </p>
            <p>
                All our meals are cooked with high-quality ingredients and by
                experienced chefs!
            </p>
        </section>
    );
};

export default MealsSum;
