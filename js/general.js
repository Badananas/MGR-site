const scrollItems = document.querySelectorAll('.transform_anim');

const scrollAnimation = () => {
    let windowCenter = window.innerHeight + window.scrollY;
    console.log(windowCenter)
    scrollItems.forEach(el => {
        let scrollOffset = offsetPosition(el);
        if (windowCenter >= scrollOffset) {
            el.id='start_anim';
        } /* else {
            el.id='';
        }*/
    });
};

function offsetPosition(el) {
    let offsetTop = 0;
    do {
        offsetTop  += el.offsetTop;
    } while (el = el.offsetParent);
    return offsetTop;
}
    
window.addEventListener('scroll', () => {
    scrollAnimation();
});
