import Reserva from "./Reserva"
describe("Reserva de Productos", ()=>{
    it("Debería crear una reserva solo con nombre de Usuario",()=>{
        let reserva=new Reserva("Usuario 1");
        expect(reserva.getNombreUsuario()).toEqual("Usuario 1");
    });
});