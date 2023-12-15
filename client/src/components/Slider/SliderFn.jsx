
let scrollbarWidth = 0;
const SliderFn = {
    handleSlide: (val, setScrollPos) => {
        let sliderWrapper = document.querySelector(`.slider_wrapper`);
        // let scrollAmt = sliderWrapper.clientWidth;
        let scrollAmt = sliderWrapper.getBoundingClientRect().width;

        if (val === "right") {
            let rightArr = document.querySelector(`.rightArr`);
            // console.log(rightArr);
            sliderWrapper.scrollLeft += (scrollAmt +scrollbarWidth);
            rightArr.disabled = true;
            setTimeout(() => {
                rightArr.disabled = false;
                setScrollPos((prevVal) => prevVal += scrollAmt +scrollbarWidth);
            }, 500);

        }
        if (val === "left") {
            // ENABELING AND DISABLING A BUTTON
            let leftArr = document.querySelector(`.leftArr`);
            leftArr.disabled = true;
            sliderWrapper.scrollLeft -= (scrollAmt + scrollbarWidth);
            setTimeout(() => {
                leftArr.disabled = false;
                setScrollPos((prevVal) => prevVal -= scrollAmt +scrollbarWidth);
            }, 500);

        }
    },

    showHideArrow: (scrollPos) => {
        let element = document.querySelector(`.slider_wrapper`);
        let rect = element.getBoundingClientRect();
        let scrollWidth = element.scrollWidth + (parseInt(rect.width) - rect.width)
        let scrollAmount = scrollWidth - rect.width -scrollbarWidth;
        let diff = scrollAmount - scrollPos;
        // console.log(scrollPos, scrollAmount, diff);

        let rightArr = document.querySelector(`.rightArr`);
        let leftArr = document.querySelector(`.leftArr`);
        if ((scrollPos >= scrollAmount) || (diff < 1 && diff > 0)) {
            rightArr.disabled = true;
        } else {
            rightArr.disabled = false;
        }

        if (scrollPos <= 0) {
            leftArr.disabled = true;
        } else {
            leftArr.disabled = false;
        }

    }
}

export default SliderFn;