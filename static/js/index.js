    var container;

    var camera, scene,controls;
    var raycaster = new THREE.Raycaster();

    var renderer;
	
	var clock = new THREE.Clock();
	var time = 0;
    var duration = 100;
	var keyframes = 4;
	var interpolation = duration / keyframes;
	var currentKeyframe = 0;
	var lastKeyframe = 0;
	var animOffset = 1;
	var radius = 600;
	var theta = 0;
	var prevTime = Date.now();

	var lamp_light,light,fake_light;

    var video, videoImage, videoImageContext, videoTexture;

    var mouseX = 0, mouseY = 0;
    

    var mesh,circle,controller_animation, helper;		
	var morph_logic;

	var screen_mesh;
	var texture1;
var base = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/61062/";
	var tv_screen,tv_context;
    var å = {
    	ready : {
    		count:0
    	},
      colors : {
        blank : 0xffffff
      },
    	mouse : {
    		x : 0,
    		y : 0,
    		z : 0.5
    	},
    	models :{
    		couch : base+"couch.json",
    		monitor : base+"tv_monitor.json",
			tv : base+"tv.json",
			lamp :  base+"lamp_.json",
			kid:base+"little_kid.json",
    	},
    	targetList : []
    }

//___________________________________________

function generate_color(x,y,z){
	if(x < 1){
		x += .01;
	}else{
		x = 0;
	}
	if(y < 1){
		y += .01;
	}else{
		y = 0;
	}
	if(z < 1){
		z += .01;
	}else{
		z = 0;
	}

	return [x,y,z];
}

function getRandomColor() {
    var letters = '0123433333000ccc'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

var baseMaterial = new THREE.MeshLambertMaterial({ 
				color : å.colors.blank,
				shading: THREE.FlatShading,
				side: THREE.DoubleSide,
				//map: couch_texture
			})

	  //___________________________________________ KICK IT OFF
      init();
      animate();

      //___________________________________________ INIT
      function init() {

        container = document.getElementById( 'container' );

        camera = new THREE.PerspectiveCamera( 30, window.innerWidth / window.innerHeight, .1, 10000 );
        camera.position.x = -305;
        camera.position.y = 55;
        camera.position.z = -65;
        camera.move_direction = 1;
        scene = new THREE.Scene();
		//scene.fog = new THREE.FogExp2( 0x000000, 0.015 );
		å.ready.count++;
        scene.add( camera );

		//___________________________________________ CONTROLS
        	controls = new THREE.OrbitControls( camera );
           controls.damping = 0.2;
           controls.addEventListener( 'change', render );
           controls.maxPolarAngle = Math.PI/2;
           camera.lookAt(new THREE.Vector3(0,50,0));
           controls.target =  new THREE.Vector3(0,50,0);

           å.ready.count++;

           //___________________________________________ HEMI
        
        var ambient = new THREE.AmbientLight(0x111111);
        
        scene.add(ambient);
		// TV
        	light = new THREE.SpotLight( 0x1A5970, 2 );
			light.position.set( 15, 15,68 ).multiplyScalar( 1 );
			scene.add( light );

	//___________________________________________ FAKE LIGHT
			fake_light = new THREE.SpotLight( 0x1A5970, 15,200,Math.PI/2 );
			fake_light.position.set( 15, 150,268 ).multiplyScalar( 1 );
			scene.add( fake_light );

			fake_light.castShadow = true;

			fake_light.shadowMapWidth = 1024 * 2;
			fake_light.shadowMapHeight = 1024 * 2;
			
			fake_light.target.position.set( -20, 20,-50);
			fake_light.target.updateMatrixWorld();

			var d = 350;
			fake_light = new THREE.SpotLight( 0xF0C043, 2 );
			fake_light.shadowCameraLeft = -d;
			fake_light.shadowCameraRight = d;
			fake_light.shadowCameraTop = d * 2.8;
			fake_light.shadowCameraBottom = -d;
			fake_light.shadowCameraNear = 0.01;

			
			å.ready.count++;
        // LAMP
        	lamp_light = new THREE.SpotLight( 0xF0C043, .25 );
			lamp_light.position.set( -55,50,-50 ).multiplyScalar( 1 );
			scene.add( lamp_light );
			lamp_light.target.position.set( -55, 0,-50);
			lamp_light.target.updateMatrixWorld();

			å.ready.count++;
			
        // RENDERER

        renderer = new THREE.WebGLRenderer( { antialias: true,transparent:true,alpha: true } );
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize( window.innerWidth, window.innerHeight );
        container.appendChild( renderer.domElement );

      
        renderer.shadowMapEnabled = true;

			å.ready.count++;
        //__________________________________ LOAD MODEL


        var loader = new THREE.JSONLoader( true );
		loader.load( å.models.couch, function ( geometry ) {

			couch = new THREE.Mesh( geometry, baseMaterial);

			couch.scale.set( 20,20,20 );

			couch.receiveShadow = true;
			couch.castShadow = true;
			couch.position.y = -20;
			scene.add( couch );
		
			å.ready.count++;
		});

		var loader = new THREE.JSONLoader( true );
		loader.load( å.models.monitor , function ( geometry ) {

			tv_monitor = new THREE.Mesh( geometry, baseMaterial);

			tv_monitor.scale.set( 20,20,20 );

			tv_monitor.receiveShadow = true;
			//tv_monitor.castShadow = true;
			tv_monitor.position.y = -20;
			scene.add( tv_monitor );
		
			å.ready.count++;
		});

		//___________________________________________ TV SCREEN
		
	  var errorCallback = function(e) {
			console.log('Nope!', e);
		  };
        
		video = document.getElementById( 'myVideo' );
      navigator.getUserMedia  = navigator.getUserMedia ||
                          navigator.webkitGetUserMedia ||
                          navigator.mozGetUserMedia ||
                          navigator.msGetUserMedia;

		if (navigator.getUserMedia) {
		  navigator.getUserMedia({audio: false, video: true}, function(stream) {
			video.src = window.URL.createObjectURL(stream);
		  }, errorCallback);
		} else {
		  video.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/61062/rin-SD.mp4';
		}

		videoImage = document.createElement( 'canvas' );
		videoImage.width = 640;
		videoImage.height = 320;
		videoImageContext = videoImage.getContext( '2d' );
		videoImageContext.fillStyle = '#ffffff';
		videoImageContext.fillRect( 0, 0, videoImage.width, videoImage.height );
		
		videoTexture = new THREE.Texture( videoImage );
        videoTexture.crossOrigin = "Anonymous";
		videoTexture.minFilter = THREE.LinearFilter;
		videoTexture.magFilter = THREE.LinearFilter;
		
		loader.load( å.models.tv, function ( geometry ) {
			var material = new THREE.MeshBasicMaterial({
				color : å.colors.blank,
				map: videoTexture,
				overdraw: true,
				side:THREE.DoubleSide
			});
			
			var uvs = geometry.faceVertexUvs[ 0 ];
			uvs[ 0 ][ 0 ].set( 0, 0 );
			uvs[ 0 ][ 1 ].set( 1, 0 );			
			uvs[ 0 ][ 2 ].set( 1, 1 );
			
			uvs[ 1 ][ 0 ].set( 1, 0 );
			uvs[ 1 ][ 1 ].set( 1, 1 );
			uvs[ 1 ][ 2 ].set( 0, 1 );
			screen_mesh = new THREE.Mesh( geometry,material);
			screen_mesh.scale.set( 20,20,20 );
			screen_mesh.position.y = -20;
			scene.add( screen_mesh );

			å.ready.count++;
		});
		//___________________________________________ Lamp
		loader.load(å.models.lamp, function ( geometry,material ) {

			screen = new THREE.Mesh( geometry, baseMaterial);
			screen.scale.set( 20,20,20 );
			screen.receiveShadow = true;
			screen.castShadow = true;
			screen.position.y = -20;
			scene.add( screen );
			å.ready.count++;
		});		
		//___________________________________________ Little Kid
		
		loader.load(å.models.kid, function ( geometry) {
			
			var kid_material =  new THREE.MeshLambertMaterial({
				color : å.colors.blank,
        shading : THREE.FlatShading,
				morphTargets: true,
				//map: kid_texture
			});
			little_kid = new THREE.SkinnedMesh( geometry,kid_material);

			little_kid.scale.set( 20,20,20 );

			little_kid.receiveShadow = true;
			little_kid.castShadow = true;
			little_kid.position.y = -20;
			scene.add( little_kid );
		

			animation = new THREE.MorphAnimation( little_kid);
			animation.duration = 500;
			morph_logic = new Logic(little_kid);

			å.ready.count++;
		});	
		
		//___________________________________________ Camera Driver

		var radius = 250;
		var segments = 32;

		var circleGeometry = new THREE.CircleGeometry( radius, segments );				
		circle = new THREE.Mesh( circleGeometry);
		//circle.rotation.x = 90 * Math.PI / 180;
		circle.add(camera);
		circle.visible = false;
		scene.add( circle );

		circle.update= function(time){
			this.rotation.y += .003;
		}

		å.ready.count++;

		//___________________________________________ DUST


		var particles = new THREE.Geometry();
		var pMaterial = new THREE.PointCloudMaterial({
			  color: 0xffffff,
			  size: 1,
			  transparent:true,
			  opacity:.25,
			 // map : particle_texture
			});
		for(var i=0;i<500;i++){
		  var x = (Math.random() - 0.5 ) * Math.sin(i)*200;
		  var y = (Math.random() - 0.5 ) * Math.cos(i)*200;
		  var z = (Math.random() - 0.5 ) * Math.sin(i)*200;
		  particles.vertices.push(new THREE.Vector3(x,y,z));
		}
		var particleSystem_1 = new THREE.PointCloud(particles,pMaterial);
		scene.add(particleSystem_1);

		å.ready.count++;
			
		//___________________________________________ BOOKSHELF
		var book_shelf = new THREE.Object3D();
		var book_shelf_geometry = new THREE.BoxGeometry(1.5,78,15);
	
		var book_shelf_l = new THREE.Mesh(book_shelf_geometry,baseMaterial);
		var book_shelf_r = new THREE.Mesh(book_shelf_geometry,baseMaterial);

		book_shelf_l.receiveShadow =true;
		book_shelf_l.castShadow = true;
		book_shelf_l.position.y = 10;

		book_shelf_r.receiveShadow =true;
		book_shelf_r.castShadow = true;
		book_shelf.add(book_shelf_l);
		book_shelf_r.position.x = 32;
		book_shelf_r.position.y = 10;
		book_shelf.add(book_shelf_r);

		var book_shelf_floor_geo = new THREE.BoxGeometry(30,1.5,14);
		var book_shelf_floor = new THREE.Mesh(book_shelf_floor_geo,baseMaterial);
		book_shelf_floor.position.x = 16;
		book_shelf_floor.position.z = -.5;
		
		var shelf_floors = [];
		for(var f=0;f<7;f++){
			shelf_floors[f] = new THREE.Mesh(book_shelf_floor_geo,baseMaterial);

			shelf_floors[f].position.x = 16;
			shelf_floors[f].position.y = -24 + f * 12;
			shelf_floors[f].position.z = -.5;
			shelf_floors[f].receiveShadow = true;
			shelf_floors[f].castShadow = true;
			book_shelf.add(shelf_floors[f]);
		}
		
		å.ready.count++;

		var books = [];
		var book_geo = new THREE.BoxGeometry(2,7.5,10);				

	var book_count = 0;
	for(var r=0;r<6;r++){
		for(var b=0;b<12;b++){
			books[book_count] = new THREE.Mesh(book_geo,baseMaterial);
				books[book_count].position.x = 5 + b * 2.25;
				books[book_count].position.y = -20 + r * 12;
				books[book_count].position.z = Math.random()*2.0;
				books[book_count].rotation.y = Math.random()*.25;
				books[book_count].rotation.z = Math.random()*.05;

				books[book_count].receiveShadow = true;
				books[book_count].castShadow = true;
			book_shelf.add(books[book_count]);
			book_count++;
		}
	}
		book_shelf.position.set(70,8,-20);
		book_shelf.rotation.y = 90 * Math.PI/180;

		var second_shelf = book_shelf.clone();
			second_shelf.position.z = 16;
			scene.add(second_shelf);


		scene.add(book_shelf);
		


		å.ready = true;


      }// end of init
	// __________________________________ Only for Skinned Mesh Animation
		function ensureLoop( animation ){
		  for ( var i = 0; i < animation.hierarchy.length; i ++ ) {
		
		    var bone = animation.hierarchy[ i ];
		    var first = animation.data.hierarchy[ 0 ];
		    var last = animation.data.hierarchy[ animation.data.hierarchy.length - 1 ];
		
		
		
		    last.pos = first.pos;
		    last.rot = first.rot;
		    last.scl = first.scl;
		  }
		}
    
function clicker(obj){
  obj.parent.ex_bool = true;
  obj.parent.children.forEach(function(el) {
    explosion = new Explode(el);
  });
}

function Logic(mesh){
	this.ready = true;
	this.reset_all_morphs = function(){
		for(var i=0;i<mesh.morphTargetInfluences.length;i++){
			 mesh.morphTargetInfluences[i] = 0;
		}
	}
	var curr = 0;
	this.counter = 0;
	var Presets = [
		'default',
		'eye_closed',
		'laugh',
		'mouth_open'
	]
	this.set_specific_morph = function(type,intensity){
		var speed = 0.01;
		switch(type){
			case 'default':
				this.reset_all_morphs();
				mesh.morphTargetInfluences[0] = intensity * speed;
			break;
			case 'eye_closed':
				this.reset_all_morphs();
				mesh.morphTargetInfluences[1] = intensity * speed;
			break;
			case 'laugh':
				this.reset_all_morphs();
				mesh.morphTargetInfluences[2] = intensity * speed;
			break;
			case 'mouth_open':
				this.reset_all_morphs();
				mesh.morphTargetInfluences[3] = intensity * speed;
			break;
		}
	}
	this.direction = 1;
	this.loop_all_morphs = function(time){
		
		if(this.counter%50 == 0){
			this.direction *= (-1);
		}
		if(this.counter <= 0){
			this.direction *= (-1);
			if(curr < Presets.length){
				curr++;	
			}
			else{
				curr = 0;
			}
		}
		this.set_specific_morph(Presets[curr],this.counter);
		this.counter += 4 *this.direction;
	} 

	return;
}

	
//___________________________________________ Event in Space
	document.addEventListener( 'mousedown', onDocumentMouseDown, false );
    document.addEventListener( 'mousemove', onDocumentMouseMove, false );
	window.addEventListener( 'resize', onWindowResize, false );
//___________________________________________ click

function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

      }


function onDocumentMouseDown( event ) {
	å.mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	å.mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;	
	// find intersections
	var vector = new THREE.Vector3( å.mouse.x, å.mouse.y, 1 );
		vector.unproject( camera );
	var ray = new THREE.Raycaster( camera.position, vector.sub( camera.position ).normalize());
	var intersects = ray.intersectObjects( å.targetList );
	if ( intersects.length > 0 ){
    	clicker(intersects[ 0 ].object);
	}
}
//___________________________________________ move

function onDocumentMouseMove( event ) {
	å.mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	å.mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;	
	// find intersections
	var vector = new THREE.Vector3( å.mouse.x,å.mouse.y, 1 );
		vector.unproject( camera );
	var ray = new THREE.Raycaster( camera.position, vector.sub( camera.position ).normalize() );

	var intersects = ray.intersectObjects( å.targetList );
	
	if ( intersects.length > 0 ){
    	mover(intersects[ 0 ].object);
	}
	if(typeof morph_logic != "undefined"){

		morph_logic.loop_all_morphs(time);
	}

}



//___________________________________________ RENDER 


function animate() {

  requestAnimationFrame( animate );
  
  render();

}

function render(time) {
	 theta += 0.1;
	 var delta = .75 * clock.getDelta();
	

	if(å.ready){
		circle.update(time);
		videoImageContext.drawImage( video, 0,0,640, 320 );
		if ( videoTexture ){
			videoTexture.needsUpdate = true;
		}
	}
	
  // update morph

	if ( typeof animation !== "undefined") {
		var keyframe = Math.floor( time / interpolation ) + animOffset;
		
		morph_logic.loop_all_morphs(time);
		
		THREE.AnimationHandler.update( delta/interpolation );

		var time = Date.now();
		prevTime = time;
	
	}
	
	camera.lookAt(new THREE.Vector3(0,20,0));
  	renderer.render( scene, camera );

}