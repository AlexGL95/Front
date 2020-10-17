export interface PropuestaInterface {
        id: number;
        nombre: string;
        telefono: string;
        correo: string;
        codigoPostal: string;
        colonia: string;
        problema: string;
        propuesta: string;
        anexos: string;
        fecha: string;
        folio: string;
        activa: boolean;
        afiliacion: boolean;
        categoria: {
                id: number,
                tipo: string
        };
        area: {
                id: number,
                area: string
        };
}