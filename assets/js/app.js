const bg__container = document.querySelector('#bg__container');

bg__container.classList.add('is-loading');

		window.addEventListener('load', function() {
			window.setTimeout(function() {
				bg__container.classList.remove('is-loading');
			}, 100);
		});




        (function() {

			// Settings.
				var settings = {

					// Images (in the format of 'url': 'alignment').
						images: {
							'assets/img/bg01.jpg': 'center',
                            'assets/img/bg02.jpg': 'center',
							'assets/img/bg03.jpg': 'center'
						},

					// Delay.
						delay: 6000

				};

			// Vars.
				var	pos = 0, lastPos = 0,
					wrapper, bgs = [], bg,
					k, v;

			// Create BG wrapper, BGs.
				wrapper = document.createElement('div');
					wrapper.id = 'bg';
					bg__container.appendChild(wrapper);

				for (k in settings.images) {

					// Create BG.
						bg = document.createElement('div');
							bg.style.backgroundImage = 'url("' + k + '")';
							/* bg.style.backgroundPosition = settings.images[k]; */
							wrapper.appendChild(bg);

					// Add it to array.
						bgs.push(bg);

				}

			// Main loop.
				bgs[pos].classList.add('visible');
				bgs[pos].classList.add('top');

				// Bail if we only have a single BG or the client doesn't support transitions.
					// if (bgs.length == 1 || !canUse('transition')) return;

				window.setInterval(function() {

					lastPos = pos;
					pos++;

					// Wrap to beginning if necessary.
						if (pos >= bgs.length)
							pos = 0;

					// Swap top images.
						bgs[lastPos].classList.remove('top');
						
                        bgs[pos].classList.add('visible');
						bgs[pos].classList.add('top');

					// Hide last image after a short delay.
						window.setTimeout(function() {
							bgs[lastPos].classList.remove('visible');
						}, settings.delay / 2);

				}, settings.delay);

		})();