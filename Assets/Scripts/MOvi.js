#pragma strict
var rota:int=1;
var velo:int=1;
var velrota:int=1;
function Start () {

}

function Update () {
	if(Input.GetButton("W")){
		transform.Translate(Vector3.forward*Time.deltaTime*velo);
	}
	if(Input.GetButton("S")){
		transform.Translate(Vector3.back*Time.deltaTime*velo);
	}
	if(Input.GetButton("A")){
		transform.Rotate(Vector3.up*Time.deltaTime*rota);
	}
	if(Input.GetButton("D")){
		transform.Rotate(Vector3.down*Time.deltaTime*rota);
	}
}