export function validarRangoFechaHora(PfechaInicio: any, PfechaFinal: any) {
    const fechaHoraValidar = new Date();
    const fechaInicio = new Date(PfechaInicio);
    const fechaFinal = new Date(PfechaFinal);
    return (
      fechaHoraValidar >= fechaInicio && fechaHoraValidar <= fechaFinal
    );
  }

  export function precioReal(PfechaInicio: any, PfechaFinal: any, _precio: any, precio_oferta: any) {
    let isValid = validarRangoFechaHora(PfechaInicio, PfechaFinal) 
    if (isValid) {
        if (_precio < precio_oferta) {
            return precio_oferta
        }
        return _precio
    }
    return _precio
  }