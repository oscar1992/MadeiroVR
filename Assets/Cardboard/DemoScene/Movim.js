#pragma strict
var obj:Transform;
public var gira:boolean;
public var mueve:boolean;
var ima:UI.Image;
function Start () {
	gira=true;
	mueve=false;
}

function Update () {
	//print("Camara: "+obj.rotation.eulerAngles.y);
	//print("Cubo: "+transform.rotation.eulerAngles.y);
	if(gira){
		transform.rotation.eulerAngles.y=obj.rotation.eulerAngles.y;
	}
	if(Input.GetButton("Fire1")||mueve){
		transform.Translate(Vector3.forward*Time.deltaTime*3);
	}
	
}

function OnTriggerEnter(coli: Collider){
	print("PASO");
	if(coli.tag.Equals("Letrero")){
		gira=true;
		ima=coli.GetComponentInChildren(UI.Image);
		ima.fillAmount=1;
	}
}