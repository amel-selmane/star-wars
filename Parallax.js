class Parallax {
    /** JSDOC
     * @param  {HTMLElement} element
     * @param  {Number} movementSpeed (between 0.1 and 0.9 to get a nice effect)
     */
    constructor(element, movementSpeed) {
        this.element = element;
        this.movementSpeed = movementSpeed;
    }

    move = () => {
        const scrollPosition = window.pageYOffset;
        this.element.style.transform = `translateY(${scrollPosition * this.movementSpeed}px`;
    }
}

/*
    INFORMATION :

    If you want to use/reuse the parallax effect, you just need to : 

    1) instantiate a new Parallax object (const yourNewObject = new Parallax(element, movementSpeed)),
    2) in the parameters : fill the element you want to animate and your desired movement speed,
    3) and then, you can now call the "move" function from this new object in your scroll event listener (document.addEventListener('scroll', yourNewObject.move))
*/