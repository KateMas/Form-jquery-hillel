$(document).ready(function() {

    $('#country').change(function() {
        switch (this.value) {
            case "ua":
                $('.ru-cities').hide();
                $('.blr-cities').hide();
                $('.ua-cities').show();
                break;
            case "ru":
                $('.ua-cities').hide();
                $('.blr-cities').hide();
                $('.ru-cities').show();
                break;
            case "blr":
                $('.ua-cities').hide();
                $('.ru-cities').hide();
                $('.blr-cities').show();
                break;
            default:
                $('.ua-cities').hide();
                $('.ru-cities').hide();
                $('.blr-cities').hide();
                break;
        }
    });
    $('.js-input').clearz({
        right: false
    });
})

