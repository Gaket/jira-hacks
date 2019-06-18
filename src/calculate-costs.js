calculateEstimate();

function calculateEstimate() {
  var userIsInNavigator = document.querySelector('.navigator-container') !== null;
  if (!userIsInNavigator) {
    alert(`Error: Please go to the Jira issue navigator.`);
    return;
  }

  var isDetailView = document.querySelector('.details-layout') !== null;
  if (isDetailView) {
    alert(`Error: Please change view type to list.`);
    return;
  }

  var estimationCells = document.querySelectorAll('.aggregatetimeestimate');

  if (estimationCells.length < 1) {
    alert(`Error: Please enable the column 'Σ Remaining Estimate.'`);
    return;
  }

  var allEstimates = [];
  var remainingEstimationSum = 0;
  var costPerHourDefault = 9000;
  var multipiers = {
    week: 2400,
    day: 480,
    hour: 60,
    minute: 1,
  };

  estimationCells.forEach(cell => {
    var remainingEstimation = cell.innerHTML;
    if (!remainingEstimation) {
      return;
    }
    
    var parts = remainingEstimation.split(',');
    allEstimates.push(...parts);
  });
  
  allEstimates.forEach(timeString => {
    timeString = timeString.trim();
    if(timeString.endsWith('s')) {
      timeString = timeString.substring(0, timeString.length-1);
    }
    
    var timeStringParts = timeString.split(' ');
    var value = parseInt(timeStringParts[0]);
    var multipier = multipiers[timeStringParts[1]];
    remainingEstimationSum += value * multipier;
  });
  
  var estimationInHours = remainingEstimationSum / 60;
  var costPerHour = parseInt(window.prompt(`Please enter the cost per hour in €:`, costPerHourDefault / 100)) * 100;
  var costSum = ((costPerHour * estimationInHours) / 100).toFixed(2);

  var output = {
    de: `Ungefähre Kosten für angezeigte Tickets: ${costSum} €.`,
    en: `Estimatet cost for displayed issues: ${costSum} €.`
  };

  alert(document.documentElement.lang in output ? output[document.documentElement.lang] : output.en); 

}