export const resetOrder = () => {
  localStorage.clear();
  window.location.reload();
};

export const secondaryButtonClick = (e, confirmText) => {
  e.preventDefault();
  if (window.confirm(confirmText)) {
    resetOrder();
  }
};
