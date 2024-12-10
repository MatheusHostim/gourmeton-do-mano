import React from 'react';

function Hero() {
  return (
    <section style={styles.hero}>
      <h1>Bem-vindo ao GourmetOn!</h1>
      <p>Seu app de delivery de comida gourmet, rápido e fácil.</p>
      <button>Baixe Agora</button>
    </section>
  );
}

const styles = {
  hero: {
    backgroundImage: 'url(https://via.placeholder.com/1200x600)',
    backgroundSize: 'cover',
    padding: '100px 20px',
    color: '#fff',
    textAlign: 'center'
  }
};

export default Hero;
