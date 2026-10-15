export const getCircularIndex = (length: number, index: number, delta: number): number => {
    if (length <= 0) return 0;
    return ((index + delta) % length + length) % length;
};
