# Infinity scroll

Demo of using InfinityScroll component [Demo](https://ordamari.github.io/infinityScroll/).

in this project show example how use the component

## InfinityScroll component

In many websites have infinity scroll effect, it's meaning that when you scroll down till the end the site load more elements.

InfinityScroll component render is children elements, loader and element, on the last element I add IntersectionObserver that watch when the element is on the screen, when this happend, the component run the callback function and control the error and loadinng. 

component get flag that updating if doesn't have any element to load and callback function that load more elements and get children element.
