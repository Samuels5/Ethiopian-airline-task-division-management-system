tasks = document.getElementById("tasks");
task = document.getElementById("task");
btn = document.getElementById("btn");

displayTasks();

btn.addEventListener("click", () => {
  if (localStorage.getItem("task-count") == null) {
    let count = 0;
    localStorage.setItem("task-count", count.toString());
  }
  if (task.value.length > 0) {
    let task_count = Number(localStorage.getItem("task-count"));
    task_count += 1;
    localStorage.setItem("task-count", task_count.toString());
    localStorage.setItem("task" + task_count.toString(), task.value);
    task.value = "";
    displayTasks();
  }
});
task.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
  if (localStorage.getItem("task-count") == null) {
    let count = 0;
    localStorage.setItem("task-count", count.toString());
  }
  if (task.value.length > 0) {
    let task_count = Number(localStorage.getItem("task-count"));
    task_count += 1;
    localStorage.setItem("task-count", task_count.toString());
    localStorage.setItem("task" + task_count.toString(), task.value);
    task.value = "";
    displayTasks();
  }
  }
});

function displayTasks() {
  if (localStorage.getItem("task-count") == null) {
    let count = 0;
    localStorage.setItem("task-count", count.toString());
  }
  if (localStorage.getItem("delete") == null) {
    let count = 0;
    localStorage.setItem("delete", count.toString());
  }
  tasks.innerHTML = "";
  const w = document.createElement("div");
  w.className = "w"
  for (let i = 0; i <= Number(localStorage.getItem("task-count")); i++) {
    // console.log(localStorage.getItem("task" + i.toString()));
    if (localStorage.getItem("task" + i.toString()) != null) {
      const task_div1 = document.createElement("div");
      const task = localStorage.getItem("task" + i.toString());
      const name = localStorage.getItem("task" + i.toString());
      const task_div = document.createElement("div");
      const content_paragraph = document.createElement("p");
      const content_paragraph1 = document.createElement("p");
      task_div.className = "task-div";
      task_div1.className = "task-div";
      content_paragraph1.className = "content_paragraph1";
      content_paragraph.style.marginRight = "20px";
      const edit_btn = document.createElement("button");
      const delete_btn = document.createElement("button");
      edit_btn.className = "edit-btn";
      delete_btn.className = "delete-btn";
      edit_btn.appendChild(document.createTextNode("Edit name"));
      delete_btn.appendChild(document.createTextNode("Delete member"));
      edit_btn.style.marginRight = "20px";
      edit_btn.addEventListener("click", () => {
        let edited_content = prompt(
          "Enter the modified name",
          localStorage.getItem("task" + i.toString())
        );
        if (edited_content.length>0) {
          edit_btn.parentElement.childNodes[1].innerHTML = edited_content;
        localStorage.setItem("task" + i.toString(), edited_content);
        displayTasks();
        }
      });
      delete_btn.addEventListener("click", 
        () => {
          const  answer = prompt(`Are you sure you want to delete ${task} ?`,"Yes")
          if (answer === "Yes"){
        delete_btn.parentElement.remove();
        localStorage.removeItem("task" + i.toString());
        displayTasks();}
      });
      content_paragraph.appendChild(document.createTextNode(task));
      content_paragraph1.appendChild(document.createTextNode(task));
      const newdiv = document.createElement("div");
      newdiv.className = "new"
      newdiv.appendChild(edit_btn);
      newdiv.appendChild(content_paragraph);
      newdiv.appendChild(delete_btn);
      task_div1.appendChild(content_paragraph1);
      const div1 = document.createElement("div");
      div1.className = "dd"
      const user = document.createElement("input");
      user.placeholder = "Add new task"
      div1.appendChild(user)
      const add = document.createElement("button");
      add.className = "adding";
      add.appendChild(document.createTextNode("add"));
      div1.appendChild(add);

      const div2 = document.createElement("div");
      div2.className = "div2"
      const div3 = document.createElement("div");
      const dd1 = document.createElement("div");
      dd1.className = 'dd1';
      const dd2 = document.createElement("div");
      dd2.className = 'dd2';
      const dd3 = document.createElement("div");
      dd3.className = 'dd3';
      div3.className = "div22";

      user.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
        if (localStorage.getItem("task-count" + i.toString()) == null) {
            let count = 0;
            localStorage.setItem("task-count" + i.toString(), count.toString());
        }
        if (user.value.length > 0) {
            let task_count = Number(localStorage.getItem("task-count" + i.toString()));
            task_count += 1;
            localStorage.setItem("task-count" + i.toString(), task_count.toString());
            localStorage.setItem("task" + i.toString() + task_count.toString(), user.value);
            const currentDate = new Date();
            const year = currentDate.getFullYear();
            const month = currentDate.getMonth() + 1; // Months are zero-indexed
            const day = currentDate.getDate();
            localStorage.setItem("day" + i.toString() + task_count.toString(), year + '/' + month + "/" + day + '_' +  currentDate.toDateString().slice(0,3) );
            // console.log(localStorage.getItem("day" + i.toString() + task_count.toString()))
            let hours = currentDate.getHours();
            let minutes = currentDate.getMinutes();
            let seconds = currentDate.getSeconds();
            let st = 'AM'
            if (hours > 12){
              hours = hours - 12;
              st = 'PM';
            }
            if (hours.toString().length < 2) {
              hours = "0" + hours;
            }
            if (minutes.toString().length < 2) {
              minutes = '0'+minutes
            }
            if (seconds.toString().length < 2) {
              seconds = "0" + seconds;
            }
            localStorage.setItem("hour" + i.toString() + task_count.toString(), hours + ':' + minutes + ':' + seconds + " " + st);
            // console.log(localStorage.getItem("hour" + i.toString() + task_count.toString()))
            user.value = "";
            displayTasks();
        }
        }
      });
      add.addEventListener("click", () => {
        if (localStorage.getItem("task-count" + i.toString()) == null) {
            let count = 0;
            localStorage.setItem("task-count" + i.toString(), count.toString());
        }
        if (user.value.length > 0) {
            let task_count = Number(localStorage.getItem("task-count" + i.toString()));
            task_count += 1;
            localStorage.setItem("task-count" + i.toString(), task_count.toString());
            localStorage.setItem("task" + i.toString() + task_count.toString(), user.value);
            const currentDate = new Date();
            const year = currentDate.getFullYear();
            const month = currentDate.getMonth() + 1; // Months are zero-indexed
            const day = currentDate.getDate();
            localStorage.setItem("day" + i.toString() + task_count.toString(), year + '/' + month + "/" + day + '_' +  currentDate.toDateString().slice(0,3) );
            // console.log(localStorage.getItem("day" + i.toString() + task_count.toString()))
            let hours = currentDate.getHours();
            let minutes = currentDate.getMinutes();
            let seconds = currentDate.getSeconds();
            let st = 'AM'
            if (hours > 12){
              hours = hours - 11;
              st = 'PM';
            }
            if (hours.toString().length < 2) {
              hours = '0'+hours;
            }
            if (minutes.toString().length < 2) {
              minutes = '0'+minutes
            }
            if (seconds.toString().length < 2) {
              seconds = "0" + seconds;
            }
            localStorage.setItem("hour" + i.toString() + task_count.toString(), hours + ':' + minutes + ':' + seconds + " " + st);
            // console.log(localStorage.getItem("hour" + i.toString() + task_count.toString()))
            user.value = "";
            displayTasks();
        }
        });

        if (localStorage.getItem("task-count" + i.toString()) == null) {
            let count = 0;
            localStorage.setItem("task-count" + i.toString(), count.toString());
        }
        div2.innerHTML = "";
        dd1.innerHTML = "";
        dd2.innerHTML = "";
        dd3.innerHTML = "";
        div3.innerHTML = "";
        let count1 = 1;
        let count2 = 1;
        let count3 = 1;
        for (let j = 0; j <= Number(localStorage.getItem("task-count" + i.toString())); j++) {
            // console.log(localStorage.getItem("task" + i.toString() + j.toString()));
            if (localStorage.getItem("task" + i.toString() + j.toString()) != null) {
            const task = localStorage.getItem("task" + i.toString() + j.toString());
            const task_div = document.createElement("div");
            const content_paragraph = document.createElement("p");
            const tot = document.createElement("div");
            tot.className = "tot";
            const dat = document.createElement("p");
            const tim = document.createElement("p");
            dat.appendChild(document.createTextNode(localStorage.getItem("day" + i.toString() + j.toString())));
            tim.appendChild(document.createTextNode(localStorage.getItem("hour" + i.toString() + j.toString())));
            tot.appendChild(dat);
            tot.appendChild(tim);
            task_div.className = "task-div";
            content_paragraph.className = "content_paragraph";
            content_paragraph.style.marginRight = "20px";
            const edit_btn = document.createElement("button");
            const delete_btn = document.createElement("button");
            edit_btn.className = "edit-btn1";
            delete_btn.className = "done";
            edit_btn.appendChild(document.createTextNode("Edit"));
            delete_btn.appendChild(document.createTextNode("returned"));
            edit_btn.style.marginRight = "20px";
            edit_btn.addEventListener("click", () => {
                let edited_content = prompt(
                "Enter the modified task",
                localStorage.getItem("task" + i.toString() + j.toString())
                );
                if (edited_content.length>0) {
                  edit_btn.parentElement.parentElement.childNodes[0].innerHTML =
                    edited_content;
                localStorage.setItem("task" + i.toString() + j.toString(), edited_content);
                displayTasks();
                }
            });
            delete_btn.addEventListener("click", () => {
                delete_btn.parentElement.parentElement.remove();
                const val = localStorage.getItem("task" + i.toString() + j.toString());
                localStorage.setItem("did" + i.toString() + j.toString(), val);
                localStorage.removeItem("task" + i.toString() + j.toString());
                displayTasks()
            });
            const delete_btn1 = document.createElement("button");
            delete_btn1.className = "delete-btn1";
            delete_btn1.appendChild(document.createTextNode("delete"));
            delete_btn1.addEventListener("click", () => {
              const  answer = prompt(`Are you sure you want to delete ${task} ?`,"Yes")
                if (answer === "Yes"){
                delete_btn1.parentElement.parentElement.remove();
                const val = localStorage.getItem("task" + i.toString() + j.toString());
                const num = Number(localStorage.getItem('delete'))
                localStorage.setItem("delete" + num.toString(),name +" "+ "Future work" + ' ' + localStorage.getItem("task" + i.toString() + j.toString())+ " " + localStorage.getItem("day" + i.toString() + j.toString())+' ' + localStorage.getItem("hour" + i.toString() + j.toString()));
                localStorage.setItem('delete',(num+1).toString())
                localStorage.removeItem("task" + i.toString() + j.toString());
                displayTasks()}
            });
            content_paragraph.appendChild(document.createTextNode(count1.toString() + '.' + task));
            count1 = count1 + 1;
            const newdiv = document.createElement("div");
            const newdiv1 = document.createElement("div");
            newdiv.className = "new1"
            newdiv.appendChild(content_paragraph);
            newdiv1.appendChild(tot);
            newdiv1.appendChild(edit_btn);
            newdiv1.appendChild(delete_btn);
            newdiv1.appendChild(delete_btn1)
            newdiv1.className = 'divv'
            newdiv.appendChild(newdiv1);
            dd1.appendChild(newdiv)
          }
          // if (localStorage.getItem("ongoing" + i.toString() + j.toString()) != null) {
          //   const task = localStorage.getItem("ongoing" + i.toString() + j.toString());
          //   const task_div = document.createElement("div");
          //   const content_paragraph = document.createElement("p");
          //   const tot = document.createElement("div");
          //   tot.className = "tot";
          //   const dat = document.createElement("p");
          //   const tim = document.createElement("p");
          //   dat.appendChild(document.createTextNode(localStorage.getItem("day" + i.toString() + j.toString())));
          //   tim.appendChild(document.createTextNode(localStorage.getItem("hour" + i.toString() + j.toString())));
          //   tot.appendChild(dat);
          //   tot.appendChild(tim);
          //   task_div.className = "task-div";
          //   content_paragraph.className = "content_paragraph";
          //   content_paragraph.style.marginRight = "20px";
          //   const edit_btn = document.createElement("button");
          //   const delete_btn = document.createElement("button");
          //   edit_btn.className = "edit-btn1";
          //   delete_btn.className = "done";
          //   edit_btn.appendChild(document.createTextNode("Edit"));
          //   delete_btn.appendChild(document.createTextNode("Done"));
          //   edit_btn.style.marginRight = "20px";
          //   edit_btn.addEventListener("click", () => {
          //       let edited_content = prompt(
          //         "Enter the modified task",
          //         localStorage.getItem("ongoing" + i.toString() +j.toString())
          //       );
          //       if (edited_content.length>0) {
          //         edit_btn.parentElement.parentElement.childNodes[0].innerHTML =
          //           edited_content;
          //       localStorage.setItem("ongoing" + i.toString() + j.toString(), edited_content);
          //       displayTasks();
          //       }
          //   });
          //   delete_btn.addEventListener("click", () => {
          //       delete_btn.parentElement.parentElement.remove();
          //       const val = localStorage.getItem("ongoing" + i.toString() + j.toString());
          //       localStorage.setItem("did" + i.toString() + j.toString(), val);
          //       localStorage.removeItem("ongoing" + i.toString() + j.toString());
          //       displayTasks()
          //   });
          //   const delete_btn1 = document.createElement("button");
          //   delete_btn1.className = "delete-btn1";
          //   delete_btn1.appendChild(document.createTextNode("delete"));
          //   delete_btn1.addEventListener("click", () => {
          //     const  answer = prompt(`Are you sure you want to delete ${task} ?`,"Yes")
          //       if (answer === "Yes"){
          //       delete_btn1.parentElement.parentElement.remove();
          //       const val = localStorage.getItem("task" + i.toString() + j.toString());
          //       const num = Number(localStorage.getItem('delete'))
          //       localStorage.setItem("delete" + num.toString(),name +" "+ "ongoing" + ' ' + localStorage.getItem("ongoing" + i.toString() + j.toString())+ " " + localStorage.getItem("day" + i.toString() + j.toString())+' ' + localStorage.getItem("hour" + i.toString() + j.toString()));
          //       localStorage.setItem('delete',(num+1).toString())
          //       localStorage.removeItem("ongoing" + i.toString() + j.toString());
          //       displayTasks()}
          //   });
          //   content_paragraph.appendChild(document.createTextNode(count3.toString() + '.' + task));
          //   count3 = count3 + 1;
          //   const newdiv = document.createElement("div");
          //   const newdiv1 = document.createElement("div");
          //   newdiv.className = "new1"
          //   newdiv.appendChild(content_paragraph);
          //   newdiv1.appendChild(tot);
          //   newdiv1.appendChild(edit_btn);
          //   newdiv1.appendChild(delete_btn);
          //   newdiv1.appendChild(delete_btn1);
          //   newdiv1.className = 'divv'
          //   newdiv.appendChild(newdiv1);
          //   dd3.appendChild(newdiv)
          // }
          if (localStorage.getItem("did" + i.toString() + j.toString()) != null) {
            const tot = document.createElement("div");
            tot.className = "tot";
            const dat = document.createElement("p");
            const tim = document.createElement("p");
            dat.appendChild(document.createTextNode(localStorage.getItem("day" + i.toString() + j.toString())));
            tim.appendChild(document.createTextNode(localStorage.getItem("hour" + i.toString() + j.toString())));
            tot.appendChild(dat);
            tot.appendChild(tim);
            const task = localStorage.getItem("did" + i.toString() + j.toString());
            const task_div = document.createElement("div");
            const content_paragraph = document.createElement("p");
            task_div.className = "task-div";
            content_paragraph.className = "content_paragraph1 ";
            content_paragraph.style.marginRight = "20px";
            const delete_btn = document.createElement("button");
            delete_btn.className = "delete-btn1";
            delete_btn.appendChild(document.createTextNode("delete"));
            delete_btn.addEventListener("click", () => {
              const  answer = prompt(`Are you sure you want to delete ${task} ?`,"Yes")
                if (answer === "Yes"){
                delete_btn.parentElement.parentElement.remove();
                const val = localStorage.getItem("task" + i.toString() + j.toString());
                const num = Number(localStorage.getItem('delete'))
                localStorage.setItem("delete" + num.toString(),name +" "+ "complited" + ' ' + localStorage.getItem("did" + i.toString() + j.toString())+ " " + localStorage.getItem("day" + i.toString() + j.toString())+' ' + localStorage.getItem("hour" + i.toString() + j.toString()));
                localStorage.setItem('delete',(num+1).toString())
                localStorage.removeItem("did" + i.toString() + j.toString());
                displayTasks()
              }
            });
            content_paragraph.appendChild(document.createTextNode(count2.toString() + '.' + task));
            count2 = count2 + 1;
            const newdiv = document.createElement("div");
            const newdiv1 = document.createElement("div");
            newdiv.className = "new1"
            newdiv.appendChild(content_paragraph);
            newdiv1.appendChild(tot);
            newdiv1.appendChild(delete_btn);
            newdiv1.className = 'divv'
            newdiv.appendChild(newdiv1);
            dd2.appendChild(newdiv)
        }
        }
      if (count3 > 1) {
      const d3 = document.createElement('div') 
      d3.className = 'dd3'
      const para1 = document.createElement('p')
      para1.className = 't1'
      para1.appendChild(document.createTextNode((count3-1).toString() + ' ongoing tasks'));
      d3.appendChild(para1)
      d3.appendChild(dd3)
      div2.appendChild(d3);
    }
    if (count1 > 1) {
      const d1 = document.createElement('div') 
      d1.className = 'dd1'
      const para1 = document.createElement('p')
      para1.appendChild(document.createTextNode((count1-1).toString() + ' future work'));
      para1.className = "t1";
      d1.appendChild(para1)
      d1.appendChild(dd1)
      div2.appendChild(d1);
    }
    if (count2 > 1) {
      const d2 = document.createElement('div') 
      d2.className = 'dd2'
      const para1 = document.createElement('p')
      para1.appendChild(document.createTextNode((count2-1).toString() + ' compited tasks'));
      para1.className = "t1";
      d2.appendChild(para1)
      d2.appendChild(dd2)
      div2.appendChild(d2);
    }
      // div2.appendChild(dd1);
      // div2.appendChild(dd2);
      task_div.appendChild(newdiv);
      task_div.appendChild(div1);
      task_div.appendChild(div2);
      task_div1.appendChild(div3);
      tasks.appendChild(task_div);
      w.appendChild(task_div1);
    }
  }
  const task_divnew = document.createElement("div");
  const task_divnew1 = document.createElement("div");
  task_divnew.className = "task-div11";
  // console.log(localStorage.getItem("delete"));
  let d = 0
  for (let i = 0; i < Number(localStorage.getItem("delete")); i++) {
    if (localStorage.getItem("delete" + i.toString()) != null) {
      d = d + 1
      const task = localStorage.getItem("delete" + i.toString());
      const content_paragraph = document.createElement("p");
      content_paragraph.appendChild(document.createTextNode(d.toString() + "."+task));
      const just = document.createElement('div')
      just.className = 'just'
      const delete_btn = document.createElement('button')
      delete_btn.className = "delete-btn1";
      delete_btn.appendChild(document.createTextNode("delete"));
      delete_btn.addEventListener("click", () => {
        delete_btn.parentElement.parentElement.remove();
        localStorage.removeItem("delete" + i.toString());
        displayTasks();
      });
      just.appendChild(content_paragraph);
      just.appendChild(delete_btn)
      task_divnew1.appendChild(just)
    }
  }
  if (d > 0 && localStorage.getItem("delete")) {
    const delete_btn = document.createElement("button");
    delete_btn.className = "delete-btn1";
    delete_btn.appendChild(document.createTextNode("delete"));
    delete_btn.addEventListener("click", () => {
      // console.log("haha", d, localStorage.getItem("delete"));
      delete_btn.parentElement.parentElement.remove();
      localStorage.removeItem("delete");
      displayTasks();
    });
    // const content_paragraph = document.createElement("p");
    // content_paragraph.className = "hmm";
    // content_paragraph.appendChild(
    //   document.createTextNode(d.toString() + " deleted tasks")
    // );
    const content_paragraph = document.createElement("p");
    content_paragraph.className = 'hmm'
    content_paragraph.appendChild(document.createTextNode(d.toString() + " deleted tasks"));
    // task_divnew.appendChild(content_paragraph)
    const ddd = document.createElement("div");
    ddd.className = "ddd";
    ddd.appendChild(content_paragraph);
    ddd.appendChild(delete_btn);
    task_divnew.appendChild(ddd)
    task_divnew.appendChild(task_divnew1)
    tasks.appendChild(task_divnew);
  }
}
