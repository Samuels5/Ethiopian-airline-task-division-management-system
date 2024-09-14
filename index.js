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
  tasks.innerHTML = "";
  for (let i = 0; i <= Number(localStorage.getItem("task-count")); i++) {
    console.log(localStorage.getItem("task" + i.toString()));
    if (localStorage.getItem("task" + i.toString()) != null) {
      const task = localStorage.getItem("task" + i.toString());
      const task_div = document.createElement("div");
      const content_paragraph = document.createElement("p");
      task_div.className = "task-div";
      content_paragraph.className = "content_paragraph";
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
          "Enter the modified to-do?",
          localStorage.getItem("task" + i.toString())
        );
        if (edited_content.length>0) {
          edit_btn.parentElement.childNodes[1].innerHTML = edited_content;
        localStorage.setItem("task" + i.toString(), edited_content);
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
      const newdiv = document.createElement("div");
      newdiv.className = "new"
      newdiv.appendChild(edit_btn);
      newdiv.appendChild(content_paragraph);
      newdiv.appendChild(delete_btn);
      const div1 = document.createElement("div");
      div1.className = "dd"
      const user = document.createElement("input");
      div1.appendChild(user)
      const add = document.createElement("button");
      add.className = "adding";
      add.appendChild(document.createTextNode("add"));
      div1.appendChild(add);

      const div2 = document.createElement("div");
      div2.className = "div2"

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
            user.value = "";
            displayTasks();
        }
        });

        if (localStorage.getItem("task-count" + i.toString()) == null) {
            let count = 0;
            localStorage.setItem("task-count" + i.toString(), count.toString());
        }
        div2.innerHTML = "";
        for (let j = 0; j <= Number(localStorage.getItem("task-count" + i.toString())); j++) {
            console.log(localStorage.getItem("task" + i.toString() + j.toString()));
            if (localStorage.getItem("task" + i.toString() + j.toString()) != null) {
            const task = localStorage.getItem("task" + i.toString() + j.toString());
            const task_div = document.createElement("div");
            const content_paragraph = document.createElement("p");
            task_div.className = "task-div";
            content_paragraph.className = "content_paragraph";
            content_paragraph.style.marginRight = "20px";
            const edit_btn = document.createElement("button");
            const delete_btn = document.createElement("button");
            edit_btn.className = "edit-btn1";
            delete_btn.className = "done";
            edit_btn.appendChild(document.createTextNode("Edit"));
            delete_btn.appendChild(document.createTextNode("Done"));
            edit_btn.style.marginRight = "20px";
            edit_btn.addEventListener("click", () => {
                let edited_content = prompt(
                "Enter the modified to-do?",
                localStorage.getItem("task" + i.toString() + + j.toString())
                );
                if (edited_content.length>0) {
                  edit_btn.parentElement.parentElement.childNodes[0].innerHTML =
                    edited_content;
                localStorage.setItem("task" + i.toString() + j.toString(), edited_content);
                }
            });
            delete_btn.addEventListener("click", () => {
                delete_btn.parentElement.parentElement.remove();
                localStorage.removeItem("task" + i.toString() + j.toString());
            });
            content_paragraph.appendChild(document.createTextNode(task));
            const newdiv = document.createElement("div");
            const newdiv1 = document.createElement("div");
            newdiv.className = "new1"
            newdiv.appendChild(content_paragraph);
            newdiv1.appendChild(edit_btn);
            newdiv1.appendChild(delete_btn);
            newdiv1.className = 'divv'
            newdiv.appendChild(newdiv1);
            div2.appendChild(newdiv)
        }}





      task_div.appendChild(newdiv)
      task_div.appendChild(div1)
      task_div.appendChild(div2);
      tasks.appendChild(task_div);
    }
  }}