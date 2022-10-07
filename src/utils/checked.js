export const uncheckRadioBtn = () => {
  document.querySelectorAll(['input[type="radio"]']).forEach((radio) => {
    if (radio.checked) {
      radio.checked = false;
    }
  });
};
