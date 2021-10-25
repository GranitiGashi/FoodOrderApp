import Card from '../UI/Card';
import MealItem from './Meal Items/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Cheese Burger',
    description: 'Best cheese burger you will ever try',
    price: 2.30,
  },
  {
    id: 'm2',
    name: 'Beef',
    description: 'Great cow meet cooked with love',
    price: 11.00,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 3.20,
  },
  {
    id: 'm4',
    name: 'Mushroom soup',
    description: 'Healthy...and green...',
    price: 4.50,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;