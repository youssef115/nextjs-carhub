import { MouseEventHandler } from "react";

export interface CustomButtonProps{
    title:string;
    containerStyles?:string;
    handleClick?:MouseEventHandler<HTMLButtonElement>
    btnType?:"button" | "submit"
}
export interface CustomFilterProps{
    title:string;
}
export interface SearchManufacturerProps{
    manufacturer:string;
    setManufacturer:(manufacturers:string)=> void //Function
}
export interface CarProps{
    city_mpg:number;
class:string;
combination_mpg:number;
cylinders:number;
displacement:number;
drive:string;
fuel_type:string;
highway_mpg:number;
make:string;
model:string;
transmission:string;
year:number;
}