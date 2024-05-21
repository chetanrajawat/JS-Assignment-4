document.addEventListener('DOMContentLoaded', function () { document.getElementById('colorchange').addEventListener('click', function () { var color = document.getElementById('colorbox').value; document.getElementById('text-container').style.color = color; }); document.getElementById('fontsize').addEventListener('input', function () { var fontSize = this.value; document.getElementById('text-container').style.fontSize = fontSize + 'px'; });

var styleButtons = document.querySelectorAll('.stylebt');
styleButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        var style = this.id;
        document.getElementById('text-container').style.fontStyle = this.classList.toggle('active') ? style : 'initial';
    });
});
document.getElementById('list').addEventListener('change', function () {
    var fontFamily = this.value;
    document.getElementById('text-container').style.fontFamily = fontFamily;
});
document.getElementById('getstyle').addEventListener('click', function () {
    var cssProps = '';
    var textStyles = document.getElementById('text-container').style;
    for (var i = 0; i < textStyles.length; i++) {
        var prop = textStyles[i];
        var value = textStyles.getPropertyValue(prop);
        if (value) {
            cssProps += prop + ': ' + value + '; ';
        }
    }
    document.getElementById('css-props').textContent = cssProps;
});
});