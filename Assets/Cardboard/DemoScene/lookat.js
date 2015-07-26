#pragma strict
var objetivo:Transform;
function Start () {

}

function Update () {
	
	transform.LookAt(objetivo, Vector3.up);
	transform.localEulerAngles.x=0;
}