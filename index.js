function Codificar() {
    var x = $("#textoArea").val();
    if (x != ''){

        var letras = x.split('')
        var llaves = {
            a: 'ai',
            e: 'enter',
            i: 'imes',
            o: 'ober',
            u: 'ufat',
        };
        cifrado = letras.map(letra => llaves[letra] ? llaves[letra] : letra).join('')
    
        $("#muneco").hide()
        $("#titulo").hide()
        $("#parrafo").hide()
        $("#textoCifrado").text(cifrado)
        $("#copy").show();
        $("#textoCifrado").show();
    }
    else{

        if ($(window).width() > 768) {
            $("#muneco").show();
        }
        $("#textoCifrado").text('')
        $("#copy").hide();
        $("#textoCifrado").hide();
        $("#titulo").show()
        $("#parrafo").show()


    }
}


function Decodificar() {
    var codigo = $("#textoArea").val();
    if (codigo != '') {
        var codigos = {
            ai: 'a',
            enter: 'e',
            imes: 'i',
            ober: 'o',
            ufat: 'u'
        };

        var textoDescifrado = codigo.replace(/(ai|enter|imes|ober|ufat)/g, function(match, p1) {
            return codigos[p1];
        });

        $("#muneco").hide();
        $("#titulo").hide()
        $("#parrafo").hide()
        $("#textoCifrado").text(textoDescifrado);
        $("#copy").show();
        $("#textoCifrado").show();
    } else {
        if ($(window).width() > 768) {
            $("#muneco").show();
        }
        $("#textoCifrado").text('')
        $("#copy").hide();
        $("#textoCifrado").hide();
        $("#titulo").show()
        $("#parrafo").show()
    }
}


function copiarTexto() {
    var texto = document.getElementById("textoCifrado").innerText;

    // Crea un elemento de texto temporal para copiar el texto
    var elementoTemporal = document.createElement("textarea");
    elementoTemporal.value = texto;

    // Agrega el elemento temporal al DOM
    document.body.appendChild(elementoTemporal);

    // Selecciona y copia el texto dentro del elemento temporal
    elementoTemporal.select();
    document.execCommand("copy");

    // Remueve el elemento temporal
    document.body.removeChild(elementoTemporal);

}
