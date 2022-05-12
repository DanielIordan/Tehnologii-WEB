
function changeImage() {
	var image = document.getElementById('image');
	if (image.src.match("Organiz")) {
		image.src = "imagini/Organiz2.jpg";
	} else {
		image.src = "imagini/Organiz.jpg";
	}
}
