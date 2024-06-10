let data_update = document.getElementById("blogpost-container");

fetch("../data/update.json")
    .then((reply) => reply.json())
    .then((array_data) => {
        array_data.forEach(element => {
            let div_container = document.createElement("div");
            div_container.className = "blogpost-col";
            div_container.innerHTML = `
                                <div class="blogpost-image">
                                <img src=${element.update_image} alt="" class="blogpost-image-size">
                                </div>
                                <div class="blogpost-text">${element.update_text}<br></div>
                                <div class="blogpost-date">${element.update_date}</div>
                                <div class="blogpost-category">${element.update_category}</div>
                                `;
            data_update.appendChild(div_container);
        });
    });




