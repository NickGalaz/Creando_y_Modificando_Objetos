function Consulta(nombre, paciente) {
    var _nombre = nombre;
    var _paciente = paciente;
    Object.defineProperty(this, "_getNombre", {
        get: function () {
            return _nombre
        }
    });
    Object.defineProperty(this, "_setNombre", {
        set: function (nombre) {
            _nombre = nombre;
        }
    });

    Object.defineProperty(this, "_getPacientes", {
        get: function () {
            return _paciente
        }
    });
    Object.defineProperty(this, "_setPaciente", {
        set: function (paciente) {
            _paciente = paciente;
        }
    });
}

Consulta.prototype.setNombre = function () {
    this._setNombre = nombre;
}
Consulta.prototype.getPacientes = function () {
    return this._getPacientes;
}
Consulta.prototype.setPaciente = function (paciente) {
    this._setPaciente = paciente;
}

function Paciente(nombre, edad, rut, diagnostico) {
    this._nombre = nombre;
    this._edad = edad;
    this._rut = rut;
    this._diagnostico = diagnostico;

    // NOMBRE
    Object.defineProperty(this, "_getNombre", {
        get: function () {
            return this._nombre;
        }
    });
    Object.defineProperty(this, "_setNombre", {
        set: function (nombre) {
            this._nombre = nombre;
        }
    });

    // EDAD
    Object.defineProperty(this, "_getEdad", {
        get: function () {
            return this._edad;
        }
    });
    Object.defineProperty(this, "_setEdad", {
        set: function (edad) {
            this._edad = edad;
        }
    });

    // RUT
    Object.defineProperty(this, "_getRut", {
        get: function () {
            return this._rut;
        }
    });
    Object.defineProperty(this, "_setRut", {
        set: function (rut) {
            this._rut = rut;
        }
    });

    // DIAGNÓSTICO
    Object.defineProperty(this, "_getDiagnostico", {
        get: function () {
            return this._diagnostico;
        }
    });
    Object.defineProperty(this, "_setDiagnostico", {
        set: function (diagnostico) {
            this._diagnostico = diagnostico;
        }
    });
}

// NOMBRE
Paciente.prototype.getNombre = function () {
    return this._getNombre;
};
Paciente.prototype.setNombre = function () {
    this._setNombre = nombre;
};

// EDAD
Paciente.prototype.getEdad = function () {
    return this._getEdad;
};
Paciente.prototype.setEdad = function () {
    this._setEdad = edad;
};

// RUT
Paciente.prototype.getRut = function () {
    return this._getRut;
};
Paciente.prototype.setRut = function () {
    this._setRut = rut;
};

// DIAGNÓSTICO
Paciente.prototype.getDiagnostico = function () {
    return this._getDiagnostico;
};
Paciente.prototype.setDiagnostico = function () {
    this._setDiagnostico = diganostico;
};

var p1 = new Paciente('Carlos Mancilla', 30, '12345678-9', 'Resfrío común');
var p2 = new Paciente('Fernando Gómez', 15, '20123456-7', 'Amigdalitis');
var p3 = new Paciente('Nicolás Galaz', 90, '3123456-7', 'Cirrosis');
var p4 = new Paciente('Constanza Morales', 29, '18234567-8', 'Covid-19');
var p5 = new Paciente('Carlos González', 35, '17234567-8', 'Bronquitis aguda');
var p6 = new Paciente('Karin Vera', 40, '15289567-0', 'Cuadro de jaqueca');
var p7 = new Paciente('Ramón Gómez', 86, '5254967-0', 'Alzheimer');
var p8 = new Paciente('Claudio Arce', 65, '7238567-3', 'Lumbago');
var p9 = new Paciente('Cristián Bastias', 58, '9238447-1', 'Hipertensión');
var p10 = new Paciente('Judith Parra', 20, '20008447-5', 'Tendinitis en brazo izquierdo');

var consultaMedica = new Consulta('Centro Médico DesafíoLatam', [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10]);

for (var i = 0; i < consultaMedica._getPacientes.length; i++) {
    console.log('Nombre:', consultaMedica._getPacientes[i]._nombre);
    console.log('Edad:', consultaMedica._getPacientes[i]._edad);
    console.log('Rut:', consultaMedica._getPacientes[i]._rut);
    console.log('Diagnóstico:', consultaMedica._getPacientes[i]._diagnostico);
}




