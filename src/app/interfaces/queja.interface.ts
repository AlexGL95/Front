export interface QuejaInterface {
        id: number;
        nombre: string;
        telefono: string;
        correo: string;
        codigoPostal: string;
        colonia: string;
        queja: string;
        evidencia: string;
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