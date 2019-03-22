

    var shuffle = function (array) {

        var currentIndex = array.length;
        var temporaryValue, randomIndex;
    
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
    
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
    
        return array;
    
    };

    var Deck =  ["1","2","3","4","5", "6", "7", "8", "9", "10" , "11", "12", "13", "14" , "15", "16" , "17" , "18" , "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39" ,"40", "41", "42", "43", "44", "45", "46", "47", "48", "49" ,"50", "51", "52"]
    
    var numCard = ["1","2","3","4","5", "6", "7", "8", "9", "10", "11", "12", "13"]
    var currentCard = 0;
    var currentCardHolder;

    var score = 0;
    var dealerScore = 0;
    var cardValue = 0;
    var firstTurn = 1;
    var dealerFaceDown;
    var playerAceCount = 0;
    var dealerAceCount = 0;

    var card;

function startGame(){

        if (firstTurn ==1 ){
            shuffle(Deck);
            shuffle(Deck);
            shuffle(Deck);
            shuffle(Deck);
            shuffle(Deck);
            shuffle(Deck);
            shuffle(Deck);
            shuffle(Deck);
            shuffle(Deck);
                for(var i = 0; i <2; i++){


                    card = Deck.shift();
                    if(i == 0){
                        dealerFaceDown = card;
                        cardValue = parseInt(card, 10);
                        document.getElementById("map_dimg" + numCard[currentCard]).src = "./img/card0.jpg";
                         document.getElementById("map_dimg" + numCard[currentCard]).width = "100";
                        document.getElementById("map_dimg" +numCard[currentCard]).style.display = "";
                    }
                    else{
                        cardValue = parseInt(card, 10);
                        document.getElementById("map_dimg" + numCard[currentCard]).src = "./img/card" + card + ".jpg";
                        document.getElementById("map_dimg" + numCard[currentCard]).width = "100";
                        document.getElementById("map_dimg" +numCard[currentCard]).style.display = "";
                    }
        
                        if(cardValue < 5){
                            dealerScore = dealerScore + 2;
                        }
                        else if(cardValue > 4 && cardValue < 9){
                            dealerScore = dealerScore + 3;
                        }
                        else if(cardValue > 4 && cardValue < 9){
                            dealerScore = dealerScore + 3;
                        }
                        else if(cardValue > 8 && cardValue < 13){
                            dealerScore = dealerScore + 4;
                        }
                        else if(cardValue > 12 && cardValue < 17){
                            dealerScore = dealerScore + 5;
                        }
                        else if(cardValue > 16 && cardValue < 21){
                            dealerScore = dealerScore + 6;
                        }
                        else if(cardValue > 20 && cardValue < 25){
                            dealerScore = dealerScore + 7;
                        }
                        else if(cardValue > 24 && cardValue < 29){
                            dealerScore = dealerScore + 8;
                        }
                        else if(cardValue > 28 && cardValue < 33){
                            dealerScore = dealerScore + 9;
                        }
                        else if(cardValue > 32 && cardValue < 49){
                            dealerScore = dealerScore + 10;
                        }
                        else if(cardValue > 48 && cardValue < 53){
                            
                            if (score>10){
                                dealerScore = dealerScore + 1;
                            }
                            else{
                                dealerAceCount++;
                                dealerScore = dealerScore + 11;
                            }
                            
                        }   
                    if(i == 0){
                        dealerFaceDown = card;
                    }
                    






            
                    card = Deck.shift();
            cardValue = parseInt(card, 10);
            document.getElementById("map_img" + numCard[currentCard]).src = "./img/card" + card + ".jpg";
            document.getElementById("map_img" + numCard[currentCard]).width = "100";
            document.getElementById("map_img" +numCard[currentCard]).style.display = "";
            currentCard++;

                if(cardValue < 5){
                    score = score + 2;
                }
                else if(cardValue > 4 && cardValue < 9){
                    score = score + 3;
                }
                else if(cardValue > 4 && cardValue < 9){
                    score = score + 3;
                }
                else if(cardValue > 8 && cardValue < 13){
                    score = score + 4;
                }
                else if(cardValue > 12 && cardValue < 17){
                    score = score + 5;
                }
                else if(cardValue > 16 && cardValue < 21){
                    score = score + 6;
                }
                else if(cardValue > 20 && cardValue < 25){
                    score = score + 7;
                }
                else if(cardValue > 24 && cardValue < 29){
                    score = score + 8;
                }
                else if(cardValue > 28 && cardValue < 33){
                    score = score + 9;
                }
                else if(cardValue > 32 && cardValue < 49){
                    score = score + 10;
                }
                else if(cardValue > 48 && cardValue < 53){
                    
                    if (score>10){
                        score = score + 1;
                    }
                    else{
                        playerAceCount++
                        score = score + 11;
                    }
                    
                }
            if (score > 21){
                if (playerAceCount > 0){
                    score = score - 10
                }
                else{
                    document.getElementById("heading2").innerHTML = "Bust!"
                    document.getElementById("heading2").style.color = "red";
                    
                    currentCard = 0;
                        document.getElementById("map_dimg" + numCard[currentCard]).src = "./img/card" + dealerFaceDown + ".jpg";
                        document.getElementById("map_dimg" + numCard[currentCard]).width = "100";
                        document.getElementById("map_dimg" +numCard[currentCard]).style.display = "";
                }
                
            }


            

        }
        
        firstTurn = 0;
        var x = document.getElementById("controls");
        x.style.display = "block";
        x = document.getElementById("hiddenDiv");
        x.style.display = "none";
        x = document.getElementById("hiddenDiv2");
        x.style.display = "none";

        document.getElementById("dealerHand").innerHTML = "Dealer's Hand:"
        document.getElementById("userHand").innerHTML = "Your Hand:"   
    }
}
    

    function drawCard()
{
    if (score < 22 && firstTurn == 0){
        
        card = Deck.shift();
        cardValue = parseInt(card, 10);
        document.getElementById("map_img" + numCard[currentCard]).src = "./img/card" + card + ".jpg";
        
        document.getElementById("map_img" + numCard[currentCard]).width = "100";
        document.getElementById("map_img" +numCard[currentCard]).style.display = "";
        currentCard++;

            if(cardValue < 5){
                score = score + 2;
            }
            else if(cardValue > 4 && cardValue < 9){
                score = score + 3;
            }
            else if(cardValue > 4 && cardValue < 9){
                score = score + 3;
            }
            else if(cardValue > 8 && cardValue < 13){
                score = score + 4;
            }
            else if(cardValue > 12 && cardValue < 17){
                score = score + 5;
            }
            else if(cardValue > 16 && cardValue < 21){
                score = score + 6;
            }
            else if(cardValue > 20 && cardValue < 25){
                score = score + 7;
            }
            else if(cardValue > 24 && cardValue < 29){
                score = score + 8;
            }
            else if(cardValue > 28 && cardValue < 33){
                score = score + 9;
            }
            else if(cardValue > 32 && cardValue < 49){
                score = score + 10;
            }
            else if(cardValue > 48 && cardValue < 53){
                
                if (score>10){
                    score = score + 1;
                }
                else{
                    playerAceCount++;
                    score = score + 11;
                }
                
            }
            if(score > 21){
                if (playerAceCount > 0){
                    score = score - 10
                    playerAceCount--;
                }
                else{
                    document.getElementById("heading2").innerHTML = "Bust!"
                    document.getElementById("heading2").style.color = "red";
                    currentCard = 0;
                        document.getElementById("map_dimg" + numCard[currentCard]).src = "./img/card" + dealerFaceDown + ".jpg";
                        document.getElementById("map_dimg" + numCard[currentCard]).width = "100";
                        document.getElementById("map_dimg" +numCard[currentCard]).style.display = "";
                }
            }
    }
}
    function stand(){
        if (score < 22 && firstTurn == 0){
            currentCardHolder = currentCard;
            currentCard = 0;
                        document.getElementById("map_dimg" + numCard[currentCard]).src = "./img/card" + dealerFaceDown + ".jpg";
                        document.getElementById("map_dimg" + numCard[currentCard]).width = "100";
                        document.getElementById("map_dimg" +numCard[currentCard]).style.display = "";


            currentCard = 2;



                    while(dealerScore<17){
                        card = Deck.shift();
                        cardValue = parseInt(card, 10);
                        document.getElementById("map_dimg" + numCard[currentCard]).src = "./img/card" + card + ".jpg";
                        document.getElementById("map_dimg" + numCard[currentCard]).width = "100";
                        document.getElementById("map_dimg" +numCard[currentCard]).style.display = "";
                        currentCard++
                    
        
                        if(cardValue < 5){
                            dealerScore = dealerScore + 2;
                        }
                        else if(cardValue > 4 && cardValue < 9){
                            dealerScore = dealerScore + 3;
                        }
                        else if(cardValue > 4 && cardValue < 9){
                            dealerScore = dealerScore + 3;
                        }
                        else if(cardValue > 8 && cardValue < 13){
                            dealerScore = dealerScore + 4;
                        }
                        else if(cardValue > 12 && cardValue < 17){
                            dealerScore = dealerScore + 5;
                        }
                        else if(cardValue > 16 && cardValue < 21){
                            dealerScore = dealerScore + 6;
                        }
                        else if(cardValue > 20 && cardValue < 25){
                            dealerScore = dealerScore + 7;
                        }
                        else if(cardValue > 24 && cardValue < 29){
                            dealerScore = dealerScore + 8;
                        }
                        else if(cardValue > 28 && cardValue < 33){
                            dealerScore = dealerScore + 9;
                        }
                        else if(cardValue > 32 && cardValue < 49){
                            dealerScore = dealerScore + 10;
                        }
                        else if(cardValue > 48 && cardValue < 53){
                            
                            if (score>10){
                                dealerScore = dealerScore + 1;
                            }
                            else{
                                dealerAceCount++;
                                dealerScore = dealerScore + 11;
                            }
                            
                        }  
                    } 















            if(dealerScore > 21){
                document.getElementById("heading2").innerHTML = "House Busts- You Win"
                document.getElementById("heading2").style.color = "green";
            }        
            else if(score > dealerScore){
                document.getElementById("heading2").innerHTML = "You Win"
                document.getElementById("heading2").style.color = "green";
            }
            
            else if(dealerScore > score ){
                document.getElementById("heading2").innerHTML = "House Wins"
                document.getElementById("heading2").style.color = "red";
            }

            else if(score == dealerScore){
                document.getElementById("heading2").innerHTML = "Draw"
                document.getElementById("heading2").style.color = "yellow";
            }




 
        }
        
    }
