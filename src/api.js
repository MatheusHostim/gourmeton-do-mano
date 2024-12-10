export const fetchMeals = async () => {
    const data = [
      {
        id: 1,
        name: 'Pizza Margherita',
        description: 'Classic pizza with tomato, mozzarella, and basil.',
        image: 'https://via.placeholder.com/150'
      },
      {
        id: 2,
        name: 'Burger',
        description: 'Juicy beef burger with cheese, lettuce, and tomato.',
        image: 'https://via.placeholder.com/150'
      },
      {
        id: 3,
        name: 'Pasta Carbonara',
        description: 'Delicious pasta with creamy sauce, pancetta, and parmesan.',
        image: 'https://via.placeholder.com/150'
      }
    ];
    return new Promise(resolve => setTimeout(() => resolve(data), 1000)); // Simula um delay de 1 segundo
  };
  