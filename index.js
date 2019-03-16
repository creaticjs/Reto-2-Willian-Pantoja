function mostrarVista() {

}

function _e(id) {
  return document.getElementById(id);
}

function v(id) {
  return document.getElementById(id).value;
}

function vn(id) {
  let element = document.getElementById(id);
  if (element) {
    if (element.value !== null && element.value !== '') {
      return Number.parseFloat(element.value);
    }
  }
  return Number.NaN;
}

function setValue(id, value) {
  let element = document.getElementById(id);
  if (element) {
    element.innerHTML = value;
  }
}

/**
 * Ejercicio 1
 */
function calcularPromedio() {
  let promedio = (vn("e1_p1") + vn("e1_p2") + vn("e1_p3") + vn("e1_p4")) / 4;
  setValue("e1_promedio", promedio >= 0 && promedio <= 59 ? 'E' :
    (promedio >= 60 && promedio <= 69 ? 'D' :
      (promedio >= 70 && promedio <= 79 ? 'C' :
        (promedio >= 80 && promedio <= 89 ? 'B' :
          (promedio >= 90 && promedio <= 100 ? 'A' : 'Ingrese todas las calificaciones')))));
}

/**
 * Ejercicio 2
 */
function calcularFuerzaGravitacional() {
  let G = 6.673e-8;
  console.log(G, vn())
  if (!Number.isNaN(vn("e2_d"))) {
    let resultado = G * (vn("e2_m1") + vn("e2_m2")) / (vn("e2_d") * vn("e2_d"));
    if (Number.isNaN(resultado)) {
      setValue("e2_resultado", "el resultado no puede ser calculado")
    } else {
      setValue("e2_resultado", resultado + " dinas")
    }

  } else {
    setValue("e2_resultado", "Ingrese todas las variables");
  }
}

/**
 * Ejercicio 3
 */
function calcularEnergia() {
  let c = 2.997925e10;
  if (!Number.isNaN(vn("e3_m"))) {
    let resultado = c * Math.pow(vn("e3_m"), 2);
    if (Number.isNaN(resultado)) {
      setValue("e3_resultado", "el resultado no puede ser calculado");
    } else {
      setValue("e3_resultado", resultado + " ergios");
    }
  } else {
    setValue("e3_resultado", "Ingrese todas las variables");
  }
}

/**
 * Ejercicio 4
 */
function calcularHipotenusa() {
  if (!Number.isNaN(vn("e4_a")) && !Number.isNaN(vn("e4_b"))) {
    let h = Math.sqrt(Math.pow(vn("e4_a"), 2) + Math.pow(vn("e4_b"), 2));
    if (Number.isNaN(h)) {
      setValue("e4_resultado", "el resultado no puede ser calculado");
    } else {
      setValue("e4_resultado", h);
    }
  } else {
    setValue("e4_resultado", "Ingrese todas las variables");
  }
}

/**
 * Ejercicio 5
 */
function calcularArea() {
  let a, b, c, p;
  a = vn("e5_a");
  b = vn("e5_b");
  c = vn("e5_c");
  if (!Number.isNaN(a) && !Number.isNaN(b) && !Number.isNaN(c)) {
    p = (a + b + c) / 2;
    let interior = p * (p - a) * (p - b) * (p - c);
    console.log(interior)
    if (Number.isNaN(interior) || interior < 0) {
      setValue("e5_resultado", "el resultado no puede ser calculado");
    } else {
      let area = Math.sqrt(interior);
      setValue("e5_resultado", area);
    }
  } else {
    setValue("e5_resultado", "Ingrese todas las variables");
  }
}


/**
 * Ejercicio 6
 */
function convertirFormato12() {
  let fecha = v("e6_fecha");
  if (fecha.length == 5) {
    let hora = fecha.substring(0, 2);
    let dosPuntos = fecha.substring(2, 3);
    let minutos = fecha.substring(3, 5);

    let nHora = Number.parseInt(hora);
    if (nHora < 0 || nHora > 23) {
      setValue("e6_resultado", "La hora debe estar entre 0 y 23");
      return;
    }

    if (dosPuntos != ':') {
      setValue("e6_resultado", "El signo separador de la hora debe ser dos puntos (:)");
      return;
    }

    let nMinutos = Number.parseInt(minutos);
    if (nMinutos < 0 || nMinutos > 59) {
      setValue("e6_resultado", "Los minutos deben estar entre 0 y 59");
      return;
    }

    let pmHora = nHora - 12;
    let nuevaHora = (nHora <= 12 ? hora : (pmHora < 10 ? '0' + pmHora : pmHora));

    setValue("e6_resultado", nuevaHora + dosPuntos + minutos + (nHora < 12 ? 'AM' : 'PM'));

  } else {
    setValue("e6_resultado", "Ingrese 5 caracteres. Ej: 09:00")
  }
}


/**
 * Ejercicio 7
 */
function convertirFormatoFecha() {
  let fecha = v("e7_fecha");
  let items = fecha.trim().split(" ");

  if (items.length == 3) {
    let dia = items[0];
    let mes = items[1];
    let anio = items[2];

    dia = dia.split(",")[0];

    mes = mes.toLowerCase();
    let meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

    let indexmes = meses.indexOf(mes);

    if (indexmes < 0) {
      setValue("e7_resultado", "No se puede convertir esta fecha");
      return;
    }
    mes = indexmes + 1;

    setValue("e7_resultado", dia + " " + mes + " " + anio);

  } else {
    setValue("e7_resultado", "Ingrese el formato indicado. Ej: 15, Febrero 1989")
  }
}

/**
 * Ejercicio 8
 */
function convertirLetrasANumeros() {
  let numeroEnLetras = convertirLetrasSinTilde(v("e8_numeroEnLetras"));
  let n = numeros.map(function (item) {
    return convertirLetrasSinTilde(item)
  });
  let resultado = n.indexOf(numeroEnLetras);
  if (resultado < 0) {
    setValue("e8_resultado", "");
  } else {
    setValue("e8_resultado", resultado);
  }
}

function convertirLetrasSinTilde(palabra) {
  return palabra
    .trim()
    .toLowerCase()
    .replace("á", 'a')
    .replace("é", 'e')
    .replace("í", 'i')
    .replace("ó", 'o')
    .replace("ú", 'u');
}

/**
 * Ejercicio 9
 */
function calcularCirculo() {
  let radio = vn("e9_radio");
  if (!Number.isNaN(radio)) {
    radio = Number.parseFloat(radio);

    let perimetro = 2 * Math.PI * radio;
    setValue("e9_circunferencia", perimetro);

    let area = Math.PI * Math.pow(radio, 2);
    setValue("e9_area", area);

    let diametro = 2 * radio;
    setValue("e9_diametro", diametro);
  } else {
    setValue("e9_diametro", "");
    setValue("e9_area", "");
    setValue("e9_circunferencia", "");
  }
}

/**
 * Ejercicio 10
 */
function convertirArabigoARomano() {
  let numero = vn("e10_numero");

  if (!Number.isNaN(numero)) {
    if (numero >= 1000 && numero <= 2000) {
      let resultado = "M";
      if (numero == 2000) {
        resultado += "M";
      }

      let dec = numero % 10;
      let cen = numero % 100 - dec;
      let mil = numero % 1000 - cen - dec;

      console.log(numero, mil, cen, dec)

      resultado += convertirRomano(mil) + convertirRomano(cen) + convertirRomano(dec);

      setValue("e10_resultado", resultado);
    } else {
      setValue("e10_resultado", "El número que ingrese debe estar entre 1000 y 2000");
    }
  } else {
    setValue("e10_resultado", "Ingrese un número.");
  }
}

/**
 * Ejercicio 11
 */
function redondearCentenas() {
  let numero = v("e11_numero");
  if (!Number.isNaN(numero) && numero.length == 4) {
    numero = Number.parseInt(numero);
    let dec = numero % 10;
    let cen = numero % 100 - dec;
    let mil = numero % 1000 - cen - dec;
    let dmil = numero % 10000 - mil - cen - dec;
    let resultado = dmil + (cen >= 50 ? (mil / 100 + 1) * 100 : mil);
    setValue("e11_resultado", resultado);
  } else {
    setValue("e11_resultado", "Ingrese un número de 4 dígitos.");
  }
}

/**
 * Ejercicio 12
 */

function abrirArchivoFecha() {
  var input = event.target;

  var reader = new FileReader();
  reader.onload = function () {
    var fechas = reader.result;
    var resultado;

    if (fechas == null || fechas == '') {
      setValue("e12_resultado", "El contenido del archivo no tiene el formato especificado d m yyyy");
      return;
    }

    let items = fechas.trim().split("\n");

    if (items.length == 2 && items[0].trim().split(" ").length == 3 && items[1].trim().split(" ").length == 3) {

      let dia = Number.parseInt(items[0].trim().split(" ")[0]);
      let mes = Number.parseInt(items[0].trim().split(" ")[1]);
      let anio = Number.parseInt(items[0].trim().split(" ")[2]);

      let diaHoy = Number.parseInt(items[1].trim().split(" ")[0]);
      let mesHoy = Number.parseInt(items[1].trim().split(" ")[1]);
      let anioHoy = Number.parseInt(items[1].trim().split(" ")[2]);

      if (Number.isNaN(dia) || Number.isNaN(mes) || Number.isNaN(anio) || Number.isNaN(diaHoy) || Number.isNaN(mesHoy) || Number.isNaN(anioHoy)) {
        setValue("e12_resultado", "El contenido del archivo no tiene el formato especificado d m yyyy");
        return;
      } else {
        let fechaHoy = new Date();
        if (dia <= 0 || dia > 31 ||
          mes <= 0 || mes > 12 ||
          anio < 0 || anio > fechaHoy.getFullYear() ||
          diaHoy <= 0 || diaHoy > 31 ||
          mesHoy <= 0 || mesHoy > 12 ||
          anioHoy < 0 || anioHoy > fechaHoy.getFullYear()
        ) {
          setValue("e12_resultado", "La fecha ingresada no es valida para operar");
          return;
        }

        let secondDate = new Date(anio, mes - 1, dia);
        let firstDate = new Date(anioHoy, mesHoy - 1, diaHoy);
        var oneDay = 24 * 60 * 60 * 1000;

        var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay)));

        resultado = diffDays;
        if (diffDays <= 365) {
          resultado = Number.parseInt(diffDays / 30) + " Meses y ";
          resultado += (diffDays - 30 * Number.parseInt(diffDays / 30)) + " Días";
        } else {
          resultado = diffDays / 365;
          resultado = Number.parseInt(resultado) + " años";
        }
      }

    } else {
      setValue("e12_resultado", "El contenido del archivo no tiene el formato especificado d m yyyy");
    }

    document.getElementById("e12_cargado").innerHTML = fechas;
    setValue("e12_resultado", resultado);
  };
  reader.readAsText(input.files[0]);
}

/**
 * Ejercicio 13
 */
function calcularEcuacionLineal() {
  let a, b, c, d, e, f;

  a = vn("e13_a");
  b = vn("e13_b");
  c = vn("e13_c");
  d = vn("e13_d");
  e = vn("e13_e");
  f = vn("e13_f");

  if (Number.isNaN(a) || Number.isNaN(b) || Number.isNaN(c) || Number.isNaN(d) || Number.isNaN(e) || Number.isNaN(f)) {
    _e("e13_resultado_calculado").hidden = true;
    _e("e13_resultado").hidden = false;
    setValue("e13_resultado", "Ingrese todos los coeficientes.");
    return;
  }

  if ((a * e - b * d) == 0 || (a * e - b * d)) {
    _e("e13_resultado_calculado").hidden = true;
    _e("e13_resultado").hidden = false;
    setValue("e13_resultado", "Este valor no puede ser calculado  .");
    return;
  }

  setValue("e13_x", (c * e - b * f) / (a * e - b * d));
  setValue("e13_y", (a * f - c * d) / (a * e - b * d));
  _e("e13_resultado_calculado").hidden = false;
  _e("e13_resultado").hidden = true;
}

/**
 * Ejercicio 14
 */
function calcularBisiesto() {
  let fecha = v("e14_fecha");
  let anio = Number.parseInt(fecha.substring(0, 4));

  if (((anio % 4 == 0) && (anio % 100 != 0)) || (anio % 400 == 0)) {
    setValue("e14_resultado", "Año bisiesto");
  } else {
    setValue("e14_resultado", "No es bisiesto");
  }
}

/**
 * Ejercicio 15
 */
function calcularNumeroDias() {
  let fecha = v("e15_fecha");
  let anio = Number.parseInt(fecha.substring(0, 4));
  let mes = Number.parseInt(fecha.substring(5, )) - 1;
  let dia = 1;
  setValue("e15_resultado", diasEnElMes(new Date(anio, mes, dia)));

}

function diasEnElMes(fecha) {
  return new Date(fecha.getFullYear(),
    fecha.getMonth() + 1,
    0).getDate();
}


/**
 * Ejercicio 16
 */
function calcularSalario() {
  let tasa = vn("e16_tasa");
  let horas = vn("e16_horas");
  let horasExtra = vn("e16_horas_extra");
  let impuesto = 0;
  let salario = 0;

  salario = horas * tasa;
  salario += horasExtra * tasa * 0.5;

  if (salario > 50000) {
    impuesto = salario * 0.1;
  }

  salario += impuesto;

  if (Number.isNaN(salario)) {
    return;
  }

  setValue("e16_impuesto", impuesto);
  setValue("e16_salario", salario);
}

/**
 * Ejercicio 17
 */
function calcularOptimoBilletesMonedas() {
  let datos = {
    cantidad: vn("e17_cantidad"),
    c100000: 0,
    c50000: 0,
    c20000: 0,
    c10000: 0,
    c5000: 0,
    c2000: 0,
    c1000: 0,
    c500: 0,
    c200: 0,
    c100: 0,
    c50: 0
  };

  optimizar(datos, 'c100000', 100000);
  optimizar(datos, 'c50000', 50000);
  optimizar(datos, 'c20000', 20000);
  optimizar(datos, 'c10000', 10000);
  optimizar(datos, 'c5000', 5000);
  optimizar(datos, 'c2000', 2000);
  optimizar(datos, 'c1000', 1000);
  optimizar(datos, 'c500', 500);
  optimizar(datos, 'c200', 200);
  optimizar(datos, 'c100', 100);
  optimizar(datos, 'c50', 50);

  setValue("e17_100000", datos['c100000']);
  setValue("e17_50000", datos['c50000']);
  setValue("e17_20000", datos['c20000']);
  setValue("e17_10000", datos['c10000']);
  setValue("e17_5000", datos['c5000']);
  setValue("e17_2000", datos['c2000']);
  setValue("e17_1000", datos['c1000']);
  setValue("e17_500", datos['c500']);
  setValue("e17_200", datos['c200']);
  setValue("e17_100", datos['c100']);
  setValue("e17_50", datos['c50']);
}

function optimizar(datos, c, m) {
  datos[c] = Number.parseInt(datos.cantidad / m);
  if (datos[c] > 0) {
    datos.cantidad -= m * datos[c];
  }
}

/**
 * Ejercicio 18
 */
function verificarNumero() {
  let numero = vn("e18_numero");

  if (!Number.isNaN(numero)) {
    if (numero == 0) {
      setValue("e18_resultado", "Cero")
    } else if (numero > 0) {
      setValue("e18_resultado", "Positivo");
    } else {
      setValue("e18_resultado", "Negativo");
    }
  } else {
    setValue("e18_resultado", "No es un valor válido. Ingrese números.")
  }

}