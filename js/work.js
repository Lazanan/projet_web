
let data_work = document.getElementById("work-col-2");

fetch("../data/work.json")
    .then((reply) => reply.json())
    .then((array_data) => {
        array_data.forEach(element => {
            let div_container = document.createElement("div");
            div_container.className = "work-card-content-col";
            div_container.innerHTML = `
                                <div class="work-card-image"><img src=${element.work_image} alt="" id="work-card-image-size"></div>
                                <div class="work-card-description">
                                    <div class="work-card-description-title">${element.work_title}</div>
                                    <div class="work-card-description-text">
                                        ${element.work_text}
                                        <div style="margin-top: 1rem;">${element.work_text_child}</div>
                                    </div>
                                </div>
                                `;
                                data_work.appendChild(div_container);
        });

    });





