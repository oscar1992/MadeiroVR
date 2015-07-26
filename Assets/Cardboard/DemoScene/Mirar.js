#pragma strict
var ray:Ray;
var apunta:Transform;
var origen:Vector3;
var destino:Vector3;
var hit:RaycastHit;
var texto:UI.Text;
var letreo:GameObject;
var imagen:UI.Image;
var cubo:GameObject;
var Scriptcubo:Movim;
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
		texto.text=""+hit.collider.name;
		letreo=hit.collider.gameObject;
		if(letreo.tag=="Letrero"){
			imagen=letreo.transform.FindChild("Canvas/Image").gameObject.GetComponent("Image");
			imagen.fillAmount-=0.1*Time.deltaTime;
			Scriptcubo=cubo.GetComponent("Movim");
		}
		
	}
	if(imagen!=null&&imagen.fillAmount<=0){		
		//cubo.transform.Translate(Vector3.forward*Time.deltaTime);
		Scriptcubo.mueve=true;
		Scriptcubo.gira=false;
	}else{
		
		Scriptcubo.mueve=false;
		Scriptcubo.gira=true;
	}
	Debug.DrawRay(ray.origin, destino);
	
}