var Objecto:Transform;
var velocidad:float=5;
var CRotacion:boolean=false;
var CPosition:boolean=false;

function  Update(){
  if(CPosition){  
    transform.position.x=Mathf.Lerp(transform.position.x,Objecto.position.x,Time.deltaTime*velocidad);
    transform.position.y=Mathf.Lerp(transform.position.y,Objecto.position.y,Time.deltaTime*velocidad);
    transform.position.z=Mathf.Lerp(transform.position.z,Objecto.position.z,Time.deltaTime*velocidad); 
   }
        
//   transform.localEulerAngles.y=a.mandary();
//   transform.localEulerAngles.x=a.mandarx();
//   transform.localEulerAngles.z=a.mandarz();
 if(CRotacion){
    var blanco=Quaternion.Euler(Objecto.eulerAngles.x,Objecto.eulerAngles.y,Objecto.eulerAngles.z);
    transform.rotation=Quaternion.Slerp(transform.rotation,blanco,1);    
   }
}