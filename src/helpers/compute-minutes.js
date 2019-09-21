const computeMinutes = (seconds) => (seconds - (seconds % 60)) / 60;

export { computeMinutes };
