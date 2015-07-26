#pragma strict
import UI;
var ray:Ray;
var apunta:Transform;
var origen:Vector3;
var destino:Vector3;
var hit:RaycastHit;
var letreo:GameObject;
var mesh:Image;
var cubo:GameObject;
var andar:boolean=false;
var salir:boolean=true;
public var Imagenes: Sprite[];
function Start () {
	
}

function Update () {
	
	origen=transform.position;
	destino=transform.TransformDirection(apunta.localPosition);
	//destino.x=destino.x*10;
	ray=new Ray(origen, destino);
	
	if(Physics.Raycast(ray, hit)){
		var obj=hit.transform.gameObject;
		print("Toque?: "+hit.collider.name);		
		letreo=hit.collider.gameObject;
		if(letreo.tag=="Letrero"&&salir==true){		
			
			if(andar==false){
				andar=true;	
			}else{
			 
				andar=false;
				
		
			}
			
			
			salir=false;
		}else if(letreo.tag!="Letrero"){			
			mesh.sprite=Imagenes[1];
			salir=true;
		}
		
	}
	if(andar){
		mesh.sprite=Imagenes[0];
		cubo.transform.Translate(Vector3.forward*Time.deltaTime);
	}
	Debug.DrawRay(ray.origin, destino);
	
}

