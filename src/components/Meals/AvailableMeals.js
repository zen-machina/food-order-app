import Card from "../../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem";

// Dummy list. Connect to API later.
const DUMMY_MEALS = [
    {
        id: "m1",
        name: "Pasta",
        description: "Spagetti & Meatball",
        price: 3.45,
    },
    {
        id: "m2",
        name: "Cookies",
        description: "Chocolate Chip",
        price: 2.5,
    },
    {
        id: "m3",
        name: "Cheese Burger",
        description: "Classic Medium Rare Burger",
        price: 2.5,
    },
    {
        id: "m4",
        name: "Pizza",
        description: "Pepporoni and Jalapeneo",
        price: 2.5,
    },
];

// map out DUMMY_MEALS
const AvailableMeals = () => {
    const mealList = DUMMY_MEALS.map((meal) => (
        <MealItem
            id={meal.id}
            key={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />
    ));

    return (
        <section className={classes.meals}>
            <Card>
                <ul>{mealList}</ul>
            </Card>
        </section>
    );
};

export default AvailableMeals;
