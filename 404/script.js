var newHeaderText = "404 Page not found",
    newMsgTitle = "The page that you were looking for does not exist",
    newMsgText = "";

var bgColor = "rgba(10,10,10,1.0)",
    bgColorNoAlpha = "rgba(10,10,10,",
    particleColor = "rgba(250,183,80, 0.25)";
    //particleColor = "rgba(255, 255, 255,0.1)";

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getUrlParameters() {
  var search = window.location.search.substring(1);
  var fields = {};

  if (search) {
    fields = JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
  }
  
  var parameters = {};
  for (var key in fields) {
    parameters[key.toLowerCase()] = fields[key];
  }
  return parameters;
};

var urlParams = getUrlParameters();

var httpStatusMsgs = {
  "400": "Bad Request",
  "401": "Unauthorized",
  "402": "Payment Required",
  "403": "Forbidden",
  "404": "Not Found",
  "405": "Method Not Allowed",
  "406": "Not Acceptable",
  "407": "Proxy Authentication Required",
  "408": "Request Timeout",
  "409": "Conflict",
  "410": "Gone",
  "411": "Length Required",
  "412": "Precondition Failed",
  "413": "Payload Too Large",
  "414": "URI Too Long",
  "415": "Unsupported Media Type",
  "416": "Range Not Satisfiable",
  "417": "Expectation Failed",
  "418": "I'm a teapot",
  "419": "Authentication Timeout",
  "420": "Method Failure",
  "421": "Misdirected Request",
  "422": "Unprocessable Entity",
  "423": "Locked",
  "424": "Failed Dependency",
  "426": "Upgrade Required",
  "428": "Precondition Required",
  "429": "Too Many Requests",
  "431": "Request Header Fields Too Large",
  "440": "Login Timeout",
  "444": "No Response",
  "449": "Retry With",
  "450": "Blocked by Windows Parental Controls",
  "451": "Unavailable For Legal Reasons",
  "494": "Request Header Too Large",
  "495": "Cert Error",
  "496": "No Cert",
  "497": "HTTP to HTTPS",
  "498": "Token expired/invalid",
  "499": "Client Closed Request",
  "500": "Internal Server Error",
  "501": "Not Implemented",
  "502": "Bad Gateway",
  "503": "Service Unavailable",
  "505": "HTTP Version Not Supported",
  "506": "Variant Also Negotiates",
  "507": "Insufficient Storage",
  "508": "Loop Detected",
  "509": "Bandwidth Limit Exceeded",
  "510": "Not Extended",
  "511": "Network Authentication Required",
  "520": "Unknown Error",
  "522": "Origin Connection Time-out",
  "598": "Network read timeout error",
  "599": "Network connect timeout error"
};

function processUrlParams() {
  
  console.log(urlParams);
  var upkeys = Object.keys(urlParams);
  
  if (urlParams['httpstatuscode']) {
    newHeaderText = urlParams['httpstatuscode'] + " " + httpStatusMsgs[urlParams['httpstatuscode']];
  } else if (urlParams['headertext']) {
    newHeaderText = urlParams['headertext'];
  }
  
  if (urlParams['msgtitle']) {
    newMsgTitle = urlParams['msgtitle'];
  }
  
  if (urlParams['msgtext']) {
    newMsgText = urlParams['msgtext'];
  }
  
  document.getElementById("headerText").textContent = newHeaderText;
  document.getElementById("contentTitle").textContent = newMsgTitle;
  document.getElementById("contentText").textContent = newMsgText;
};

processUrlParams();

function drawTriHex() {  
  var orange1="rgba(250,183,80,1.0)";//"#fab750";
  var orange2 = "rgba(240, 128, 0, 0.5)";//"#F08000";
  var lgrey1 = "rgba(176, 176, 176, 1.0)";//"#B0B0B0";
  var lgrey2 = "rgba(176, 176, 176, 0.5)";//"#B0B0B0";
  var dgrey1 = "rgba(57, 57, 57, 1.0)";//"#393939";
  var dgrey2 = "rgba(57, 57, 57, 0.5)";//"#393939";
  
  var c = document.getElementById('triCanvas');
  if (c.getContext){
    var ctx = c.getContext('2d'),
    cw = c.width = 200,
		ch = c.height = 200;
    
    // offset
    var ho = 25;
    var vo = 10;
    
    // BACKGROUND HEX
    ctx.beginPath();
    ctx.fillStyle = bgColor;
    ctx.moveTo(ho+5,vo-5);
    ctx.lineTo(ho+104,vo-5);
    ctx.lineTo(ho+135,vo+45);
    ctx.lineTo(ho+104,vo+94);
    ctx.lineTo(ho+43,vo+94);
    ctx.lineTo(ho+11,vo+45);
    ctx.lineTo(ho+43,vo-5);
    ctx.fill();
    
    // ORANGE
    ctx.beginPath();
    ctx.fillStyle = orange1;
    ctx.moveTo(ho+50,vo+1);
    ctx.lineTo(ho+75,vo+41);
    ctx.lineTo(ho+100,vo+1);
    ctx.fill();
    
    ctx.beginPath();
    ctx.fillStyle = orange2;
    ctx.moveTo(ho+75,vo+41);
    ctx.lineTo(ho+125,vo+41);
    ctx.lineTo(ho+100,vo+1);
    ctx.fill();
    
    // LIGHT GREY
    ctx.beginPath();
    ctx.fillStyle = lgrey1;
    ctx.moveTo(ho+75,vo+49);
    ctx.lineTo(ho+100,vo+89);
    ctx.lineTo(ho+125,vo+49);
    ctx.fill();
    
    ctx.beginPath();
    ctx.fillStyle = lgrey2;
    ctx.moveTo(ho+50,vo+89);
    ctx.lineTo(ho+100,vo+89);
    ctx.lineTo(ho+75,vo+49);
    ctx.fill();
    
    // DARK GREY
    ctx.beginPath();
    ctx.fillStyle = dgrey1;
    ctx.moveTo(ho+19,vo+45);
    ctx.lineTo(ho+44,vo+5);
    ctx.lineTo(ho+69,vo+45);
    ctx.fill();
    
    ctx.beginPath();
    ctx.fillStyle = dgrey2;
    ctx.moveTo(ho+19,vo+45);
    ctx.lineTo(ho+69,vo+45);
    ctx.lineTo(ho+44,vo+85);
    ctx.fill();
    
    ctx.beginPath();
    ctx.fillStyle = dgrey2;
    ctx.moveTo(ho+19,vo+45);
    ctx.lineTo(ho+69,vo+45);
    ctx.lineTo(ho+44,vo+85);
    ctx.fill();
  }
};

drawTriHex();

function drawBg() {
  var c = document.getElementById('bgCanvas');
  if (c.getContext){
		var w = window.innerWidth,
		h = window.innerHeight;
    
    var ctx = c.getContext('2d'),
    cw = c.width = w,
		ch = c.height = h;
  }
};

drawBg = function() {
  var c = document.getElementById('bgCanvas');
  var w = window.innerWidth,
      h = window.innerHeight;

  var ctx = c.getContext('2d'),
      cw = c.width = w,
      ch = c.height = h;
    
  var particles = {},
      particleIndex = 0,
      settings = {
        density: 5,
        particleSize: 2,
        gravity: 0.9,
        maxLife: 5 * 10,
        tail: 20,
        offsetLength: 50,
      };
  
  Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
  };

  function Particle() {
    this.direction = 0;
    while (this.direction == 0) {
      this.direction = getRandomInt(-1,1);
    }
    console.log("ThisDirection:" + this.direction)
    this.tail = {};
    // establish starting positions and velocities
    this.x = c.width / 2;
    this.y = ((c.height / 2) - 45) + getRandomInt(-15, 15);

    // random X
    this.vx = (Math.random() * 1.25 + 1.5) * this.direction;
    this.vy = 0;

    // Add new particle to the index
    particleIndex ++;
    particles[particleIndex] = this;
    this.id = particleIndex;
    this.life = 0;
    this.verticalOffset = 0;
    this.offsetDirection = 0;
    this.offsetLength = getRandomInt(10,settings.offsetLength);
  }

  Particle.prototype.draw = function() {
    // horizontal movement
    this.x += this.vx;
    // vertical movement
    var verticalOffsetDelta = 1;
    if (this.verticalOffset < 1) {
      // do we want to start a turn?
      if (getRandomInt(0,1000) > 995) {
        this.offsetDirection = getRandomInt(-1,1);
        this.verticalOffset = verticalOffsetDelta;
      }
    } else {
      if (this.verticalOffset < this.offsetLength) {
        this.vy = this.offsetDirection;
        ++this.verticalOffset;
      } else {
        this.verticalOffset = 0;
        this.offsetDirection = 0;
        this.vy = 0;
      }
    }
    this.y += this.vy;
    
    var w = window.innerWidth;
    if (this.x < 0 || this.x > w) {
      delete particles[this.id];
    }

    // Create shape
    ctx.clearRect(settings.leftWall, settings.groundLevel, c.width, c.height);
    ctx.beginPath();
    ctx.fillStyle=particleColor;
    ctx.fillRect(this.x, this.y, settings.particleSize, settings.particleSize / 2);
    ctx.closePath();
    ctx.fill();
  }
  var trimFrame = 0;
  setInterval(function() {
    // Trim tails by repainting bgColor
    if (trimFrame == 5) {
      var alpha = 0.2;//(1.0 / settings.tail) * 2;
      ctx.fillStyle = bgColorNoAlpha + alpha + ")";
      ctx.fillRect(0, 0, c.width, c.height);
      trimFrame = 0;
    } else {
      trimFrame++;
    }
    // Draw the particles
    if (Object.size(particles) < settings.density) {
      for (var i = 0; i < settings.density; i++) {
        if (Math.random() > 0.97) {
          // Introducing a random chance of creating a particle
          // corresponding to an chance of 1 per second,
          // per "density" value
          new Particle();
        }
      }
    }
    for (var i in particles) {
      particles[i].draw();
    }
  }, 5);
};

function onAfterLoad() {
    document.write('<p>Your viewport width is '+window.innerWidth+'</p>');
};

// reload bttn
function reload() {
  // true, reload from server
  location.reload(true);
};

refreshBttn.onclick = reload;