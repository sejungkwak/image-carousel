# Image Carousel

![screen recording](https://media.giphy.com/media/Xrjn62q9lXkhDjm9FR/giphy.gif)

#### project notes

1. HTML

- imgs
- Prev / Next buttons below the img

2. CSS

- transition

3. JavaScript

- carousel
- click event

* Challenge from Brad Traversy & Florin Pop on Udemy '50 Projects in 50 Days'

#### Takeaways from the instructor

1. HTML

- <img> for images

2. CSS

- image container transform: trnaslateX(0); (change it with JS)
- btn containers flex

3. JavaScript

```
let idx = 0

let interval = setInterval(run, 2000)

function run() {
  idx++
  changeImage()
}

function changeImage() {
  //change translateX value of img container
  if ( idx > img.length - 1 ) {
    idx = 0
  } else if ( idx < 0 ) {
    idx = img.length - 1
  }

  imgs.style.transform = `translateX(${-idx * 500}px)`
}

function resetInterval() {
  clearInterval(interval)
  interval = setInterval(run, 2000)
}

rightBtn.addEventListener('click', () => {
  idx++
  changeImage()
  resetInterval()
})
```
