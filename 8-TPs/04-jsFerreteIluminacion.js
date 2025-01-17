/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento
 del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un 
descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%,
 si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos 
en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var cantidadLamparas;
    var marcaLamparas;
    var precio1lampara;
    var importe;
    var descuento;
    var precioFinal;

    cantidadLamparas = document.getElementById('txtIdCantidad').value;
    cantidadLamparas = parseInt(cantidadLamparas);
    marcaLamparas = document.getElementById('Marca').value;
    precio1lampara = 35;
    importe = cantidadLamparas * precio1lampara;
    descuento = 0;
   
    if(cantidadLamparas>6)//A
    {
        descuento = 50;
    }
    else
    {
        if(cantidadLamparas==5)//B
        {
            if(marcaLamparas=="ArgentinaLuz")
            {
                descuento = 40;
            }
            else
            {
                descuento = 30;
            }
        }
        else
        {
            if(cantidadLamparas==4)//C
            {
                if(marcaLamparas=="ArgentinaLuz" || marcaLamparas=="FelipeLamparas")
                {
                    descuento = 25;
                }
                else
                {
                    descuento = 20;
                }
            }
            else
            {
                if(cantidadLamparas==3)//D
                {
                    if(marcaLamparas=="ArgentinaLuz")
                    {
                        descuento = 15;
                    }
                    else
                    {
                        if(marcaLamparas=="FelipeLamparas")
                        {
                            descuento = 10;
                        }
                        else
                        {
                            descuento = 5;
                        }
                    }
                }
            }
        }
    }

    precioFinal = importe - (importe * (descuento/100));

    var impuestoIIBB;
    impuestoIIBB = precioFinal * (10/100);

    if(precioFinal>120)//E
    {
        precioFinal = precioFinal + impuestoIIBB;
        alert("usted pago " + impuestoIIBB + " de impuestos");
    }

    document.getElementById('txtIdprecioDescuento').value = precioFinal.toFixed(2);  
}
//cantidad de lamparas: txtIdCantidad
//marca id: Marca
//resultado: txtIdprecioDescuento
