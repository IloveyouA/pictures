const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const image4 = document.getElementById('image4');
const image5 = document.getElementById('image5');
const image6 = document.getElementById('image6');
const image7 = document.getElementById('image7');
const image8 = document.getElementById('image8');
const image9 = document.getElementById('image9');
const originalImageSrc = image2.querySelector('img').src;
image1.addEventListener('mouseover', () => {
  image2.querySelector('img').src = './img/IMG_0114.jpg';
  image3.querySelector('img').src = './img/IMG_0114.jpg';
  image4.querySelector('img').src = './img/IMG_0117.jpg';
  image7.querySelector('img').src = './img/IMG_0117.jpg';
  image5.querySelector('img').src = './img/IMG_0121.jpg';
  image6.querySelector('img').src = './img/IMG_0121.jpg';
  image8.querySelector('img').src = './img/IMG_0121.jpg';
  image9.querySelector('img').src = './img/IMG_0121.jpg';
});
image1.addEventListener('mouseout', () => {
  image2.querySelector('img').src = originalImageSrc;
  image3.querySelector('img').src = originalImageSrc;
  image4.querySelector('img').src = originalImageSrc;
  image7.querySelector('img').src = originalImageSrc;
  image5.querySelector('img').src = originalImageSrc;
  image6.querySelector('img').src = originalImageSrc;
  image8.querySelector('img').src = originalImageSrc;
  image9.querySelector('img').src = originalImageSrc;
});


image2.addEventListener('mouseover', () => {
	image1.querySelector('img').src = './img/IMG_0115.jpg';
	image3.querySelector('img').src = './img/IMG_0114.jpg';
	image4.querySelector('img').src = './img/IMG_0122.jpg';
	image7.querySelector('img').src = './img/IMG_0122.jpg';
	image5.querySelector('img').src = './img/IMG_0117.jpg';
	image6.querySelector('img').src = './img/IMG_0121.jpg';
	image8.querySelector('img').src = './img/IMG_0117.jpg';
	image9.querySelector('img').src = './img/IMG_0121.jpg';
 });
 image2.addEventListener('mouseout', () => {
	image1.querySelector('img').src = originalImageSrc;
	image3.querySelector('img').src = originalImageSrc;
	image4.querySelector('img').src = originalImageSrc;
	image7.querySelector('img').src = originalImageSrc;
	image5.querySelector('img').src = originalImageSrc;
	image6.querySelector('img').src = originalImageSrc;
	image8.querySelector('img').src = originalImageSrc;
	image9.querySelector('img').src = originalImageSrc;
 });

 image3.addEventListener('mouseover', () => {
	image1.querySelector('img').src = './img/IMG_0115.jpg';
	image2.querySelector('img').src = './img/IMG_0115.jpg';
	image4.querySelector('img').src = './img/IMG_0122.jpg';
	image7.querySelector('img').src = './img/IMG_0122.jpg';
	image5.querySelector('img').src = './img/IMG_0122.jpg';
	image6.querySelector('img').src = './img/IMG_0117.jpg';
	image8.querySelector('img').src = './img/IMG_0122.jpg';
	image9.querySelector('img').src = './img/IMG_0117.jpg';
 });
 image3.addEventListener('mouseout', () => {
	image2.querySelector('img').src = originalImageSrc;
	image1.querySelector('img').src = originalImageSrc;
	image3.querySelector('img').src = originalImageSrc;
	image4.querySelector('img').src = originalImageSrc;
	image7.querySelector('img').src = originalImageSrc;
	image5.querySelector('img').src = originalImageSrc;
	image6.querySelector('img').src = originalImageSrc;
	image8.querySelector('img').src = originalImageSrc;
	image9.querySelector('img').src = originalImageSrc;
 });

 image4.addEventListener('mouseover', () => {
	image3.querySelector('img').src = './img/IMG_0120.jpg';
	image1.querySelector('img').src = './img/IMG_0116.jpg';
	image2.querySelector('img').src = './img/IMG_0120.jpg';
	image7.querySelector('img').src = './img/IMG_0117.jpg';
	image5.querySelector('img').src = './img/IMG_0114.jpg';
	image6.querySelector('img').src = './img/IMG_0114.jpg';
	image8.querySelector('img').src = './img/IMG_0121.jpg';
	image9.querySelector('img').src = './img/IMG_0121.jpg';
 });
 image4.addEventListener('mouseout', () => {
	image2.querySelector('img').src = originalImageSrc;
	image1.querySelector('img').src = originalImageSrc;
	image3.querySelector('img').src = originalImageSrc;
	image4.querySelector('img').src = originalImageSrc;
	image7.querySelector('img').src = originalImageSrc;
	image5.querySelector('img').src = originalImageSrc;
	image6.querySelector('img').src = originalImageSrc;
	image8.querySelector('img').src = originalImageSrc;
	image9.querySelector('img').src = originalImageSrc;
 });
 image5.addEventListener('mouseover', () => {
	image3.querySelector('img').src = './img/IMG_0120.jpg';
	image4.querySelector('img').src = './img/IMG_0115.jpg';
	image1.querySelector('img').src = './img/IMG_0119.jpg';
	image2.querySelector('img').src = './img/IMG_0116.jpg';
	image7.querySelector('img').src = './img/IMG_0122.jpg';
	image6.querySelector('img').src = './img/IMG_0114.jpg';
	image8.querySelector('img').src = './img/IMG_0121.jpg';
	image9.querySelector('img').src = './img/IMG_0121.jpg';
 });
 image5.addEventListener('mouseout', () => {
	image2.querySelector('img').src = originalImageSrc;
	image1.querySelector('img').src = originalImageSrc;
	image3.querySelector('img').src = originalImageSrc;
	image4.querySelector('img').src = originalImageSrc;
	image7.querySelector('img').src = originalImageSrc;
	image5.querySelector('img').src = originalImageSrc;
	image6.querySelector('img').src = originalImageSrc;
	image8.querySelector('img').src = originalImageSrc;
	image9.querySelector('img').src = originalImageSrc;
 });


 image6.addEventListener('mouseover', () => {
	image4.querySelector('img').src = './img/IMG_0115.jpg';
	image3.querySelector('img').src = './img/IMG_0116.jpg';
	image1.querySelector('img').src = './img/IMG_0119.jpg';
	image2.querySelector('img').src = './img/IMG_0119.jpg';
	image7.querySelector('img').src = './img/IMG_0122.jpg';
	image5.querySelector('img').src = './img/IMG_0115.jpg';
	image8.querySelector('img').src = './img/IMG_0122.jpg';
	image9.querySelector('img').src = './img/IMG_0117.jpg';
 });
 image6.addEventListener('mouseout', () => {
	image2.querySelector('img').src = originalImageSrc;
	image1.querySelector('img').src = originalImageSrc;
	image3.querySelector('img').src = originalImageSrc;
	image4.querySelector('img').src = originalImageSrc;
	image7.querySelector('img').src = originalImageSrc;
	image5.querySelector('img').src = originalImageSrc;
	image6.querySelector('img').src = originalImageSrc;
	image8.querySelector('img').src = originalImageSrc;
	image9.querySelector('img').src = originalImageSrc;
 });

 image7.addEventListener('mouseover', () => {
	image4.querySelector('img').src = './img/IMG_0116.jpg';
	image3.querySelector('img').src = './img/IMG_0120.jpg';
	image1.querySelector('img').src = './img/IMG_0116.jpg';
	image2.querySelector('img').src = './img/IMG_0120.jpg';
	image5.querySelector('img').src = './img/IMG_0120.jpg';
	image6.querySelector('img').src = './img/IMG_0120.jpg';
	image8.querySelector('img').src = './img/IMG_0114.jpg';
	image9.querySelector('img').src = './img/IMG_0114.jpg';
 });
 image7.addEventListener('mouseout', () => {
	image2.querySelector('img').src = originalImageSrc;
	image1.querySelector('img').src = originalImageSrc;
	image3.querySelector('img').src = originalImageSrc;
	image4.querySelector('img').src = originalImageSrc;
	image7.querySelector('img').src = originalImageSrc;
	image5.querySelector('img').src = originalImageSrc;
	image6.querySelector('img').src = originalImageSrc;
	image8.querySelector('img').src = originalImageSrc;
	image9.querySelector('img').src = originalImageSrc;
 });


 image8.addEventListener('mouseover', () => {
	image4.querySelector('img').src = './img/IMG_0119.jpg';
	image3.querySelector('img').src = './img/IMG_0120.jpg';
	image1.querySelector('img').src = './img/IMG_0119.jpg';
	image2.querySelector('img').src = './img/IMG_0116.jpg';
	image5.querySelector('img').src = './img/IMG_0116.jpg';
	image6.querySelector('img').src = './img/IMG_0120.jpg';
	image9.querySelector('img').src = './img/IMG_0114.jpg';
	image7.querySelector('img').src = './img/IMG_0115.jpg';
 });
 image8.addEventListener('mouseout', () => {
	image2.querySelector('img').src = originalImageSrc;
	image1.querySelector('img').src = originalImageSrc;
	image3.querySelector('img').src = originalImageSrc;
	image4.querySelector('img').src = originalImageSrc;
	image7.querySelector('img').src = originalImageSrc;
	image5.querySelector('img').src = originalImageSrc;
	image6.querySelector('img').src = originalImageSrc;
	image8.querySelector('img').src = originalImageSrc;
	image9.querySelector('img').src = originalImageSrc;
	
 });

 image9.addEventListener('mouseover', () => {
	image5.querySelector('img').src = './img/IMG_0119.jpg';
	image3.querySelector('img').src = './img/IMG_0116.jpg';
	image1.querySelector('img').src = './img/IMG_0119.jpg';
	image2.querySelector('img').src = './img/IMG_0119.jpg';
	image4.querySelector('img').src = './img/IMG_0119.jpg';
	image8.querySelector('img').src = './img/IMG_0115.jpg';
	image7.querySelector('img').src = './img/IMG_0115.jpg';
	image6.querySelector('img').src = './img/IMG_0116.jpg';
 });
 image9.addEventListener('mouseout', () => {
	image2.querySelector('img').src = originalImageSrc;
	image1.querySelector('img').src = originalImageSrc;
	image3.querySelector('img').src = originalImageSrc;
	image4.querySelector('img').src = originalImageSrc;
	image7.querySelector('img').src = originalImageSrc;
	image5.querySelector('img').src = originalImageSrc;
	image6.querySelector('img').src = originalImageSrc;
	image8.querySelector('img').src = originalImageSrc;
	image9.querySelector('img').src = originalImageSrc;
 });
