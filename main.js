/* Initialization */
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  let img = new Image();
  let fileName = "";

  const downloadBtn = document.getElementById("download-btn");
  const uploadFile = document.getElementById("upload-file");
  const revertBtn = document.getElementById("revert-btn");

// Filter & Effect Handlers
  document.addEventListener("click", e => {
    if (e.target.classList.contains("filter-btn")) {
      if (e.target.classList.contains("brightness")) {
        Caman("#canvas", img, function() {
          this.brightness(brightness_slider.value).render();
        });
      } else if (e.target.classList.contains("contrast")) {
        Caman("#canvas", img, function() {
          this.contrast(contrast_slider.value).render();
        });
      } else if (e.target.classList.contains("exposure")) {
        Caman("#canvas", img, function() {
          this.exposure(exposure_slider.value).render();
        });
      } else if (e.target.classList.contains("saturation")) {
        Caman("#canvas", img, function() {
          this.saturation(saturation_slider.value).render();
        });
      } else if (e.target.classList.contains("vibrance")) {
        Caman("#canvas", img, function() {
          this.vibrance(vibrance_slider.value).render();
        });
      } else if (e.target.classList.contains("clip")) {
        Caman("#canvas", img, function() {
          this.vibrance(clip_slider.value).render();
        });
      } else if (e.target.classList.contains("gamma")) {
        Caman("#canvas", img, function() {
          this.vintage(gamma_slider.value).render();
        });
      } else if (e.target.classList.contains("hue")) {
        Caman("#canvas", img, function() {
          this.hue(hue_slider.value).render();
        });
      } else if (e.target.classList.contains("noise")) {
        Caman("#canvas", img, function() {
          this.noise(noise_slider.value).render();
        });
      } else if (e.target.classList.contains("sepia")) {
        Caman("#canvas", img, function() {
          this.sepia(sepia_slider.value).render();
        });
      } else if (e.target.classList.contains("channels")) {
        Caman("#canvas", img, function() {
          this.channels({
              red: chanr_slider.value,
              green: chang_slider.value,
              blue: chanb_slider.value
            }).render();
          });
      } else if (e.target.classList.contains("colorize")) {
        Caman("#canvas", img, function() {
          this.colorize(colorr_slider.value, colorg_slider.addEventListener, colorb_slider.value, strenght_slider.value).render();
        });
      } else if (e.target.classList.contains("greyscale")) {
        Caman("#canvas", img, function() {
          this.greyscale().render();
        });
      } else if (e.target.classList.contains("vintage")) {
          Caman("#canvas", img, function() {
            this.vintage().render();
          });
      } else if (e.target.classList.contains("lomo")) {
          Caman("#canvas", img, function() {
            this.lomo().render();
          });
      } else if (e.target.classList.contains("clarity")) {
          Caman("#canvas", img, function() {
            this.clarity().render();
          });
      } else if (e.target.classList.contains("sincity")) {
          Caman("#canvas", img, function() {
            this.sinCity().render();
          });
      } else if (e.target.classList.contains("sunrise")) {
          Caman("#canvas", img, function() {
            this.sunrise().render();
          });
      } else if (e.target.classList.contains("crossprocess")) {
          Caman("#canvas", img, function() {
            this.crossProcess().render();
          });
      } else if (e.target.classList.contains("orangepeel")) {
          Caman("#canvas", img, function() {
            this.orangePeel().render();
          });
      } else if (e.target.classList.contains("love")) {
          Caman("#canvas", img, function() {
            this.love().render();
          });
      } else if (e.target.classList.contains("grungy")) {
          Caman("#canvas", img, function() {
            this.grungy().render();
          });
      } else if (e.target.classList.contains("jarques")) {
          Caman("#canvas", img, function() {
            this.jarques().render();
          });
      } else if (e.target.classList.contains("pinhole")) {
          Caman("#canvas", img, function() {
            this.pinhole().render();
          });
      } else if (e.target.classList.contains("oldboot")) {
          Caman("#canvas", img, function() {
            this.oldBoot().render();
          });
      } else if (e.target.classList.contains("glowingsun")) {
          Caman("#canvas", img, function() {
            this.glowingSun().render();
          });
      } else if (e.target.classList.contains("hazydays")) {
          Caman("#canvas", img, function() {
            this.hazyDays().render();
          });
      } else if (e.target.classList.contains("hermajesty")) {
          Caman("#canvas", img, function() {
            this.herMajesty().render();
          });
      } else if (e.target.classList.contains("nostalgia")) {
          Caman("#canvas", img, function() {
            this.nostalgia().render();
          });
      } else if (e.target.classList.contains("hemingway")) {
          Caman("#canvas", img, function() {
            this.hemingway().render();
          });
      }
    }
  });

// Revert Filters
  revertBtn.addEventListener("click", e => {
    Caman("#canvas", img, function() {
      this.revert();
    });
  });

// Default File
  uploadFile.addEventListener("change", () => {
    // Get File
    const file = document.getElementById("defimg").files[0];
    // Init FileReader API
    const reader = new FileReader();

    // Check for file
    if (file) {
      // Set file name
      fileName = file.name;
      // Read data as URL
      reader.readAsDataURL(file);
    }

    // Add image to canvas
    reader.addEventListener(
      "load",
      () => {
        // Create image
        img = new Image();
        // Set image src
        img.src = reader.result;
        // On image load add to canvas
        img.onload = function() {
          canvas.width = img.width;
          canvas.height = img.height;
          ctx.drawImage(img, 0, 0, img.width, img.height);
          canvas.removeAttribute("data-caman-id");
        };
      },
      false
    );
  });


// Upload File
  uploadFile.addEventListener("change", () => {
    // Get File
    const file = document.getElementById("upload-file").files[0];
    // Init FileReader API
    const reader = new FileReader();

    // Check for file
    if (file) {
      // Set file name
      fileName = file.name;
      // Read data as URL
      reader.readAsDataURL(file);
    }

    // Add image to canvas
    reader.addEventListener(
      "load",
      () => {
        // Create image
        img = new Image();
        // Set image src
        img.src = reader.result;
        // On image load add to canvas
        img.onload = function() {
          canvas.width = img.width;
          canvas.height = img.height;
          ctx.drawImage(img, 0, 0, img.width, img.height);
          canvas.removeAttribute("data-caman-id");
        };
      },
      false
    );
  });

// Download Event
  downloadBtn.addEventListener("click", () => {
    // Get ext
    const fileExtension = fileName.slice(-4);

    // Init new filename
    let newFilename;

    // Check image type
    if (fileExtension === ".jpg" || fileExtension === ".png") {
      // new filename
      newFilename = fileName.substring(0, fileName.length - 4) + "-edited.jpg";
    }

    // Call download
    download(canvas, newFilename);
  });

  // Download
  function download(canvas, filename) {
    // Init event
    let e;
    // Create link
    const link = document.createElement("a");

    // Set props
    link.download = filename;
    link.href = canvas.toDataURL("image/jpeg", 0.8);
    // New mouse event
    e = new MouseEvent("click");
    // Dispatch event
    link.dispatchEvent(e);
  }

/* Get Slider Values */
  var brightness_slider = document.getElementById("brightness_s");
  var brightness_output = document.getElementById("brightness_v");
  brightness_output.innerHTML = brightness_slider.value;

  brightness_slider.oninput = function() {
    brightness_output.innerHTML = this.value;
  }

  var contrast_slider = document.getElementById("contrast_s");
  var contrast_output = document.getElementById("contrast_v");
  contrast_output.innerHTML = contrast_slider.value;

  contrast_slider.oninput = function() {
    contrast_output.innerHTML = this.value;
  }

  var exposure_slider = document.getElementById("exposure_s");
  var exposure_output = document.getElementById("exposure_v");
  exposure_output.innerHTML = exposure_slider.value;

  exposure_slider.oninput = function() {
    exposure_output.innerHTML = this.value;
  }

  var saturation_slider = document.getElementById("saturation_s");
  var saturation_output = document.getElementById("saturation_v");
  saturation_output.innerHTML = saturation_slider.value;

  saturation_slider.oninput = function() {
      saturation_output.innerHTML = this.value;
  }

  var vibrance_slider = document.getElementById("vibrance_s");
  var vibrance_output = document.getElementById("vibrance_v");
  vibrance_output.innerHTML = vibrance_slider.value;

  vibrance_slider.oninput = function() {
      vibrance_output.innerHTML = this.value;
  }

  var clip_slider = document.getElementById("clip_s");
  var clip_output = document.getElementById("clip_v");
  clip_output.innerHTML = clip_slider.value;

  clip_slider.oninput = function() {
      clip_output.innerHTML = this.value;
  }

  var gamma_slider = document.getElementById("gamma_s");
  var gamma_output = document.getElementById("gamma_v");
  gamma_output.innerHTML = gamma_slider.value;

  gamma_slider.oninput = function() {
      gamma_output.innerHTML = this.value;
  }

  var hue_slider = document.getElementById("hue_s");
  var hue_output = document.getElementById("hue_v");
  hue_output.innerHTML = hue_slider.value;

  hue_slider.oninput = function() {
      hue_output.innerHTML = this.value;
  }

  var noise_slider = document.getElementById("noise_s");
  var noise_output = document.getElementById("noise_v");
  noise_output.innerHTML = noise_slider.value;

  noise_slider.oninput = function() {
      noise_output.innerHTML = this.value;
  }

  var sepia_slider = document.getElementById("sepia_s");
  var sepia_output = document.getElementById("sepia_v");
  sepia_output.innerHTML = sepia_slider.value;

  sepia_slider.oninput = function() {
      sepia_output.innerHTML = this.value;
  }

  var chanr_slider = document.getElementById("chanr_s");
  var chanr_output = document.getElementById("chanr_v");
  chanr_output.innerHTML = chanr_slider.value;

  chanr_slider.oninput = function() {
      chanr_output.innerHTML = this.value;
  }

  var chang_slider = document.getElementById("chang_s");
  var chang_output = document.getElementById("chang_v");
  chang_output.innerHTML = chang_slider.value;

  chang_slider.oninput = function() {
      chang_output.innerHTML = this.value;
  }

  var chanb_slider = document.getElementById("chanb_s");
  var chanb_output = document.getElementById("chanb_v");
  chanb_output.innerHTML = chanb_slider.value;

  chanb_slider.oninput = function() {
      chanb_output.innerHTML = this.value;
  }

  var colorr_slider = document.getElementById("colorr_s");
  var colorr_output = document.getElementById("colorr_v");
  colorr_output.innerHTML = colorr_slider.value;

  colorr_slider.oninput = function() {
      colorr_output.innerHTML = this.value;
  }

  var colorg_slider = document.getElementById("colorg_s");
  var colorg_output = document.getElementById("colorg_v");
  colorg_output.innerHTML = colorg_slider.value;

  colorg_slider.oninput = function() {
      colorg_output.innerHTML = this.value;
  }

  var colorb_slider = document.getElementById("colorb_s");
  var colorb_output = document.getElementById("colorb_v");
  colorb_output.innerHTML = colorb_slider.value;

  colorb_slider.oninput = function() {
      colorb_output.innerHTML = this.value;
  }

  var strenght_slider = document.getElementById("strenght_s");
  var strenght_output = document.getElementById("strenght_v");
  strenght_output.innerHTML = strenght_slider.value;

  strenght_slider.oninput = function() {
      strenght_output.innerHTML = this.value;
  }

/* Slide Menu */
  $(".rad").hide()

  $(document).ready(function(){
    $('input[type="radio"]').click(function(){
        var inputValue = $(this).attr("value");
        var targetBox = $("." + inputValue);
        $(".rad").not(targetBox).hide();
        $(targetBox).show();
    });
  });

/* Top Menu */  
  topbutton = document.getElementById("btn-top");

  window.onscroll = function() {scrollFunction()};
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      topbutton.style.display = "block";
    } else {
      topbutton.style.display = "none";
    }
  }

  function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
  }
