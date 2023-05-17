function Chart(x, y) {
    this.x = x;
    this.y = y;
    
    this.show = () => {
      console.log(`oi: ${this.x}, ${this.y}`);
    }
    
    this.update = (dx, dy) => {
      console.log(`oi: ${this.x + dx}, ${this.y + dy}`);
      this.x = this.x + dx;
      this.y = this.y + dy; 
    }
  }