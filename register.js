function previewImage() {
    var input = document.getElementById('imageInput');
    var img = document.getElementById('previewImage');

    if (input.files && input.files[0]) {
        alert(input.files[0]);
        var reader = new FileReader();
       
        reader.onload = function(e) {
            img.src = e.target.result;
        };

        reader.readAsDataURL(input.files[0]);
    }
}
