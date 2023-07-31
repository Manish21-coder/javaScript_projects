const keyPut = document.getElementById("insert");

document.addEventListener('keypress',(e) =>{

  keyPut.innerHTML = `<div class="color">
  <table>
  <tr>
    <th>key</th>
    <th>keycode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key === " " ?"space":e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
 
</table>
  
  </div>`
   
})
