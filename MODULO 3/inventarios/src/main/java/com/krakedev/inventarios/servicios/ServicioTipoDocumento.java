package com.krakedev.inventarios.servicios;

import java.util.ArrayList;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.krakedev.inventarios.bdd.ProveedoresBDD;
import com.krakedev.inventarios.entidades.TipoDocumento;
import com.krakedev.inventarios.excepciones.KrakedevException;

@Path("tiposdocumento")
public class ServicioTipoDocumento {
	@Path("recuperar")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response recuperar() {
		ProveedoresBDD provBDD = new ProveedoresBDD();
		ArrayList<TipoDocumento> tipdocu = null;
		try {
			tipdocu = provBDD.recuperar();
			return Response.ok(tipdocu).build();
		} catch (KrakedevException e) {
			e.printStackTrace();
			return Response.serverError().build();
		}
	}

	@Path("crearTp")
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public Response insertar(TipoDocumento tipD) {
		System.out.println(">>>>>>>" + tipD);
		ProveedoresBDD documento = new ProveedoresBDD();
		try {
			documento.insertarTipoDoc(tipD);
			return Response.ok().build();
		} catch (KrakedevException e) {
			e.printStackTrace();
			return Response.serverError().build();
		}
	}
}
