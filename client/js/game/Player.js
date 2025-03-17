/* Třída Player slouží k reprezentaci hráče ve hře. */
class Player {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.width = 50;
      this.height = 30;
      this.speed = 5;
      this.points = 0;
      /* Objekt pro uchování statistik o sebraných létajících objektech. */
      this.collectedStats = { white: 0, yellow: 0, black: 0, red: 0 };
      this.color = color(100, 100, 255);
    }
  
    /* Metoda draw vykresluje hráče. */
    draw() {
      fill(this.color);
      stroke(0);
      strokeWeight(3);
      rect(this.x, this.y, this.width, this.height);
    }
  
    /* Metoda move slouží k pohybu hráče. */
    move(dx, dy) {
      /* Omezení pohybu hráče na hranice canvasu. */
      this.x = constrain(this.x + dx * this.speed, 0, width - this.width);
      this.y = constrain(this.y + dy * this.speed, 0, height - this.height);
    }
  
    /* Metoda detectCollision slouží k detekci kolize hráče s padajícím objektem. */
    detectCollision(fallingObject) {
      return collideRectCircle(
        this.x,
        this.y,
        this.width,
        this.height,
        fallingObject.x,
        fallingObject.y,
        fallingObject.size
      );
    }
  
    /* Metoda handleCollision slouží k zpracování kolize hráče s padajícím objektem. */
    handleCollision(fallingObject) {
      /* Přičtení bodů hráči podle padajícího objektu. */
      this.points += fallingObject.points;
      /* Přidání statistiky o sebraném objektu. */
      if (fallingObject.color.toString() === color(255).toString()) this.collectedStats.white++;
      if (fallingObject.color.toString() === color(255, 255, 0).toString()) this.collectedStats.yellow++;
      if (fallingObject.color.toString() === color(0).toString()) this.collectedStats.black++;
      if (fallingObject.color.toString() === color(255, 0, 0).toString()) this.collectedStats.red++;
    }
  }
  