

// function to roll one die -- DONE!!

function rollDie(numSides) {
    return Math.floor(Math.random()*numSides) +1;
}

// function to roll quick dice rolls -- DONE!!

function rollQuickDie(numSides) {
    // function to generate random numbers between 1 and numSides
    var buttonQuickRoll = document.getElementById("quick-roll-results-box");
    var buttonQuickResults = Math.floor(Math.random()*numSides) +1;
    buttonQuickRoll.innerHTML = buttonQuickResults;      
}


// function to roll d20 w/ advantage

function rollAdv() {
    var buttonQuickRoll = document.getElementById("quick-roll-results-box");
    var rollone = Math.floor(Math.random()*20) +1;
    var rolltwo = Math.floor(Math.random()*20) +1;
        
    if (rollone >= rolltwo) {
        buttonQuickRoll.innerHTML = rollone + "<span class='off-dice-display'>(" + rolltwo + ")</span>";    

    } else {
        buttonQuickRoll.innerHTML = rolltwo + "<span class='off-dice-display'>(" + rollone + ")</span>";    
    }
}

// function to roll d20 w/ disadvantage

function rollDis() {
    var buttonQuickRoll = document.getElementById("quick-roll-results-box");
    var rollone = Math.floor(Math.random()*20) +1;
    var rolltwo = Math.floor(Math.random()*20) +1;
        
    if (rollone <= rolltwo) {
        buttonQuickRoll.innerHTML = rollone + "<span class='off-dice-display'>(" + rolltwo + ")</span>";    

    } else {
        buttonQuickRoll.innerHTML = rolltwo + "<span class='off-dice-display'>(" + rollone + ")</span>";    
    }
}



// function to roll multiple of the same dice | 2d6

function rollDice(numDice,numSides) {
    // make a results an array
    let results = [];
    // call rollDice(numSides) "numDice" times
    do {
        results.push(rollDie(numSides));
    } while(results.length < numDice)
    // return results
    return results;
}

// function to add multiple dice
function addToPool() {
    if (("#toggleAddToPool").hasClass("on"))
    {
        ("#toggleAddToPool").removeClass("on")
        ("#toggleAddToPool").addClass("off");
    } else {
        ("#toggleAddToPool").removeClass("off")
        ("#toggleAddToPool").addClass("on")
    }
}

// function to roll dice pool | 2d6 + 1d8 | rollPoolStd
// object called in function - { numSides: numDice, numSides: numDice}
// const poolTest = {6:2,8:3,10:6,20:1};

// const poolTest = {6: 2, 8: 3, 10: 6, 20: 1};

function rollPoolStd(obj) {
    // make results objects instead of array
    let results = {};
    // call rollDice for each entry in the obj
    for( let [numSides,numDice] of Object.entries(obj)) {
        results[numSides] = rollDice(numDice, numSides);
    };
    // return results
    return results;

}

function rollCustomPool() {
    var numRollCount = document.getElementById("numRollCountInput").value;
    var numDice = document.getElementById("numDiceInput").value;
    var numSides = document.getElementById("numSidesInput").value;
    var numBonus = document.getElementById("numBonusInput").value;
    var miscBonus = document.getElementById("miscBonusInput").value;
    var buttonCustomRolls = document.getElementById("customRollResultsBox");
    var customRollResults = numRollCount * (numDice * (Math.floor(Math.random()*numSides) +1)) + miscBonus;

    buttonCustomRolls.innerHTML = customRollResults

}

function loadStatDescription(){ //function to print classic stat description on page load
    setStatType(statType.statClassic)
    document.getElementById("radioRollClassic").checked = true;
}


const statType = {
    statClassic: "Roll 3d6 and add the dice.",
    statStandard: "Roll 4d6, drop the lowest result, and add the remaining dice.",
    statHeroic: "Roll 2d6 and add 6 to the sum of the dice."
}


var statScores;
var pointBuyLimits;
var d1, d2, d3, d4;
var statScore1, statScore2, statScore3, statScore4, statScore5, statScore6;
var statScore1Dice, statScore2Dice , statScore3Dice, statScore4Dice, statScore5Dice, statScore6Dice;
var statScore1Modifier, statScore2Modifier, statScore3Modifier, statScore4Modifier, statScore5Modifier, statScore6Modifier; 
var statScore1Cost, statScore2Cost, statScore3Cost, statScore4Cost, statScore5Cost, statScore6Cost;


function setStatType(statScores) {
    this.statScores = statScores;
    document.getElementById("statTypeDescription").innerHTML = statScores;
    statRollTableReset();
}

// TO DO - print out the buy limit descriptions

const pointBuyType = {
    pointStandard: 
    "Available Points: 27 \
    Maximum score limit (before bonuses): 15 \
    Minimum score limit (before bonuses): 8",
    pointFull: 
    "Available Points: 27 \
    Maximum score limit (before bonuses): 18 \
    Minimum score limit (before bonuses): 3" 
}


function setPointBuyLimits(pointBuyLimits) {
    this.pointBuyLimits = pointBuyLimits;
    document.getElementById("pointBuyLimitsDescription").innerHTML = pointBuyLimits;
    statRollTableReset();
}


function calcStatScoreModifier(statScoreValue) { // calculate each modifier
    return Math.floor(statScoreValue/2) - 5;
}

function statScoreRollDice() { // show each roll result
    switch(statScores) {
        case statType.statClassic:
            return d1 + ", " + d2 +  ", " + d3;
        
        case statType.statStandard:
            return d1 + ", " + d2 +  ", " + d3 + ", " + d4;
        
        case statType.statHeroic:
            return d1 + ", " + d2;
    }    
}

function rollStatScores() {
    switch(statScores) {
        case statType.statClassic:
            statScore1 = rollStatsClassic();
            statScore1Dice = statScoreRollDice();
            statScore2 = rollStatsClassic();
            statScore2Dice = statScoreRollDice();
            statScore3 = rollStatsClassic();
            statScore3Dice = statScoreRollDice();
            statScore4 = rollStatsClassic();
            statScore4Dice = statScoreRollDice();
            statScore5 = rollStatsClassic();
            statScore5Dice = statScoreRollDice();
            statScore6 = rollStatsClassic();
            statScore6Dice = statScoreRollDice();
            break;

        case statType.statStandard:
            statScore1 = rollStatsStandard();
            statScore1Dice = statScoreRollDice();
            statScore2 = rollStatsStandard();
            statScore2Dice = statScoreRollDice();
            statScore3 = rollStatsStandard();
            statScore3Dice = statScoreRollDice();
            statScore4 = rollStatsStandard();
            statScore4Dice = statScoreRollDice();
            statScore5 = rollStatsStandard();
            statScore5Dice = statScoreRollDice();
            statScore6 = rollStatsStandard();
            statScore6Dice = statScoreRollDice();
            break;

        case statType.statHeroic:
            statScore1 = rollStatsHeroic();
            statScore1Dice = statScoreRollDice();
            statScore2 = rollStatsHeroic();
            statScore2Dice = statScoreRollDice();
            statScore3 = rollStatsHeroic();
            statScore3Dice = statScoreRollDice();
            statScore4 = rollStatsHeroic();
            statScore4Dice = statScoreRollDice();
            statScore5 = rollStatsHeroic();
            statScore5Dice = statScoreRollDice();
            statScore6 = rollStatsHeroic();
            statScore6Dice = statScoreRollDice();
            break;
    }

    statScore1Modifier = calcStatScoreModifier(statScore1);
    statScore2Modifier = calcStatScoreModifier(statScore2);
    statScore3Modifier = calcStatScoreModifier(statScore3);
    statScore4Modifier = calcStatScoreModifier(statScore4);
    statScore5Modifier = calcStatScoreModifier(statScore5);
    statScore6Modifier = calcStatScoreModifier(statScore6);

    statScore1Cost = setPointCost(statScore1);
    statScore2Cost = setPointCost(statScore2);
    statScore3Cost = setPointCost(statScore3);
    statScore4Cost = setPointCost(statScore4);
    statScore5Cost = setPointCost(statScore5);
    statScore6Cost = setPointCost(statScore6);


    printStatRolls();
}

/* function pointBuyCosts() {
    var statScore1Base = Number(document.getElementById("statRoll1").value);
    var statScore2Base = Number(document.getElementById("statRoll2").value);
    var statScore3Base = Number(document.getElementById("statRoll3").value);
    var statScore4Base = Number(document.getElementById("statRoll4").value);
    var statScore5Base = Number(document.getElementById("statRoll5").value);
    var statScore6Base = Number(document.getElementById("statRoll6").value);
    

    statScore1Cost = setPointCost(statScore1Base);
    statScore2Cost = setPointCost(statScore2Base);
    statScore3Cost = setPointCost(statScore3Base);
    statScore4Cost = setPointCost(statScore4Base);
    statScore5Cost = setPointCost(statScore5Base);
    statScore6Cost = setPointCost(statScore6Base);
}
*/

// value pairs full array = 3:-9 4:-6 5:-4 6:-2 7:-1 8:0 9:1 10:2 11:3 12:4 13:5 14:7 15:9 16:12 17:15 18:19

function setPointCost(statScore) {
    if (statScore === 3) {
        return -9
    } else if (statScore === 4) {
        return -6
    } else if (statScore === 5) {
        return -4
    } else if (statScore === 6) {
        return -2
    } else if (statScore === 7) {
        return -1
    } else if (statScore === 8) {
        return 0
    } else if (statScore === 9) {
        return 1
    } else if (statScore === 10) {
        return 2
    } else if (statScore === 11) {
        return 3
    } else if (statScore === 12) {
        return 4
    } else if (statScore === 13) {
        return 5
    } else if (statScore === 14) {
        return 7
    } else if (statScore === 15) {
        return 9
    } else if (statScore === 16) {
        return 12
    } else if (statScore === 17) {
        return 15
    } else if (statScore === 18) {
        return 19
    }
}

function rollStatsClassic() { // function to roll classic stat scores
    d1 = rollDie(6);
    d2 = rollDie(6);
    d3 = rollDie(6);
    return d1 + d2 + d3;
}


function rollStatsStandard() { // function to roll standard stat scores
    d1 = rollDie(6);
    d2 = rollDie(6);
    d3 = rollDie(6);
    d4 = rollDie(6);
    return d1 + d2 + d3 + d4 - Math.min(d1, d2, d3, d4);
}

function rollStatsHeroic() { // function to roll heroic stat scores
    d1 = rollDie(6);
    d2 = rollDie(6);
    rollHeroicSum = (d1 + d2 + 6);
    return rollHeroicSum
}


function showPointBuyLimitsOptions() {
    var pointBuyLimitsCheckbox = document.getElementById("pointBuyLimitsCheckbox");
    var pointBuyLimitsRadioStandard = document.getElementById("radioPointBuyStandard");
    var pointBuyLimitsRadioFull = document.getElementById("radioPointBuyFull");
    var pointBuyLimitsFullLabel = document.getElementById("pointBuyLimitsFullLabel");
    var pointBuyLimitsStandardLabel = document.getElementById("pointBuyLimitsStandardLabel");
    if (pointBuyLimitsCheckbox.checked == true) {
        pointBuyLimitsRadioStandard.style.display = "inline-block";
        pointBuyLimitsRadioFull.style.display = "inline-block";
        pointBuyLimitsFullLabel.style.display = "inline-block";
        pointBuyLimitsStandardLabel.style.display = "inline-block";
    } else {
        pointBuyLimitsRadioStandard.style.display = "none";
        pointBuyLimitsRadioStandard.checked = false;
        pointBuyLimitsRadioFull.style.display = "none";
        pointBuyLimitsRadioFull.checked = false;
        pointBuyLimitsFullLabel.style.display = "none";
        pointBuyLimitsStandardLabel.style.display = "none";
    }
} 

function showCustomMinMaxScoresOptions() {
    var customMinMaxScoresCheckbox = document.getElementById("customMinMaxScoresCheckbox");
    var numberCustomMinMaxScores = document.getElementById("numberCustomMinMaxScores");
    var customMinMaxScoreNumberLabel = document.getElementById("customMinMaxScoreNumberLabel");
    if (customMinMaxScoresCheckbox.checked == true) {
        numberCustomMinMaxScores.style.display = "inline-block";
        customMinMaxScoreNumberLabel.style.display = "inline-block";
    } else {
        numberCustomMinMaxScores.style.display = "none";
        customMinMaxScoreNumberLabel.style.display = "none";
    }
}


function printStatRolls() {
    
    // update stat score column
    document.getElementById("statRoll1").innerHTML = statScore1;
    document.getElementById("statRoll2").innerHTML = statScore2;
    document.getElementById("statRoll3").innerHTML = statScore3;
    document.getElementById("statRoll4").innerHTML = statScore4;
    document.getElementById("statRoll5").innerHTML = statScore5;
    document.getElementById("statRoll6").innerHTML = statScore6;
    document.getElementById("statRollTotal").innerHTML = statScore1 + statScore2 + statScore3 + statScore4 + statScore5 + statScore6;

    // update stat mod column
    document.getElementById("statRoll1Mod").innerHTML = statScore1Modifier;
    document.getElementById("statRoll2Mod").innerHTML = statScore2Modifier;
    document.getElementById("statRoll3Mod").innerHTML = statScore3Modifier;
    document.getElementById("statRoll4Mod").innerHTML = statScore4Modifier;
    document.getElementById("statRoll5Mod").innerHTML = statScore5Modifier;
    document.getElementById("statRoll6Mod").innerHTML = statScore6Modifier;
    document.getElementById("statModTotal").innerHTML = statScore1Modifier + statScore2Modifier + statScore3Modifier + statScore4Modifier + statScore5Modifier + statScore6Modifier;

    const pointBuyEquivalentCheckboxCheck = document.getElementById("pointBuyEquivalentCheckbox").checked;

    if (pointBuyEquivalentCheckboxCheck == true) {
        // update point buy equivalent column
        document.getElementById("statRoll1Points").innerHTML = statScore1Cost;
        document.getElementById("statRoll2Points").innerHTML = statScore2Cost;
        document.getElementById("statRoll3Points").innerHTML = statScore3Cost;
        document.getElementById("statRoll4Points").innerHTML = statScore4Cost;
        document.getElementById("statRoll5Points").innerHTML = statScore5Cost;
        document.getElementById("statRoll6Points").innerHTML = statScore6Cost;
        document.getElementById("statPointsTotal").innerHTML = statScore1Cost + statScore2Cost + statScore3Cost + statScore4Cost + statScore5Cost + statScore6Cost;
    } else {
        document.getElementById("statRoll1Points").innerHTML = "-";
        document.getElementById("statRoll2Points").innerHTML = "-";
        document.getElementById("statRoll3Points").innerHTML = "-";
        document.getElementById("statRoll4Points").innerHTML = "-";
        document.getElementById("statRoll5Points").innerHTML = "-";
        document.getElementById("statRoll6Points").innerHTML = "-";
        document.getElementById("statPointsTotal").innerHTML = "-";
    } 
    
    
    // update stat rolls column
    document.getElementById("statRoll1Dice").innerHTML = statScore1Dice;
    document.getElementById("statRoll2Dice").innerHTML = statScore2Dice;
    document.getElementById("statRoll3Dice").innerHTML = statScore3Dice;
    document.getElementById("statRoll4Dice").innerHTML = statScore4Dice;
    document.getElementById("statRoll5Dice").innerHTML = statScore5Dice;
    document.getElementById("statRoll6Dice").innerHTML = statScore6Dice;

}



// function to reset table display when clicking a radio button

function statRollTableReset() {
    statScore1 = ""; statScore2 = ""; statScore3 = ""; statScore4 = ""; statScore5 = ""; statScore6 = "";
    statScore1Dice = ""; statScore2Dice = ""; statScore3Dice = ""; statScore4Dice = ""; statScore5Dice = ""; statScore6Dice = "";
    statScore1Modifier = ""; statScore2Modifier = ""; statScore3Modifier = ""; statScore4Modifier = ""; statScore5Modifier = ""; statScore6Modifier = ""; 
    statScore1Cost = ""; statScore2Cost = ""; statScore3Cost = ""; statScore4Cost = ""; statScore5Cost = ""; statScore6Cost = "";
    printStatRolls();
}


// function to roll dice pool, including modifiers | 2d6 + 1d8 + 3 | rollPoolBonus

// function to roll dice pool, multiple times | rollDicePoolArray

// function to roll stat pool - 3d6 x 6| rollStatsClassic

// function to roll stat pool - 4d6 x 6 drop lowest, reroll 1s | rollStatsStandadOnes

// function to roll stat pool - (2d6+6) x 6 drop lowest | rollStatsHeroic

// function to roll stat pool - (2d6+6) x 6 drop lowest, reroll 1s | rollStatsHeroicOnes

// function to calculate point-buy equivalent of rolled results and print table array

// function to allow input for custom rolls | [2*(2d6+1)+3] | rollCustom

// function to store custom rolls



/* var rollHistory = "";
var rollBuilder = "";

function positionHistory()
{
	mTable = document.getElementById('mainTable');
	hTable = document.getElementById('rollHistoryTable');
	hTable.style.position = "absolute";
	hTable.style.left = mTable.offsetLeft + mTable.offsetWidth;
	hTable.style.top = window.document.body.scrollTop;
}

function addRollToHistory()
{
	rollHistory = rollBuilder + rollHistory;
	document.getElementById('rollhistory').value = rollHistory;
	rollBuilder = "";
}

function clearRollHistory()
{
	rollHistory = "";
	rollBuilder = "";
	document.getElementById('rollhistory').value = rollHistory;	
}



function generateMyRollTable()
{
	var rollList = getCustomRolls();
	var customRoll;
	var i = 0;
	var tableRows = "";

	for( customRoll in rollList )
	{
		var p = rollList[ customRoll ];
		// Write out the HTML for this roll
		tableRows += "<tr><td class=\"myRollName\">" + customRoll + "<br><input type=\"button\" value=\"Delete\" onclick=\"removeCustomRoll('" + customRoll + "');\" ></td>";
		tableRows += "<td class=\"myRollDescription\" nowrap><b>" + getRollDescription( p[0],p[1],p[2],p[3],p[4],p[5] ) + "</b><br>( " + getMinMedianMaxString(p[0],p[1],p[2],p[3],p[4],p[5]) + " )</td>";
		tableRows += "<td class=\"myRollButton\"><input type=\"hidden\" name=\"myRollData" + i + "\" value=\"" + p[0] + "," + p[1] + "," + p[2] + "," + p[3] + "," + p[4] + "," + p[5] + "\" >";
		tableRows += "<input type=\"button\" value=\"Roll\" onclick=\"doCustomRoll('" + customRoll + "');\" ></td>";
		tableRows += "<td class=\"myRollResult\"><div id=\"divMyRollResult" + i + "\" class=\"result\">&nbsp;</div></td></tr>";

		i++;
	}
	divMyRollTable.innerHTML = "<table class=\"myRolls\">" + tableRows + "</table>";
}



function initPage()
{
	generateMyRollTable();
	updateFullRoll( true );
	window.onscroll = positionHistory;
	
	if( badPNGBrowser )
	{
		correctPNG();
	}	
}

// function to return min/median/max for the full roll table
function getMinMedianMaxString( multiplier, numRolls, numSides, perRollBonus, finalBonus, rollingRules )
{
	if( rollingRules > 1 )
		numRolls--;
	if( rollingRules == 4 )
		numRolls--;
		
	var roll = 1;
	rollMin = ( multiplier * ( ( numRolls * roll ) + perRollBonus ) ) + finalBonus;
	roll = ( numSides + 1 ) / 2;
	rollMedian = ( multiplier * ( ( numRolls * roll ) + perRollBonus ) ) + finalBonus;
	roll = numSides;
	rollMax = ( multiplier * ( ( numRolls * roll ) + perRollBonus ) ) + finalBonus;

	return "min " + rollMin + " / median " + rollMedian + " / max " + rollMax;
}

*/



// XdY formula for dice

// names: rollDice, numRolls, numSides, numBonus, numDice

// function to add dice onclick, add button to execute roll and print result