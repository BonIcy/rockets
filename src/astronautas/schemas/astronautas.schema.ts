import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export enum AstronautaTipo {
  Comandante = 'Comandante',
  Tripulante = 'Tripulante',
}

@Schema()
export class Astronauta extends Document {
  @Prop({required: true})
  nombre: string;

  @Prop({required: true})
  mision: string;

  @Prop({
    default: AstronautaTipo.Tripulante,
  })
  tipo: AstronautaTipo;
}

export let AstronautaSchema = SchemaFactory.createForClass(Astronauta);
