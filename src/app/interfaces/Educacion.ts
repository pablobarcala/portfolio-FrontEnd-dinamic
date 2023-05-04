export interface Educacion {
    id: number;
    titulo?: string;
    nombreInstituto?: string;
    imagen?: string;
    fecha_inicio?: Date;
    fecha_fin?: Date;
    en_progreso?: boolean;
    descripcion?: string;
}