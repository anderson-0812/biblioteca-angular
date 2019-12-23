# biblioteca-angular
Esta será la parte web de como se mostrara el consumo de datos del rest Node https://github.com/anderson-0812/biblioteca-rest 

En este proyecto se trabajara con la version Angular CLI: 8.3.20 y Node: 12.13.1

**Nota:** El proyecto angular en sera el directorio biblioteca-webng


**Pre requisitos:**
Tener instalado lo siguiente: instalado nodeJs, npm (en el readme del REST se encuentra los pasos )

**Comandos para la instalacion**

1. npm install -g @angular/cli (Nos permite crear proyectos desde cero de manera facil y sencilla)

2. ng new biblioteca-angular (creamos un espacio de trabajo llamdo biblioteca-angular)
  **Recomendacion:** luego de crear esto en local, crear el repositorio en git y usar estos comandos de subida 
    git add .
    git commit -m "Estructura angular"
    git remote add origin https://github.com/anderson-0812/biblioteca-angular.git
    git push -u origin master (si no se sube añadir -f para forzar el push => git push -u origin master -f)



***COMANDOS UTILES***
arrancar el servidor angular
	* entramos a la carpeta creada y ponemos	
	* ng serve o ng serve host 0.0.0.0 en local
	* ingresamos al local host con puerto 4200	


crear modelos en angular
	ng generate class models/user o tb ng g class models/user

crear un servicio 
	ng g service services/user o tb ng g s services/user

crear un componente
	ng g component components/login o tb ng g c components/login
	
	ojo: cada componente tiene su propia vista y css


ng build
	se compila y arroja una appa para ya usar en produccion 
	solo le subimos el dist a ejemplo heroku 


***LINKS PARA TEMPLATES CSS***
https://bootswatch.com/
https://getbootstrap.com/docs/4.3/getting-started/introduction/	
