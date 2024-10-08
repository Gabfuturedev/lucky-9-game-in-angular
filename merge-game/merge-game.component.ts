import { Component } from '@angular/core';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-merge-game',
  templateUrl: './merge-game.component.html',
  styleUrl: './merge-game.component.css'
})
export class MergeGameComponent {
playerSide: number[] = [];
computerSide: number[]=[];
playerScore = 0;
computerScore = 0;
gameMessage = "";

// parang dom sa js need muna i render
ngOnInit(): void {
  this.startGame(); // Start a new game when the component loads
}


// start ng game 
startGame():void{
  this.playerSide = [this.cardRandom(), this.cardRandom()];
  this.computerSide = [this.cardRandom(), this.cardRandom()];
  this.calculateScores();
  this.Winner();
}
// yung number muna ng player tsaka computer rad 
cardRandom():number {
  return Math.floor(Math.random() * 9) + 1;

}
calculateScore(card:number[]):number {
 let sum = card.reduce((a, b) => a + b, 0);
 return sum % 10;
}
calculateScores(): void {
  this.playerScore = this.calculateScore(this.playerSide);
  this.computerScore = this.calculateScore(this.computerSide);
}

Winner(): void {
  if (this.playerScore > this.computerScore) {
    this.gameMessage = "Player Wins!";
   Swal.fire({
  title: "Incredible!",
  text: "You Win!!",
  imageUrl: "https://memes.co.in/memes/update/uploads/2022/01/WhatsApp-Image-2022-01-10-at-2.12.20-AM-4-1014x1024.jpeg", // Replace with your image URL
  imageWidth: 400,
  imageHeight: 200,
});

  } else if (this.playerScore < this.computerScore) {
    this.gameMessage = "Computer Wins!";
    Swal.fire({
      title: "You Lose!",
      text: "Computer Wins!!",
      imageUrl: "https://memes.co.in/memes/update/uploads/2022/01/WhatsApp-Image-2022-01-10-at-2.12.20-AM-3-1015x1024.jpeg", // Replace with your image URL
      imageWidth: 400,
      imageHeight: 200,
    });
  } else {
    this.gameMessage = "It's a tie!";
    Swal.fire({
      title: "It's a tie!",
      text: "Better Luck Next Time!",
      imageUrl: "https://i.pinimg.com/originals/3e/37/70/3e3770c73b3bfb522711cc125d2d4b2b.png", // Replace with your image URL
      imageWidth: 400,
      imageHeight: 200,
    });
  }
}


}



