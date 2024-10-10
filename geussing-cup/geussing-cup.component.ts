import { Component } from '@angular/core';

@Component({
  selector: 'app-geussing-cup',
  templateUrl: './geussing-cup.component.html',
  styleUrl: './geussing-cup.component.css'
})
export class GeussingCupComponent {
  cups: string[] = ['cup1.png', 'cup2.png', 'cup3.png']; // Images for cups
  ballImage: string = 'ball.png'; // Ball image
  positions: number[] = [0, 1, 2]; // To track the positions of the cups
  ballIndex: number = -1; // Index of the cup where the ball is hidden
  message: string = '';
  isShuffling: boolean = false; // Shuffle state to control animations
  revealBall: boolean = false; // Flag to control ball visibility

  constructor() {}

  ngOnInit(): void {
    this.shuffleCups(); // Start shuffling when the component initializes
  }

  // Shuffle the cups and hide the ball during shuffling
  shuffleCups() {
    this.isShuffling = true;
    this.revealBall = false; // Ensure the ball is hidden initially
    this.ballIndex = -1; // Temporarily hide the ball during shuffle
    let shuffleCount = 0;

    const shuffleInterval = setInterval(() => {
      // Randomize cup positions
      this.positions = this.positions
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);

      shuffleCount++;

      if (shuffleCount >= 6) { // Shuffle for 6 cycles
        clearInterval(shuffleInterval);
        // Randomly assign the ball to one of the cups after shuffling is done
        this.ballIndex = Math.floor(Math.random() * this.cups.length);
        this.isShuffling = false; // End shuffling
        this.message = 'The cups are shuffled. Can you guess where the ball is?';
      }
    }, 500); // Shuffle every 0.5 seconds
  }

  // Guess the index and check if the ball is under the selected cup
  guess(index: number) {
    if (this.isShuffling) {
      this.message = 'Wait! The cups are still shuffling.';
      return;
    }

    if (index === this.ballIndex) {
      this.revealBall = true; // Reveal the ball if the guess is correct
      this.message = 'Correct! The ball is under this cup!';
    } else {
      this.revealBall = false; // Keep the ball hidden if the guess is wrong
      this.message = 'Wrong guess! Try again!';
    }
  }

  // Get the transform for each cup based on its shuffled position
  getCupPosition(index: number): string {
    const offset = this.positions[index] * 20; // Adjust this for cup spacing
    return `translateX(${offset}vw)`; // Return the translation for CSS
  }

}

