import { useEffect, useState } from 'react';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';




const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch('https://react-http-e6e00-default-rtdb.firebaseio.com/meals.json');
      const responseData = await response.json();
      const loadedMeals = [];
      if (!response.ok) {
        throw new Error("soemthing went wrong");
      }

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    };
      fetchMeals().then().catch((error) => {
        setIsLoading(false);
        setIsError(error.message);
      });


  }, []);

  if (isLoading) {
    return <section className="MealsIsLoading"> <p> loading </p></section>
  }

  if (isError) {
      return <section className="MealsError"> <p> {isError} </p> </section>
  }

  const mealsList = meals.map((meal) => (
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
