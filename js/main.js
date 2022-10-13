const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}


let storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.'

const insertX  = [ 
'DJ Chestnut',
'Big Don',
'Joe Burrow'];

const insertY = [
'your mom\'s house',
'The Great Wall of China',
'The Continental Divide' ];

const insertZ = [
'failed to hit the griddy',
'began to drip',
'fell off'];

randomize.addEventListener('click', result);

function result() {

  let newStory=storyText;

  if(customName.value !== 'customname') {
    const name = customName.value;

    newStory = newStory.replace('Bob', name)
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14) + ' stone';
    const temperature =  Math.round((94-32)*(5/9)) + ' centigrade';

    newStory = newStory.replace ('94 fahrenheit', weight)
    newStory = newStory.replace ('300 pounds', temperature)
  }

  const xItem = randomValueFromArray(insertX)
  const yItem = randomValueFromArray(insertY)
  const zItem = randomValueFromArray(insertZ)
 
  newStory = newStory.replaceAll(':insertx:', xItem);
  newStory = newStory.replace(':inserty:', yItem);
  newStory = newStory.replace(':insertz:', zItem);

  story.textContent = newStory;
  story.style.visibility = 'visible';

}
