$('#imageUpload').change(function () {
    readImgUrlAndPreview(this);

    function readImgUrlAndPreview(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#imagePreview').removeClass('hide').attr('src', e.target.result);
            }
        };
        reader.readAsDataURL(input.files[0]);
    }
});