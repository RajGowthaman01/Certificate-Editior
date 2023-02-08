let max_aspect_ratio,
  max_height,
  mainCanvas = document.getElementById("canvas"),
  preimg = document.getElementById("base-image-pre"),
  mainCtx = mainCanvas.getContext("2d"),
  max_width = 1,
  save_pending = !1,
  state = { multiplier: 1, newbase: !1, newPosition: !1, activeElem: null, x: 0, y: 0, updatetimer: null, temp: 0 }
function livePreview(t) {
  if (0 == t.files.length) return null
  ;(state.newbase = !0), (document.getElementById("base-image-src-name").innerText = t.files[0].name), (document.getElementById("base-image-pre").src = window.URL.createObjectURL(t.files[0])), (state.temp = t.files[0])
}
function updateJSON(t) {
  save_pending = !0
  let e,
    a = $("#" + t).serializeArray(),
    n = null
  null != operations[t] && null != operations[t].type && "image" == operations[t].type && ((e = operations[t].src), null != operations[t].file && (n = operations[t].file))
  let i = {}
  for (let t = 0; t < a.length; t++) i[a[t].name] = a[t].value
  "" == i.x && (i.x = mainCanvas.width / 2), "" == i.y && (i.y = mainCanvas.width / 2), operations.splice(t, 1, i), null != operations[t] && null != operations[t].type && "image" == operations[t].type && ((operations[t].src = e), n && (operations[t].file = n))
}
function updateRender() {
  mainCtx.drawImage(preimg, 0, 0)
  for (let t = 1; t < operations.length; t++)
    if (("text" == operations[t].type && ((mainCtx.font = operations[t].style + " " + operations[t].size + "px " + operations[t].font), (mainCtx.fillStyle = operations[t].color), (mainCtx.textAlign = operations[t].align), mainCtx.fillText(operations[t].value, operations[t].x, preimg.naturalHeight - operations[t].y)), "image" == operations[t].type)) {
      let e = new Image()
      ;(e.src = operations[t].src), mainCtx.drawImage(e, operations[t].x, preimg.naturalHeight - operations[t].y - operations[t].h, operations[t].w, operations[t].h)
    }
}
function canvasHighlight(t) {
  let e,
    a = operations[t].x,
    n = mainCanvas.height - operations[t].y - operations[t].size,
    i = operations[t].size,
    s = 0,
    o = operations[t].align
  "center" == o && ((s = mainCanvas.width), (e = 0)), "right" == o && ((s = a), (e = 0)), "left" == o && ((s = mainCanvas.width - a), (e = a)), (mainCtx.fillStyle = "rgba(41, 154, 197, 0.25)"), mainCtx.fillRect(e, n, s, i)
}
async function loadFromJson() {
  if (((operations = operations.replace(/&quot;/g, '"')), (operations = JSON.parse(operations)), 0 == operations.length && ((document.getElementById("user-msg").innerText = "Select a base image to start editing your template"), (document.getElementById("current-process").innerText = "Waiting for a base image")), operations.length <= 1)) return null
  ;(state.newbase = !0), (document.getElementById("base-image-pre").src = operations[0].src)
  let t = operations[0].src.split("/")
  ;(document.getElementById("base-image-src-name").innerText = t[t.length - 1].slice(14)), document.getElementById("spacer").remove()
  for (let t = 1; t < operations.length; t++) {
    let e = Date.now() * t,
      a = document.createElement("div")
    if (
      ((a.className = "card mb-3"),
      "text" == operations[t].type &&
        ("" == operations[t].value && (operations[t].value = "text"),
        (a.innerHTML +=
          '        <div class="card-body">            <form class="form" id="' +
          t +
          '" name="' +
          t +
          '">              <input type="text" name="type" value="text" style="display: none;">              <div class="input-group mb-2">                <div class="input-group-prepend">                  <span class="input-group-text" style="width: 60px;">Name</span>               </div>                <input type="text" class="form-control update-render" placeholder="Name" name="name" list="namelist" value="' +
          operations[t].name +
          '">             </div>              <div id="collapse-' +
          e +
          '" class="collapse">                <div class="input-group mb-2">                  <div class="input-group-prepend">                   <span class="input-group-text" style="width: 60px;">Value</span>                  </div>                  <input type="text" class="form-control update-render" placeholder="Value (optional)" name="value" value="' +
          operations[t].value +
          '">               </div>                <div class="form-row mb-2">                 <div class="col-md-5">                    <div class="input-group">                     <div class="input-group-prepend">                       <span class="input-group-text" style="width: 35px;">X</span>                      </div>                      <input type="number" class="form-control update-render" placeholder="X position" name="x" step="10" value="' +
          operations[t].x +
          '">                    </div>                  </div>                  <div class="col-md-5">                    <div class="input-group">                     <div class="input-group-prepend">                       <span class="input-group-text" style="width: 35px;">Y</span>                      </div>                      <input type="number" class="form-control update-render" placeholder="Y position" name="y" step="10" value="' +
          operations[t].y +
          '">                    </div>                  </div>                  <div class="col-md-2">                    <button type="button" class="btn btn-light border update-position" data-toggle="tooltip" title="Move"><i class="fa fa-mouse-pointer" aria-hidden="true"></i></button>                 </div>                </div>                <div class="form-row mb-2">                 <div class="col-sm-2">                    <input type="color" name="color" class="form-control update-render" value="' +
          operations[t].color +
          '" data-toggle="tooltip" title="Color">                  </div>                  <div class="col-sm-7">                    <select class="form-control update-render" name="font" data-toggle="tooltip" title="Font">                      <option ' +
          ("Arial" == operations[t].font ? "selected" : "") +
          ">Arial</option>                      <option " +
          ("Arial Rounded" == operations[t].font ? "selected" : "") +
          ">Arial Rounded</option>                      <option " +
          ("CAC Champagne" == operations[t].font ? "selected" : "") +
          ">CAC Champagne</option>                      <option " +
          ("Courier New" == operations[t].font ? "selected" : "") +
          ">Courier New</option>                      <option " +
          ("Georgia" == operations[t].font ? "selected" : "") +
          ">Georgia</option>                      <option " +
          ("Great Vibes" == operations[t].font ? "selected" : "") +
          ">Great Vibes</option>                      <option " +
          ("Lucida Console" == operations[t].font ? "selected" : "") +
          ">Lucida Console</option>                     <option " +
          ("Times New Roman" == operations[t].font ? "selected" : "") +
          ">Times New Roman</option>                      <option " +
          ("Verdana" == operations[t].font ? "selected" : "") +
          '>Verdana</option>                    </select>                 </div>                  <div class="col-sm-3">                    <input type="number" name="size" min="1" step="5" class="form-control update-render" value="' +
          operations[t].size +
          '" data-toggle="tooltip" title="Size">                 </div>                </div>                <div class="form-row mb-2">                 <div class="col-md-6">                    <input type="text" name="align" class="form-control" value="' +
          operations[t].align +
          '" style="display: none;">                   <div class="btn-group btn-block">                     <button type="button" class="btn ' +
          ("left" == operations[t].align ? "btn-dark" : "btn-light") +
          ' update-align" data-toggle="tooltip" title="Left Align" value="left">                       <i class="fa fa-align-left" aria-hidden="true"></i>                     </button>                     <button type="button" class="btn ' +
          ("center" == operations[t].align ? "btn-dark" : "btn-light") +
          ' update-align" data-toggle="tooltip" title="Center Align" value="center">                        <i class="fa fa-align-center" aria-hidden="true"></i>                     </button>                     <button type="button" class="btn ' +
          ("right" == operations[t].align ? "btn-dark" : "btn-light") +
          ' update-align" data-toggle="tooltip" title="Right Align" value="right">                       <i class="fa fa-align-right" aria-hidden="true"></i>                      </button>                   </div>                  </div>                  <div class="col-md-6">                    <input type="text" name="style" class="form-control" value="' +
          operations[t].style +
          '" style="display: none;">                   <div class="btn-group btn-block">                     <button type="button" class="btn ' +
          ("normal" == operations[t].style ? "btn-dark" : "btn-light") +
          ' update-style" data-toggle="tooltip" title="Normal" value="normal">                        <strong>N</strong>                      </button>                     <button type="button" class="btn ' +
          ("italic" == operations[t].style ? "btn-dark" : "btn-light") +
          ' update-style" data-toggle="tooltip" title="Italic" value="italic">                       <i class="fa fa-italic" aria-hidden="true"></i>                     </button>                     <button type="button" class="btn ' +
          ("bold" == operations[t].style ? "btn-dark" : "btn-light") +
          ' update-style" data-toggle="tooltip" title="Bold" value="bold">                       <i class="fa fa-bold" aria-hidden="true"></i>                     </button>                   </div>                  </div>                </div>              </div>              <div class="btn-group btn-group-sm btn-block">                <button class="btn btn-light border" data-toggle="collapse" data-target="#collapse-' +
          e +
          '" type="button" style="width: 80%;"><i class="fa fa-caret-down" aria-hidden="true"></i></button>                <button class="btn btn-danger delete-btn" type="button"><i class="fa fa-trash" aria-hidden="true"></i></button>              </div>            </form>         </div>')),
      "image" == operations[t].type)
    ) {
      let n = "No File Selected"
      operations[t].src ? (n = (n = operations[t].src.split("/"))[n.length - 1].slice(14)) : (operations[t].src = "/img/back.jpg"),
        "qr" == operations[t].name.toLowerCase() && ((operations[t].src = await getQR()), (n = "URL QRCode")),
        (a.innerHTML +=
          '        <div class="card-body">\t          <form class="form" id="' +
          t +
          '" name="' +
          t +
          '">            <div class="input-group mb-2">              <div class="input-group-prepend">                <span class="input-group-text" style="width: 60px;">Name</span>             </div>              <input type="text" class="form-control update-render" placeholder="Name" list="namelist" name="name" value="' +
          operations[t].name +
          '">             <input type="text" name="type" value="image" style="display: none;">            </div>            <div class="form-row mb-2">\t            <div class="col-sm-4">\t              <img src="' +
          operations[t].src +
          '" class="thumbnail square rounded border file-preview" style="width: 100%" height="90px">\t            </div>\t            <div class="col-sm-8">\t              <p class="filename" style="margin-bottom: 23px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">' +
          n +
          '</p>\t              <input class="file-input" type="file" accept=".png, .jpg, .jpeg" style="display: none;">\t              <button type="button" class="btn btn-light btn-block border file-btn">\t                <i class="fa fa-picture-o" aria-hidden="true"></i> Load Image\t              </button>\t            </div>\t          </div>\t          <div class="collapse" id="collapse-' +
          e +
          '">\t            <div class="form-row mb-2">\t              <div class="col-md-12">\t              <input type="text" value="' +
          operations[t].dynamic +
          '" name="dynamic" style="display: none;">\t                <button type="button" class="btn ' +
          ("true" == operations[t].dynamic ? "btn-success" : "btn-danger") +
          ' border update-dynamic btn-block" data-toggle="tooltip" title="Static / Dynamic">' +
          ("true" == operations[t].dynamic ? "Dynamic Image" : "Static Image") +
          '</button>\t              </div>\t            </div>\t            <div class="form-row mb-2">\t              <div class="col-md-5">\t                <div class="input-group">\t                  <div class="input-group-prepend">\t                    <span class="input-group-text" style="width: 25px;padding-left: 7px;">X</span>\t                  </div>\t                  <input type="number" class="form-control update-image-position" placeholder="X position" name="x" value="' +
          operations[t].x +
          '" step="10">\t                </div>\t              </div>\t              <div class="col-md-5">\t                <div class="input-group">\t                  <div class="input-group-prepend">\t                    <span class="input-group-text" style="width: 25px;padding-left: 7px;">Y</span>\t                  </div>\t                  <input type="number" class="form-control update-image-position" placeholder="Y position" name="y" value="' +
          operations[t].y +
          '" step="10">\t                </div>\t              </div>\t              <div class="col-md-2">\t                <button type="button" class="btn btn-light border update-position" data-toggle="tooltip" title="Move"><i class="fa fa-mouse-pointer" aria-hidden="true"></i></button>\t              </div>\t            </div>\t            <div class="form-row mb-2">\t              <div class="col-md-5">\t                <div class="input-group">\t                  <div class="input-group-prepend">\t                    <span class="input-group-text" style="width: 25px;padding-left: 5px;">W</span>\t                  </div>\t                  <input type="number" class="form-control update-image-render image-width" placeholder="Width" name="w" value="' +
          operations[t].w +
          '" step="10">\t                </div>\t              </div>\t              <div class="col-md-5">\t                <div class="input-group">\t                  <div class="input-group-prepend">\t                    <span class="input-group-text" style="width: 25px;padding-left: 5px;">H</span>\t                  </div>\t                  <input type="number" class="form-control update-image-render image-height" placeholder="Height" name="h" value="' +
          operations[t].h +
          '" step="10">\t                </div>\t              </div>\t              <div class="col-md-2">\t                <button type="button" class="btn btn-success border set-aspect-ratio" data-toggle="tooltip" title="Use Original Aspect Ratio"><i class="fa fa-chain-broken" aria-hidden="true"></i></button>\t              </div>\t            </div>\t          </div>\t          <div class="btn-group btn-group-sm btn-block">\t            <button class="btn btn-light border" data-toggle="collapse" data-target="#collapse-' +
          e +
          '" type="button" style="width: 80%;"><i class="fa fa-caret-down" aria-hidden="true"></i></button>\t            <button class="btn btn-danger delete-btn" type="button"><i class="fa fa-trash" aria-hidden="true"></i></button>\t          </div>\t          </form>         </div>')
    }
    document.getElementById("layers").appendChild(a)
  }
  let e = document.createElement("div")
  ;(e.id = "spacer"), (e.style.height = "100px"), document.getElementById("layers").appendChild(e), $('[data-toggle="tooltip"]').tooltip({ trigger: "hover" }), setTimeout(updateRender, 500)
}
function toggleQuality() {
  "block" == $(".quality")[0].style.display ? ($(".quality")[0].style.display = "none") : ($(".quality")[0].style.display = "block")
}
function downloadPreview() {
  let t = document.createElement("a")
  ;(t.target = "_blank"),
    (t.href = mainCanvas.toDataURL("image/jpeg", $(".quality-val")[0].value / 100)),
    (t.download = "preview.jpg"),
    setTimeout(() => {
      t.click()
    }, 500)
}
async function save() {
  ;(document.getElementById("modal-msg").innerHTML = '    <div class="alert alert-info mb-0">       Your template is being saved, kindly wait until it is done.      </div>'), $("#modal-main").modal("show")
  for (let t = 1; t < operations.length; t++) "text" == operations[t].type && updateJSON(t)
  if (0 == operations.length) return (document.getElementById("user-msg").innerHTML = '<div class="text-warning"><strong>Warning!</strong>Select a base image</div>'), (document.getElementById("modal-msg").innerHTML = '      <div class="alert alert-warning mb-0">         <strong>Warning!</strong> Select a base image.        </div>'), $("#modal-main").modal("show"), null
  if (1 == operations.length) return (document.getElementById("user-msg").innerHTML = '<div class="text-warning"><strong>Warning!</strong> Add atleat one Text element</div>'), (document.getElementById("modal-msg").innerHTML = '      <div class="alert alert-warning mb-0">         <strong>Warning!</strong> Add atleat one Text element.        </div>'), $("#modal-main").modal("show"), null
  if (0 == document.getElementById("temp-name").value.length)
    return (document.getElementById("user-msg").innerHTML = '<div class="text-warning"><strong>Warning!</strong> Enter a name for the template to save it</div>'), (document.getElementById("modal-msg").innerHTML = '      <div class="alert alert-warning mb-0">         <strong>Warning!</strong> Enter a name for the template to save it.        </div>'), $("#modal-main").modal("show"), null
  let t = JSON.parse(JSON.stringify(operations))
  if (((t[0] = operations[0]), null != t[0].src.match("blob"))) {
    let e = await xhrSendFile(t[0].file)
    if (!e.status) return (document.getElementById("modal-msg").innerHTML = '        <div class="alert alert-warning mb-0">           <strong>Error!</strong> Failed to save Template. Contact Support.          </div>'), $("#modal-main").modal("show"), null
    ;(t[0].src = "/assets/" + e.name), delete t[0].file, delete operations[0].file
  }
  for (let e = 1; e < t.length; e++) {
    if ("image" == t[e].type) {
      if ("" == t[e].name || null == t[e].name)
        return (
          (document.getElementById("user-msg").innerHTML = '<div class="text-warning"><strong>Warning!</strong> One of the Image element hasn\'t been assigned a name</div>'),
          (document.getElementById("modal-msg").innerHTML = '          <div class="alert alert-warning mb-0">             <strong>Warning!</strong> One of the Image element doesn\'t have a name.            </div>'),
          $("#modal-main").modal("show"),
          null
        )
      if (("qr" == t[e].name.toLowerCase() && (t[e].src = null), (null != t[e].src || null != t[e].src) && null != t[e].src.match("blob"))) {
        t[e].file = operations[e].file
        let a = await xhrSendFile(t[e].file)
        if (!a.status) return (document.getElementById("modal-msg").innerHTML = '              <div class="alert alert-warning mb-0">                 <strong>Error!</strong> Failed to save Template. Contact Support.                </div>'), $("#modal-main").modal("show"), null
        ;(t[e].src = "/assets/" + a.name), delete t[e].file, delete operations[e].file, (operations[e].src = t[e].src)
      }
    }
    if ("text" == t[e].type && ("text" == t[e].value && (t[e].value = ""), "" == t[e].name))
      return (
        (document.getElementById("user-msg").innerHTML = '<div class="text-warning"><strong>Warning!</strong> One of the Text element hasn\'t been assigned a name</div>'),
        (document.getElementById("modal-msg").innerHTML = '          <div class="alert alert-warning mb-0">             <strong>Warning!</strong> One of the Text element hasn\'t been assiged a name.            </div>'),
        $("#modal-main").modal("show"),
        null
      )
  }
  let e = {}
  ;(e.name = document.getElementById("temp-name").value), (e.doctemp = document.getElementById("doc-temp-id").value), (e.operations = JSON.stringify(t))
  let a = new XMLHttpRequest()
  a.open("POST", "/user/file/template", !0),
    a.setRequestHeader("Content-type", "application/json; charset=utf-8"),
    (a.onload = function () {
      if (this.readyState === XMLHttpRequest.DONE && 200 == this.status) {
        let t
        console.log(this.response)
        try {
          1 == (t = JSON.parse(this.response)).status
            ? ((document.getElementById("user-msg").innerHTML = '<div class="text-success"><strong>Success!</strong> Template is successfully saved</div>'), (document.getElementById("modal-msg").innerHTML = '            <div class="alert alert-success mb-0">               <strong>Success!</strong> Template is successfully saved.              </div>'))
            : ((document.getElementById("user-msg").innerHTML = '<div class="text-danger"><strong>Error!</strong> Failed to save Template</div>'), (document.getElementById("modal-msg").innerHTML = '            <div class="alert alert-danger mb-0">               <strong>Error!</strong> Failed to save Template.              </div>'))
        } catch (t) {
          ;(document.getElementById("user-msg").innerHTML = '<div class="text-danger"><strong>Error!</strong> Your login session expired</div>'), (document.getElementById("modal-msg").innerHTML = '          <div class="alert alert-danger mb-0">             <strong>Error!</strong> Your login session expired. Refresh and try again.            </div>')
        }
        $("#modal-main").modal("show"), (save_pending = !1)
      }
    }),
    a.send(JSON.stringify(e))
}
function xhrSendFile(t) {
  return new Promise((e, a) => {
    try {
      let a = new FormData()
      a.append("file", t)
      let n = new XMLHttpRequest()
      n.open("POST", "/user/file/asset", !0),
        (n.onload = function () {
          if (this.readyState === XMLHttpRequest.DONE && 200 == this.status)
            try {
              let t = JSON.parse(this.response)
              e(t)
            } catch (t) {
              ;(document.getElementById("user-msg").innerHTML = '<div class="text-danger"><strong>Error!</strong> Your login session expired</div>'), (document.getElementById("modal-msg").innerHTML = '              <div class="alert alert-danger mb-0">                 <strong>Error!</strong> Your login session expired. Refresh and try again.                </div>'), $("#modal-main").modal("show")
            }
        }),
        n.send(a)
    } catch (t) {
      console.log(t), e(!1)
    }
  })
}
function goBack() {
  save_pending
    ? ((document.getElementById("modal-msg").innerHTML =
        '    <div class="alert alert-warning mb-0">       Your template has unsaved changes, you will lose these changes if you exit now.<br>        <button type="button" class="btn btn-success float-right" style="width: 130px;" onclick="save()"><i class="fa fa-floppy-o" aria-hidden="true"></i>  Save</button>      <a href="/user/setting" class="btn btn-danger float-right" style="width: 130px;margin-right: 12px;" ><i class="fa fa-chevron-circle-left" aria-hidden="true"></i> Back to App</a>    </div>'),
      $("#modal-main").modal("show"))
    : (window.location.pathname = "/user/setting")
}
function getQR() {
  return new Promise((t) => {
    QRCode.toDataURL("Your document URL", function (e, a) {
      t(a)
    })
  })
}
$("document").ready(async function () {
  $('[data-toggle="tooltip"]').tooltip({ trigger: "hover" }), (mainCanvas.style.marginTop = "15px"), (max_height = window.innerHeight - 115), (max_width = window.innerWidth - 384), (max_aspect_ratio = max_width / max_height), console.log("Max aspect ratio: ", max_aspect_ratio), (document.getElementById("right").style.width = max_width + "px"), loadFromJson()
}),
  (mainCanvas.onmousemove = function (t) {
    let e = t.offsetX >= 0 ? Math.round(t.offsetX * state.multiplier) : 0,
      a = t.offsetY > -0 ? Math.round(t.offsetY * state.multiplier) : 0
    ;(document.getElementById("mouse-pos").innerText = e + ", " + (preimg.naturalHeight - a)), state.newPosition && ((state.x = e), (state.y = preimg.naturalHeight - a))
  }),
  (mainCanvas.onclick = function (t) {
    state.newPosition &&
      ((state.newPosition = !1),
      (mainCanvas.style.cursor = "default"),
      (state.x = t.offsetX >= 0 ? Math.round(t.offsetX * state.multiplier) : 0),
      (state.y = t.offsetY > -0 ? preimg.naturalHeight - Math.round(t.offsetY * state.multiplier) : 0),
      (document[state.activeElem].x.value = state.x),
      (document[state.activeElem].y.value = state.y),
      (operations[state.activeElem].x = state.x),
      (operations[state.activeElem].y = state.y),
      clearInterval(state.updatetimer),
      (state.updatetimer = null),
      updateRender(),
      (document.getElementById("user-msg").innerText = "Add or Edit, Text and Image elements "),
      (document.getElementById("current-process").innerText = "ready"))
  }),
  (document.getElementById("base-image-pre").onload = function () {
    document.getElementById("doc-size").innerText = this.naturalWidth + ", " + this.naturalHeight
    let t = this.naturalWidth / this.naturalHeight
    ;(mainCanvas.width = this.naturalWidth), (mainCanvas.height = this.naturalHeight), mainCtx.drawImage(this, 0, 0)
    let e = 0
    if ((t < max_aspect_ratio ? ((e = max_height), (mainCanvas.style.height = e + "px"), (mainCanvas.style.width = max_height * t + "px")) : ((mainCanvas.style.width = max_width + "px"), (e = max_width / t), (mainCanvas.style.height = e + "px")), (state.multiplier = this.naturalHeight / e), (state.x = max_width / 2), (state.y = max_height / 2), state.newbase)) {
      document.getElementById("user-msg").innerText = "Add a Text or Image"
      let t = {}
      ;(t.src = this.src), (t.w = this.naturalWidth), (t.h = this.naturalHeight), "object" == typeof state.temp && (t.file = state.temp), operations.splice(0, 1, t)
    }
    ;(state.newbase = !1), (document.getElementById("current-process").innerText = "Ready"), 0 == operations.length && (document.getElementById("user-msg").innerText = "Select a Base Image"), updateRender()
  }),
  $("#layers").on("click", ".delete-btn", function () {
    let t = Number(this.form.id)
    operations.splice(t, 1)
    for (let e = t + 1; e <= operations.length; e++) (document[e].id = e - 1), (document[e].name = e - 1)
    this.closest(".card").remove(), updateRender(), (save_pending = !0)
  }),
  $("#layers").on("change", ".update-render", async function () {
    this.closest(".card-body").dispatchEvent(new Event("mouseleave"))
    let t = this.form.id
    if ("qr" == document[this.form.id].name.value.toLowerCase()) {
      let e = this.closest(".card-body")
      ;($(e).find(".thumbnail")[0].src = await getQR()), (operations[t].src = $(e).find(".thumbnail")[0].src)
    }
    updateJSON(t), updateRender(), canvasHighlight(t)
  }),
  $("#layers").on("click", ".update-position", function () {
    ;(state.activeElem = this.form.id),
      (state.x = Number(document[state.activeElem].x.value)),
      (state.y = Number(document[state.activeElem].y.value)),
      (state.newPosition = !0),
      (state.updatetimer = setInterval(function () {
        state.newPosition && ((document[state.activeElem].x.value = state.x), (document[state.activeElem].y.value = state.y), (operations[state.activeElem].x = state.x), (operations[state.activeElem].y = state.y), updateRender(), canvasHighlight(state.activeElem))
      }, 30)),
      (mainCanvas.style.cursor = "move"),
      (document.getElementById("user-msg").innerText = "Click on the image where you want to position the element"),
      (document.getElementById("current-process").innerText = "Waiting for a position")
  }),
  $("#layers").on("change", ".update-image-position", function () {
    ;(operations[this.form.id].x = Number(document[this.form.id].x.value)), (operations[this.form.id].y = Number(document[this.form.id].y.value)), updateRender()
  }),
  $("#layers").on("change", ".update-image-render", function () {
    let t = $(this.closest(".card-body")).find(".thumbnail")[0].naturalWidth / $(this.closest(".card-body")).find(".thumbnail")[0].naturalHeight
    $(this.closest(".form-row")).find(".btn-success").length
      ? (this.classList.contains("image-height") && ((document[this.form.id].w.value = Number(Math.floor(document[this.form.id].h.value * t))), (operations[this.form.id].w = document[this.form.id].w.value), (operations[this.form.id].h = document[this.form.id].h.value)),
        this.classList.contains("image-width") && ((operations[this.form.id].w = Number(document[this.form.id].w.value)), (document[this.form.id].h.value = Number(Math.floor(document[this.form.id].w.value / t))), (operations[this.form.id].h = Number(document[this.form.id].h.value))))
      : ((operations[this.form.id].w = Number(document[this.form.id].w.value)), (operations[this.form.id].h = Number(document[this.form.id].h.value))),
      updateRender()
  }),
  $("#layers").on("click", ".set-aspect-ratio", function () {
    this.classList.contains("btn-success") ? this.classList.replace("btn-success", "btn-danger") : this.classList.replace("btn-danger", "btn-success")
  }),
  $("#layers").on("click", ".update-align", function () {
    this.closest(".btn-group").children[0].classList.replace("btn-dark", "btn-light"),
      this.closest(".btn-group").children[1].classList.replace("btn-dark", "btn-light"),
      this.closest(".btn-group").children[2].classList.replace("btn-dark", "btn-light"),
      this.classList.replace("btn-light", "btn-dark"),
      (document[this.form.id].align.value = this.value),
      updateJSON(this.form.id),
      updateRender(),
      canvasHighlight(this.form.id)
  }),
  $("#layers").on("click", ".update-style", function () {
    this.closest(".btn-group").children[0].classList.replace("btn-dark", "btn-light"),
      this.closest(".btn-group").children[1].classList.replace("btn-dark", "btn-light"),
      this.closest(".btn-group").children[2].classList.replace("btn-dark", "btn-light"),
      this.classList.replace("btn-light", "btn-dark"),
      (document[this.form.id].style.value = this.value),
      updateJSON(this.form.id),
      updateRender(),
      canvasHighlight(this.form.id)
  }),
  $("#layers").on("click", ".file-btn", function () {
    $(this).closest(".col-sm-8").find(".file-input").click()
  }),
  $("#layers").on("click", ".update-dynamic", function () {
    let t = this.form.id
    this.classList.contains("btn-success") ? (this.classList.replace("btn-success", "btn-danger"), (document[this.form.id].dynamic.value = "false"), (operations[t].dynamic = "false"), (this.innerHTML = "Static Image")) : (this.classList.replace("btn-danger", "btn-success"), (document[this.form.id].dynamic.value = "true"), (operations[t].dynamic = "true"), (this.innerHTML = "Dynamic Image"))
  }),
  $("#layers").on("change", ".file-input", function () {
    if (0 == this.files.length) return null
    ;($(this).closest(".col-sm-8").find(".filename")[0].innerText = this.files[0].name),
      ($(this).closest(".form-row").find(".file-preview")[0].src = window.URL.createObjectURL(this.files[0])),
      (state.temp = this.files[0]),
      ($(this).closest(".form-row").find(".file-preview")[0].onload = function () {
        let t = this.closest("form").id
        ;(operations[t].src = this.src), (operations[t].w = this.naturalWidth), (operations[t].h = this.naturalHeight), (operations[t].x = 0), (operations[t].y = 0), (operations[t].file = state.temp), (document[t].x.value = 0), (document[t].y.value = 0), (document[t].w.value = this.naturalWidth), (document[t].h.value = this.naturalHeight), updateRender()
      })
  }),
  $("#layers").on("mouseenter", ".card-body", function () {
    if (0 == operations.length) return null
    if (0 == $(this).find(".form").length) return null
    let t = $(this).find(".form")[0].id
    "text" == operations[t].type && canvasHighlight(t)
  }),
  $("#layers").on("mouseleave", ".card-body", function () {
    return 0 == operations.length ? null : 0 == $(this).find(".form").length ? null : void updateRender()
  }),
  $("#add-text").on("click", function () {
    if (0 == operations.length) return (document.getElementById("modal-msg").innerHTML = '      <div class="alert alert-warning mb-0">         <strong>Warning!</strong> Select a base image.        </div>'), $("#modal-main").modal("show"), null
    document.getElementById("spacer").remove()
    let t = operations.length,
      e = Date.now(),
      a = document.createElement("div")
    ;(a.className = "card mb-3"),
      (a.innerHTML +=
        '    <div class="card-body">        <form class="form" id="' +
        t +
        '" name="' +
        t +
        '">          <input type="text" name="type" value="text" style="display: none;">          <div class="input-group mb-2">            <div class="input-group-prepend">              <span class="input-group-text" style="width: 60px;">Name</span>           </div>            <input type="text" class="form-control update-render" name="name" list="namelist">         </div>          <div id="collapse-' +
        e +
        '" class="collapse">            <div class="input-group mb-2">              <div class="input-group-prepend">               <span class="input-group-text" style="width: 60px;">Value</span>              </div>              <input type="text" class="form-control update-render" placeholder="Value (optional)" name="value" value="text">           </div>            <div class="form-row mb-2">             <div class="col-md-5">                <div class="input-group">                 <div class="input-group-prepend">                   <span class="input-group-text" style="width: 35px;">X</span>                  </div>                  <input type="number" class="form-control update-render" placeholder="X position" name="x" step="10" value="' +
        Math.floor(mainCanvas.width / 2) +
        '">                </div>              </div>              <div class="col-md-5">                <div class="input-group">                 <div class="input-group-prepend">                   <span class="input-group-text" style="width: 35px;">Y</span>                  </div>                  <input type="number" class="form-control update-render" placeholder="Y position" name="y" step="10" value="' +
        Math.floor(mainCanvas.height / 2) +
        '">                </div>              </div>              <div class="col-md-2">                <button type="button" class="btn btn-light border update-position" data-toggle="tooltip" title="Move"><i class="fa fa-mouse-pointer" aria-hidden="true"></i></button>             </div>            </div>            <div class="form-row mb-2">             <div class="col-sm-2">                <input type="color" name="color" class="form-control update-render" value="#ff0000" data-toggle="tooltip" title="Color">              </div>              <div class="col-sm-7">                <select class="form-control update-render" name="font" data-toggle="tooltip" title="Font">                  <option>Arial</option>                  <option>Arial Rounded</option>                  <option>CAC Champagne</option>                  <option>Courier New</option>                  <option>Georgia</option>                  <option>Great Vibes</option>                  <option>Lucida Console</option>                 <option>Times New Roman</option>                  <option>Verdana</option>                </select>             </div>              <div class="col-sm-3">                <input type="number" name="size" min="1" step="5" class="form-control update-render" value="' +
        Math.floor(mainCanvas.height / 10) +
        '" data-toggle="tooltip" title="Size">             </div>            </div>            <div class="form-row mb-2">             <div class="col-md-6">                <input type="text" name="align" class="form-control" value="center" style="display: none;">               <div class="btn-group btn-block">                 <button type="button" class="btn btn-light update-align" data-toggle="tooltip" title="Left Align" value="left">                   <i class="fa fa-align-left" aria-hidden="true"></i>                 </button>                 <button type="button" class="btn btn-dark update-align" data-toggle="tooltip" title="Center Align" value="center">                    <i class="fa fa-align-center" aria-hidden="true"></i>                 </button>                 <button type="button" class="btn btn-light update-align" data-toggle="tooltip" title="Right Align" value="right">                   <i class="fa fa-align-right" aria-hidden="true"></i>                  </button>               </div>              </div>              <div class="col-md-6">                <input type="text" name="style" class="form-control" value="normal" style="display: none;">               <div class="btn-group btn-block">                 <button type="button" class="btn btn-dark update-style" data-toggle="tooltip" title="Normal" value="normal">                    <strong>N</strong>                  </button>                 <button type="button" class="btn btn-light update-style" data-toggle="tooltip" title="Italic" value="italic">                   <i class="fa fa-italic" aria-hidden="true"></i>                 </button>                 <button type="button" class="btn btn-light update-style" data-toggle="tooltip" title="Bold" value="bold">                   <i class="fa fa-bold" aria-hidden="true"></i>                 </button>               </div>              </div>            </div>          </div>          <div class="btn-group btn-group-sm btn-block">            <button class="btn btn-light border" data-toggle="collapse" data-target="#collapse-' +
        e +
        '" type="button" style="width: 80%;"><i class="fa fa-caret-down" aria-hidden="true"></i></button>            <button class="btn btn-danger delete-btn" type="button"><i class="fa fa-trash" aria-hidden="true"></i></button>          </div>        </form>     </div>'),
      document.getElementById("layers").appendChild(a)
    let n = document.createElement("div")
    ;(n.id = "spacer"), (n.style.height = "100px"), document.getElementById("layers").appendChild(n), $('[data-toggle="tooltip"]').tooltip({ trigger: "hover" }), updateJSON(t), updateRender()
  }),
  $("#add-image").on("click", function () {
    if (0 == operations.length) return (document.getElementById("modal-msg").innerHTML = '      <div class="alert alert-warning mb-0">         <strong>Warning!</strong> Select a base image.        </div>'), $("#modal-main").modal("show"), null
    document.getElementById("spacer").remove()
    let t = operations.length,
      e = Date.now(),
      a = document.createElement("div")
    ;(a.className = "card mb-3"),
      (a.innerHTML +=
        '    <div class="card-body">\t      <form class="form" id="' +
        t +
        '" name="' +
        t +
        '">        <div class="input-group mb-2">          <div class="input-group-prepend">            <span class="input-group-text" style="width: 60px;">Name</span>         </div>          <input type="text" class="form-control update-render" name="name" list="namelist" >         <input type="text" name="type" value="image" style="display: none;">        </div>        <div class="form-row mb-2">\t        <div class="col-sm-4">\t          <img src="/img/back.jpg" class="thumbnail square rounded border file-preview" style="width: 100%" height="90px">\t        </div>\t        <div class="col-sm-8">\t          <p class="filename" style="margin-bottom: 23px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">No File Selected</p>\t          <input class="file-input" type="file" accept=".png, .jpg, .jpeg" style="display: none;">\t          <button type="button" class="btn btn-light btn-block border file-btn">\t            <i class="fa fa-picture-o" aria-hidden="true"></i> Load Image\t          </button>\t        </div>\t      </div>\t      <div class="collapse" id="collapse-' +
        e +
        '">\t        <div class="form-row mb-2">\t          <div class="col-md-12">\t          <input type="text" value="false" name="dynamic" style="display: none;">\t            <button type="button" class="btn btn-danger border update-dynamic btn-block" data-toggle="tooltip" title="Static / Dynamic">Static Image</button>\t          </div>\t        </div>\t        <div class="form-row mb-2">\t          <div class="col-md-5">\t            <div class="input-group">\t              <div class="input-group-prepend">\t                <span class="input-group-text" style="width: 25px;padding-left: 7px;">X</span>\t              </div>\t              <input type="number" class="form-control update-image-position" placeholder="X position" name="x" value="' +
        Math.floor(mainCanvas.width / 2) +
        '" step="10">\t            </div>\t          </div>\t          <div class="col-md-5">\t            <div class="input-group">\t              <div class="input-group-prepend">\t                <span class="input-group-text" style="width: 25px;padding-left: 7px;">Y</span>\t              </div>\t              <input type="number" class="form-control update-image-position" placeholder="Y position" name="y" value="' +
        Math.floor(mainCanvas.height / 2) +
        '" step="10">\t            </div>\t          </div>\t          <div class="col-md-2">\t            <button type="button" class="btn btn-light border update-position" data-toggle="tooltip" title="Move"><i class="fa fa-mouse-pointer" aria-hidden="true"></i></button>\t          </div>\t        </div>\t        <div class="form-row mb-2">\t          <div class="col-md-5">\t            <div class="input-group">\t              <div class="input-group-prepend">\t                <span class="input-group-text" style="width: 25px;padding-left: 5px;">W</span>\t              </div>\t              <input type="number" class="form-control update-image-render image-width" placeholder="Width" name="w" value="200" step="10">\t            </div>\t          </div>\t          <div class="col-md-5">\t            <div class="input-group">\t              <div class="input-group-prepend">\t                <span class="input-group-text" style="width: 25px;padding-left: 5px;">H</span>\t              </div>\t              <input type="number" class="form-control update-image-render image-height" placeholder="Height" name="h" value="200" step="10">\t            </div>\t          </div>\t          <div class="col-md-2">\t            <button type="button" class="btn btn-success border set-aspect-ratio" data-toggle="tooltip" title="Use Original Aspect Ratio"><i class="fa fa-chain-broken" aria-hidden="true"></i></button>\t          </div>\t        </div>\t      </div>\t      <div class="btn-group btn-group-sm btn-block">\t        <button class="btn btn-light border" data-toggle="collapse" data-target="#collapse-' +
        e +
        '" type="button" style="width: 80%;"><i class="fa fa-caret-down" aria-hidden="true"></i></button>\t        <button class="btn btn-danger delete-btn" type="button"><i class="fa fa-trash" aria-hidden="true"></i></button>\t      </div>\t      </form>     </div>'),
      document.getElementById("layers").appendChild(a)
    let n = document.createElement("div")
    ;(n.id = "spacer"), (n.style.height = "100px"), document.getElementById("layers").appendChild(n), $('[data-toggle="tooltip"]').tooltip({ trigger: "hover" }), operations.push({ type: "image" })
  }),
  $("#add-qr").on("click", async function () {
    if (0 == operations.length) return (document.getElementById("modal-msg").innerHTML = '      <div class="alert alert-warning mb-0">         <strong>Warning!</strong> Select a base image.        </div>'), $("#modal-main").modal("show"), null
    let t = await getQR()
    document.getElementById("spacer").remove()
    let e = operations.length,
      a = Date.now(),
      n = document.createElement("div")
    ;(n.className = "card mb-3"),
      (n.innerHTML +=
        '    <div class="card-body">\t      <form class="form" id="' +
        e +
        '" name="' +
        e +
        '">        <div class="input-group mb-2">          <div class="input-group-prepend">            <span class="input-group-text" style="width: 60px;">Name</span>         </div>          <input type="text" class="form-control update-render" placeholder="Name" name="name" list="namelist" value="QR">         <input type="text" name="type" value="image" style="display: none;">        </div>        <div class="form-row mb-2">\t        <div class="col-sm-4">\t          <img src="' +
        t +
        '" class="thumbnail square rounded border file-preview" style="width: 100%" height="90px">\t        </div>\t        <div class="col-sm-8">\t          <p class="filename" style="margin-bottom: 23px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;">URL QRCode</p>\t          <input class="file-input" type="file" accept=".png, .jpg, .jpeg" style="display: none;">\t          <button type="button" class="btn btn-light btn-block border file-btn">\t            <i class="fa fa-picture-o" aria-hidden="true"></i> Load Image\t          </button>\t        </div>\t      </div>\t      <div class="collapse" id="collapse-' +
        a +
        '">\t        <div class="form-row mb-2">\t          <div class="col-md-12">\t          <input type="text" value="false" name="dynamic" style="display: none;">\t            <button type="button" class="btn btn-danger border update-dynamic btn-block" data-toggle="tooltip" title="Static / Dynamic">Static Image</button>\t          </div>\t        </div>\t        <div class="form-row mb-2">\t          <div class="col-md-5">\t            <div class="input-group">\t              <div class="input-group-prepend">\t                <span class="input-group-text" style="width: 25px;padding-left: 7px;">X</span>\t              </div>\t              <input type="number" class="form-control update-image-position" placeholder="X position" name="x" value="' +
        Math.floor(mainCanvas.width / 2) +
        '" step="10">\t            </div>\t          </div>\t          <div class="col-md-5">\t            <div class="input-group">\t              <div class="input-group-prepend">\t                <span class="input-group-text" style="width: 25px;padding-left: 7px;">Y</span>\t              </div>\t              <input type="number" class="form-control update-image-position" placeholder="Y position" name="y" value="' +
        Math.floor(mainCanvas.height / 2) +
        '" step="10">\t            </div>\t          </div>\t          <div class="col-md-2">\t            <button type="button" class="btn btn-light border update-position" data-toggle="tooltip" title="Move"><i class="fa fa-mouse-pointer" aria-hidden="true"></i></button>\t          </div>\t        </div>\t        <div class="form-row mb-2">\t          <div class="col-md-5">\t            <div class="input-group">\t              <div class="input-group-prepend">\t                <span class="input-group-text" style="width: 25px;padding-left: 5px;">W</span>\t              </div>\t              <input type="number" class="form-control update-image-render image-width" placeholder="Width" name="w" value="200" step="10">\t            </div>\t          </div>\t          <div class="col-md-5">\t            <div class="input-group">\t              <div class="input-group-prepend">\t                <span class="input-group-text" style="width: 25px;padding-left: 5px;">H</span>\t              </div>\t              <input type="number" class="form-control update-image-render image-height" placeholder="Height" name="h" value="200" step="10">\t            </div>\t          </div>\t          <div class="col-md-2">\t            <button type="button" class="btn btn-success border set-aspect-ratio" data-toggle="tooltip" title="Use Original Aspect Ratio"><i class="fa fa-chain-broken" aria-hidden="true"></i></button>\t          </div>\t        </div>\t      </div>\t      <div class="btn-group btn-group-sm btn-block">\t        <button class="btn btn-light border" data-toggle="collapse" data-target="#collapse-' +
        a +
        '" type="button" style="width: 80%;"><i class="fa fa-caret-down" aria-hidden="true"></i></button>\t        <button class="btn btn-danger delete-btn" type="button"><i class="fa fa-trash" aria-hidden="true"></i></button>\t      </div>\t      </form>     </div>'),
      document.getElementById("layers").appendChild(n)
    let i = document.createElement("div")
    ;(i.id = "spacer"), (i.style.height = "100px"), document.getElementById("layers").appendChild(i), $('[data-toggle="tooltip"]').tooltip({ trigger: "hover" }), operations.push({ name: "QR", type: "image", src: t, x: Math.floor(mainCanvas.width / 2), y: Math.floor(mainCanvas.height / 2), w: 200, h: 200 }), updateRender()
  }),
  $(".quality-val").on("mousedown", function () {
    state.updatetimer = setInterval(
      function (t) {
        state.temp != t.value && ($(t).tooltip("hide"), t.setAttribute("data-original-title", "Quality: " + t.value + "%"), $(t).tooltip("show"), (state.temp = t.value))
      },
      50,
      this
    )
  }),
  $(".quality-val").on("mouseup", function () {
    clearInterval(state.updatetimer)
  })
