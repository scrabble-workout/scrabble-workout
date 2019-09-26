const formatDuration = (duration) => {
    const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60)).toString();
    const seconds = Math.floor((duration % (1000 * 60)) / 1000).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
};

export { formatDuration };
