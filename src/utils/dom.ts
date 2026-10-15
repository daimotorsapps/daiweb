export const forceReflow = (element: HTMLElement): void => {
    void element.offsetHeight;
};
