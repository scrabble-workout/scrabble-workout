const formatDuration = (duration) => {
    if (!Number.isInteger(duration)) {
        throw new Error('Error in formatDuration function: parameter is not a non-negative integer. Please provide a proper parameter');
    }

    if (duration < 0) {
        return undefined;
    }

    const minutes = Math.floor(duration / (1000 * 60)).toString();
    const seconds = Math.floor((duration % (1000 * 60)) / 1000).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
};

export { formatDuration };
