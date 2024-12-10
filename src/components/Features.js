import React, { useEffect, useState } from 'react';
import { fetchMeals } from '../api';

function Features() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const loadMeals = async () => {
      const fetchedMeals = await fetchMeals();
      setMeals(fetchedMeals);
    };

    loadMeals();
  }, []);

  return (
    <section>
      <h2>Funcionalidades</h2>
      <p>Encontre suas refeições favoritas em um só lugar!</p>
      <div style={styles.mealsContainer}>
        {meals.map(meal => (
          <div key={meal.id} style={styles.mealCard}>
            <img src={meal.image} alt={meal.name} style={styles.mealImage} />
            <h3>{meal.name}</h3>
            <p>{meal.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  mealsContainer: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap'
  },
  mealCard: {
    width: '200px',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    textAlign: 'center'
  },
  mealImage: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px'
  }
};

export default Features;
