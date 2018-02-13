$(function() {
	var fillMeshes = true;
	var fillLines = true;
	var cameraDefaultZ = 5;
	//---------background scene--------------
	var renderContainer = $("#background");
	
	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera(75, renderContainer.innerWidth() / renderContainer.innerHeight(), 0.1, 1000);
	
	var renderer = new THREE.WebGLRenderer();
	renderer.setSize(renderContainer.innerWidth(), renderContainer.innerHeight());
	renderContainer.append(renderer.domElement);
	
	//----back wall----
	var wall = new THREE.Object3D();
	
	var wallMaterial = new THREE.MeshPhongMaterial({ color: 0x000000, specular: 0xaaaaaa, shininess: 30, side: THREE.FrontSide, shading: THREE.SmoothShading });
	
	var geometry = new THREE.Geometry();
	geometry.vertices.push(new THREE.Vector3(-50,-10,-4));
	geometry.vertices.push(new THREE.Vector3(-50,10,-4));
	geometry.vertices.push(new THREE.Vector3(50,-10,-4));
	geometry.vertices.push(new THREE.Vector3(50,10,-4));
	geometry.faces.push(new THREE.Face3(2, 1, 0));
	geometry.faces.push(new THREE.Face3(1, 2, 3));
	
	geometry.computeFaceNormals();
	geometry.computeVertexNormals();
	wall.add(new THREE.Mesh(geometry, wallMaterial));
	
	scene.add(wall);
	
	//----outter circle----
	var gear = new THREE.Object3D();
	
	var segmentCount = 24;
	var radius = 2;
	var outterRadius = radius * 1.25;
	var innerRadius = radius * 0.75;
	var zWidth = 1;
	
	var lineMaterial = new THREE.LineBasicMaterial({ color: 0xff0000 });
	var meshBackMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000, specular: 0xffffff, shininess: 30, side: THREE.BackSide, shading: THREE.FlatShading });
	var meshFrontMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000, specular: 0xffffff, shininess: 30, side: THREE.FrontSide, shading: THREE.FlatShading });
	
	//----outter circle----
	for (var i = 0; i <= segmentCount; i++) {
		if (i % 2 != 0) {
			
			var geometry = new THREE.Geometry();
			
			var theta = i / segmentCount * Math.PI * 2;
			geometry.vertices.push(
				new THREE.Vector3(
					Math.cos(theta) * radius,
					Math.sin(theta) * radius,
					0
				)
			);
			geometry.vertices.push(
				new THREE.Vector3(
					Math.cos(theta) * radius,
					Math.sin(theta) * radius,
					zWidth
				)
			);
			theta = (i + 1) / segmentCount * Math.PI * 2;
			geometry.vertices.push(
				new THREE.Vector3(
					Math.cos(theta) * radius,
					Math.sin(theta) * radius,
					zWidth
				)
			);
			
			theta = i / segmentCount * Math.PI * 2;
			geometry.vertices.push(
				new THREE.Vector3(
					Math.cos(theta) * radius,
					Math.sin(theta) * radius,
					0
				)
			);
			theta = (i + 1) / segmentCount * Math.PI * 2;
			geometry.vertices.push(
				new THREE.Vector3(
					Math.cos(theta) * radius,
					Math.sin(theta) * radius,
					0
				)
			);
			
			if (fillMeshes) {
				geometry.faces.push(new THREE.Face3(0, 1, 2));
				geometry.faces.push(new THREE.Face3(4, 3, 2));
			}
			
			geometry.computeFaceNormals();
			geometry.computeVertexNormals();
			if (fillLines) gear.add(new THREE.Line(geometry, lineMaterial));
			if (fillMeshes) gear.add(new THREE.Mesh(geometry, meshBackMaterial));
			
		}
	}
	//-----------------------
	
	//----gear tooths----
	var toothAngle = 0.05;
	for (var i = 0; i <= segmentCount; i++) {
		if (i % 2 == 0) {		
			
			geometry = new THREE.Geometry();
			
			//----right----
			theta = i / segmentCount * Math.PI * 2;
			geometry.vertices.push(
				new THREE.Vector3(
					Math.cos(theta) * radius,
					Math.sin(theta) * radius,
					0
				)
			);
			geometry.vertices.push(
				new THREE.Vector3(
					Math.cos(theta) * radius,
					Math.sin(theta) * radius,
					zWidth
				)
			);
			theta = i / segmentCount * Math.PI * 2 + toothAngle;
			geometry.vertices.push(
				new THREE.Vector3(
					Math.cos(theta) * outterRadius,
					Math.sin(theta) * outterRadius,
					zWidth
				)
			);
			theta = i / segmentCount * Math.PI * 2;
			geometry.vertices.push(
				new THREE.Vector3(
					Math.cos(theta) * radius,
					Math.sin(theta) * radius,
					0
				)
			);
			//----top----
			theta = i / segmentCount * Math.PI * 2 + toothAngle;
			geometry.vertices.push(
				new THREE.Vector3(
					Math.cos(theta) * outterRadius,
					Math.sin(theta) * outterRadius,
					0
				)
			);
			geometry.vertices.push(
				new THREE.Vector3(
					Math.cos(theta) * outterRadius,
					Math.sin(theta) * outterRadius,
					zWidth
				)
			);
			theta = (i + 1) / segmentCount * Math.PI * 2 - toothAngle;
			geometry.vertices.push(
				new THREE.Vector3(
					Math.cos(theta) * outterRadius,
					Math.sin(theta) * outterRadius,
					zWidth
				)
			);
			theta = i / segmentCount * Math.PI * 2 + toothAngle;
			geometry.vertices.push(
				new THREE.Vector3(
					Math.cos(theta) * outterRadius,
					Math.sin(theta) * outterRadius,
					0
				)
			);
			//----left----
			theta = (i + 1) / segmentCount * Math.PI * 2 - toothAngle;
			geometry.vertices.push(
				new THREE.Vector3(
					Math.cos(theta) * outterRadius,
					Math.sin(theta) * outterRadius,
					0
				)
			);
			geometry.vertices.push(
				new THREE.Vector3(
					Math.cos(theta) * outterRadius,
					Math.sin(theta) * outterRadius,
					zWidth
				)
			);
			theta = (i + 1) / segmentCount * Math.PI * 2;
			geometry.vertices.push(
				new THREE.Vector3(
					Math.cos(theta) * radius,
					Math.sin(theta) * radius,
					0 + zWidth
				)
			);
			theta = (i + 1) / segmentCount * Math.PI * 2 - toothAngle;
			geometry.vertices.push(
				new THREE.Vector3(
					Math.cos(theta) * outterRadius,
					Math.sin(theta) * outterRadius,
					0
				)
			);
			theta = (i + 1) / segmentCount * Math.PI * 2;
			geometry.vertices.push(
				new THREE.Vector3(
					Math.cos(theta) * radius,
					Math.sin(theta) * radius,
					0
				)
			);
			//----front----
			theta = i / segmentCount * Math.PI * 2;
			geometry.vertices.push(
				new THREE.Vector3(
					Math.cos(theta) * radius,
					Math.sin(theta) * radius,
					0
				)
			);
			theta = (i + 1) / segmentCount * Math.PI * 2;
			geometry.vertices.push(
				new THREE.Vector3(
					Math.cos(theta) * radius,
					Math.sin(theta) * radius,
					0
				)
			);
			theta = (i + 1) / segmentCount * Math.PI * 2 - toothAngle;
			geometry.vertices.push(
				new THREE.Vector3(
					Math.cos(theta) * outterRadius,
					Math.sin(theta) * outterRadius,
					0
				)
			);
			theta = i / segmentCount * Math.PI * 2;
			geometry.vertices.push(
				new THREE.Vector3(
					Math.cos(theta) * radius,
					Math.sin(theta) * radius,
					0
				)
			);
			theta = i / segmentCount * Math.PI * 2 + toothAngle;
			geometry.vertices.push(
				new THREE.Vector3(
					Math.cos(theta) * outterRadius,
					Math.sin(theta) * outterRadius,
					0
				)
			);
			//----back----
			theta = i / segmentCount * Math.PI * 2 + toothAngle;
			geometry.vertices.push(
				new THREE.Vector3(
					Math.cos(theta) * outterRadius,
					Math.sin(theta) * outterRadius,
					zWidth
				)
			);
			theta = i / segmentCount * Math.PI * 2;
			geometry.vertices.push(
				new THREE.Vector3(
					Math.cos(theta) * radius,
					Math.sin(theta) * radius,
					zWidth
				)
			);
			theta = (i + 1) / segmentCount * Math.PI * 2 - toothAngle;
			geometry.vertices.push(
				new THREE.Vector3(
					Math.cos(theta) * outterRadius,
					Math.sin(theta) * outterRadius,
					zWidth
				)
			);
			theta = (i + 1) / segmentCount * Math.PI * 2;
			geometry.vertices.push(
				new THREE.Vector3(
					Math.cos(theta) * radius,
					Math.sin(theta) * radius,
					zWidth
				)
			);
			theta = i / segmentCount * Math.PI * 2;
			geometry.vertices.push(
				new THREE.Vector3(
					Math.cos(theta) * radius,
					Math.sin(theta) * radius,
					zWidth
				)
			);
			
			if (fillMeshes) {			
				geometry.faces.push(new THREE.Face3(0, 1, 2));
				geometry.faces.push(new THREE.Face3(4, 3, 2));
				
				geometry.faces.push(new THREE.Face3(4, 5, 6));
				geometry.faces.push(new THREE.Face3(8, 7, 6));
				
				geometry.faces.push(new THREE.Face3(8, 9, 10));
				geometry.faces.push(new THREE.Face3(12, 11, 10));
				
				geometry.faces.push(new THREE.Face3(15, 14, 13));
				geometry.faces.push(new THREE.Face3(15, 16, 17));
				
				geometry.faces.push(new THREE.Face3(18, 19, 20));
				geometry.faces.push(new THREE.Face3(22, 21, 20));
			}
			
			geometry.computeFaceNormals();
			geometry.computeVertexNormals();
			if (fillLines) gear.add(new THREE.Line(geometry, lineMaterial));
			if (fillMeshes) gear.add(new THREE.Mesh(geometry, meshBackMaterial));
		}
	}
	//---------------------------------
	
	//----inner circle----
	for (i = 0; i <= segmentCount; i++) {
		
		geometry = new THREE.Geometry();
		
		//----inner part---
		theta = i / segmentCount * Math.PI * 2;
		geometry.vertices.push(
			new THREE.Vector3(
				Math.cos(theta) * innerRadius,
				Math.sin(theta) * innerRadius,
				0
			)
		);
		theta = i / segmentCount * Math.PI * 2;
		geometry.vertices.push(
			new THREE.Vector3(
				Math.cos(theta) * innerRadius,
				Math.sin(theta) * innerRadius,
				zWidth
			)
		);
		theta = (i + 1) / segmentCount * Math.PI * 2;
		geometry.vertices.push(
			new THREE.Vector3(
				Math.cos(theta) * innerRadius,
				Math.sin(theta) * innerRadius,
				zWidth
			)
		);
		theta = i / segmentCount * Math.PI * 2;
		geometry.vertices.push(
			new THREE.Vector3(
				Math.cos(theta) * innerRadius,
				Math.sin(theta) * innerRadius,
				0
			)
		);
		theta = (i + 1) / segmentCount * Math.PI * 2;
		geometry.vertices.push(
			new THREE.Vector3(
				Math.cos(theta) * innerRadius,
				Math.sin(theta) * innerRadius,
				0
			)
		);
		
		//----front part---
		theta = (i + 1) / segmentCount * Math.PI * 2;
		geometry.vertices.push(
			new THREE.Vector3(
				Math.cos(theta) * radius,
				Math.sin(theta) * radius,
				0
			)
		);
		theta = i / segmentCount * Math.PI * 2;
		geometry.vertices.push(
			new THREE.Vector3(
				Math.cos(theta) * radius,
				Math.sin(theta) * radius,
				0
			)
		);
		theta = (i + 1) / segmentCount * Math.PI * 2;
		geometry.vertices.push(
			new THREE.Vector3(
				Math.cos(theta) * innerRadius,
				Math.sin(theta) * innerRadius,
				0
			)
		);
		theta = i / segmentCount * Math.PI * 2;
		geometry.vertices.push(
			new THREE.Vector3(
				Math.cos(theta) * innerRadius,
				Math.sin(theta) * innerRadius,
				0
			)
		);
		
		//----back part----
		theta = i / segmentCount * Math.PI * 2;
		geometry.vertices.push(
			new THREE.Vector3(
				Math.cos(theta) * innerRadius,
				Math.sin(theta) * innerRadius,
				zWidth
			)
		);
		theta = i / segmentCount * Math.PI * 2;
		geometry.vertices.push(
			new THREE.Vector3(
				Math.cos(theta) * radius,
				Math.sin(theta) * radius,
				zWidth
			)
		);
		theta = (i + 1) / segmentCount * Math.PI * 2;
		geometry.vertices.push(
			new THREE.Vector3(
				Math.cos(theta) * radius,
				Math.sin(theta) * radius,
				zWidth
			)
		);
		theta = i / segmentCount * Math.PI * 2;
		geometry.vertices.push(
			new THREE.Vector3(
				Math.cos(theta) * innerRadius,
				Math.sin(theta) * innerRadius,
				zWidth
			)
		);
		theta = (i + 1) / segmentCount * Math.PI * 2;
		geometry.vertices.push(
			new THREE.Vector3(
				Math.cos(theta) * innerRadius,
				Math.sin(theta) * innerRadius,
				zWidth
			)
		);
		
		if (fillMeshes) {
			geometry.faces.push(new THREE.Face3(0, 1, 2));
			geometry.faces.push(new THREE.Face3(4, 3, 2));
			
			geometry.faces.push(new THREE.Face3(4, 5, 6));
			geometry.faces.push(new THREE.Face3(8, 7, 6));
			
			geometry.faces.push(new THREE.Face3(9, 10, 11));
			geometry.faces.push(new THREE.Face3(13, 12, 11));
		}
		
		geometry.computeFaceNormals();
		geometry.computeVertexNormals();
		if (fillLines) gear.add(new THREE.Line(geometry, lineMaterial));
		if (fillMeshes) gear.add(new THREE.Mesh(geometry, meshFrontMaterial));
	}	
	//---------------------------------
	
	scene.add(gear);
	
	camera.position.z = cameraDefaultZ;

	//----lights----
	var lightL = new THREE.PointLight(0xffffff, 0, 10);
	var lightR = new THREE.PointLight(0xffffff, 0, 10);
	lightL.position.set(-3, 0, 5);
	lightR.position.set(3, 0, 5);
	scene.add(lightL);
	scene.add(lightR);
	var lightModifier = 0.005;
	
	var maxWidth = getHorizontalFOV();
	var spotLightR = new THREE.SpotLight(0xffffff, 1, 100, Math.PI / 2, 0.1, 0.1);
	var spotLightL = new THREE.SpotLight(0xffffff, 1, 100, Math.PI / 2, 0.1, 0.1);
	spotLightR.position.set(maxWidth + 8, 0, 0);
	spotLightL.position.set(-maxWidth - 8, 0, 0);
	scene.add(spotLightR);
	scene.add(spotLightL);
	spotLightR.target.position.set(maxWidth + 8, 0, -4);
	spotLightL.target.position.set(-maxWidth - 8, 0, -4);
	scene.add(spotLightR.target);
	scene.add(spotLightL.target);
	
	var keepLightState = false;
	function startKeepingLight(time) {
		keepLightState = true;
		setTimeout(function() {
			keepLightState = false;
		}, time ? time : Math.floor(Math.random() * 10000));
	}
	
	//-----mouse to camera event------------
	var moveRangeX = 2;
	var moveRangeY = 0.75
		
	var defX = camera.position.x;
	var defY = camera.position.y;
	
	var percentX, percentY;
	function cameraToMouse(clientX, clientY) {
		var pageWidth = renderContainer.innerWidth();
		var pageHeight = renderContainer.innerHeight();
		
		var mouseX = clientX - pageWidth / 2;
		var mouseY = clientY - pageHeight / 2;
		percentX = mouseX / (pageWidth / 2) * 100;
		percentY = mouseY / (pageHeight / 2) * 100;	
	}
	cameraToMouse(renderContainer.innerWidth() / 2, renderContainer.innerHeight() / 2);

	$("html").on("mousemove", function(e) {
		cameraToMouse(e.clientX, e.clientY);
	});
	//-----------------

	function render() {
		requestAnimationFrame( render );
		
		var rotateSpeed = 0.0025;
		gear.rotation.x += rotateSpeed;
		gear.rotation.y += rotateSpeed;
		gear.rotation.z -= rotateSpeed;
		
		if (!keepLightState) {
			
			lightL.intensity += lightModifier;
			lightR.intensity += lightModifier;
			
			if (lightL.intensity >= 2 || lightL.intensity <= 0) {
				startKeepingLight();
				lightModifier *= -1;
			}
		}
		
		camera.position.x = defX + moveRangeX / 100 * percentX;
		camera.position.y = defY - moveRangeY / 100 * percentY;
		
		renderer.render(scene, camera);
	}
	
	render();
	startKeepingLight(5000);
	
	$(window).on("resize", function() {
		var pageWidth = renderContainer.innerWidth();
		var pageHeight = renderContainer.innerHeight();
		
		camera.aspect = pageWidth / pageHeight;
		camera.updateProjectionMatrix();
		renderer.setSize(pageWidth, pageHeight);
		
		if (camera.position.z == cameraDefaultZ) {
			var maxWidth = getHorizontalFOV();
			spotLightR.position.x = maxWidth + 8;
			spotLightL.position.x = -maxWidth - 8;
			spotLightR.target.position.x = maxWidth + 8;
			spotLightL.target.position.x = -maxWidth - 8;
		}
	});
	
	function getHorizontalFOV() {
		var vFOV = camera.fov * Math.PI / 180;
		var h = 2 * Math.tan( vFOV / 2 ) * camera.position.z;
		var aspect = renderContainer.innerWidth() / renderContainer.innerHeight();
		var w = h * aspect;
		return parseInt(w);
	}
});