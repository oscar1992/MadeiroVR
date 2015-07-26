var object:GameObject;
var Velocidad:float=5;
function Start () {

}

function Update () {
 gameObject.transform.position=object.transform.position;
 
 
 gameObject.transform.rotation.x=Mathf.Lerp(gameObject.transform.rotation.x,object.transform.rotation.x,Velocidad*Time.deltaTime);
 gameObject.transform.rotation.y=Mathf.Lerp(gameObject.transform.rotation.y,object.transform.rotation.y,Velocidad*Time.deltaTime);
 gameObject.transform.rotation.z=Mathf.Lerp(gameObject.transform.rotation.z,object.transform.rotation.y,Velocidad*Time.deltaTime);
 
 
 
 
 
}