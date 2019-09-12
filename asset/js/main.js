var seeder = function(){
	var seed = [];
	return {
		set:function(length){
			for( var i = 0; i < length; i++ ){
				seed.push(Math.random());
			}
			return seed;
		},
		get: function(){
			return seed;
		},
		clear: function(){
			seed = []; 
		}
	};
}

function randomShuffle(ar,seed){
	var numbers = [];
	for( var a = 0, max = ar.length; a < max; a++){
		numbers.push(a);
	}
	var shuffled = [];
	for( var i = 0, len = ar.length; i < len; i++ ){
		var r = parseInt(seed[i] * (len - i));
		shuffled.push(ar[numbers[r]]);
		numbers.splice(r,1);
	}
	return shuffled;
}

var arr = ["Much wow", "Terraria", "Minecraft", "OSX", "Such wow", "∞", "4.294.967.295 < -1", "!true != !0", "'null'", "\\_ :) _/", "0w0", "ts.gaming-italia.it", "alessandrobasi.it", "google.it",
"K", "Potassium", "H²O"];

var seed = seeder();
seed.set(arr.length);
var indicearray = 0;
let parolerand = randomShuffle( arr, seed.get() );

$(".terminal-img").mouseenter(function() {
	$(".terminal-img").animate({
		marginBottom: "8px"
	}, "fast" );
});

$(".terminal-img").mouseleave(function() {
	$(".terminal-img").animate({
		marginBottom: "0px"
	}, "fast" );
}); 
//big
$(".terminal-img").click(function() {
	var parola = parolerand[indicearray];
	indicearray++;
	if(indicearray==arr.length){
		indicearray = 0;
	}
	
	
	$(".terminal-img").animate({
		opacity: 0.0,
		width: 0
	}, 100 , function() {
		
		$(".terminal-img").hide();
		$(".terminal-img").css({"width": "64px","opacity":"1.0"});
		
	});
	
	$("#terminal-dialog").delay( 100 ).show();
	$("#randomText").text(parola);
	
	function runFakeTerminal() {
		try{
			if (term._initialized) {
				return;
			}
		}
		catch(e){
			
		}
        
		
		
		
		
		term._initialized = true;
		
		/*
		\x1b [ xx;xx;xxm
		
		
		bianco: \x1b[0m
		verde con spesore: \x1b[1;32m
		blu: \x1b[36m
		*/
        term.prompt = () => {
            term.write('\r\n\x1b[1;32muser@localhost\x1B[0m:\x1B[36m~\x1B[0m$ ');
        };

        term.writeln('Terminale Unix');
        term.writeln('\x1B[1;36mModificato da alessandrobasi.it');
		term.writeln('');
        term.prompt();
		
		var testo = "";
		
        term.on('key', function(key, ev) {
            const printable = !ev.altKey && !ev.altGraphKey && !ev.ctrlKey && !ev.metaKey;
			
			
            if (ev.keyCode === 13) {
				//enter
                
				
				switch(testo){
					case "su":
						term.prompt = () => {
							term.write('\r\n\x1b[31mroot@localhost\x1B[0m:\x1B[36m~\x1B[0m# ');
						};
						break;
					case "shutdown":
						
						$("body").children().remove();
						$('<div class="shutdown-effect"></div>').appendTo('body');
						
						$('<div class="shutdown"></div>').appendTo('body');
						
						$(".shutdown-effect").animate({
							
							height:"90%",
							top:"5%"
							
						},100, function() {
							
							$(".shutdown-effect").animate({
								
								height:"0%",
								width:"0%",
								top:"50%",
								left:"50%"
							
							},350, function() {
								$(".shutdown-effect").remove();
							});
							
						});
						
						
						
						
						
						break;
					case "ls":
						term.writeln('\r\n\x1B[36malessandrobasi/ ');
						break;
					case "cd alessandrobasi/":
						term.writeln('\r\n\x1b[31mAccesso negato');
						break;
					case "cd ..":
						term.writeln('\r\n\x1b[31mAccesso negato');
						break;
					case "cd /":
						term.writeln('\r\n\x1b[31mAccesso negato');
						break;
					case "":
						break;
					default:
						term.writeln('\r\n\x1b[31mComando non trovato');
						break;
				}
				
				
				
				term.prompt();
				testo="";
            } else if (ev.keyCode === 8) {
				//backspace
                // Do not delete the prompt
                if (term._core.buffer.x > 18) {
                    term.write('\b \b');
                }
            } else if(ev.keyCode === 38 || ev.keyCode === 40 || ev.keyCode === 37 || ev.keyCode === 39) {
				//do nothing
			} else if (printable) {
                term.write(key);
				testo = testo+key;
            } 
			
			
			
			
			
        });

        term.on('paste', function(data) {
            term.write(data);
        });
    }
	
	var temp = $("#activeConsole").data("value");
	
	if (!temp) {
		
		
		// the variable is not defined
		let activeTerminal = 1;
		var term = new Terminal();
		term.open(document.getElementById('terminal-dialog'));
		term.resize(80,20);
		runFakeTerminal();
		
		$("#activeConsole").data("value",1);
		
	}
    
	
});

$(".terminal-close").mouseenter(function() {
	$(".terminal-close").css("background-color", "lightcoral");
	
});

$(".terminal-close").mouseleave(function() {
	$(".terminal-close").css("background-color", "#00000000");
	
});

$(".terminal-close").click(function() {
	$("#terminal-dialog").hide();
	$(".terminal-img").show();
	
});

$(".terminal-minimize").mouseenter(function() {
	$(".terminal-minimize").css("background-color", "azure");
	
});

$(".terminal-minimize").mouseleave(function() {
	$(".terminal-minimize").css("background-color", "#00000000");
	
});

$(".terminal-minimize").click(function() {
	
	$("div.terminal.xterm.enable-mouse-events").toggle()
	$("#randomText").toggle();
	$(".termnal-statusbar").toggleClass("minimized");
	
	
});

$(".terminal-maximize").mouseenter(function() {
	$(".terminal-maximize").css("background-color", "azure");
	
});

$(".terminal-maximize").mouseleave(function() {
	$(".terminal-maximize").css("background-color", "#00000000");
	
});
