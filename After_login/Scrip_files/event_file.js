const image_holder = document.getElementById("container");
image_holder.addEventListener('wheel', (Event) =>{
    Event.preventDefault();
    const eventScroll = Event.deltaY;
    image_holder.scrollLeft += eventScroll;
});