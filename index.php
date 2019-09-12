<?php

header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
header("Cache-Control: post-check=0, pre-check=0", false);
header("Pragma: no-cache");
?>

<html lang="it">
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		<meta name="description" content="">
		
		<title>alessandrobasi - Terminal</title>

		<!-- Bootstrap core CSS -->
		<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
		<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
		
		<!-- xterm -->
		<script src="https://cdnjs.cloudflare.com/ajax/libs/xterm/3.14.5/xterm.min.js" integrity="sha256-tDeULIXIGkXbz7dkZ0qcQajBIS22qS8jQ6URaeMoVJs=" crossorigin="anonymous"></script>
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/xterm/3.14.5/xterm.min.css" integrity="sha256-uTIrmf95e6IHlacC0wpDaPS58eWF314UC7OgdrD6AdU=" crossorigin="anonymous" />
		
		<!-- custom css -->
		<link rel="stylesheet" href="asset/css/main.css" />
		
	</head>
	<body>
		<div class="text-center cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
			
			<header class="masthead mb-auto">
				
				&nbsp;
				
			</header>

			<main role="main" class="inner cover">
				
				<div class="terminal-div">
					<img src="asset/img/terminal.png" class="terminal-img" />
					
					<div class="row text-center" >
						<div class="col"></div>

						<div class="col" id="terminal-dialog" style="display: none;">
							<div class="termnal-statusbar navbar">

								<div class="terminal-left">
									<p class="mb-0">Command Prompt: <span id="randomText"></span></p>
								</div>
								
								<div class="terminal-right">
									<div class="terminal-minimize">‒</div>
									<div class="terminal-maximize">☐</div>
									<div class="terminal-close">✕</div>
								</div>

							</div>
						</div>

						<div class="col"></div>
					</div>

					<span id="activeConsole" style="display: none;" data-value="0" ></span>
				</div>
				
				
				
				
			</main>

			<footer class="mastfoot mt-auto">
				<div class="inner">
					<p>Made by <a target="_blank" href="https://www.alessandrobasi.it/">alessandrobasi.it</a>.</p>
				</div>
			</footer>
		</div>
	</body>
	
	<script src="asset/js/main.js"></script>
	
</html>
