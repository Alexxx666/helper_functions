// 7 - Context Problems

function task7_1gen(numberFromBag, widthCanvas, heightCanvas) {
    
    var price;
    var amount;
    var answer;
    var task_text;
    
    do {
        price = randomInc(200, 600, 5);
        amount = randomInt(10, 30);
    } while (price % amount !== 0);
    
    task_text = '<p>A shop bought a box of pencils for ' + texIn('£' + roundToFloat(price / 100.0, 6)) + '. ';
    task_text += 'There were ' + texIn(amount) + ' pencils in the box. ';
    task_text += 'How many pence did one pencil cost?</p>';
    
    answer = price/amount;
    
    return task_text + '✂' + roundToFloat(answer, 6);
    
}

function task7_2gen(numberFromBag, widthCanvas, heightCanvas) {

    var price;
    var hours;
    var answer;
    var task_text;

    price = randomInc(500, 1500, 50);
    hours = randomInt(3, 20);

    task_text = '<p>Pay ' + texIn('=£' + roundToFloat(price / 100.0, 6) + '\\times') + ' number of hours worked. <br/><br/>';
    task_text += 'Jim worked for ' + texIn(hours) + ' hours. ';
    task_text += 'Work out his pay in pounds.</p>';

    answer = price * hours / 100.0;

    return task_text + '✂' + roundToFloat(answer, 6);

}

function task7_3gen(numberFromBag, widthCanvas, heightCanvas) {

    var amount;
    var numerator;
    var denominator;
    var screen2;
    var answer;
    var task_text;

    var types = randomInt(0, 5);

    switch (types) {

        case 0:
            numerator = 1;
            denominator = 4;
            break;
        case 1:
            numerator = 1;
            denominator = 5;
            break;
        case 2:
            numerator = 2;
            denominator = 5;
            break;
        case 3:
            numerator = 1;
            denominator = 6;
            break;
        case 4:
            numerator = 1;
            denominator = 10;
            break;
        case 5:
            numerator = 3;
            denominator = 10;
            break;
        default:
            break;
    }
    
    if(denominator == 6 || denominator == 4) {
     
        do {
         
            amount = randomInc(100, 1000, 50);
            
        } while (amount%denominator !== 0);
        
    } else {
     
        amount = randomInc(100, 1000, 50);
    }

    do {
        
        screen2 = randomInc(10, 50, 5);
        
    } while((amount * screen2) % 100 !== 0);

    task_text = '<p>' + texIn(amount) + ' people visit a cinema. <br/><br/>' + 
               texIn('{' + numerator + '}/{' + denominator + '}') + ' go to screen \\( 1\\). <br/><br/>' + 
               texIn(screen2 + '\\%') + ' go to screen \\( 2\\). <br/><br/>' + 
			   'The rest go to screen \\( 3\\). <br/><br/>' + 
			   'How many people go to screen \\( 3\\)?</p>';

    answer = amount - (numerator * amount / denominator) - (amount * screen2 / 100.0);

    return task_text + '✂' + roundToFloat(answer, 6);

}

function task7_4gen(numberFromBag, widthCanvas, heightCanvas) {

    var coffee_price;
    var tea_price;
    var chocolate_price;
    var coffee_num;
    var tea_num;
    var chocolate_num;
    var answer;
    var task_text;
    
    coffee_price = randomInc(105, 505, 5);
    tea_price = randomInc(105, 505, 5);
    chocolate_price = randomInc(105, 505, 5);
    
    coffee_num = randomInt(1, 5);
    tea_num = randomInt(1, 5);
    chocolate_num = randomInt(0, 5);
    
    task_text = '<p>In a cafe coffee costs ' + texIn('£' + roundToFloat(coffee_price / 100.0, 6)) + ', ' + 
                'tea costs ' + texIn('£' + roundToFloat(tea_price / 100.0, 6)) + '&nbsp;' +
                'and hot chocolate costs ' + texIn('£' + roundToFloat(chocolate_price / 100.0, 6)) + '.<br/> <br/>'; 
    
    task_text += 'Jane buys ';
    
    switch(coffee_num) {
            
        case 1:
        task_text += 'one coffee';
        break;
            
        case 2:
        task_text += 'two coffees';
        break;
            
        case 3:
        task_text += 'three coffees';
        break; 
            
        case 4:
        task_text += 'four coffees';
        break;
            
        case 5:
        task_text += 'five coffees';
        break;
            
        default:
        break;
                      
    }
    
    if(chocolate_num === 0) {
        
        task_text += ' and ';   
        
    } else {
        
        task_text += ', ';   
        
    }
        
    switch(tea_num) {
            
        case 1:
        task_text += 'one tea';
        break;
            
        case 2:
        task_text += 'two teas';
        break;
            
        case 3:
        task_text += 'three teas';
        break; 
            
        case 4:
        task_text += 'four teas';
        break;
            
        case 5:
        task_text += 'five teas';
        break;
            
        default:
        break;
                      
    }
    
    if(chocolate_num !== 0) {
        
        task_text += ' and ';
        
    }
    
    switch(chocolate_num) {
         
        case 0:
        task_text += '.';
        break;
            
        case 1:
        task_text += 'one hot chocolate.';
        break;
            
        case 2:
        task_text += 'two hot chocolates.';
        break;
            
        case 3:
        task_text += 'three hot chocolates.';
        break; 
            
        case 4:
        task_text += 'four hot chocolates.';
        break;
            
        case 5:
        task_text += 'five hot chocolates.';
        break;
            
        default:
        break;
                      
    }
    
    task_text += '<br/><br/> How much does she pay in pounds?</p>';
    
    answer = (coffee_price * coffee_num + tea_price * tea_num + chocolate_price*chocolate_num) / 100.0;
    
    return task_text + '✂' + roundToFloat(answer, 6);

}

function task7_5gen(numberFromBag, widthCanvas, heightCanvas) {

    var answer;
    var task_text;
    var money;
    var joe_share;
    var carol_share;
        
    joe_share = randomInt(2, 4);
    carol_share = randomInt(2, 4);
    
    do {
	
        money = randomInt(100, 500, 10); 
		
    } while(money % (1 + joe_share + joe_share * carol_share) !== 0);

    task_text = '<p>Three people share ' + 
                texIn('£' + money) + '. <br /><br />';
    
    switch (joe_share) {
    
        case 2: 
            task_text += 'Joe gets twice as much as Sue. <br />';
        break;
		
        case 3: 
            task_text += 'Joe gets three times as much as Sue. <br />';
        break;
		
        case 4: 
            task_text += 'Joe gets four times as much as Sue. <br />';
        break;
		
        default:
        break;
            
    }
    
    switch (carol_share) {
    
        case 2: 
            task_text += 'Carol gets twice as much as Joe. <br /><br />';
        break;
		
        case 3: 
            task_text += 'Carol gets three times as much as Joe. <br /><br />';
        break;
		
        case 4: 
            task_text += 'Carol gets four times as much as Joe. <br /><br />';
        break;
		
        default:
        break;
            
    }
    
    task_text += 'How much does Carol get?</p>';        
        
    answer = carol_share * joe_share * (money / (1 + joe_share + joe_share * carol_share));    
        
    return task_text + '✂' + roundToFloat(answer, 6);    
}

function task7_6gen(numberFromBag, widthCanvas, heightCanvas) {

    var price;
    var pay;
    var answer;
    var task_text;

    price = randomInt(500, 1500, 50);
    answer = randomInt(8, 25);

    task_text = '<p>Pay ' + texIn('=£' + roundToFloat(price / 100.0, 6) + '\\times') + 
				' number of hours worked. <br/><br/>';
    task_text += 'David\'s pay is ' + 
				texIn('£' + roundToFloat((answer * price) / 100.0, 6)) + '. ';
    task_text += 'How many hours did he work?</p>';

    return task_text + '✂' + roundToFloat(answer, 6);   
    
}

function task7_7gen(numberFromBag, widthCanvas, heightCanvas) {

    var answer;
    var task_text;
    var amount1;
    var amount2;
    var price1;
    var price2;
    var note;

    do {
    
        amount1 = randomInt(15, 35, 5)/10;
        amount2 = randomInt(15, 35, 5)/10;
   
    } while (amount1 == amount2);
    
    do {
        
       price1 = randomInt(80, 250, 10)/100;
       price2 = randomInt(100, 300, 10)/100;
        
    } while (price1 == price2);
     
    task_text = '<p>Glenda buys</br></br>' + 
                texIn(amount1) + ' kg of bananas at ' +
                texIn('£' + price1) + ' per kilogram<br /><br />' + 
                'and<br /><br />' + 
                texIn(amount2) + ' kg of oranges at ' +
                texIn('£' + price2) + ' per kilogram.<br / ><br />';
        
    if(price1*amount1 + price2*amount2 <= 10) {
        
        task_text += 'She pays with a ' + texIn('£' + 10) + 
                    ' note.<br /><br />';
        
        answer = 1000 - amount1*price1*100 - amount2*price2*100;
        
    }
    
    if(price1*amount1 + price2*amount2 > 10) {
        
        task_text += 'She pays with a ' + texIn('£' + 20) + 
                    ' note.<br /><br />';
        
        answer = 2000 - amount1*price1*100 - amount2*price2*100;
        
    }
    
    task_text += 'How much change in pounds should she receive?</p>';
        
    answer = answer/100;
    
    return task_text + '✂' + roundToFloat(answer, 6);   
    
}

function task7_8gen(numberFromBag, widthCanvas, heightCanvas) {

    var answer;
    var task_text;
    var total;
    var price;
   
    price = randomInt(4, 15);
    answer = randomInt(30, 65);
    total = answer * price;
    
    task_text = '<p>A club took ' + 
                texIn('£' + total) + ' selling tickets for a concert.<br /><br />' +
                'Each ticket was sold for ' + 
                texIn('£' + price) + '. How many tickets were sold?</p>';

    return task_text + '✂' + roundToFloat(answer, 6);

}

function task7_9gen() {

    var task_text;
    var answer;
    var earn;
    var sugar_price;
    var lemon_price;
    var lemon_amount;
    var answer;
    
    sugar_price = randomInt(500, 995, 5) / 100;
    lemon_amount = randomInt(5, 19);
    lemon_price = randomInt(30, 125, 5) / 100;
    answer = randomInt(100, 295, 5) / 10;
    
    earn = sugar_price + lemon_amount * lemon_price + answer;
 
    task_text = '<p>Terry made lemonade and sold it at the gate.<br /><br />He made ' + 
                texIn('£' + roundToFloat(earn, 2)) + ' selling the lemonade.<br /><br />He paid ' + 
                texIn('£' + sugar_price) + ' for the sugar and ' + 
                texIn('£' + lemon_price) + ' for each of the ' + 
                texIn(lemon_amount) + ' lemons he used.<br /><br /> How much profit in pounds did he make?</p>';
    
    return task_text + '✂' + roundToFloat(answer, 6);

}

