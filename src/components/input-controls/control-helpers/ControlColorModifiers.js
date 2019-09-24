export const focused = (controlInput) => {
  // let controlInput = ev.currentTarget;
  let controlDiv = controlInput.parentElement;
  let controlLabel = controlDiv.querySelector('.control-label');

  controlLabel.style.color = "#1a73e8";
  controlDiv.style.borderColor = "#1a73e8";
}

export const blurred = (controlInput) => {
  // let controlInput = ev.currentTarget;
  let controlDiv = controlInput.parentElement;
  let controlLabel = controlDiv.querySelector('.control-label');

  controlLabel.style.color = 'black';
  controlDiv.style.borderColor = "black";
}

export const erred = (controlInput) => {
  // let controlInput = ev.currentTarget;
  let controlDiv = controlInput.parentElement;
  let controlLabel = controlDiv.querySelector('.control-label');

  controlLabel.style.color = 'red';
  controlDiv.style.borderColor = 'red';
}